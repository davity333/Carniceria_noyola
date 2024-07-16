import PrimerFotoCarne from "../../Atoms/AtomsPaginaPrincipal/PrimerFotoCarne";
import EncabezadoFoto from '/carneCerdo.png';

function CarneIntroduccion({children}){
    return(
        <>

         <div className="relative w-full h-auto sm:w-full">
            <PrimerFotoCarne encabezado={EncabezadoFoto}>
            {children}
            </PrimerFotoCarne>      
        </div>
        </>
    );

}

export default CarneIntroduccion;

