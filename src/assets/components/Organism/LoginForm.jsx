import Logo from "/SiluetaCerdo.png";
import Form from "../Molecules/Register/Form.jsx";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
    <div className="flex flex-col w-1/3 rounded-3xl bg-white p-8
        shadow-[0px_7px_14px_10px_rgb(0, 0, 0)]">
          
            <div className="flex items-center mb-5 justify-center">
                <img src={Logo} className="w-10 h-10 mr-2 filter brightness-50 opacity-100" alt="Logo" />
                    <h2 className="text-3xl font-bold leading-9 tracking-tight text-[rgb(243,52,52)]">
                        Iniciar sesión
                    </h2>
            </div>
          
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <Form />
                  <p className="mt-10 text-center text-sm text-black ">
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
