import BoxStatusTable from "../assets/components/Molecules/MoleculesTableStatusUser/BoxStatusTable";
import Title from "../assets/components/Molecules/MoleculesTableStatusUser/Title";
import HeaderOrg from "../assets/components/Organism/OrganismTableStatus/HeaderOrganism";
import OrgTableStatus from "../assets/components/Organism/OrganismTableStatus/OrgTableStatus";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function PageTableStatus(){
    return(
        <>
           <HelmetProvider>
      <Helmet>
        <title>Estado de mesa</title>
    </Helmet>
    </HelmetProvider>
        <div className=" bg-[#bcaa90] h-min-screen">
        <HeaderOrg></HeaderOrg>
        <Title></Title>

        <div className="flex justify-center m-5">
        <BoxStatusTable></BoxStatusTable>
        </div>

        </div>
        </>

    );
}
export default PageTableStatus;