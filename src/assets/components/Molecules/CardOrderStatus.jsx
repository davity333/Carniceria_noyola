import { useState } from 'react';
import Button from '../Atoms/productModal/ButtonModal';
import Text  from  '../Atoms/productModal/Title';
import OrderItem from './MoleculesPedidos/OrderItems';

function CardOrders({ orders }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const orderStatus = orders[0].status;
  const statusText = orderStatus === 'cancelada' || orderStatus === 'pendiente' ? 'Cancelada' || 'Pendiente' : orderStatus;
  const statusColor = orderStatus === 'cancelada' || orderStatus === 'pendiente' ? 'text-red-500' : 'text-green-500';

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full max-w-md">
      <div className="flex justify-between items-center">
        <div>
          <Text className={`text-sm ${statusColor}`}>
            Estado del pedido: {statusText}
          </Text>
          <div className="border-t pt-4 mt-4">
            <Text className="text-gray-800 font-semibold">Precio total: ${orders[0].total_amount}</Text>
            <Text className="text-gray-600">Fecha de entrega: {new Date(orders[0].order_date).toLocaleDateString()}</Text>
          </div>
        </div>
        <Button
          onClick={toggleExpand}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {isExpanded ? 'Ocultar' : 'Mostrar productos'}
        </Button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          {orders.map((order) => (
            <OrderItem key={order.product_id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardOrders;
