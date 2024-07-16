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
      <img onClick={handleClick} className="mt-3 ml-6 h-32 cursor-pointer" src={logo} alt="Inicio" title='Home'/>  
    </>
        </>
    );

}
export default LogoVistaAdmin;