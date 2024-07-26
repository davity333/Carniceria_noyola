import CarneIntroduccion from "../../Molecules/MoleculesInicio/CarneIntroduccion";
import Text from "../../Atoms/AtomsPaginaPrincipal/Text";
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import carne from '/carneCerdo.png'
import style from './../../../../../fonts.module.css'

function CarneIntroductionOrg(){
    return(
        <>
        <CarneIntroduccion encabezadoHome={carne}>

        <div id={style.font} className="text-white p-4 text-3xl top-0 left-0 mt-2 ml-2 sm:text-7xl
        [text-shadow:_0px_5px_6px_rgba(0,0,0,0.61)]
        ">
        <Text text="CALIDAD PRIME" />
        </div>

        </CarneIntroduccion>
        <div className="bg-zinc-500	 h-2  px-1"></div>
        
        <div id={style.carnesdecerdo} className="text-white m-5  sm:m-20">
        <TextContent Content="En la carniceria “Carnitas noyola”  encontras diferentes tipos de carne de cerdo de perfecta calidad "/>
        </div>

        

        </>
    );
}
export default CarneIntroductionOrg;

