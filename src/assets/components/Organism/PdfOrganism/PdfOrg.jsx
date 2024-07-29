import GeneratorPdf from "../../Molecules/MoleculesPdf/GeneratorPdf";
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
function PdfOrg() {
    return (  
        <>
        <HeaderAdmin titule="Reporte de ventas"></HeaderAdmin>
        <GeneratorPdf>
        </GeneratorPdf>
        
        </>
    );
}

export default PdfOrg;