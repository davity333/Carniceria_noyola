
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesPublicadasOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
import { useState } from "react";
import Input from "../assets/components/Atoms/AtomsPaginaPrincipal/Input";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Home(){

    const [buscador, setBuscador] = useState(false); 
    const buscadorResponsivo = () =>{
        setBuscador(prevBuscador => !prevBuscador);
    }
    
    return(
        <>
        <HelmetProvider>
      <Helmet>
        <title>Iniciar sesión</title>
    </Helmet>
    </HelmetProvider>
        <HeaderOrganism onClickLupa={buscadorResponsivo}></HeaderOrganism>

        <div className=" block sm:hidden">
        {buscador && (<Input ></Input>)}
        </div>

        <CarneIntroductionOrg></CarneIntroductionOrg>

        <CarnesVentasTextOrg></CarnesVentasTextOrg>
        <CardCarnesPublicadasOrg></CardCarnesPublicadasOrg>

        <PiePaginaOrg></PiePaginaOrg>
        </>
    );
}
export default Home;
