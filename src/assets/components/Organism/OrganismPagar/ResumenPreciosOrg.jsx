import ResumenPedido from "../../Molecules/MoleculesPagar/ResumenProductosPagar";
import { CardAddCarrito } from "../../../../data/CardAddCarrito";
function ResumenPreciosOrg(){
    return(
        <>
        <div className="flex justify-end mr-16">

      
        <ResumenPedido ></ResumenPedido>
        </div>
        </>
    );
}
export default ResumenPreciosOrg;

/*
function ResumenPedido({producto, precio}){
    return(
        
        <>
        <div>
         <CardResumen>

            <div className="flex justify-start p-10 text-3xl">
            <TextPrecios precios="RESUMEN"></TextPrecios>
            </div>

            <TextContent>{producto}</TextContent>
            <TextContent>{precio}</TextContent>

         </CardResumen>
         
         </div>
        </>
            
       
    );
}

*/