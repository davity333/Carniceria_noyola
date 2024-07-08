import Logo from "/logoCarnitas.png";
import FormRegister from "../Molecules/Register/FormRegister";
import { Link } from "react-router-dom";
function RegisterForm() {
  return (
    <>
      <section className="bg-white h-screen w-full ">
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 shadow-lg shadow-cyan-500/50">
        <div className="shadow-lg shadow-black-500/50 flex flex-col w-1/3 rounded-md ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h-1/2 w-1/2 rounded-s-full"
              src={Logo}
              alt="Carnitas Noyola"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                Registrate
            </h2>
    
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormRegister/>
            <p className="text-gray-600 text-sm">
            <Link to={'/login'}>
              <p className="text-blue-500 mt-10 text-center text-sm hover:text-blue-700 p-4">
              ¿Ya estás registrado?, Iniciar sesión
              </p>
                </Link>
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
