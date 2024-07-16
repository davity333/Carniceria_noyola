import CardCarnesMasVendidas from "../../Molecules/MoleculesInicio/CardCarnesMasVendidas";
import { CarnesMejores } from "../../../../data/CardsCarnes";
import Button from "../../Atoms/AtomsPaginaPrincipal/Button";
import LineaSeparador from "../../Atoms/AtomsPaginaPrincipal/LineaSeparador";
function CardCarnesMasVendidasOrg(){
    return(
        <>
        <div className="flex items-center justify-around">
    {CarnesMejores.MeatSold.map((product, index) => (

        <div key={index} className="flex flex-col items-center">
            <CardCarnesMasVendidas src={product.image} productName={product.producto} price={product.precio} amount={product.cantidad}/>
        </div>
    ))}
</div>

                    <div className=" p-12 text-5xl flex justify-center drop-shadow-xl ">
                        <Button Button="VER TODO"></Button>
                    </div>

            <div className="flex items-center justify-center -mt-3">
            <LineaSeparador/>
            </div>

        </>
    );
}
export default CardCarnesMasVendidasOrg;