
import { useState } from "react";
import HeaderHome from "../assets/components/Organism/OrganismInicioAdmin/HeaderHome";
import TitleHeaders from "../assets/components/Molecules/MoleculesInicioAdmin/TitleHeader";

function HomeAdmin(){
    const [dropDownMenu, setDropDown] = useState(false);
    const [dropDownAccount, setDropDownAccount] = useState(false);

    const ClickMenu = () => {
        setDropDown(!dropDownMenu);
      };

    const ClickAccount = () =>{
        setDropDownAccount(!dropDownAccount)
    }

    return(
        <>
       <HeaderHome></HeaderHome>
        
        </>
    );
}

export default HomeAdmin;

/*
<div className="w-72 ml-[80.4%] h-full bg-white absolute z-10 left-0 fixed"></div>

*/