import SiluetaCarneCerdo from "../../Atoms/AtomsPaginaPrincipal/SiluetaCarneCerdo";
import SiluetaCerdo from "../../Atoms/AtomsPaginaPrincipal/SiluetaCerdo";
import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";

function CarnesCerdoText(){
    return(
        <>
         <div className="relative w-full h-40 flex items-center justify-center">
            <div className="absolute left-0 h-40 flex items-center">
                <SiluetaCarneCerdo />
            </div>
            
            <div className="text-5xl text-white z-10 mb-16">
                <TextContent Content="CARNES DE CERDO"/>
            </div>

            <div className="absolute right-0 h-40 flex items-center">
                <SiluetaCerdo />
            </div>
        </div>
        </>
    );
}
export default CarnesCerdoText;