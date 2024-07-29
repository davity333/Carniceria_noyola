import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import PedidosOrg from "../assets/components/Organism/OrganismPedidos/PedidosOrg";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Pedidos(){
    return(
        <>
        <HelmetProvider>
      <Helmet>
        <title>Administrar pedidos</title>
    </Helmet>
    </HelmetProvider>
        <div className="bg-[#C29292] font-Raleway min-h-screen">
        <HeaderAdmin titule="Pedidos"></HeaderAdmin>
        <PedidosOrg></PedidosOrg>
        
        </div>
        
        </>
    )
}
export default Pedidos;