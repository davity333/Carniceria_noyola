import SiluetaSupermercado from "../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado";
function CardsMeats({ src, productName, price, children, onClick }) {
  return (
    <div 
      className="drop-shadow-xl product-card bg-neutral-300 p-4 sm:p-6 md:p-8 m-2 sm:m-4 rounded-lg text-center w-full sm:w-80 md:w-96 h-auto cursor-pointer"
      onClick={onClick}
    >
      {children}
      <div className="flex items-center justify-center h-40 sm:h-48 md:h-56">
        <img className="flex items-center justify-center max-h-full max-w-full" src={src} alt={productName} />
      </div>
      <div className="mt-4">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">{productName}</p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700">{price}</p>
      </div>
      <div className="relative mt-4 sm:mt-6 md:mt-8 rounded-lg flex items-center justify-center p-2 sm:p-3 md:p-4 cursor-pointer group bg-slate-700 overflow-hidden">
        <div className="flex items-center ml-1 sm:ml-2 md:ml-3 relative z-10">
          <SiluetaSupermercado />
        </div> 
        <p className="product-text text-white flex justify-around text-base sm:text-lg md:text-xl lg:text-2xl relative z-10">Agregar al carrito</p>
        <div className="absolute top-0 left-0 w-0 h-full bg-slate-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
      </div>
    </div>
  );
}

export default CardsMeats;
