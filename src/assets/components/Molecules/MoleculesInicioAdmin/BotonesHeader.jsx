import SupermercadoLogo from '../../Atoms/AtomsPaginaPrincipal/SupermercadoLogo';
import LogoUsuario from '../../Atoms/AtomsPaginaPrincipal/LogoUsuario'
import MesaLogo from '../../Atoms/AtomsPaginaPrincipal/MesaLogo';
import Menu from '../../Atoms/AtomsPaginaPrincipal/MenuLogo';

function BotonesHeader({onClick}){
return(
    <>
    

    <div className='m-10 cursor-pointer hover:bg-[#6d4545]'>
    <SupermercadoLogo></SupermercadoLogo>
    </div>

    <div className="m-6 cursor-pointer hover:bg-[#6d4545]">
        <LogoUsuario></LogoUsuario>
    </div>

    <div onClick={onClick} className="m-7 cursor-pointer hover:bg-[#6d4545]">
        <Menu></Menu>
    </div>

    </>
);
}

export default BotonesHeader;