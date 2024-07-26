import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import ControlTable from "../assets/components/Organism/OrganismInicioAdmin/ControlTable";
function VerMesas(){
    return(
        
        <>
        <div className="bg-[#C29292] min-h-screen w-full sm:w-full">
        <HeaderAdmin titule="Mesas reservadas"></HeaderAdmin>   
        <ControlTable></ControlTable> 
        <div className=" min-h-screen w-full"></div>
        </div>
        </>
    );
}
export default VerMesas;