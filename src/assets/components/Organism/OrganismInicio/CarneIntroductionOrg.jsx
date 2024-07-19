import CarneIntroduccion from "../../Molecules/MoleculesInicio/CarneIntroduccion";
import Text from "../../Atoms/AtomsPaginaPrincipal/Text";

import Linea from "../../Atoms/AtomsPaginaPrincipal/LineaGris"
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import LineaSeparadora from "../../Molecules/MoleculesInicio/LineaSeparadora";

function CarneIntroductionOrg(){
    return(
        <>
        <CarneIntroduccion>

        
        <Text text="CALIDAD PRIME" />

        </CarneIntroduccion>
        
        <div className="text-white m-5  sm:m-20">
        <TextContent Content="En la carniceria “Carnitas noyola”  encontras diferentes tipos de carne de cerdo de perfecta calidad "/>
        </div>

        

        </>
    );
}
export default CarneIntroductionOrg;

