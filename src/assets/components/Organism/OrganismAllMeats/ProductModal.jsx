import { useNavigate } from "react-router-dom";
function ProductModal({ selectedProducts, onClose, updateQuantity, handlePay,date }) {
  if (!selectedProducts || selectedProducts.length === 0) return null;

  return (
    <div className="fixed inset-0 flex justify-end bg-gray-800 bg-opacity-50 font-light">
      <div className="bg-white w-96 p-6 m-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <ul>
          {selectedProducts.map((product, index) => (
            <li key={index} className="mb-4 border-b pb-4">
              <div className="flex justify-between items-center">
                <div className="w-[20%]">
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <p className="text-xl font-bold">{product.description}</p>
                  <p className="text-gray-700">${product.price}</p>
                </div>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(product, product.quantity - 1)} className="px-2 py-1 text-xl bg-gray-200 rounded">-</button>
                  <span className="mx-4">{product.quantity}</span>
                  <button onClick={() => updateQuantity(product, product.quantity + 1)} className="px-2 py-1 text-xl bg-gray-200 rounded">+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-6 text-white font-light">
          <button className="bg-blue-500 mt-4 px-4 py-2 rounded" onClick={handlePay}>
            Completar compra</button>
          <button className="bg-blue-500 mt-4 px-4 py-2 rounded" onClick={handlePay}>Reservar pedido</button>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Cerrar</button>
        </div>
      </div>

    </div>
  );
}

export default ProductModal;
