import Input from "../../Atoms/AtomsPaginaPrincipal/Input";
import LupaSilueta from '/lupa.png'
import { useState } from "react";
function InputPrincipal({children}){

 

    return(
        <>

<div className="flex flex-1 justify-center">

            <div className="w-3/5 sm:w-auto py-2 h-14 flex justify-end sm:flex sm:justify-center">

            <img src={LupaSilueta} alt="Logo" /> 

                <Input />
                {children}
            </div>

        </div>

        </>
    );
}
export default InputPrincipal;