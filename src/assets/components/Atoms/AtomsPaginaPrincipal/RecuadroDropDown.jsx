import { useState } from "react";
function RecuadroDropDown({children}){

    return(
        <>
        <div className="
        bg-gradient-to-bl -m-7 from-orange-900 via-red-800 to-rose-700 w-[220%] h-[100vh] m-8 sm:h-auto sm:w-[130%]
        fixed sm:relative sm:m-0 "> 
            {children}
        </div>
        </>

    );
}
export default RecuadroDropDown;