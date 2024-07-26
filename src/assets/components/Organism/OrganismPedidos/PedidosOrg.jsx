import Text from "../../Atoms/AtomsPaginaPrincipal/Text";
import CardOrders from "../../Molecules/MoleculesPedidos/CardOrders";
function PedidosOrg(){
    return(
        <>
        <div className="p-7">
        <p className="flex justify-center text-white text-3xl
        [text-shadow:_0px_2px_2px_rgba(0,0,0,0.68)]">En esta seccion veras todos los pedidos pendientes</p>
        </div>

        <div className="p-10">
        <CardOrders></CardOrders>
        </div>
        
        </>
    )
}
export default PedidosOrg;