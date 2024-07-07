import CardResumen from "../../Atoms/AtomsPagar/CardResumenPrecios";
import TextPrecios from "../../Atoms/AtomsPagar/TextPrecioTotal";
import TextContent from "../../Atoms/AtomsPagar/TextContent";
function ResumenPedido(){
    return(
        
        <>
        <div>
         <CardResumen>

            <div className="flex justify-start p-10 text-3xl">
            <TextPrecios precios="RESUMEN"></TextPrecios>
            </div>

            <TextContent></TextContent>
            <TextContent></TextContent>

            <div className="flex justify-center flex-grow ">
            <button className="mt-48 bg-[#568a49] w-72 h-12 rounded-lg text-2xl
            hover:bg-[#527848]">PAGAR</button>
            </div>

         </CardResumen>
         
         </div>
        </>
            
       
    );
}

export default ResumenPedido;