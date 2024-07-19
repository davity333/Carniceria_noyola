import cerrar from '/cerrarSesion.png'
import Logo from '../../Atoms/AtomsPaginaPrincipal/Logo';
import LogoVistaAdmin from '../../Atoms/AtomsPaginaPrincipal/LogoVistaAdmin';
import { useNavigate } from 'react-router-dom';
function HeaderAdmin({children, titule}){

    const navegar = useNavigate();

    const cerrarSesion = () => {
        navegar("/login")
    }

    return(
        <>
       <header className='flex h-36 items-center px-4 w-full bg-[#882b2b] justify-between
       shadow-[2px_5px_20px_5px_rgba(0,0,0,0.2)]'>

    <div className='flex items-center'>
        {children}
        <LogoVistaAdmin></LogoVistaAdmin>
    </div>

        <p className='text-center flex justify-center text-3xl text-[#ffffff]
        [text-shadow:_2px_4px_6px_rgba(131,131,131,0.82)] font-extralight
        sm:text-6xl md:text-5xl lg:text-6xl'>{titule}</p>

    <img title='Cerrar sesión' src={cerrar} onClick={cerrarSesion} className='h-10 m-3 cursor-pointer sm:h-16 sm:m-7' />
</header>
        </>
    );
}
export default HeaderAdmin;