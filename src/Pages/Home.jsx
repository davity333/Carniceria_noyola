
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesPublicadasOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
import { useState } from "react";
import DropDownOptionsOrg from "../assets/components/Organism/OrganismInicio/DropDownOptionsOrg";
import LineaGris from "../assets/components/Atoms/AtomsPaginaPrincipal/LineaGris";
function Home(){

    const [dropDownMenu, setDropDown] = useState(false);

    const clickDown = () =>{
        if(dropDownMenu){
            setDropDown(false);
        }else{

            setDropDown(!false);
        }

    }
    
    return(
        <>
        <HeaderOrganism onClick={clickDown}></HeaderOrganism>
        {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}

        <CarneIntroductionOrg></CarneIntroductionOrg>

        <CarnesVentasTextOrg></CarnesVentasTextOrg>
        <CardCarnesPublicadasOrg></CardCarnesPublicadasOrg>

        <PiePaginaOrg></PiePaginaOrg>
        </>
    );
}
export default Home;