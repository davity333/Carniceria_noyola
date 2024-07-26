
import CarneIntroductionOrg from "../assets/components/Organism/OrganismInicio/CarneIntroductionOrg";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import CarnesVentasTextOrg from "../assets/components/Organism/OrganismInicio/CarnesVentasTextOrg";
import CardCarnesPublicadasOrg from "../assets/components/Organism/OrganismInicio/CardCarnesPublicadasOrg";
import PiePaginaOrg from "../assets/components/Organism/OrganismInicio/PiePaginaOrg";
import { useState } from "react";
import DropDownOptionsOrg from "../assets/components/Organism/OrganismInicio/DropDownOptionsOrg";
import DropDownUserOrg from "../assets/components/Organism/OrganismInicio/DropDownUserOrg";
import LupaSilueta from '/lupa.png'
function Home(){

    const [dropDownMenu, setDropDown] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);
    const [buscador, setBuscador] = useState(false);

    const clickDown = () =>{            //DropDown Menu
        if(dropDownMenu){
            setDropDown(false);
        }else{
            setDropDownUser(false);
            setDropDown(!false);
        }

    }


    const clickDownUser = () =>{        //DropDown Usuario
        if(dropDownUser){
            setDropDownUser(false);
        }else{
            setDropDown(false)
            setDropDownUser(!false);
        }

    }

    

    const clickBuscador = () => {
        if(buscador){
            setBuscador(false);
        }else{
            setBuscador(!false)
        }
    }

    ///////////////////////////////////////////////////////////////
    const [products, setProducts] = useState([]);
    const [data, setData] = useState('');
    const [nameProduct, setNameProduct] = useState('');

        const ProductList = async () => {
            console.log("PRODUCTOS")
            try {
                const response = await fetch(`${import.meta.env.VITE_URL}/products/product`);
                const data = await response.json();
                console.log(data);
                setProducts(data); // Actualiza el estado de 'products' con los datos obtenidos
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
            
            
        };
    
    ///////////////////////////////////////////////////////////////
    
    return(
        <>
        <HeaderOrganism onClick={clickDown} onClickLogin={clickDownUser} onClickLupa={clickBuscador}></HeaderOrganism>
        
        {buscador && (<input 
        type="text" 
        className="w-full h-10 block hover:border hover: border-black sm:hidden" 
        placeholder="Buscar" 
        value={nameProduct}
        onChange={(e) => setNameProduct(e.target.value)}
        />)}

        {buscador && (<img src={LupaSilueta} onClick={ProductList} alt="Logo" className="absolute -mt-9 ml-[86%] cursor-pointer w-8 block
        filter brightness-75 grayscale-0 sm:hidden"/>)}

        <div>
        {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}
        </div>

        {dropDownUser && (<DropDownUserOrg></DropDownUserOrg>)}

        <CarneIntroductionOrg></CarneIntroductionOrg>

        <CarnesVentasTextOrg></CarnesVentasTextOrg>
        <CardCarnesPublicadasOrg></CardCarnesPublicadasOrg>

        <PiePaginaOrg></PiePaginaOrg>
        </>
    );
}
export default Home;