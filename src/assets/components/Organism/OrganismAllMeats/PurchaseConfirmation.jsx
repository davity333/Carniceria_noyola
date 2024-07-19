import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PurchaseConfirmation() {
  const location = useLocation();
  const { selectedProducts } = location.state;
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    fetch(`${import.meta.env.VITE_URL}/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ products: selectedProducts })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Compra completada:', data);
        navigate('/thank-you');
      })
      .catch(error => {
        console.error('Error en la compra:', error);
      });
  };

  return (
    <section className='w-[90%] mx-auto max-w-screen-xl bg-customColor-came '>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Confirmación de Compra</h2>
      <ul>
        {selectedProducts.map((product, index) => (
          <li key={index} className="mb-4 border-b pb-4">
            <div className="flex justify-between items-center">
              <div className="w-[20%]">
                <img src={product.image} alt="" />
              </div>
              <div>
                <p className="text-xl font-bold">{product.producto}</p>
                <p className="text-gray-700">${product.precio}</p>
                <p className="text-gray-700">Cantidad: {product.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleConfirmPurchase} className="bg-blue-500 mt-4 px-4 py-2 rounded text-white">Confirmar Compra</button>
    </div>
    </section>
  );
}

export default PurchaseConfirmation;
