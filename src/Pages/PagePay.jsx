import HeaderOrganism from "../assets/components/Organism/OrganismPagar/HeaderOrganism";
import TextCarritoOrg from "../assets/components/Organism/OrganismPagar/TextCarritoOrg";
import CardsOrg from "../assets/components/Organism/OrganismPagar/CardsOrg";
import ResumenPreciosOrg from "../assets/components/Organism/OrganismPagar/ResumenPreciosOrg";
function PagePay(){
    return(
        <>
        <div className="bg-[#C29292] min-h-screen">
            <HeaderOrganism />
            <TextCarritoOrg />
            
            <div className="flex flex-row ">

                <div className="flex-1">
                    <CardsOrg />
                </div>

                <div className="flex-1">
                    <ResumenPreciosOrg />
                </div>

            </div>

        </div>
        </>
    );
}
export default PagePay;