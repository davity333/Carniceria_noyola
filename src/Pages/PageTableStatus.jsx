import BoxStatusTable from "../assets/components/Molecules/MoleculesTableStatusUser/BoxStatusTable";
import Title from "../assets/components/Molecules/MoleculesTableStatusUser/Title";
import HeaderOrg from "../assets/components/Organism/OrganismTableStatus/HeaderOrganism";
import OrgTableStatus from "../assets/components/Organism/OrganismTableStatus/OrgTableStatus";

function PageTableStatus(){
    return(
        <>
        <div className=" bg-[#bcaa90] h-screen">
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