
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import cerdo from '/SiluetaCerdo.png'
import carne from '/SiluetaCarne.png'
function CarnesCerdoText(){
    return(
        <>
         <div className="relative w-full h-14 flex items-center justify-center md:flex md:items-center md:justify-evenly">
            
            <img src={carne} className="h-10 w-3 m-10 ml-1 sm:h-36 sm:w-auto hidden sm:h-40 sm:block md:h-24"/>
            
            
            <div className="text-white font-extralight flex justify-center">
                <TextContent Content="CARNES DE CERDO"/>
            </div>

            <div className="right-0 h-40 flex items-center">
            <img src={cerdo} className='m-10 hidden sm:block md:h-24 md:mr-6'/>
            </div>
        </div>
        </>
    );
}
export default CarnesCerdoText;