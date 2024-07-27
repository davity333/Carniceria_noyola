import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import { useEffect } from "react";
import { useState } from "react";
import noExistente from '/noExiste.png'
import CardsAllMeatsOrg from "../assets/components/Organism/OrganismAllMeats/CardsAllMeatsOrg";
import CardsMeats from "../assets/components/Molecules/MoleculesAllMeats/CardsMeats";
function ProductFound() {
    const [products, setProducts] = useState([]);
    const [singularText, setSingularText] = useState(false);
    const [pluralText, setPluralText] = useState(true);
    const [names, setNames] = useState(true);
    const [productNoFound, setProductNoFound] = useState (false);
    
    const nameProduct = localStorage.getItem('nameProduct');

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

                    if(length === 0){
                        setPluralText(false)
                        setProductNoFound(true)
                        setNames(false)
                    }

                    if(length === 1){
                        setPluralText(false);
                        setSingularText(true)
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

    const handleCardClick = (product) => {
        CardsAllMeatsOrg.handleCardClick(product);
    };
    
    return (  
        <>
        <div className="bg-[#C29292] min-h-screen w-full sm:w-full">
        <HeaderOrganism></HeaderOrganism>

        <div className="flex justify-center p-5 text-3xl text-[#992f2f]">

            <div className="p-9">
                {pluralText && (<p className="text-5xl">Productos encontrados</p>)}
                {singularText && (<p className="text-5xl">Producto encontrado</p>)}
                {names && (<p className="flex justify-center text-[#937122] text-4xl">{nameProduct}</p>)}

                    {productNoFound &&(<div>
                    <p className="text-5xl m-10 text-[#702929]">Producto no encontrado</p>
                    <div className="flex justify-center">
                    <img src={noExistente} alt="logo" className="h-32"/>
                    </div>
                    <p className="text-black flex justify-center m-6 text-[#322f2f]">No existe esta carne</p>
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

        </div>

        <div className="bg-[#C29292] h-[full] w-full">
        </div>
        </>
    );
}

export default ProductFound;
