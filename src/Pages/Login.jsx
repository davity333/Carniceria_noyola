import LoginForm from "../assets/components/Organism/LoginForm";
import logo from '/logoCarnitas.png'
import { useNavigate } from "react-router-dom/dist";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Login() {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home'); 
    };
  return (
    <>
      <HelmetProvider>
      <Helmet>
        <title>Iniciar sesión</title>
    </Helmet>
    </HelmetProvider>
   <div className="relative h-screen bg-gradient-to-r from-[#6d3030] to-[#d73b3b]">
  <img 
    onClick={handleClick} 
    className="absolute top-0 left-0 m-4 h-14 cursor-pointer filter hover:drop-shadow-custom-red sm:h-[15%] sm:m-6" 
    src={logo} 
    alt="Logo" 
    title="Inicio" 
  />  

  <div className="flex justify-center items-center h-full">
    <LoginForm />
  </div>
</div>


    </>
  );
}

export default Login;