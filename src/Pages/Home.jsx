import CarnesVentasOrg from "../assets/components/Organism/OrganismInicio/CarnesVentaOrg";
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesPublicadasOrg";
import CardCarnesMasVendidasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesMasVendidasOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
function Home(){
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
export default Home;