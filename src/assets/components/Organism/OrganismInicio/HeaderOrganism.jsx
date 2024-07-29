import Logo from "../../Atoms/AtomsPaginaPrincipal/Logo";
import InputPrincipal from "../../Molecules/MoleculesInicio/InputPrincipal";
import Header from "../../Atoms/AtomsPaginaPrincipal/header";
import BotonesHeader from "../../Molecules/MoleculesInicio/BotonesHeader";
import { getUser } from "../../../../service/User";
import login from "/loginSilueta.png"
function HeaderOrganism({onClickLupa}){
    const userName= getUser().name;
return(
    <>
    <Header>
    <Logo></Logo>

    <InputPrincipal onClickLupa={onClickLupa}></InputPrincipal>
    {localStorage.getItem('token') && <p className="text-white text-[0.5em] sm:text-[1em]">Usuario: {userName}</p>}

    <BotonesHeader ></BotonesHeader>
    </Header>
    
    </>
);
}
export default HeaderOrganism;