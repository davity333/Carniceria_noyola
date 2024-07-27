import  { useState } from 'react';

function CardOrders({ orders }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full max-w-md">
            <div className="flex justify-between items-center">
                <div>
                    <p className={`text-sm ${orders[0].status === 'cancelada' || orders[0].status === 'pendiente'? 'text-red-500' : 'text-green-500'}`}>
                        Estado del pedido: {orders[0].status === 'cancelada' || orders[0].status === 'pendiente' ? 'Cancelada' || 'Pendiente' : orders[0].status}
                    </p>
          
                    <div className="border-t pt-4 mt-4">
                        <p className="text-gray-800 font-semibold">Precio total: ${orders[0].total_amount}</p>
                        <p className="text-gray-600">Fecha de entrega: {new Date(orders[0].order_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <button 
                    onClick={toggleExpand} 
                    className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    {isExpanded ? 'Ocultar' : 'Mostrar productos'}
                </button>
            </div>
            {isExpanded && (
                <div className="mt-4">
                    {orders.map((order) => (
                        <div key={order.product_id} className="border-t pt-4 mt-4">
                            <h4 className="text-lg font-semibold text-gray-700">{order.description}</h4>
                            <p className="text-gray-600">Precio: ${order.price}</p>
                            <p className="text-gray-600">Cantidad: {order.amount}</p>
                        </div>
                    ))}
                   
                </div>
            )}
        </div>
    );
}

export default CardOrders;
