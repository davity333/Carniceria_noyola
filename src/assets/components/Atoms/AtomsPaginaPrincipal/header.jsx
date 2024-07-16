import React from "react";
import style from './Styles.module.css'

function Header({children}){
return(
<>
    <header id={style.header} className='flex h-36 items-center px-4 w-full ' >
        {children}
    </header>
</>


)
}
export default Header;

