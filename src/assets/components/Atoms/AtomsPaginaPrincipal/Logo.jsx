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
      <img onClick={handleClick} className="mt-3 ml-2 h-16 cursor-pointer sm:h-32 sm:ml-6" src={logo} alt="Logo" />  
    </>
);
}
export default Logo;