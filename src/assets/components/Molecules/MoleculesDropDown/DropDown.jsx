import { useNavigate } from "react-router-dom";
import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
function DropDown({children, onClick}){
    const navegar = useNavigate();

    const clickShope = () =>{
        navegar("/pay");
    }

    const clickReservation = () =>{
        navegar("/reservarMesas");
    }


    const clickTableStatus = () =>{
        navegar("/tableStatus");
    }

    const clickLogin = () =>{
        navegar("/login");
    }

    const clickRegister = () =>{
        navegar("/register");
    }


    return(
        <>
        <RecuadroDropDown>
        {children}
        <div className="flex-col ">

            <div className=" font-medium font-mono text-[1.1rem] text-white">
                <p onClick={onClick} className="sm:flex sm:justify-end text-4xl p-9 font-thin sm:font-extralight cursor-pointer hover:bg-[#4c2d2d3d]
                sm:hover:bg-[#4c2d2d3d] sm:p-3 " title="Cerrar">x</p>
                <p onClick={clickShope} className="cursor-pointer hover:bg-red-900 p-5">Carrito</p>
                <p onClick={clickReservation} className="cursor-pointer hover:bg-red-900 p-5">Reservar mesa</p>
                <p onClick={clickTableStatus} className="cursor-pointer hover:bg-red-900 p-5">Estado de la mesa</p>
                <p onClick={clickLogin} className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">Iniciar sesión</p>
                <p onClick={clickRegister} className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">Registrarse</p>
            </div>
                
        </div>
        </RecuadroDropDown>
        </>

    );
}

export default DropDown;