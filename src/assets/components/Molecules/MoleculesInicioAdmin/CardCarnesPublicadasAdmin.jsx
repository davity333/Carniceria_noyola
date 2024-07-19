import SiluetaSupermercado from "../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CardAddCarrito } from "../../../../data/CardAddCarrito";

function CardCarnesPublicadas({children, src , price, productName}){

    return(
        <>
        <div 
      className="drop-shadow-xl product-card bg-neutral-300 p-8 m-4 rounded-lg text-center w-80 h-auto max-h-[500px] flex flex-col items-center justify-between"
    >
      {children}
      <div className="flex items-center justify-center h-40 sm:h-48 md:h-56">
        <img className="flex items-center justify-center max-h-full max-w-full" src={src} alt={productName} />
      </div>
      <div className="mt-4">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">{productName}</p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700">{price}</p>
      </div>
      
    </div>
        
        </>
    );
}
export default CardCarnesPublicadas;

//MODIFICAR CARDS PARA QUITAR EL BOTON DE AGREGAR AL CARRITO EN ADMIN