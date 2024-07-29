import RegisterForm from "../assets/components/Organism/ResgisterForm";
import { useNavigate } from "react-router-dom/dist";
import logo from '/logoCarnitas.png'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Register() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home'); 
    };
    return ( <>
    <HelmetProvider>
      <Helmet>
        <title>Registrarse</title>
    </Helmet>
    </HelmetProvider>
    <div className="min-h-screen bg-gradient-to-r bg-gradient-to-r from-[#6d3030] to-[#d73b3b]">
    <img 
    onClick={handleClick} 
    className="absolute top-0 left-0 m-4 h-14 cursor-pointer filter hover:drop-shadow-custom-red sm:h-[15%] sm:m-6" 
    src={logo} 
    alt="Logo" 
    title="Inicio" 
  />  
    <RegisterForm></RegisterForm>
    </div>
    </> );
}

export default Register;