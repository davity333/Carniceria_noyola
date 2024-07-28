import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { getUser } from '../../../../service/User';
import Button from '../../Atoms/Register/Button';

const DeleteOrdersTable = ({ ordersData, fetchOrdersData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm');
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No se encontró el token. Por favor, inicie sesión nuevamente.');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_URL}/orders/delete/${orderId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          deleted: 1, updated_by: getUser().name
        })
      });

      if (response.ok) {
        fetchOrdersData();
        toast.success('Pedido eliminado correctamente');
      } else {
        const errorData = await response.json();
        console.error('Failed to delete order:', response.statusText, errorData);
        toast.error('Lo sentimos, intente más tarde');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Ocurrió un error. Intente nuevamente.');
    }
  };

  // Group orders by orders_id
  const groupedOrders = ordersData.reduce((acc, order) => {
    if (!acc[order.orders_id]) {
      acc[order.orders_id] = [];
    }
    acc[order.orders_id].push(order);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4">
      <table className="min-w-full bg-transparent shadow-md rounded my-6 overflow-hidden">
        <thead className="bg-transparent text-white">
          <tr>
            <th className="py-2 px-4">Cliente</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Teléfono</th>
            <th className="py-2 px-4">Fecha de Entrega</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4">Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {Object.entries(groupedOrders).map(([orderId, orders]) => (
            <tr key={orderId} className="border-b">
              <td className="border px-4 py-2" rowSpan={orders.length}>{orders[0].name} {orders[0].lastname}</td>
              <td className="border px-4 py-2" rowSpan={orders.length}>{orders[0].email}</td>
              <td className="border px-4 py-2" rowSpan={orders.length}>{orders[0].number_phone}</td>
              <td className="border px-4 py-2" rowSpan={orders.length}>{formatDate(orders[0].order_date)}</td>
              <td className="border px-4 py-2" rowSpan={orders.length}>{orders[0].total_amount}</td>
              <td className="border px-4 py-2" rowSpan={orders.length}>
                <Button
                  onClick={() => handleDeleteOrder(orderId)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteOrdersTable;
