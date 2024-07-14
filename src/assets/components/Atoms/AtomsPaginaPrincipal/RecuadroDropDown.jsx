import { useState } from "react";
function RecuadroDropDown({children}){

    return(
        <>
        <div className="w-[18%] ml-[81.98%] h-full bg-white absolute z-10 left-0 fixed border-white
        drop-shadow-2xl shadow-[-1px_-1px_10px_0px_#000000]">
            {children}
        </div>
        </>

    );
}
export default RecuadroDropDown;