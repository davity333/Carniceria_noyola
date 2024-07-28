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
    {localStorage.getItem('token') && <p className="absolute mt-[19%] text-[12px] ml-[55%] 
    sm:absolute sm:mt-[7%] sm:ml-[83%] text-white sm:text-[17px] 
    md:ml-[70%] md:mt-[12%] lg:ml-[76%] lg:mt-[9%] xl:ml-[82%] xl:mt-[7%] 
    2xl:ml-[90%] 2xl:mt-[4%]">Usuario: {userName}</p>}

    {localStorage.getItem('token') && <img src={login} alt="logo" className="h-4 absolute mt-[19%] text-[12px] ml-[84%] sm:absolute 
    sm:mt-[6.6%] sm:ml-[92%] sm:h-6 md:mt-[11%] md:ml-[88%] lg:mt-[9%] xl:ml-[91%] xl:mt-[7%]
    2xl:ml-[95%] 2xl:mt-[4%]"/> }
    <BotonesHeader ></BotonesHeader>
    </Header>
    

    </>
);
}
export default HeaderOrganism;