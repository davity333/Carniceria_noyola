import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";
import { TodasCarnes } from "../../../../data/CardsCarnes";

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}


function CardsAllMeatsOrg(){ {/* MAPEO DE LAS CARTAS DONDE APARECERAN TODAS LAS CARNES EN VENTAS*/}

const CarnesFilas = chunkArray(TodasCarnes.AllMeats, 3); {/*DECLARO UNA CONSTANTE PARA PODER DIVIDIR
    TODAS LAS CARDS EN 3 ELEMENTOS DE CADA FILA*/}

    return(
        <>
            {CarnesFilas.map((chunk, rowIndex) => (
                <div key={rowIndex} className="flex items-center justify-around mb-4"> {/* Añadir margen inferior entre filas */}
                    {chunk.map((product, index) => (
                        <div key={index} className="flex flex-col items-center ">
                            <CardsMeats src={product.image} productName={product.producto} price={product.precio} amount={product.cantidad}/>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default CardsAllMeatsOrg;