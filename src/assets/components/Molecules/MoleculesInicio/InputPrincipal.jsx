import Input from "../../Atoms/AtomsPaginaPrincipal/Input";
import LupaSilueta from '/lupa.png'
import { useState } from "react";
import { BoxIconElement } from "boxicons";
function InputPrincipal({onClickLupa, children}){

 

    return(
        <>

<div className="flex flex-1 justify-center">

            <div className="w-3/5 sm:w-auto py-2 h-14 flex justify-end sm:flex sm:justify-center ">

            <div className="cursor-pointer block sm:hidden mt-2" onClick={onClickLupa}>
            <box-icon name='search' color='#ffffff' ></box-icon>
            </div>

            <div className="hidden sm:block ">
                <Input  />
                </div>
                
                {children}
            </div>

        </div>

        </>
    );
}
export default InputPrincipal;