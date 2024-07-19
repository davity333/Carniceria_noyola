import Encabezado from "../../Atoms/AtomsPaginaPrincipal/PrimerFotoCarne"
import EncabezadoFoto from '/AllMeats.png';
import LineaGris from "../../Atoms/AtomsPaginaPrincipal/LineaGris";

function CarneIntroduction({children}){
    return(
        <>
        <div className="">
        <Encabezado encabezado={EncabezadoFoto}>
        {children}
        </Encabezado>
        </div>
        <LineaGris></LineaGris>
        </>

    );
}

export default CarneIntroduction;