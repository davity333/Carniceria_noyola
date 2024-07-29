import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import SectionOrderStatus from "../assets/components/Organism/orderStatus/SectionOrderStatus";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function OrdersStatus() {
    return ( <>
     <HelmetProvider>
      <Helmet>
        <title>Estado del pedido</title>
    </Helmet>
    </HelmetProvider>
    <HeaderOrganism></HeaderOrganism>
        <SectionOrderStatus></SectionOrderStatus>
    </> );
}

export default OrdersStatus;