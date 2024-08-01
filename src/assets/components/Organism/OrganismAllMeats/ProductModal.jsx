import Button from '../../Atoms/productModal/ButtonModal'
import Title from "../../Atoms/productModal/Title";
import ProductItem from '../../Molecules/ProductModal';

function ProductModal({ selectedProducts, onClose, updateQuantity, handlePay }) {
  if (!selectedProducts || selectedProducts.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-gray-800 bg-opacity-50 font-light">
      <div className="bg-white w-96 p-6 m-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <Title className="text-2xl font-bold">Carrito</Title>
          <Button title="Cerrar" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </Button>
        </div>
        <ul>
          {selectedProducts.map((product, index) => (
            <ProductItem key={index} product={product} updateQuantity={updateQuantity} />
          ))}
        </ul>
        <div className="flex flex-row gap-6 text-white font-light">
          <Button className="bg-blue-500 mt-4 px-4 py-2 rounded" onClick={handlePay}>
            Completar compra
          </Button>
          <Button className="bg-blue-500 mt-4 px-4 py-2 rounded" onClick={handlePay}>
            Reservar pedido
          </Button>
          <Button onClick={onClose} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
