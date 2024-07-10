import CarnesVentasOrg from "../assets/components/Organism/OrganismInicio/CarnesVentaOrg";
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicioAdmin/HeaderOrganismAdmin";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicioAdmin/CardCarnesPublicadasAdminOrg";
import CardCarnesMasVendidasOrg from "../assets/components/Organism/OrganismInicioAdmin/HeaderOrganismAdmin";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
function HomeAdmin(){
    return(
        <>
        <HeaderOrganism></HeaderOrganism>
        <CarneIntroductionOrg></CarneIntroductionOrg>
        <CarnesVentasOrg></CarnesVentasOrg>
        <CarnesVentasTextOrg></CarnesVentasTextOrg>
        <CardCarnesPublicadasOrg></CardCarnesPublicadasOrg>
        <CardCarnesMasVendidasOrg></CardCarnesMasVendidasOrg>
        <PiePaginaOrg></PiePaginaOrg>
        </>
    );
}
export default HomeAdmin;