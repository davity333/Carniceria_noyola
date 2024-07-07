import CarritoLogo from "../../Atoms/AtomsPagar/CarritoLogo";
import Text from "../../Atoms/AtomsPagar/Text";


function TextCarrito(){
    return(
        <>
        
        <div className="flex flex-row w-full h-auto">

            <div className="flex items-start justify-start h-1/2 w-1/2">
        <Text text="CARRITO" className="text-red-500 opacity-70"></Text>
            </div>

         <div className='h-1/2 w-1/2 flex justify-end items-end'>
        <CarritoLogo ></CarritoLogo>
             </div>

        </div>

        </>
    );
}
export default TextCarrito;