import HeaderOrganism from '../assets/components/Organism/OrganismInicio/HeaderOrganism';
import ReservarMesaForm from '../assets/components/Organism/ReservarMesa'
import AddEmployeForm from '../assets/components/Organism/AddEmployeForm';
function AddEmploye() {
    return ( <>
    <div className="h-screen w-full">
    
    <HeaderOrganism></HeaderOrganism>
    <section className="bg-customColor-came h-auto w-full">
        
       
    <AddEmployeForm></AddEmployeForm>
    
    </section>
    </div>
    </> );
}

export default AddEmploye;