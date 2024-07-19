import BotonsBody from "../../Molecules/MoleculesInicioAdmin/BotonsBody";
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
import TitleHeaders from "../../Molecules/MoleculesInicioAdmin/TitleHeader";
import { getUser } from "../../../../../User";


function HeaderHome(){
    const userName= getUser().name;
    return(
        <>
            <HeaderAdmin titule={`Bienvenido ${userName}`}></HeaderAdmin>
            <TitleHeaders></TitleHeaders>

            <BotonsBody></BotonsBody>
            
        </>
    );
}
export default HeaderHome;