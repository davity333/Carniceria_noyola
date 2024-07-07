import { CardAddCarrito } from "../../../../data/CardAddCarrito";
import CardsProductos from "../../Molecules/MoleculesPagar/CardsProductos";
function CardsOrg(){

    return(
        <>
        <div>
        {CardAddCarrito.Meat.map((product, index)=>(
            <CardsProductos 
            key={index} 
            img={product.image} 
            product={product.producto}
            precio={product.precio} 
            quantity={product.cantidad} 
            agregar={product.agregar} 
            eliminar={product.eliminar}>
            </CardsProductos>
            
            
            
        ))}
        </div>
        </>
    );
}

export default CardsOrg