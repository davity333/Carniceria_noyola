import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";

function CardCarnesPublicadasOrg() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/allMeats');
  };

  const numCards = window.innerWidth < 600 ? 4 : 3; //ESTE ES PA DECIR SI LA PANTALLA ES DE TELEFONO
  //CAMBIE LA VARIABLE A 4 uwu

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_URL}/products/product`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          const errorData = await response.json();
          console.error('Fallo al obtener los productos:', response.statusText, errorData);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
    <div className="flex items-center justify-around flex-wrap grid-cols-1">
      <div className="font-light m-auto grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:m-8">
    {products.slice(0, numCards).map((item, index) => (
        <CardsMeats 
            key={index}
            price={item.price}
            productName={item.description}
            amount={item.amount}
            src={item.image}
            onClick={false}
        />
      ))}
</div>
</div>

      <button onClick={handleClick} className="flex bg-red-200 m-5 px-6 py-2 rounded-[3rem] mx-auto text-2xl text-red-900
        hover:bg-[#dea1a1] sm:px-32 sm:py-5 sm:m-10 sm:text-4xl sm:hover:bg-[#dea1a1] sm:mx-auto">
        VER TODO
      </button>
    </>
  );
}

export default CardCarnesPublicadasOrg;
