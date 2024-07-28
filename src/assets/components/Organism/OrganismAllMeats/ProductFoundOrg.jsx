import { useEffect, useState } from "react";
import CardsMeats from "../../Molecules/MoleculesAllMeats/CardsMeats";
const nameProduct = localStorage.getItem('nameProduct');
function ProductFoundOrg({nameFound, src, nameFoundApi, array}) {

    const [products, setProducts] = useState([]);
    const [singularText, setSingularText] = useState(false);
    const [pluralText, setPluralText] = useState(true);
    const [names, setNames] = useState(true);
    const [productNoFound, setProductNoFound] = useState (false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/products/productDescription/${nameFoundApi}`);
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

                    if(length === 1){           //CUANDO HAY SOLO UN PRODUCTO
                        setProductNoFound(false);
                        setPluralText(false);
                        setSingularText(true)
                        setNames(true);
                    }

                    if(length > 1){           //CUANDO HAY MAS DE UN PRODUCTO
                        setProductNoFound(false);
                        setPluralText(true);
                        setSingularText(false)
                        setNames(true);
                    }

            } else {
               toast.error("Lo sentimos ocurrió un problema en el servidor ")
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };
    fetchData();
    }, [{array}]);

    return ( 
        <>
        <div className="  justify-center ">
        <div className="flex justify-center p-5 text-3xl text-[#992f2f]">

            <div className="p-9">
                {pluralText && (<p className="text-5xl [text-shadow:_0px_3px_3px_#6f6262]">Productos similares a</p>)}
                {singularText && (<p className="text-5xl [text-shadow:_0px_3px_0px_rgba(111,98,98,0.44)]">Producto similiar a</p>)}
                {names && (<p className="flex justify-center text-[#937122] text-4xl [text-shadow:_-2px_1px_0px_rgba(212,191,191,0.44)]">{nameFound}</p>)}

                    {productNoFound &&(<div>
                    <p className="text-5xl m-10 text-[#702929] [text-shadow:_0px_3px_3px_#6f6262]">Producto no encontrado</p>
                    <div className="flex justify-center">
                    <img src={src} alt="logo" className="h-32"/>
                    </div>
                    <p className="text-black flex justify-center m-6 text-[#322f2f]
                    [text-shadow:_0px_3px_3px_#6f6262]">Este producto no existe</p>
                    <p className="flex justify-center text-[#9f3232] text-4xl ">{nameFound}</p>
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
        </>
        
     );
}

export default ProductFoundOrg;