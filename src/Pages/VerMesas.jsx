import LineaSeparador from "../assets/components/Atoms/AtomsPaginaPrincipal/LineaSeparador";
import TextEncabezado from "../assets/components/Molecules/MoleculesVerMesas/TextEncabezado";
import Header from "../assets/components/Organism/OrganismInicioAdmin/HeaderOrganismAdmin";
import Mesas from "../assets/components/Organism/OrgVerMesas/CardsOrg";
function VerMesas(){
    return(
        
        <>
        <div className="bg-[#C29292] min-h-screen">
        <Header></Header>

        <TextEncabezado></TextEncabezado>

        <div className="flex justify-center">
        <LineaSeparador></LineaSeparador>
        </div>

        <div className="p-4">
        <Mesas></Mesas>
        </div>
        
        </div>
        </>
    );
}
export default VerMesas;