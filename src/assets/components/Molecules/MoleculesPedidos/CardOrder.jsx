import React, { useState } from 'react';
import { useEffect } from 'react';
function CardOrder({ clientName, email, numberPhone, orders, deliveryDate, status, onStatusChange, totalAmount, orderId }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    onStatusChange(orderId, e.target.value);
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const initialProducts = orders.slice(0, 3);
  const remainingProducts = orders.slice(3);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{clientName}</h3>
          <p>{email}</p>
          <p>{numberPhone}</p>
          <p>{deliveryDate}</p>
          <p className="mt-2 font-bold">Total: {totalAmount}</p>
        </div>
        <select
          value={status}
          onChange={handleChange}
          className="border p-2 rounded-md"
        >
          <option value="Vendido">Vendido</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Entregado">Entregado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </div>
      <div className="mt-4">
        <button
          onClick={toggleDetails}
          className="text-blue-500 hover:underline"
        >
          {showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}
        </button>
        {showDetails && (
          <div className="mt-4">
            <h4 className="font-bold">Detalles del pedido</h4>
            <ul>
              {initialProducts.map(order => (
                <li key={order.product_id}>
                  Producto: {order.description} - Cantidad: {order.amount}
                </li>
              ))}
              {remainingProducts.length > 0 && (
                <>
                  {remainingProducts.map(order => (
                    <li key={order.product_id}>
                      Producto: {order.description} - Cantidad: {order.amount}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardOrder;