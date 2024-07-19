import Logo from "/logoCarnitas.png";
import FormRegister from "../Molecules/Register/FormRegister";
import { Link } from "react-router-dom";
function RegisterForm() {
  return (
    <>
      
    
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
        <div className="shadow-lg shadow-black-500/50 flex flex-col w-1/3 rounded-3xl bg-[#a84e4dd4]
        shadow-[0px_7px_14px_10px_rgba(0,0,0,0.1)]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#d7b2b2]">
                Registrate
            </h2>
    
          </div>
  
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormRegister/>
            <p className="text-gray-600 text-sm">
            <Link to={'/login'}>
              <p className="text-[#551616] mt-5 text-center text-sm hover:text-[#283bb7] p-4 text-3xl">
              ¿Ya estás registrado?, Iniciar sesión
              </p>
                </Link>
                </p>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default RegisterForm;
