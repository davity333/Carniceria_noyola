import React from "react";
import style from './Styles.module.css'

function Header({children}){
return(
<>
    <header id={style.header} className='flex h-24 items-center px-4 w-full sm:h-36' >
        {children}
    </header>
</>


)
}
export default Header;

