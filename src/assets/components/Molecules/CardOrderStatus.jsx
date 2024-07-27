import React from 'react';
import { format } from 'date-fns';
const OrderCard = ({ clientName, email, numberPhone, deliveryDate, totalAmount, status, products }) => {
  return (
    <div className="border rounded-md p-4 mb-4 bg-red-300">
      <div>
        <strong>{clientName}</strong>
      </div>
      <div>{email}</div>
      <div>{numberPhone}</div>
      <div>{format(new Date(deliveryDate), 'dd/MM/yyyy HH:mm')}</div>
      <div>Total: ${totalAmount}</div>
      <div><strong>Estatus:</strong> {status}</div>
      <div className="mt-2">
        <button className="text-blue-600">Mostrar detalles</button>
      </div>
      <div className="mt-2">
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.description} - ${product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CardOrders = ({ orders }) => {
  const groupedOrders = orders.reduce((acc, order) => {
    const { orders_id, user_id, name, lastname, email, number_phone, order_date, total_amount, status, description, price } = order;
    const key = `${user_id}-${orders_id}`;
    if (!acc[key]) {
      acc[key] = {
        clientName: `${name} ${lastname}`,
        email,
        numberPhone: number_phone,
        deliveryDate: order_date,
        totalAmount: total_amount,
        status,
        products: []
      };
    }
    acc[key].products.push({ description, price });
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedOrders).map(([key, orderData]) => (
        <OrderCard key={key} {...orderData} />
      ))}
    </div>
  );
};

export default CardOrders;
