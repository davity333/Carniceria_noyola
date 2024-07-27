import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";
import ProductModal from './ProductModal';
import { getSelectedProducts, addProduct, updateProductQuantity, getProductsToPost } from '../../../../../selectedProducts';
import Loading from '../../Molecules/Loading';
import toast, { Toaster } from 'react-hot-toast';
function CardsAllMeatsOrg() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState(true);
  const navigate = useNavigate();

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
          console.error('Failed to fetch products:', response.statusText, errorData);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setSelectedProducts(getSelectedProducts());
  }, []);

  const handleCardClick = (product) => {
    addProduct(product);
    setSelectedProducts([...getSelectedProducts()]); 
    setIsModalOpen(true);
    setImg(false);
    console.log(getProductsToPost());
  };

  const handleUpdateQuantity = (product, quantity) => {
    updateProductQuantity(product, quantity);
    setSelectedProducts([...getSelectedProducts()]);  // actualizando el estado
  };

  const handlePay = () => {
    const productsToPost = getProductsToPost();
    navigate('/confirmationPay', { state: { selectedProducts, productsToPost } });
  };

  const handleCartClick = () => {
    if (selectedProducts.length === 0) {
      alert('Carrito vacio, agrega productos al carrito');
      
    } else {
      setIsModalOpen(true);
      setImg(false);
    }
  };

  return (
    <>
    
    
    {img && (<div className='fixed top-[75%]  z-50 w-full p-4 ml-[86.9%]'>
  <img src="CarritoLogo.png" className='w-32 m-4 hover:drop-shadow-custom-white cursor-pointer absolute' 
  alt="Carrito Logo" onClick={handleCartClick} title='Productos agregados'/>
  <div className='text-[#399128] text-3xl ml-[4.4%] mt-5 relative
  [text-shadow:_1px_0px_3px_rgba(0,0,0,0.61)]'>
  {getProductsToPost().length}
  </div>
</div>)}      


  

<div className='flex justify-center mt-20'> 

  <div className="font-light m-auto grid grid-cols-3 gap-9">
    {products.map((item, index) => (
      <CardsMeats 
        key={index}
        price={item.price}
        productName={item.description}
        amount={item.amount}
        src={item.image}
        onClick={() => handleCardClick(item)}
      />
    ))}
  </div>
  
</div>

      {isModalOpen && (
        <ProductModal 
          selectedProducts={selectedProducts} 
          onClose={() => {setIsModalOpen(false); setImg(true)}} 
          updateQuantity={handleUpdateQuantity} 
          handlePay={handlePay}
        />
      )}


   
    </>
  );
}

export default CardsAllMeatsOrg;
