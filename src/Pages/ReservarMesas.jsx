import HeaderOrganism from '../assets/components/Organism/OrganismInicio/HeaderOrganism';
import ReservarMesaForm from '../assets/components/Organism/ReservarMesa'

function ReservarMesas() {
    return ( <>
    <div className="h-screen w-full">
    
    <HeaderOrganism></HeaderOrganism>
    <section className="bg-customColor-came h-auto w-full">
        
       
    <ReservarMesaForm></ReservarMesaForm>
    
    </section>
    </div>
    </> );
}

export default ReservarMesas;