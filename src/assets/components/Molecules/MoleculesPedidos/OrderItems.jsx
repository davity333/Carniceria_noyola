import Text from '../../Atoms/productModal/Title'
function OrderItem({order}) {
  return (
    <div key={order.product_id} className="border-t pt-4 mt-4">
      <Text className="text-lg font-semibold text-gray-700">{order.description}</Text>
      <Text className="text-gray-600">Precio: ${order.price}</Text>
      <Text className="text-gray-600">Cantidad: {order.amount}</Text>
    </div>
  );
}

export default OrderItem;
