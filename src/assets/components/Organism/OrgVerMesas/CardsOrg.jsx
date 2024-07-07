import { CardsTables } from "../../../../data/CardsTables";
import Cards from "../../Molecules/MoleculesVerMesas/CardTables";

function CardsOrg(){

    return(
        <>
        <div>
        {CardsTables.Tables.map((product, index)=>(
            <Cards 
            key={index} 
            img={product.image} 
            solicitante={product.solicitante}
            numeroPersonas={product.numeroPersonas} 
            fechas={product.fechas} 
            cantidadMesas={product.cantidadMesas}
            eliminar={product.eliminar}>
            </Cards>

        ))}
        </div>
        </>
    );
}

export default CardsOrg;