import logo from '/logoCarnitas.png'
import React from 'react';
function LogoVistaAdmin({onClick}){
    return(
        <>
        <>
      <img onClick={onClick} className="mt-3 ml-2 h-16 cursor-pointer
      filter hover:drop-shadow-custom-red sm:h-32 sm:ml-6" src={logo} alt="Inicio" title='Home'/>  
    </>
        </>
    );

}
export default LogoVistaAdmin;