import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import { useEffect } from "react";
import { useState } from "react";
import noExistente from '/noExiste.png'
import CardsAllMeatsOrg from "../assets/components/Organism/OrganismAllMeats/CardsAllMeatsOrg";
import CardsMeats from "../assets/components/Molecules/MoleculesAllMeats/CardsMeats";
import { useNavigate } from "react-router-dom";
import Input from "../assets/components/Atoms/AtomsPaginaPrincipal/Input";
import ProductModal from "../assets/components/Organism/OrganismAllMeats/ProductModal";
import { getSelectedProducts,addProduct,updateProductQuantity,getProductsToPost } from "../../selectedProducts";
function ProductFound() {
    const [products, setProducts] = useState([]);
    const [singularText, setSingularText] = useState(false);
    const [pluralText, setPluralText] = useState(true);
    const [names, setNames] = useState(true);
    const [productNoFound, setProductNoFound] = useState (false);
    const nameProduct = localStorage.getItem('nameProduct');
    const  [selectedProducts,setSelectedProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [img, setImg] = useState(false)
    const navegar = useNavigate();

    const [buscador, setBuscador] = useState(false); 
    const buscadorResponsivo = () =>{
        setBuscador(prevBuscador => !prevBuscador);
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log("PRODUCTOS");
        console.log(nameProduct);

        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/products/productDescription/${nameProduct}`);
            if (response.ok) {
                const data = await response.json();
                const length = data.length;
                console.log(data);
                setProducts(data);
                console.log("TAMAÑO DEL ARREGLO")
                console.log(length); 

                    if(length === 0){           //CUANDO NO EXISTE EL PRODUCTO
                        setPluralText(false)
                        setSingularText(false)
                        setProductNoFound(true)
                        setNames(false)
                    }

                    if(length >= 1){           //CUANDO SI ESXITE EL PRODUCTO
                        setProductNoFound(false);
                        setPluralText(false);
                        setSingularText(true)
                        setNames(true);
                    }

            } else {
                alert("API no está disponible");
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };
    fetchData();
    }, [nameProduct]);
    useEffect(() => {
        setSelectedProducts(getSelectedProducts());
    },[])
    const handleCardClick = (product) => {
        addProduct(product);
        setSelectedProducts([...getSelectedProducts()])
        setIsModalOpen(true);
        setImg(true);
    };
    
    const updateQuantity = (product, quantity) =>{ 
        updateProductQuantity(product,quantity);
        setSelectedProducts([...getSelectedProducts()])
        if (quantity <= 0) return;
        if (quantity > product.available) return; 
    }
    const meats = () =>{
        navegar("/allMeats")
    }
    return (  
        <>
        <div className="bg-[#C29292] min-h-screen w-full sm:w-full">
        <HeaderOrganism onClickLupa={buscadorResponsivo}></HeaderOrganism>

        <div className=" block sm:hidden">
        {buscador && (<Input ></Input>)}
        </div>

        <div className="flex justify-center p-5 text-3xl text-[#992f2f]">

            <div className="p-9">
                {pluralText && (<p className="text-5xl">Productos similares a</p>)}
                {singularText && (<p className="text-5xl">Producto similiar a</p>)}
                {names && (<p className="flex justify-center text-[#937122] text-4xl">{nameProduct}</p>)}

                    {productNoFound &&(<div>
                    <p className="text-5xl m-10 text-[#702929]">Producto no encontrado</p>
                    <div className="flex justify-center">
                    <img src={noExistente} alt="logo" className="h-32"/>
                    </div>
                    <p className="text-black flex justify-center m-6 text-[#322f2f]">Este producto no existe</p>
                    <p className="flex justify-center text-[#9f3232] text-4xl">{nameProduct}</p>
                    <p className="flex justify-center text-2xl text-[#322f2f]
                    font-light">Lo sentimos, pero no tenemos disponible este tipo</p>
                    <p className="text-center text-2xl text-[#322f2f] font-extralight
                    ">de carne en este momento</p>
                    </div>)}


            </div>

        </div>

        <div className="flex justify-center">
        <div className="grid grid-cols-2  justify-center ">
            {products.map((product, index) => (
                <CardsMeats
                    key={index}
                    src={product.image} 
                    productName={product.description}
                    price={product.price}
                    amount={product.amount}
                    onClick={() => handleCardClick(product)}
                />       
            ))}
        </div>
    </div>
        <p onClick={meats}>todas carnes</p>

        </div>

        <div className="bg-[#C29292] h-[full] w-full">
        </div>
        {
            isModalOpen && (
                <ProductModal
                selectedProducts={selectedProducts}
                onClose={() => {setIsModalOpen(false); setImg(true)}}
                updateQuantity={updateQuantity}
                />
            )
        }
        </>

        
    );
}

export default ProductFound;
