import CardsAllMeatsOrg from "../assets/components/Organism/OrganismAllMeats/CardsAllMeatsOrg";
import { useState } from "react";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import DropDownOptionsOrg from "../assets/components/Organism/OrganismInicio/DropDownOptionsOrg";
import DropDownUserOrg from "../assets/components/Organism/OrganismInicio/DropDownUserOrg";
import CarneIntroduccion from "../assets/components/Molecules/MoleculesAllMeats/CarneIntroduction";
import CarneIntroduction from "../assets/components/Molecules/MoleculesAllMeats/CarneIntroduction";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function AllMeats(){

    const [dropDownMenu, setDropDown] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);

    const clickDown = () =>{
        if(dropDownMenu){
            setDropDown(false);
        }else{
            setDropDownUser(false);
            setDropDown(!false);
        }

    }


    const clickDownUser = () =>{
        if(dropDownUser){
            setDropDownUser(false);
        }else{
            setDropDown(false)
            setDropDownUser(!false);
        }

    }

    return(
        <>
         <HelmetProvider>
      <Helmet>
        <title>Todos los productos</title>
    </Helmet>
    </HelmetProvider>
        <div className="bg-[#C29292] min-h-screen w-full sm:w-full">
        <HeaderOrganism onClick={clickDown} onClickLogin={clickDownUser}></HeaderOrganism>

        {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}
        {dropDownUser && (<DropDownUserOrg></DropDownUserOrg>)}

        <CarneIntroduction></CarneIntroduction>
        
        <CardsAllMeatsOrg></CardsAllMeatsOrg>
        
        
        <div className="p-10"></div>
        </div>

        </>
    );
}
export default AllMeats;