import Formulario from "../../Molecules/addStockProduct/Form";

function Modal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
        <Formulario product={product} />
        <button className='bg-red-500 py-2 px-6 rounded-sm text-white font-bold m-5' onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
