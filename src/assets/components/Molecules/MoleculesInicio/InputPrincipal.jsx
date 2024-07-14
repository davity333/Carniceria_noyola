import Input from "../../Atoms/AtomsPaginaPrincipal/Input";
import Img from "../../Atoms/AtomsPaginaPrincipal/Img";
import LupaSilueta from '/lupa.png'
import { useState } from "react";
function InputPrincipal({children}){

 

    return(
        <>

        <div className="flex flex-1 justify-center">

        <div  className="w-auto py-2 h-16 flex  justify-center">

                <Img imagen={LupaSilueta}/>

        <Input />
        {children}
        </div>

        </div>   

        </>
    );
}
export default InputPrincipal;