import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import BotonsBody from "../assets/components/Molecules/MoleculesInicioAdmin/BotonsBody";
import TitleHeaders from "../assets/components/Atoms/reservarMesas/Title";
import { getUser } from "../service/User";
import { useNavigate } from 'react-router-dom';
import LogoVistaAdmin from "../assets/components/Atoms/AtomsPaginaPrincipal/LogoVistaAdmin";
import cerrar from '/cerrarSesion.png'
function HomeEmployee() {
    const userName = getUser().name;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/HomeEmployee'); 
    };

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        navegar("/login")
    }
    return (
        <>
        <header className='flex h-36 items-center px-4 w-full bg-[#882b2b] justify-between
       shadow-[2px_5px_20px_5px_rgba(0,0,0,0.2)]'>
            <LogoVistaAdmin onClick={handleClick}></LogoVistaAdmin>
            
            <img title='Cerrar sesión' src={cerrar} onClick={cerrarSesion} className='h-10 m-3 cursor-pointer sm:h-16 sm:m-7
    filter hover:drop-shadow-custom-white' />
</header>
    <TitleHeaders text={`Hola! ${userName}, ¿Qué haremos hoy?`}></TitleHeaders>
    <div className="mt-14">
        <BotonsBody></BotonsBody>
    </div>
        </>
    );
}

export default HomeEmployee;