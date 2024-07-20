import CarneIntroduccion from "../../Molecules/MoleculesInicio/CarneIntroduccion";
import Text from "../../Atoms/AtomsPaginaPrincipal/Text";
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import carne from '/carneCerdo.png'

function CarneIntroductionOrg(){
    return(
        <>
        <CarneIntroduccion encabezadoHome={carne}>

        
        <Text text="CALIDAD PRIME" />

        </CarneIntroduccion>
        <div className="bg-zinc-500	 h-2  px-1"></div>
        
        <div className="text-white m-5  sm:m-20">
        <TextContent Content="En la carniceria “Carnitas noyola”  encontras diferentes tipos de carne de cerdo de perfecta calidad "/>
        </div>

        

        </>
    );
}
export default CarneIntroductionOrg;

