import Button from "../Atoms/productModal/ButtonModal";
import Text from "../Atoms/productModal/Title";

function ProductItem({ product, updateQuantity }) {
  return (
    <li className="mb-4 border-b pb-4">
      <div className="flex justify-between items-center">
        <div className="w-[20%]">
          <img src={product.image} alt={product.description} />
        </div>
        <div>
          <Text className="text-xl font-bold">{product.description}</Text>
          <Text className="text-gray-700">${product.price}</Text>
        </div>
        <div className="flex items-center">
          <Button 
            onClick={() => updateQuantity(product, product.quantity - 1)} 
            className="px-2 py-1 text-xl bg-gray-200 rounded"
          >
            -
          </Button>
          <Text className="mx-4">{product.quantity}</Text>
          <Button 
            onClick={() => updateQuantity(product, product.quantity + 1)} 
            className="px-2 py-1 text-xl bg-gray-200 rounded"
            disabled={product.quantity >= product.amount}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
