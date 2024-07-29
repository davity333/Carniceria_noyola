import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import BotonsBody from "../assets/components/Molecules/MoleculesInicioAdmin/BotonsBody";
import TitleHeaders from "../assets/components/Atoms/reservarMesas/Title";
import { getUser } from "../service/User";

function HomeEmployee() {
    const userName = getUser().name;
    return (
        <>
            <HeaderAdmin titule={`Bienvenido `}></HeaderAdmin>
            <TitleHeaders text={`Hola! ${userName}, ¿Qué haremos hoy?`}></TitleHeaders>
            <div className="mt-14">
                <BotonsBody></BotonsBody>
            </div>
        </>
    );
}

export default HomeEmployee;