import logo from '/logoCarnitas.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoVistaAdmin(){
    const navegar = useNavigate();

    const handleClick = () =>{
        navegar("/homeAdmin")
    };

    return(
        <>
        <>
      <img onClick={handleClick} className="mt-3 ml-2 h-16 cursor-pointer
      filter hover:drop-shadow-custom-red sm:h-32 sm:ml-6" src={logo} alt="Inicio" title='Home'/>  
    </>
        </>
    );

}
export default LogoVistaAdmin;