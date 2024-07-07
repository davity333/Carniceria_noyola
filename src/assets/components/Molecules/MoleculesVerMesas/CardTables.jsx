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

                <div className="flex flex-col text-2xl p-5">
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
                        <ButtonCard>{eliminar}</ButtonCard>  {/* BOTON GRIS DE ELIMINAR */}
                        {children}
                    </div>

                        <div className="flex p-2  w-12 mt-auto cursor-pointer
                            filter hover:drop-shadow-custom-blue">
                            <Img imagen={basura}></Img>
                        </div>
                        

        </div>       
    </CardBlanca>
    </>
    );
}

export default CardsTables;
