import SiluetaSupermercado from "../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CardAddCarrito } from "../../../../data/CardAddCarrito";

function CardCarnesPublicadas({children, src , price, productName}){

    return(
        <>
        <div 
      className="h-44 w-36 drop-shadow-xl product-card bg-neutral-300 p-5 m-1 rounded-lg text-center max-h-[500px] flex flex-col items-center justify-between
      sm:h-auto sm:w-80 sm:p-8 sm:m-4 "
    >
      {children}
      <div className="flex items-center justify-center h-40 sm:h-48 md:h-56">
        <img className="flex items-center justify-center h-20 max-w-full
        sm:h-52" src={src} alt={productName} />
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