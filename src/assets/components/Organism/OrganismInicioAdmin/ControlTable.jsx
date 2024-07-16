import MesasAceptadas from "../../Molecules/MoleculesControlMesas/MesasAceptadas";
import MesasCanceladas from "../../Molecules/MoleculesControlMesas/MesasCanceladas";
import MesasPendientes from "../../Molecules/MoleculesControlMesas/MesasPendientes";
import TextEncabezado from "../../Molecules/MoleculesControlMesas/TextEncabezado";
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
import Header from "../../Organism/OrganismInicioAdmin/HeaderOrganismAdmin"
import Mesas from "../../Organism/OrgVerMesas/CardsOrg";

function ControlTable(){
    return(
        <>
        <HeaderAdmin titule="Mesas reservadas"></HeaderAdmin>

        <TextEncabezado></TextEncabezado>

        <MesasAceptadas></MesasAceptadas>
        <Mesas></Mesas>

        <MesasPendientes> </MesasPendientes>
        <Mesas></Mesas>

        <MesasCanceladas></MesasCanceladas>
        <Mesas></Mesas>
        </>
    );
}
export default ControlTable;