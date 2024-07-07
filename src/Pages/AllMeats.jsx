import CardsAllMeatsOrg from "../assets/components/Organism/OrganismAllMeats/CardsAllMeatsOrg";
import HeaderOrg from "../assets/components/Organism/OrganismAllMeats/HeaderOrg";
function AllMeats(){
    return(
        <>
        <div className="bg-[#C29292] min-h-screen">
        <HeaderOrg></HeaderOrg>

        <div className="flex flex-col items-center">
        <CardsAllMeatsOrg></CardsAllMeatsOrg>
        </div>
        <div className="p-10"></div>
        </div>

        </>
    );
}
export default AllMeats;