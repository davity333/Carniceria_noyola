import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicio/BotonesHeader";
function HeaderOrganism({onClick, onClickLogin, onClickLupa}){
return(

    <>
    <Header>
    <Logo></Logo>
    <InputPrincipal onClickLupa={onClickLupa}></InputPrincipal>

    <BotonesHeader onClick={onClick} onClickLogin={onClickLogin}></BotonesHeader>
    
    </Header>

    </>
);
}
export default HeaderOrganism;