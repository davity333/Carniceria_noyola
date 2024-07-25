import CarneIntroduccion from "../../Molecules/MoleculesInicio/CarneIntroduccion";
import Text from "../../Atoms/AtomsPaginaPrincipal/Text";
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import carne from '/carneCerdo.png'
import style from './../fonts.module.css'

function CarneIntroductionOrg(){
    return(
        <>
        <CarneIntroduccion encabezadoHome={carne}>

        <div id={style.font}>
        <Text text="CALIDAD PRIME" />
        </div>

        </CarneIntroduccion>
        <div className="bg-zinc-500	 h-2  px-1"></div>
        
        <div className="text-white m-5  sm:m-20">
        <TextContent Content="En la carniceria “Carnitas noyola”  encontras diferentes tipos de carne de cerdo de perfecta calidad "/>
        </div>

        

        </>
    );
}
export default CarneIntroductionOrg;

