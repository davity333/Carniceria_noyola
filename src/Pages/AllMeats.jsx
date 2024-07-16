import CardsAllMeatsOrg from "../assets/components/Organism/OrganismAllMeats/CardsAllMeatsOrg";
import HeaderOrg from "../assets/components/Organism/OrganismAllMeats/HeaderOrg";
function AllMeats(){
    return(
        <>
        <div className="bg-[#C29292] font-Raleway min-h-screen">
        <HeaderOrg></HeaderOrg>
        <CardsAllMeatsOrg></CardsAllMeatsOrg>
        
        <div className="p-10"></div>
        </div>

        </>
    );
}
export default AllMeats;