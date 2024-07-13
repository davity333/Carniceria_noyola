import CarnesVentasOrg from "../assets/components/Organism/OrganismInicio/CarnesVentaOrg";
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicioAdmin/HeaderOrganismAdmin";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicioAdmin/CardCarnesPublicadasAdminOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
import RecuadroDropDown from "../assets/components/Atoms/AtomsPaginaPrincipal/RecuadroDropDown";
import DropDown from "../assets/components/Molecules/MoleculesDropDown/DropDown";
import { useState } from "react";

function HomeAdmin(){
    const [dropDown, setDropDown] = useState(false)

    const Click = () => {
        setDropDown(!dropDown);
      };
    return(
        <>
        
        <div className="relative w-full h-full">
       {dropDown && (<DropDown></DropDown>)}
       
       <HeaderOrganism onClick={Click}></HeaderOrganism>
       <CarneIntroductionOrg></CarneIntroductionOrg>
       <CarnesVentasOrg></CarnesVentasOrg>
       <CarnesVentasTextOrg></CarnesVentasTextOrg>
       <CardCarnesPublicadasOrg ></CardCarnesPublicadasOrg>
       
       <PiePaginaOrg></PiePaginaOrg>
   </div>
        
        </>
    );
}
export default HomeAdmin;

/*
<div className="w-72 ml-[80.4%] h-full bg-white absolute z-10 left-0 fixed"></div>

*/