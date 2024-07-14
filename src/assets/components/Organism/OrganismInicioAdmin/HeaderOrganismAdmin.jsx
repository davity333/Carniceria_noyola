import Logo from "../../Atoms/AtomsPaginaPrincipal/LogoVistaAdmin";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicioAdmin/BotonesHeader";
import LineaGris from "../../Atoms/AtomsPaginaPrincipal/LineaGris";

function HeaderOrganismAdmin({menu, account}){
return(

    <>
    <div className="sm: w-full">
    <Header>
        
    <Logo></Logo>
    <InputPrincipal></InputPrincipal>

    <BotonesHeader menu={menu} account={account}>
    </BotonesHeader>
    

    </Header>
    <div className="opacity-70">
    <LineaGris></LineaGris>
    </div>
    </div>
    </>
);
}

export default HeaderOrganismAdmin;