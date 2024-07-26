import HeaderOrganism from '../assets/components/Organism/OrganismInicio/HeaderOrganism';
import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import AddEmployeForm from '../assets/components/Organism/AddEmployeForm';
function AddEmploye() {
    return ( <>
    <div className="h-screen w-full">
    
    <HeaderAdmin titule="Control de empleados"></HeaderAdmin>   
    <section className="bg-[#bc5151] h-auto w-full">
    <AddEmployeForm></AddEmployeForm>
    
    </section>
    </div>
    </> );
}

export default AddEmploye;