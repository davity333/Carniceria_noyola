import SupermercadoLogo from '../../Atoms/AtomsPaginaPrincipal/SupermercadoLogo';
import LogoUsuario from '../../Atoms/AtomsPaginaPrincipal/LogoUsuario'
import MesaLogo from '../../Atoms/AtomsPaginaPrincipal/MesaLogo';
import Menu from '../../Atoms/AtomsPaginaPrincipal/MenuLogo';

function BotonesHeader({menu, account, prod}){
return(
    <>
    <div onClick={account} className="m-6 cursor-pointer hover:bg-[#2c2f1c84] px-2 py-2 rounded-3xl">
        <LogoUsuario></LogoUsuario>
    </div>

    <div onClick={menu} title='Menu' className="m-7 cursor-pointer hover:bg-[#2c2f1c84] rounded-3xl">
        <Menu></Menu>
    </div>

    </>
);
}

export default BotonesHeader;