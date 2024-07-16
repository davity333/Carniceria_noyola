import { useState } from "react";
function RecuadroDropDown({children}){

    return(
        <>
        <div className="
        bg-gradient-to-bl from-orange-900 via-red-800 to-rose-700">
            {children}
        </div>
        </>

    );
}
export default RecuadroDropDown;