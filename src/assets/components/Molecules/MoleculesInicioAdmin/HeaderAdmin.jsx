import cerrar from '/cerrarSesion.png'
import Logo from '../../Atoms/AtomsPaginaPrincipal/Logo';
import LogoVistaAdmin from '../../Atoms/AtomsPaginaPrincipal/LogoVistaAdmin';
function HeaderAdmin({children, titule}){
    return(
        <>
       <header className='flex h-36 items-center px-4 w-full bg-[#882b2b] justify-between
       shadow-[2px_5px_20px_5px_rgba(0,0,0,0.2)]'>

    <div className='flex items-center'>
        {children}
        <LogoVistaAdmin></LogoVistaAdmin>
    </div>
        <p className='text-center flex justify-center text-6xl text-[#ffffff]
        [text-shadow:_2px_4px_6px_rgba(131,131,131,0.82)] font-extralight'>{titule}</p>
    <img title='Cerrar sesión' src={cerrar} className='h-16 m-7 cursor-pointer' />
</header>
        </>
    );
}
export default HeaderAdmin;