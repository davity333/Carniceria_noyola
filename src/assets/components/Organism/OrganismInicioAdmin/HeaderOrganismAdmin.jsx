import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicioAdmin/BotonesHeader";
import LineaGris from "../../Atoms/AtomsPaginaPrincipal/LineaGris";
function HeaderOrganismAdmin(){
return(

    <>
    <Header>
    <Logo></Logo>
    <InputPrincipal></InputPrincipal>

    <BotonesHeader>
    </BotonesHeader>
    

    </Header>
    <div className="opacity-70">
    <LineaGris></LineaGris>  
    </div>
    </>
);
}
export default HeaderOrganismAdmin;