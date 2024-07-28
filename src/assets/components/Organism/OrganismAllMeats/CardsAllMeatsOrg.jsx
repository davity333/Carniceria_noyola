import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";
import ProductModal from './ProductModal';
import { getSelectedProducts, addProduct, updateProductQuantity, getProductsToPost,setSelectedProductss } from '../../../../../selectedProducts';
import Loading from '../../Molecules/Loading';
import toast, { Toaster } from 'react-hot-toast';
import BotonFixed from '../../Molecules/MoleculesAllMeats/BotonFixed';
import carritoLogo from '/CarritoLogo.png'
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
          console.error('Fallo al obtener los productos:', response.statusText, errorData);
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
       //AQUI SE AGREGAN LOS PRODUCTOS AL CARRITO
       if(!localStorage.getItem('token')){
        navigate("/login")
       }
       else {

      
    addProduct(product);
    setSelectedProducts([...getSelectedProducts()]); 
    setIsModalOpen(true);
    setImg(false);
    console.log(getProductsToPost());
    console.log("se agrego productos al carrito")
  }
  }
 
  const handleUpdateQuantity = (product, quantity) => {
    updateProductQuantity(product, quantity);
    setSelectedProducts([...getSelectedProducts()]);  // CAMBIA LA CANTIDAD DE PRODUCTOS QUE VA AGREGANDO
  };

  const handlePay = () => {
    const productsToPost = getProductsToPost();
    navigate('/confirmationPay', { state: { selectedProducts, productsToPost } });
  };

  const logoCarrito = () => {
    if (selectedProducts.length === 0) {
      toast.error('Carrito vacio, agrega productos al carrito');
      
    } else {
      setIsModalOpen(true);
      setImg(false);
    }
  };


  return (
    <>  
        {img &&(<BotonFixed
        src={carritoLogo}
        onClick={logoCarrito}
        title={"Productos agregados"}
        number={getProductsToPost().length}></BotonFixed>)}

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

<Toaster />
   
    </>
  );
}

export default CardsAllMeatsOrg;
