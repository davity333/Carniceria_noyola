import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";
import { TodasCarnes } from "../../../../data/CardsCarnes";
import ProductModal from './ProductModal';

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function CardsAllMeatsOrg() {
        const CarnesFilas = chunkArray(TodasCarnes.AllMeats, 3); {/*DECLARO UNA CONSTANTE PARA PODER DIVIDIR
    TODAS LAS CARDS EN 3 ELEMENTOS DE CADA FILA*/}
  
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openShoppingCart = () =>{
    isModalOpen
  }
  const handleCardClick = (product) => {
    const existingProduct = selectedProducts.find(p => p.producto === product.producto);
    if (existingProduct) {
      setSelectedProducts(selectedProducts.map(p => 
        p.producto === product.producto ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
    setIsModalOpen(true);
  };

  const updateQuantity = (product, quantity) => {
    if (quantity === 0) {
      setSelectedProducts(selectedProducts.filter(p => p.producto !== product.producto));
    } else {
      setSelectedProducts(selectedProducts.map(p => 
        p.producto === product.producto ? { ...p, quantity } : p
      ));
    }
  };

  const handlePay = () => {
    navigate('/confirmationPay', { state: { selectedProducts } });
  };

  return (
    <>
      <div className="font-light m-auto grid grid-cols-1 w-[100%] 
       sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-inter">
        {
          TodasCarnes.AllMeats.map((item, index) => (
            <CardsMeats 
              key={index}
              price={item.precio}
              productName={item.producto}
              src={item.image}
              onClick={() => handleCardClick(item)}
            />
          ))
        }
      </div>
      {isModalOpen && (
        <ProductModal 
          selectedProducts={selectedProducts} 
          onClose={() => setIsModalOpen(false)} 
          updateQuantity={updateQuantity} 
          handlePay={handlePay}
        />
      )}
      <button onClick={openShoppingCart}>Carrito</button>
    </>
  );
}

export default CardsAllMeatsOrg;
