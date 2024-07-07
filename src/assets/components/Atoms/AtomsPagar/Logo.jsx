import logo from '/logoCarnitas.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Logo(){
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/'); 
  };
return(
    
    <>
      <img onClick={handleClick} className="mt-3 ml-6 h-32 cursor-pointer
      filter hover:drop-shadow-custom-red
      " src={logo} alt="Logo" />  
    </>
);
}
export default Logo;