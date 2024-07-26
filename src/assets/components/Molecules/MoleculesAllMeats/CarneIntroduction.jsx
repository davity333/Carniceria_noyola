import CarneIntroduccion from "../../Molecules/MoleculesInicio/CarneIntroduccion";
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import encabezadoFoto from '/AllMeats.png';
function CarneIntroduction({children, encabezado}){
    return(
        <>
        <div className="bg-zinc-500	 h-2  px-1"></div>
        <CarneIntroduccion encabezadoHome={encabezadoFoto}></CarneIntroduccion>
        <div className="bg-zinc-500	 h-2  px-1"></div>

        <div className="text-white m-5  sm:m-20 [text-shadow:_0px_2px_2px_rgba(0,0,0,0.68)]">
        <TextContent Content="Explora una amplia gama de cortes de cerdo frescos y deliciosos, perfectos 
        para cualquier ocasión y preparados para satisfacer todos tus gustos culinarios."/>
        </div>
        </>

    );
}

export default CarneIntroduction;