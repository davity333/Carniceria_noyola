import SiluetaSupermercado from "../AtomsPaginaPrincipal/SiluetaSupermercado";
function Button({ text, onClick, disabled }) {
    const isOutOfStock = disabled;
    return isOutOfStock ? (
      <div className="mt-4 sm:mt-6 md:mt-8 p-2 sm:p-3 md:p-4 rounded-lg bg-[#b85656] text-white">
           <p className="text-[10px] sm:text-[15px] md:text-xl lg:text-2xl">Agotado</p>
         </div>
    ) : (
      <div
        className="cursor-pointer relative mt-4 sm:mt-6 md:mt-8 rounded-lg flex items-center justify-center p-5 sm:p-3 md:p-4 group bg-[#304c6acc] overflow-hidden"
        onClick={onClick}
      >
        <div className="hidden sm:block flex items-center ml-1 sm:ml-2 md:ml-3 relative z-10">
          <SiluetaSupermercado />
        </div>
        <p className="product-text text-[10px] text-white flex justify-around sm:text-[15px] md:text-xl lg:text-2xl relative z-10">
          {text}
        </p>
        <div className="absolute top-0 left-0 w-0 h-full bg-slate-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
      </div>
    );
  }
  
  export default Button;
  