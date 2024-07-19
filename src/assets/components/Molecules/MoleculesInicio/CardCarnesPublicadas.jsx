import SiluetaSupermercado from "../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CardAddCarrito } from "../../../../data/CardAddCarrito";

function CardCarnesPublicadas({children, src , price, productName, amount}){
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pay');

        const nuevoProducto = {
            producto: "chorizo", 
            precio: "$10", 
            cantidad:"9 Gr", 
            agregar:"+",
            eliminar:"-"
            };
    
            CardAddCarrito.Meat.push(nuevoProducto);
    };

    return(
        <>
        <div className="drop-shadow-xl product-card bg-neutral-300 p-3 m-4 rounded-lg text-center w-32 h-auto flex flex-col items-center justify-between
        sm:w-80 sm:h-auto sm:p-6">
        {children}

        <div className="flex flex-col items-center justify-center h-full">
            <img className="flex items-center justify-center max-h-48" src={src} alt="" />
        </div>

        <div className="mt-2 w-full text-[12px] sm:text-3xl">
                <p className=" font-bold">{productName}</p>
                <p className=" text-[#8a2a2a] font-thin">{amount}</p>
                <p className=" text-gray-700 font-light">{price}</p>
            </div>

        <div onClick={handleClick} className="bg-slate-700 m-5 h-auto rounded-lg flex items-center cursor-pointer w-24
        sm:w-52 sm:h-auto"> {/*BOTON DE AGREGAR AL CARRITO*/}

        <div className="flex items-center m-2">
          <SiluetaSupermercado/>
         </div> 
        
        <p className=" text-white flex text-[10px]  p-3 sm:text-2xl">Agregar al carrito</p>
        </div>

        </div>   
        </>
    );
}
export default CardCarnesPublicadas;
