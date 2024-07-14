import SupermercadoLogo from '../../Atoms/AtomsPaginaPrincipal/SupermercadoLogo';
import LogoUsuario from '../../Atoms/AtomsPaginaPrincipal/LogoUsuario'
import MesaLogo from '../../Atoms/AtomsPaginaPrincipal/MesaLogo';



function BotonesHeader(){
return(
    <>
    <div className='m-7 hover:bg-[#2c2f1c84] px-1 py-1 rounded-full'>
        <MesaLogo></MesaLogo>
    </div>

    <div className='m-7 hover:bg-[#2c2f1c66] px-2 py-2 rounded-full'>
    <SupermercadoLogo></SupermercadoLogo>
    </div>

    <div className="m-7 hover:bg-[#2c2f1c84] px-2 py-2 rounded-full">
        <LogoUsuario></LogoUsuario>
    </div>

    </>
);
}

export default BotonesHeader;