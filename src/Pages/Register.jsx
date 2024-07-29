import RegisterForm from "../assets/components/Organism/ResgisterForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Register() {
    return ( <>
    <HelmetProvider>
      <Helmet>
        <title>Registrarse</title>
    </Helmet>
    </HelmetProvider>
    <div className="min-h-screen bg-gradient-to-r bg-gradient-to-r from-[#6d3030] to-[#d73b3b]">
        
    <RegisterForm></RegisterForm>
    </div>
    </> );
}

export default Register;