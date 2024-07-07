import logo from '/logoCarnitas.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo(){
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); 
    };

return(
    
    <>
      <img onClick={handleClick} className="mt-3 ml-6 h-32 cursor-pointer" src={logo} alt="Logo" />  
    </>
);
}
export default Logo;