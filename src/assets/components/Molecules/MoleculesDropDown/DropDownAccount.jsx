import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
import { useNavigate } from "react-router-dom";
function DropDownAccount({children}){
    
    const navegar = useNavigate();

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

                <div className=" font-medium font-mono text-[1.1rem] text-white
                ">
                <p onClick={clickLogin} className="cursor-pointer hover:bg-red-900 p-5">Iniciar sesión</p>
                <p onClick={clickRegister} className="cursor-pointer hover:bg-red-900 p-5">Registrarse</p>
                    </div>
                
            </div>
        </RecuadroDropDown>
        </>

    );
}
export default DropDownAccount;