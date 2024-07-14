import PrimerFotoCarne from "../../Atoms/AtomsPaginaPrincipal/PrimerFotoCarne";
import EncabezadoFoto from '/carneCerdo.png';

function CarneIntroduccion({children}){
    return(
        <>

         <div className="relative w-full h-auto min-h-screen md:min-h-4 md:h-4 lg:min-h-64 lg:h-64">
            <PrimerFotoCarne encabezado={EncabezadoFoto}>
            {children}
            </PrimerFotoCarne>      
        </div>
        </>
    );

}

export default CarneIntroduccion;

