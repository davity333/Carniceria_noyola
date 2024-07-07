import CardBlanca from "../../Atoms/AtomsPagar/CardBlanca";
import TextContent from "../../Atoms/AtomsPagar/TextContent";
import Input from "../../Atoms/AtomsPagar/Input";
import ButtonCard from "../../Atoms/AtomsPagar/ButtonCard";

function CardsProductos({img, product, precio, quantity, agregar, eliminar}){
    return(
        
        <CardBlanca>
        <div className="flex h-full">

            <div className="flex flex-1 items-start">
                <img src={img} alt="imagen" className="h-full object-cover p-2" />
                
                <div className="p-4 flex flex-col justify-between h-full font-thin text-2xl">
                    <TextContent>{product}</TextContent>

                    <div className="flex mt-1 h-full text-green-600 font-black">
                    <TextContent>{quantity}</TextContent>
                    </div>  

                  <div className="flex gap-5">
                    <div >
                        <ButtonCard>{agregar}</ButtonCard>  {/* BOTON GRIS DE  + */}
                    </div>

                    <div >
                        <ButtonCard>{eliminar}</ButtonCard> {/* BOTON GRIS DE  - */}
                    </div>
                  </div>  

                </div>    

            </div>
                    <div className="p-5 text-3xl text-gray-600 text-yellow-600">
                    <TextContent>{precio}</TextContent>
                    </div>
        </div>
    </CardBlanca>

    );
}

export default CardsProductos;