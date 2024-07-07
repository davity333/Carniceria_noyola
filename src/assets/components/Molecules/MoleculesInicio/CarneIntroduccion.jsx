import PrimerFotoCarne from "../../Atoms/AtomsPaginaPrincipal/PrimerFotoCarne";
import EncabezadoFoto from '/carneCerdo.png';

function CarneIntroduccion({children}){
    return(
        <>

         <div className="relative w-full h-auto min-h-screen">
            <PrimerFotoCarne encabezado={EncabezadoFoto}>
            {children}
            </PrimerFotoCarne>      
        </div>
        </>
    );

}

export default CarneIntroduccion;

