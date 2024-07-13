import CardCarnesMasVendidad from "../../Molecules/MoleculesInicio/CardCarnesMasVendidas";
import CardCarnesPublicadas from "../../Molecules/MoleculesInicio/CardCarnesPublicadas";
import { CardsCarnes } from "../../../../data/CardsCarnes";
import Button from "../../Atoms/AtomsPaginaPrincipal/Button";
import LineaSeparador from "../../Atoms/AtomsPaginaPrincipal/LineaSeparador";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function CardCarnesPublicadasOrg(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/allMeats');
    };


    return(
        <>

<div className="flex items-center justify-around">
    {CardsCarnes.Meat.map((product, index) => (

        <div key={index} className="flex flex-col items-center">
            <CardCarnesPublicadas src={product.image} productName={product.producto} price={product.precio} amount={product.cantidad}/>
        </div>
    ))}
</div>

                    <div onClick={handleClick} className=" p-12 text-5xl flex justify-center drop-shadow-xl ">
                        <Button Button="VER TODO"></Button>
                    </div>

            <div className="flex items-center justify-center -mt-3">
            <LineaSeparador/>
            </div>

        </>
    );
}
export default CardCarnesPublicadasOrg;