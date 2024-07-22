import Logo from "/logoReservarMesa.png"
import FormAddEmploye from "../Molecules/FormAddEmploye";
import Title from "../Atoms/reservarMesas/Title";

function AddEmployeForm() {
  return (
    <>
      
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 w-full ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h-1/3 w-1/3 "
              src={Logo}
              alt="Carnitas Noyola"
            />
            <Title text={"Agregar nuevo empleado"}></Title>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-1/2">
            <FormAddEmploye />
          </div>
        </div>
  
    </>
  );
}

export default AddEmployeForm;