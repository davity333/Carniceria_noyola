import GeneratorPdf from "../assets/components/Molecules/MoleculesPdf/GeneratorPdf";
import HeaderHome from "../assets/components/Organism/OrganismInicioAdmin/HeaderHome";
import PdfOrg from "../assets/components/Organism/PdfOrganism/PdfOrg";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Pdf(){
    return(
        <>
           <HelmetProvider>
      <Helmet>
        <title>Generar reporte de ventas</title>
    </Helmet>
    </HelmetProvider>
        <div className="bg-[#C29292] font-Raleway min-h-screen">
        <PdfOrg></PdfOrg>
        </div>
        </>

    );
}
export default Pdf;