import CardsAllMeatsOrg from "../assets/components/Organism/OrganismAllMeats/CardsAllMeatsOrg";
import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import canita from '/CarnitaAbajo.png'
function AllMeatsAdmin(){
    return(
        <>
        <div className="bg-[#C29292] font-Raleway min-h-screen">
        <HeaderAdmin titule="Carnes agregadas"></HeaderAdmin>

        <div className="flex flex-col items-center mt-14">
        <CardsAllMeatsOrg></CardsAllMeatsOrg>
        </div>
        <div className="p-10"></div>

        <div>
            <img src={canita} alt="logo" className='w-full shadow-[-1px_-6px_8px_4px_rgba(0,0,0,0.24)]' />
        </div>
        </div>


        </>
    );
}
export default AllMeatsAdmin;