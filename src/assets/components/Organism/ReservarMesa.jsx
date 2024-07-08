import Logo from "/chair.png";
import Form from "../Molecules/reservarMesas/Form";
import Title from "../Atoms/reservarMesas/Title";
function ReservarMesaForm() {
  return (
    <>
      
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 w-full ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-1/3 w-auto "
              src={Logo}
              alt="Carnitas Noyola"
            />
            <Title text={"Hola reserva una mesa"}></Title>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-1/2">
            <Form />
          </div>
        </div>
  
    </>
  );
}

export default ReservarMesaForm;
