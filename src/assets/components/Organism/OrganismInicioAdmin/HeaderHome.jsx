import BotonsBody from "../../Molecules/MoleculesInicioAdmin/BotonsBody";
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
import TitleHeaders from "../../Molecules/MoleculesInicioAdmin/TitleHeader";
import { getUser } from "../../../../service/User";
import { useNavigate } from 'react-router-dom';
function HeaderHome(){
    const userName= getUser().name;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home'); 
    };

    
    return(
        <>
            <HeaderAdmin titule={`Bienvenido ${userName}`}></HeaderAdmin>
            <TitleHeaders></TitleHeaders>

            <BotonsBody></BotonsBody>
            
        </>
    );
}
export default HeaderHome;