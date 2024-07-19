import { useNavigate } from "react-router-dom";
import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
function DropDown({children, onClick}){
    const navegarAddProduct = useNavigate();

    const clickShope = () =>{
        navegarAddProduct("/pay");
    }

    const clickReservation = () =>{
        navegarAddProduct("/reservarMesas");
    }

    const clickTAableStatus = () =>{
        navegarAddProduct("/tableStatus");
    }



    return(
        <>
        <RecuadroDropDown>
        {children}
        <div className="flex-col ">

            <div className=" font-medium font-mono text-[1.1rem] text-white">
                <p onClick={onClick} className="sm:flex sm:justify-end text-4xl p-3 font-thin sm:font-extralight cursor-pointer hover:bg-[#4c2d2d3d]
                sm:hover:bg-[#4c2d2d3d]" title="Cerrar">x</p>
                <p onClick={clickShope} className="cursor-pointer hover:bg-red-900 p-5">Carrito</p>
                <p onClick={clickReservation} className="cursor-pointer hover:bg-red-900 p-5">Reservar mesa</p>
                <p onClick={clickTAableStatus} className="cursor-pointer hover:bg-red-900 p-5">Estado de la mesa</p>
                <p onClick={clickTAableStatus} className="cursor-pointer hover:bg-red-900 p-5">Iniciar sesion</p>
            </div>
                
        </div>
        </RecuadroDropDown>
        </>

    );
}

export default DropDown;