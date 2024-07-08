import SupermercadoLogo from '../../Atoms/AtomsPaginaPrincipal/SupermercadoLogo';
import LogoUsuario from '../../Atoms/AtomsPaginaPrincipal/LogoUsuario'
import MesaLogo from '../../Atoms/AtomsPaginaPrincipal/MesaLogo';
import Menu from '../../Atoms/AtomsPaginaPrincipal/MenuLogo';

function BotonesHeader(){
return(
    <>
    

    <div className='m-10'>
    <SupermercadoLogo></SupermercadoLogo>
    </div>

    <div className="m-6">
        <LogoUsuario></LogoUsuario>
    </div>

    <div className="m-7">
        <Menu></Menu>
        
    </div>

    </>
);
}

export default BotonesHeader;