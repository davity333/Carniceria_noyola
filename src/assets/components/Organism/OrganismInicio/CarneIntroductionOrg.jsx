import CarneIntroduccion from "../../Molecules/MoleculesInicio/CarneIntroduccion";
import Text from "../../Atoms/AtomsPaginaPrincipal/Text";
import CuadroVerMas from "../../Molecules/MoleculesInicio/CuadroVerMas";
import Linea from "../../Atoms/AtomsPaginaPrincipal/LineaGris"
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import LineaSeparadora from "../../Molecules/MoleculesInicio/LineaSeparadora";

function CarneIntroductionOrg(){
    return(
        <>
        <CarneIntroduccion>

        <Text text="CALIDAD PRIME" />
        <CuadroVerMas></CuadroVerMas>
        <Linea></Linea>
        </CarneIntroduccion>
        
        <div className="text-white  text-4xl   mt-28">
        <TextContent Content="En la carniceria “Carnitas noyola”  encontras diferentes tipos de carne de cerdo de perfecta calidad "/>
        </div>

        <LineaSeparadora></LineaSeparadora>

        </>
    );
}
export default CarneIntroductionOrg;

