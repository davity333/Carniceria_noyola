import { useNavigate, useLocation } from 'react-router-dom';
import carne from '/carne.png'
import FormField from '../../Molecules/Register/FormField'
import { useRef, useState} from 'react';
import { getUser } from '../../../../service/User';
import { getProductsToPost } from '../../../../../selectedProducts';
import toast,{Toaster} from 'react-hot-toast';
import { jsPDF } from "jspdf";
import BotonFixed from '../../Molecules/MoleculesAllMeats/BotonFixed';
import carrito from '/CarritoLogo.png'
function PurchaseConfirmation() {
  const location = useLocation();
  const { selectedProducts } = location.state;
  const navigate = useNavigate();
  const date = useRef('')
  const [orders, setOrders] = useState([])

  const navegar = useNavigate();

  const regresar = () =>{
    navegar("/allMeats")
  }
  
  const handleConfirmPurchase = async () => {
    console.log(getUser().user_id, getUser().name,date.current.value);
    console.log(getProductsToPost());
    
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_date: date.current.value,
          status: 'Pendiente',
          payment_method: 'Efectivo',
          created_by: getUser().name,
          updated_by: getUser().name,
          user_id_fk: getUser().user_id,
          relations: getProductsToPost(),
          total_amount: 300
        })
      });
      if (response.ok) {
        const data = await response.json();
        setOrders(data)
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.setFont("montserrat", "bold");
        doc.setTextColor(255, 0, 0);
        doc.text('Carniceria Noyola', 105, 20, null, null, 'center');
        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(1);
        doc.line(10, 35, 200, 35);

        
        doc.setFontSize(12);
        doc.setFont("montserrat", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`Fecha: ${orders.order_date}`, 10, 45);
        doc.setFontSize(16);
        doc.setFont("montserrat", "bold");
        doc.text('Productos:', 10, 55);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
      
        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(10, 80, 200, 80);

        doc.setFontSize(16);
        doc.setFont("montserrat", "bold");
        doc.setTextColor(255, 0, 0);
        doc.text(`Total: $${orders.total_amount}`, 10, 90);

        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(0.5);
        doc.rect(8, 85, 194, 15);
    
        doc.save(`factura_${orders.order_date}.pdf`);
        toast.success('Pedido enviado');
        
      } else {
        const errorData = await response.json();
        console.error('Ocurrio:', response.statusText, errorData);
        toast.error('Lo sentimos, intente más tarde');
      }
    } catch (error) {
      console.error('Ocurrió un error.', error);
      toast.error('Ocurrió un error. Intente nuevamente.');
    }
  };

  return (
<>
<div className='bg-[#C29292] min-h-screen w-full sm:w-full'>
<div className='-ml-5'>
    <BotonFixed
      src={carrito}
      onClick={regresar}
      title={"Regresar al carrito"}
    ></BotonFixed>
    </div>

      <h2 className="text-6xl font-bold mb-14 flex justify-center text-[#bc4747]
      [text-shadow:_1px_2px_2px_rgba(0,0,0,0.35)]">Confirmación de Compra</h2>
      <div className="flex space-x-[10%] mx-10 my-5 flex justify-center">
  <div className="flex flex-col w-[38%] ">
    <ul>
      {selectedProducts.map((product, index) => (
        <li key={index} className="mb-4">
          <div className="flex justify-start items-center space-x-5 bg-white p-4 rounded-xl shadow-md
          shadow-[16px_16px_12px_-13px_rgba(0,0,0,0.41)]">
            <div className="w-[20%]">
              <img src={product.image} alt="" />
            </div>
            <div className=''>
              <p className="text-xl font-bold font-normal">{product.description}</p>
              <p className="text-gray-700 font-medium text-[#1d7738]">${product.price}</p>
              <p className="text-gray-700 font-thin text-amber-700">Cantidad: {product.quantity}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>

  <div className="flex flex-col w-[30%] bg-white rounded-xl shadow-[2px_5px_34px_-14px_rgba(0,0,0,0.65)]
  shadow-[18px_17px_12px_-13px_rgba(0,0,0,0.41)]">
    <p className="flex justify-center mt-5 text-3xl">Resumen</p>
    <hr className="my-4 border-t border-gray-300" />
{selectedProducts.map((product, index) => (

            <div className='flex justify-between p-4'>
              <p className="text-xl font-bold font-light">{product.description}</p>
              <p className="text-[#cd8526]">${product.price}</p>
            </div>
      ))}

<div className="flex-grow px-4 mt-4">
      <FormField
        id="date"
        name="date"
        type="datetime-local"
        placeholder=""
        autoComplete="time"
        required={true}
        label="Fecha de entrega"
        innerRef={date}
      />

<hr className="my-2 border-t border-gray-300" />

      <div className="flex justify-center mb-6">
        <button
          onClick={handleConfirmPurchase}
          className="mt-4 bg-[#2d9734] hover:bg-[#2d723b] px-24 py-2 rounded text-white"
        >
          Confirmar Compra
        </button>
      </div>
      </div>
  </div>
</div>

<Toaster></Toaster>
</div>
</>
  );
}

export default PurchaseConfirmation;
