import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input(){
    const navegar = useNavigate();
    const clickEnter = (e)=>{
        console.log(e.key);
        if(nameProduct == ''){
            return;
        }
        
        if(e.key === 'Enter'){
            console.log("presionastes enter")
            ProductList();
        }
    }
    ///////////////////////////////////////////////////////////////
    const [product, setProducts] = useState([]);
    const [data, setData] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    const ProductList = async () => {
        console.log("PRODUCTOS");
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/products/productDescription/${nameProduct}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setProducts(data);
                localStorage.setItem('nameProduct', nameProduct);
                navegar("/ProductFound");
            } else {
                alert("Este producto no existe");
            }
        } catch (error) {
            alert("Error al obtener los productos");
            console.error('Error al obtener los productos:', error);
        }
    };
    ///////////////////////////////////////////////////////////////
return(
    
    <>
    
    <input type="text" 
               className="w-full px-4  h-12 focus:outline-none text-lg 
               md:text-3xl font-thin rounded-full hover:shadow-[0px 7px 5px 2px #0000004f]
               border-4 border-[#581a1ab5] focus:border-[#711818]
               " placeholder="Buscar 🔍" value={nameProduct.split()} onChange={(e) => setNameProduct(e.target.value)} onKeyUp={clickEnter} title="Buscar"/>
    </>
);
}
export default Input;

