import  { useRef } from 'react';
import Input from '../../Atoms/addStockProduct/Input';
import Select from '../../Atoms/addStockProduct/Select';
import toast, { Toaster } from 'react-hot-toast';

function Formulario({ productos, onSubmit }) {
  const stockAmountRef = useRef(null);
  const productStockRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedProductId = productStockRef.current.value;
    const stockAmountValue = stockAmountRef.current.value;
    onSubmit(selectedProductId, stockAmountValue);
  };

  const options = productos.map(product => ({
    value: product.product_id,
    label: product.description
  }));

  return (
    <>
      <div>
        <label htmlFor="productStock" className="mr-3 font-semibold font-[Poppins]">
          Seleccione un producto
        </label>
        <Select 
          id="productStock" 
          ref={productStockRef}
          className="w-64 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 duration-200" 
          options={options} 
        />
      </div>
      <div>
        <label htmlFor="stockAmount" className="mr-3 font-semibold font-[Poppins]">
          Stock del producto
        </label>
        <Input 
          id="stockAmount" 
          type="text" 
          className="w-64 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 duration-200" 
          ref={stockAmountRef} 
        />
      </div>
      <button 
        className='bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold m-5' 
        onClick={handleSubmit}
      >
        <Toaster />
        Enviar
      </button>
    </>
  );
}

export default Formulario;
