import RecuadroDropDown from "../../Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
function DropDownAccount({children}){
    return(
        <>
        <RecuadroDropDown>
            {children}
            <div className="flex-col ">

                <div className=" font-medium font-mono text-[1.1rem] text-white">
                <p className="cursor-pointer hover:bg-red-900 p-5">Cerrar sesión</p>
                    </div>
                
            </div>
        </RecuadroDropDown>
        </>

    );
}
export default DropDownAccount;