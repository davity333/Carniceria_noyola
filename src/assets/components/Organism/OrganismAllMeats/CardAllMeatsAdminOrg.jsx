import CardsMeats from "../../Molecules/MoleculesInicioAdmin/CardCarnesPublicadasAdmin";
import { TodasCarnes } from "../../../../data/CardsCarnes";
import { useEffect, useState } from "react";
function chunkArray(array, chunkSize) {
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}


function CardsAllMeatsAdminOrg(){ {/* MAPEO DE LAS CARTAS DONDE APARECERAN TODAS LAS CARNES EN VENTAS ATTE DAVID*/}
{/*-----------------------------------------------------------------------*/}

const [variable, setVariable] = useState(3);
useEffect(() => {
    const checkMobileScreen = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setVariable(2); 
      } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        setVariable(2);
      }else if (window.matchMedia("(min-width: 1440px)").matches) {
        setVariable(4); 
      }else if (window.matchMedia("(min-width: 2560px)").matches){
        setVariable(5);
      }else {
        setVariable(3);
      }
    };

    checkMobileScreen();

    console.log(variable);

    window.addEventListener('resize', checkMobileScreen);

    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    };
  }, [variable]);


{/*-----------------------------------------------------------------------*/}
const CarnesFilas = chunkArray(TodasCarnes.AllMeats, variable); {/*AQUI DECLARE UNA CONSTANTE PARA PODER DIVIDIR
    TODAS LAS CARDS EN 3 ELEMENTOS DE CADA FILA*/}

    return(
        <>
        <p>la variable es :{variable}</p>
            {CarnesFilas.map((chunk, rowIndex) => (
                <div key={rowIndex} className="flex items-center justify-around mb-4"> 
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

export default CardsAllMeatsAdminOrg;