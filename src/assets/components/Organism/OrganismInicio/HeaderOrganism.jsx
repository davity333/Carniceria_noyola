import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicio/BotonesHeader";
import LineaGris from "../../Atoms/AtomsPaginaPrincipal/LineaGris";
function HeaderOrganism(){
return(

    <>
    <Header>

    <Logo></Logo>
    <InputPrincipal></InputPrincipal>

    <BotonesHeader></BotonesHeader>

    </Header>
    <LineaGris></LineaGris>
    
    </>
);
}
export default HeaderOrganism;