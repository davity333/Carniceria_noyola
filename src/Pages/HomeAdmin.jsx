import { useState } from "react";
import HeaderHome from "../assets/components/Organism/OrganismInicioAdmin/HeaderHome";
import TitleHeaders from "../assets/components/Molecules/MoleculesInicioAdmin/TitleHeader";
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
         <HelmetProvider>
      <Helmet>
        <title>Panel de administración</title>
    </Helmet>
    </HelmetProvider>
       <HeaderHome></HeaderHome>
        </>
    );
}
export default HomeAdmin;