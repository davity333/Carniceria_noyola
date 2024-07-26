import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";
import ProductModal from './ProductModal';
import { getSelectedProducts, addProduct, updateProductQuantity, getProductsToPost } from '../../../../../selectedProducts';

function CardsAllMeatsOrg() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
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
          console.error('Failed to fetch products:', response.statusText, errorData);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setSelectedProducts(getSelectedProducts());
  }, []);

  const handleCardClick = (product) => {
    addProduct(product);
    setSelectedProducts([...getSelectedProducts()]);  // Actualiza el estado
    setIsModalOpen(true);
    console.log(getProductsToPost());
  };

  const handleUpdateQuantity = (product, quantity) => {
    updateProductQuantity(product, quantity);
    setSelectedProducts([...getSelectedProducts()]);  // Actualiza el estado
  };

  const handlePay = () => {
    const productsToPost = getProductsToPost();
    navigate('/confirmationPay', { state: { selectedProducts, productsToPost } });
  };

  return (
    <>
    <div className='flex justify-center'>
    <img src="/CarritoLogo.png" className='w-[10%] drop-shadow-custom-white ml-[87%] -mt-[50%] fixed ' alt="logo" />
      <div className="font-light m-auto grid grid-cols-3 flex items-center
       ">
        {
          products.map((item, index) => (
            <CardsMeats 
              key={index}
              price={item.price}
              productName={item.description}
              amount={item.amount}
              src={item.image}
              onClick={() => handleCardClick(item)}
            />
          ))
        }
      </div>
      </div>
      {isModalOpen && (
        <ProductModal 
          selectedProducts={selectedProducts} 
          onClose={() => setIsModalOpen(false)} 
          updateQuantity={handleUpdateQuantity} 
          handlePay={handlePay}
        />
      )}
 
    </>
  );
}

export default CardsAllMeatsOrg;
