import Input from "../../Atoms/AtomsPaginaPrincipal/Input";
import Img from "../../Atoms/AtomsPaginaPrincipal/Img";
import LupaSilueta from '/lupa.png'
import { useState } from "react";
function InputPrincipal({children}){

 

    return(
        <>

        <div className="flex flex-1 justify-center">

        <div  className="w-auto py-2 h-16 flex  justify-center bg-white rounded-full 
        hover:shadow-[0px_7px_5px_2px_#0000004f]">

                <Img imagen={LupaSilueta}/>

        <Input />
        {children}
        </div>

        </div>   

        </>
    );
}
export default InputPrincipal;