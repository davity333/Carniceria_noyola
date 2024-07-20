
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesPublicadasOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
import { useState } from "react";
import DropDownOptionsOrg from "../assets/components/Organism/OrganismInicio/DropDownOptionsOrg";
import DropDownUserOrg from "../assets/components/Organism/OrganismInicio/DropDownUserOrg";

function Home(){

    const [dropDownMenu, setDropDown] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);

    const clickDown = () =>{            //DropDown Menu
        if(dropDownMenu){
            setDropDown(false);
        }else{
            setDropDownUser(false);
            setDropDown(!false);
        }

    }


    const clickDownUser = () =>{        //DropDown Usuario
        if(dropDownUser){
            setDropDownUser(false);
        }else{
            setDropDown(false)
            setDropDownUser(!false);
        }

    }
    
    return(
        <>
        <HeaderOrganism onClick={clickDown} onClickLogin={clickDownUser}></HeaderOrganism>
        {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}

        {dropDownUser && (<DropDownUserOrg></DropDownUserOrg>)}

        <CarneIntroductionOrg></CarneIntroductionOrg>

        <CarnesVentasTextOrg></CarnesVentasTextOrg>
        <CardCarnesPublicadasOrg></CardCarnesPublicadasOrg>

        <PiePaginaOrg></PiePaginaOrg>
        </>
    );
}
export default Home;