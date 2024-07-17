import CardBlanca from "../../Atoms/AtomsPagar/CardBlanca";
import ButtonCard from "../../Atoms/AtomsPagar/ButtonCard";
import Img from "../../Atoms/AtomsPaginaPrincipal/Img";
import basura from "/basura.png";

function CardsTables({img, solicitante, numeroPersonas, fechas, cantidadMesas, eliminar, children}){
    return(
        <>
        
        <CardBlanca>
            
        <div className="flex h-full">
            <div className="flex flex-1 items-start justify-start">
                <img src={img} alt="imagen" className="h-full object-cover p-3" />

                <div className="flex flex-col text-2xl p-5 font-thin">
                    <p>Nombre del solicitante:</p>

                    <p>Numero de personas:</p>    

                    <p>Hora y fecha:</p>

                    <p>Cantidad de mesas:</p>

                    
                </div>

                <div className="flex flex-col text-2xl p-5">
                    <p>{solicitante}</p>

                    <p>{numeroPersonas}</p>    

                    <p>{fechas}</p>

                    <p>{cantidadMesas}</p>
                </div>

            </div>  

            

               
                    <div className="flex justify-end items-end p-2 mb-auto">
                    <div className="flex justify-end items-end p-2 mb-auto">
                    <select name="select" className="h-5">
            <option value="value1">Confirmada</option>
            <option value="value2" selected>Pendientes</option>
            <option value="value3">Eliminadas</option>
        </select> 
        </div>
                    </div>

        </div>  
    </CardBlanca>
   
    </>
    );
}

export default CardsTables;
