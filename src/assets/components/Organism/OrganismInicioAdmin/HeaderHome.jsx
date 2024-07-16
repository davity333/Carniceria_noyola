import BotonsBody from "../../Molecules/MoleculesInicioAdmin/BotonsBody";
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
import TitleHeaders from "../../Molecules/MoleculesInicioAdmin/TitleHeader";


function HeaderHome(){
    return(
        <>
            <HeaderAdmin titule="Bienvenido administrador"></HeaderAdmin>
            <TitleHeaders></TitleHeaders>

            <BotonsBody></BotonsBody>
            
        </>
    );
}
export default HeaderHome;