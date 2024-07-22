import usuario from "/logoRegistrarse.png";
import FormRegister from "../Molecules/Register/FormRegister";
import { Link } from "react-router-dom";
import { useState } from "react";
function RegisterForm() {
  return (
    <>
      
    
        <div className="flex justify-center items-center h-screen">
        <div className="shadow-lg shadow-black-500/50 flex flex-col w-1/3 rounded-3xl 
        bg-white shadow-[0px_7px_14px_10px_rgb(0, 0, 0)]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
          <div className="flex items-center mt-9 justify-center gap-2">
            <img src={usuario} alt="logo" className="w-10 h-10 mr-2" />
            <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight text-[rgb(243,52,52)]">
                Registrate
            </h2>
          </div> 


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
