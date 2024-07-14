import { useNavigate } from "react-router-dom";
import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
function DropDown({children}){
    const navegarAddProduct = useNavigate();

    const clickAdd = () =>{
        navegarAddProduct("/addProduct");
    }

    const clickReservation = () =>{
        navegarAddProduct("/verMesas");
    }



    return(
        <>
        <RecuadroDropDown>
        {children}
        <div className="flex-col ">

            <div className=" font-medium font-mono text-[1.1rem] text-white">
                <p onClick={clickAdd} className="cursor-pointer hover:bg-red-900 p-5">Agregar producto</p>
                <p onClick={clickReservation} className="cursor-pointer hover:bg-red-900 p-5">Reservaciones</p>
                <p  className="cursor-pointer hover:bg-red-900 p-5">Reporte de ventas</p>
            </div>
                
        </div>
        </RecuadroDropDown>
        </>

    );
}

export default DropDown;