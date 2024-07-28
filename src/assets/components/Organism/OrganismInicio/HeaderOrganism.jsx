import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicio/BotonesHeader";
function HeaderOrganism({onClickLupa}){
return(

    <>
    <Header>
    <Logo></Logo>
    <InputPrincipal onClickLupa={onClickLupa}></InputPrincipal>

    <BotonesHeader ></BotonesHeader>
    
    </Header>

    </>
);
}
export default HeaderOrganism;