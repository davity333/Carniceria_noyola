import SupermercadoLogo from '../../Atoms/AtomsPaginaPrincipal/SupermercadoLogo';
import LogoUsuario from '../../Atoms/AtomsPaginaPrincipal/LogoUsuario'
import MesaLogo from '../../Atoms/AtomsPaginaPrincipal/MesaLogo';



function BotonesHeader(){
return(
    <>
    <div className='m-7'>
        <MesaLogo></MesaLogo>
    </div>

    <div className='m-7'>
    <SupermercadoLogo></SupermercadoLogo>
    </div>

    <div className="m-7">
        <LogoUsuario></LogoUsuario>
    </div>

    </>
);
}

export default BotonesHeader;