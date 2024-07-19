import { useState } from "react";
function RecuadroDropDown({children}){

    return(
        <>
        <div className="
        bg-gradient-to-bl from-orange-900 via-red-800 to-rose-700 w-[220%] h-screen sm:h-auto sm:w-[130%]
        fixed sm:relative">

            
            {children}
        </div>
        </>

    );
}
export default RecuadroDropDown;