import GeneratorPdf from "../assets/components/Molecules/MoleculesPdf/GeneratorPdf";
import HeaderHome from "../assets/components/Organism/OrganismInicioAdmin/HeaderHome";

function Pdf(){
    return(
        <>
        <div className="bg-[#C29292] font-Raleway min-h-screen">
        <GeneratorPdf></GeneratorPdf>
        </div>
        </>

    );
}
export default Pdf;