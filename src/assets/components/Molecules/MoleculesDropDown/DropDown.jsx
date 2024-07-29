import { useNavigate } from "react-router-dom";
import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
import Button from "../../Atoms/AtomsPaginaPrincipal/Buttons";
function DropDown({children, onClick}){
    const navegar = useNavigate();

    const clickShope = () =>{
        navegar("/allMeats");
    }

    const clickReservation = () =>{
        if(localStorage.getItem('token')){
            navegar("/reservarMesas");
        }
        else{
            navegar("/login")
        }
      
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
    const statusOrder = () =>{
        navegar("/orderStatus");
    }


    return(
        <>
        <RecuadroDropDown>
        {children}
        <div className="flex-col ">

            <div className=" font-medium font-mono text-[1.1rem] text-white ">
                

            <p onClick={onClick} className="sm:flex sm:justify-end text-2xl p-4 font-thin sm:font-extralight cursor-pointer hover:bg-[#4c2d2d3d]
                sm:hover:bg-[#4c2d2d3d] sm:p-3 mt-12 sm:mt-0" title="Cerrar">x</p>

                <div onClick={clickShope} className="cursor-pointer hover:bg-red-900 p-5">
                <Button  text={"Carrito"} ></Button>
                </div>

                <div onClick={clickReservation}  className="cursor-pointer hover:bg-red-900 p-5">
                <Button onClick={clickReservation} text={"Reservar mesas"} ></Button>
                </div>

                <div onClick={clickTableStatus} className="cursor-pointer hover:bg-red-900 p-5">
                <Button  text={"Estado de la mesa"} ></Button>
                </div>

                {!localStorage.getItem('token') &&<div onClick={clickLogin} className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">
                <Button  text={"Iniciar sesión"} ></Button>
                </div>}
                {localStorage.getItem('token') &&<div onClick={statusOrder} className="cursor-pointer hover:bg-red-900 p-5 block ">
                <Button  text={"Estado de orden"} ></Button>
                </div>}

               {!localStorage.getItem('token') && <div onClick={clickRegister} className="cursor-pointer hover:bg-red-900 p-5 block sm:hidden">
                <Button text={"Registrate"} ></Button>
                </div>}
                

                
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