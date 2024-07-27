import { useNavigate } from "react-router-dom";
import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
import Button from "../../Atoms/AtomsPaginaPrincipal/Buttons";
function DropDown({children, onClick}){
    const navegar = useNavigate();

    const clickShope = () =>{
        navegar("/allMeats");
    }

    const clickReservation = () =>{
        navegar("/reservarMesas");
    }


    const clickTableStatus = () =>{
        navegar("/estadoMesa");
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

            <div className=" font-medium font-mono text-[1.1rem] text-white ">
                

            <p onClick={onClick} className="sm:flex sm:justify-end text-2xl p-4 font-thin sm:font-extralight cursor-pointer hover:bg-[#4c2d2d3d]
                sm:hover:bg-[#4c2d2d3d] sm:p-3 mt-12 sm:mt-0" title="Cerrar">x</p>

                <div className="cursor-pointer hover:bg-red-900 p-5">
                <Button onClick={clickShope} text={"carrito"} ></Button>
                </div>

                <div className="cursor-pointer hover:bg-red-900 p-5">
                <Button onClick={clickReservation} text={"Reservar mesas"} ></Button>
                </div>

                <div className="cursor-pointer hover:bg-red-900 p-5">
                <Button onClick={clickTableStatus} text={"Estado de la mesa"} ></Button>
                </div>

                <div className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">
                <Button onClick={clickLogin} text={"Iniciar sesión"} ></Button>
                </div>

                <div className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">
                <Button onClick={clickRegister} text={"Registrate"} ></Button>
                </div>
                

                
            </div>
                
        </div>
        </RecuadroDropDown>
        </>

    );
}

export default DropDown;
/*
<p onClick={clickShope} className="cursor-pointer hover:bg-red-900 p-5">Carrito</p>
<p onClick={clickReservation} className="cursor-pointer hover:bg-red-900 p-5">Reservar mesa</p>
<p onClick={clickTableStatus} className="cursor-pointer hover:bg-red-900 p-5">Estado de la mesa</p>
<p onClick={clickLogin} className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">Iniciar sesión</p>
<p onClick={clickRegister} className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">Registrarse</p>


<p onClick={onClick} className="sm:flex sm:justify-end text-4xl p-9 font-thin sm:font-extralight cursor-pointer hover:bg-[#4c2d2d3d]
                sm:hover:bg-[#4c2d2d3d] sm:p-3 " title="Cerrar">x</p>
*/