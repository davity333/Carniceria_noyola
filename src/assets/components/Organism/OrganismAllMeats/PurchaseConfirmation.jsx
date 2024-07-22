import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import carne from '/carne.png'

function PurchaseConfirmation() {
  const location = useLocation();
  const { selectedProducts } = location.state;
  const navigate = useNavigate();

  const navegar = useNavigate();

  const regresar = () =>{
    navegar("/allMeats")
  }
  
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
</div>
  </div>
</>
  );
}

export default PurchaseConfirmation;
