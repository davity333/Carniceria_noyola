import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicio/BotonesHeader";
function HeaderOrganism({onClick, onClickLogin, onClickLupa, onKeyUp, value, onChange}){
return(

    <>
    <Header>
    <Logo></Logo>
    <InputPrincipal onClickLupa={onClickLupa} onKeyUp={onKeyUp} value={value} onChange={onChange}></InputPrincipal>

    <BotonesHeader onClick={onClick} onClickLogin={onClickLogin}></BotonesHeader>
    
    </Header>

    </>
);
}
export default HeaderOrganism;