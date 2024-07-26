import { useNavigate, useLocation } from 'react-router-dom';
import carne from '/carne.png'
import FormField from '../../Molecules/Register/FormField'
import { useRef, useState} from 'react';
import { getUser } from '../../../../service/User';
import { getProductsToPost } from '../../../../../selectedProducts';
import toast,{Toaster} from 'react-hot-toast';
import { jsPDF } from "jspdf";
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
      <h2 className="text-6xl font-bold mb-14 flex justify-center text-red-500 opacity-70">Confirmación de Compra</h2>
  <div className="flex justify-between m-10 p-10">
    <div>
      <div className="w-[100%] bg-[#ffffff] px-auto rounded-3xl shadow-[2px_5px_34px_-14px_rgba(0,0,0,0.65)]">
        <div className="container mx-auto p-4">
          <ul >
            {selectedProducts.map((product, index) => (
              <li key={index} className="mb-4 border-b pb-4">
                <div className="flex justify-between items-center">
                  <div className="w-[20%]">
                    <img src={product.image} alt="" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{product.description}</p>
                    <p className="text-gray-700">${product.price}</p>
                    <p className="text-gray-700">Cantidad: {product.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="w-[50%] bg-[#ffffff] rounded-3xl shadow-[2px_5px_34px_-14px_rgba(0,0,0,0.65] flex flex-col items-center justify-between">
    <div>
        {/* Contenido adicional si es necesario */}
    </div>
    <button onClick={handleConfirmPurchase} className="m-5 bg-blue-500 px-4 py-2 rounded text-white">Confirmar Compra</button>
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
</div>
<Toaster></Toaster>
  </div>
</>
  );
}

export default PurchaseConfirmation;
