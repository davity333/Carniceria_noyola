import LoginForm from "../assets/components/Organism/LoginForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Login() {
  return (

    <>
     <HelmetProvider>
      <Helmet>
        <title>Iniciar sesión</title>
    </Helmet>
    </HelmetProvider>
    <div className="flex justify-center items-center h-screen 
    min-h-screen bg-gradient-to-r bg-gradient-to-r from-[#6d3030] to-[#d73b3b]">
    <LoginForm />
    </div>

    </>
  );
}

export default Login;
