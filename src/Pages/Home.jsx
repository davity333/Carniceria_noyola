
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesPublicadasOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
import { useState } from "react";
import DropDownOptionsOrg from "../assets/components/Organism/OrganismInicio/DropDownOptionsOrg";
import DropDownUserOrg from "../assets/components/Organism/OrganismInicio/DropDownUserOrg";
import LupaSilueta from '/lupa.png'
import Input from "../assets/components/Atoms/AtomsPaginaPrincipal/Input";
import { useNavigate } from "react-router-dom";
function Home(){

    const navegar = useNavigate();
    
    
    
    ///////////////////////////////////////////////////////////////
    
    ///////////////////////////////////////////////////////////////
    
    return(
        <>
        <HeaderOrganism ></HeaderOrganism>

        <CarneIntroductionOrg></CarneIntroductionOrg>

        <CarnesVentasTextOrg></CarnesVentasTextOrg>
        <CardCarnesPublicadasOrg></CardCarnesPublicadasOrg>

        <PiePaginaOrg></PiePaginaOrg>
        </>
    );
}
export default Home;

//*
/*
<div className=" block sm:hidden">
        {buscador && (<Input value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} onKeyUp={clickEnter}></Input>)}
        </div>
        */