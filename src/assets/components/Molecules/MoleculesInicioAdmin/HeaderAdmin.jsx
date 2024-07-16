import cerrar from '/cerrarSesion.png'
import Logo from '../../Atoms/AtomsPaginaPrincipal/Logo';
import LogoVistaAdmin from '../../Atoms/AtomsPaginaPrincipal/LogoVistaAdmin';
function HeaderAdmin({children, titule}){
    return(
        <>
       <header className='flex h-36 items-center px-4 w-full bg-[#882b2b] justify-between'>

    <div className='flex items-center'>
        {children}
        <LogoVistaAdmin></LogoVistaAdmin>
    </div>
        <p className='text-center flex justify-center text-6xl text-[#f0c3b7] font-bold
        [text-shadow:_2px_4px_6px_rgba(131,131,131,0.82)]'>{titule}</p>
    <img title='Cerrar sesión' src={cerrar} className='h-16 m-7 cursor-pointer' />
</header>
        </>
    );
}
export default HeaderAdmin;