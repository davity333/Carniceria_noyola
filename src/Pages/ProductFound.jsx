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
import ButtonCarne from "/carnesBoton.png";
import BotonFixed from "../assets/components/Molecules/MoleculesAllMeats/BotonFixed";
import ProductFoundOrg from "../assets/components/Organism/OrganismAllMeats/ProductFoundOrg";

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
    }
    const meats = () =>{
        navegar("/allMeats")
    }
    return (  
        <>
        <div className="bg-[#C29292] min-h-screen w-full sm:w-full sm:min-h-screen">
        <HeaderOrganism onClickLupa={buscadorResponsivo}></HeaderOrganism>

        <div className="block sm:hidden">
        {buscador && (<Input ></Input>)}
        </div>

        <div className="flex justify-center p-5 text-3xl text-[#992f2f]">
            <ProductFoundOrg
            nameFound={nameProduct}
            src={noExistente}
            nameFoundApi={nameProduct}
            array={nameProduct}
            onCardClick={handleCardClick}
            ></ProductFoundOrg>
        </div>

        <div className="">
        <BotonFixed
        src={ButtonCarne}
        title={"Sección de carnes"}
        onClick={meats}>
        </BotonFixed> 
        </div>

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
