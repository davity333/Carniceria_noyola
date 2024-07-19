import CardCarnesMasVendidad from "../../Molecules/MoleculesInicio/CardCarnesMasVendidas";
import CardCarnesPublicadas from "../../Molecules/MoleculesInicio/CardCarnesPublicadas";
import { CardsCarnes } from "../../../../data/CardsCarnes";

import LineaSeparador from "../../Atoms/AtomsPaginaPrincipal/LineaSeparador";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function CardCarnesPublicadasOrg(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/allMeats');
    };


    return(
        <>

<div className="flex items-center justify-around flex-wrap">
    {CardsCarnes.Meat.map((product, index) => (

        <div key={index} className="flex flex-col items-center ">
            <CardCarnesPublicadas src={product.image} productName={product.producto} price={product.precio} amount={product.cantidad}/>
        </div>
    ))}
</div>

    <button className="flex bg-red-200 m-5 px-6 py-2 rounded-[3rem] mx-auto text-2xl text-red-900
     hover:bg-[#dea1a1] sm:px-32 sm:py-5 sm:m-10 sm:text-4xl sm:hover:bg-[#dea1a1] sm:mx-auto">VER TODO</button>

  

        </>
    );
}
export default CardCarnesPublicadasOrg;