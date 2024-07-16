import Logo from "../../Molecules/addProduct/meat.png";
import Form from "../../Molecules/addProduct/Form";
import Title from "../../Atoms/reservarMesas/Title";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function AddProductForm() {
  const navigate = useNavigate();
  const click = () => {
    navigate('/allMeats');
};
  return (
    <>
      
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 w-full ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-1/3 w-1/3"
              src={Logo}
              alt="Carnitas Noyola"
            />
            <Title text={"Bienvenido a alta de productos ..."}></Title>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-1/2">
            <Form />
          </div>

        
        </div>

  
    </>
  );
}

export default AddProductForm;

