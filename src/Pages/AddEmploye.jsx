import HeaderOrganism from '../assets/components/Organism/OrganismInicio/HeaderOrganism';
import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import AddEmployeForm from '../assets/components/Organism/AddEmployeForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function AddEmploye() {
    return ( <>
    <HelmetProvider>
      <Helmet>
        <title>Administracion de empleados</title>
    </Helmet>
    </HelmetProvider>
    <div className="h-screen w-full">
    
    <HeaderAdmin titule="Control de empleados"></HeaderAdmin>   
    <section className="bg-[#bc5151] h-auto w-full">
    <AddEmployeForm></AddEmployeForm>
    
    </section>
    </div>
    </> );
}

export default AddEmploye;