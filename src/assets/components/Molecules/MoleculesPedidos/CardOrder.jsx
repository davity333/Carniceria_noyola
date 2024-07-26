import React, { useState } from 'react';

function CardOrder({ clientName, email, numberPhone, orders, deliveryDate, status, onStatusChange }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    onStatusChange(e.target.value);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="h-auto w-80 bg-white p-4 rounded-3xl">
      <p>Nombre del cliente: {clientName}</p>
      <p>Email: {email}</p>
      <p>Teléfono: {numberPhone}</p>
      <p>Fecha de entrega: {deliveryDate}</p>
      <div className="flex justify-center mt-5">
        <select value={status} onChange={handleChange} className="bg-[#36be36] p-2 hover:bg-[#41c753] rounded-lg">
          <option value="pendiente">Pendiente</option>
          <option value="confirmada">Confirmada</option>
          <option value="entregada">Entregada</option>
          <option value="cancelada">Cancelada</option>
        </select>
      </div>
      <button onClick={toggleDetails} className="mt-3 text-blue-500">
        {showDetails ? 'Ver menos...' : 'Ver más...'}
      </button>
      {showDetails && (
        <div className="mt-3">
          {orders.map((order, index) => (
            <div key={index} className="border-t border-gray-300 pt-2 mt-2">
              <p>Producto: {order.description}</p>
              <p>Cantidad: {order.quantity}</p>
              <p>Precio total: {order.total_amount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardOrder;
