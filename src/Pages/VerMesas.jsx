import LineaSeparador from "../assets/components/Atoms/AtomsPaginaPrincipal/LineaSeparador";
import MesasAceptadas from "../assets/components/Molecules/MoleculesControlMesas/MesasAceptadas";
import MesasCanceladas from "../assets/components/Molecules/MoleculesControlMesas/MesasCanceladas";
import MesasPendientes from "../assets/components/Molecules/MoleculesControlMesas/MesasPendientes";
import TextEncabezado from "../assets/components/Molecules/MoleculesControlMesas/TextEncabezado";
import Header from "../assets/components/Organism/OrganismInicioAdmin/HeaderOrganismAdmin";
import Mesas from "../assets/components/Organism/OrgVerMesas/CardsOrg";
import linea from '/linea.png'
function VerMesas(){
    return(
        
        <>
        <div className="bg-[#C29292] min-h-screen w-full sm:w-full">
        <Header></Header>

        <TextEncabezado></TextEncabezado>

        <MesasAceptadas></MesasAceptadas>
        <Mesas></Mesas>

        <MesasPendientes> </MesasPendientes>
        <Mesas></Mesas>

        <MesasCanceladas></MesasCanceladas>
        <Mesas></Mesas>
        
        <div className=" min-h-screen w-full"></div>
        </div>
        </>
    );
}
export default VerMesas;
//       