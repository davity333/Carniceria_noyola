import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import LineaGris from "../../Atoms/AtomsPaginaPrincipal/LineaGris";
import CarneIntroduction from "../../Molecules/MoleculesAllMeats/CarneIntroduction";
import TextTitule from "../../Molecules/MoleculesAllMeats/TextTitutle";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import BotonesHeader from "../../Molecules/MoleculesInicio/BotonesHeader";
function HeaderOrg(){
    return(
        <>
        <Header>

        <Logo></Logo>

        <InputPrincipal></InputPrincipal>
        <BotonesHeader></BotonesHeader>

        </Header>
        <LineaGris></LineaGris>
        <CarneIntroduction>
        </CarneIntroduction>

        <div className="p-14">
        <TextTitule></TextTitule>
        </div>
        </>
    );
}
export default HeaderOrg;