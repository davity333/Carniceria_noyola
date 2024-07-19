import Logo from "/logoCarnitas.png";
import Form from "../Molecules/Register/Form.jsx";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
        <div className="flex flex-col w-1/3 rounded-3xl bg-[#a84e4dd4] p-8
        shadow-[0px_7px_14px_10px_rgba(0,0,0,0.1)]">
          
          
            <img
              className="mx-auto h-40 "
              src={Logo}
              alt="Carnitas Noyola"
            />
            
            
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-w
            text-[#d7b2b2]">
              Iniciar sesión
            </h2>
          
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form />
            <p className="mt-10 text-center text-sm text-white m-5">
              ¿No estás registrado?{' '}
              <Link to={'/register'}>
                <span className="text-[#4a1b1b] hover:text-blue-800">
                  Regístrate aquí
                </span>
              </Link>
            </p>
          </div>
        </div>
      
   
</>
  );
}

export default LoginForm;
