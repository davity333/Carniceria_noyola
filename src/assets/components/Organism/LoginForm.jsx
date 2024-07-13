import Logo from "/logoCarnitas.png";
import Form from "../Molecules/Register/Form.jsx";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <section className="bg-customColor-came h-screen w-full text-white">
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 shadow-lg shadow-cyan-500/50">
        <div className="shadow-lg shadow-black-500/50 flex flex-col w-1/3 rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-1/2 w-1/2 rounded-s-full"
              src={Logo}
              alt="Carnitas Noyola"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-w">
              Inicia sesión
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form />
            <p className="mt-10 text-center text-sm text-white">
              ¿No estás registrado?{' '}
              <Link to={'/register'}>
                <span className="text-blue-500">
                  Regístrate aquí
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
