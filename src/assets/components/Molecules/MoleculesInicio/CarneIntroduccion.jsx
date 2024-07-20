import PrimerFotoCarne from "../../Atoms/AtomsPaginaPrincipal/PrimerFotoCarne";

function CarneIntroduccion({children, encabezadoHome }){
    return(
        <>

         <div className="relative w-full h-auto sm:w-full">
            <PrimerFotoCarne encabezadoHome={encabezadoHome}>
            {children}
            </PrimerFotoCarne>      
        </div>
        </>
    );

}

export default CarneIntroduccion;

