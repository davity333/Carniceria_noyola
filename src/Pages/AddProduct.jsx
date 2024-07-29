import AddProductForm from "../assets/components/Organism/addProduct/AddProductForm";
import Header from "../assets/components/Organism/addProduct/HeaderAddProduct";
import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const AddProduct =() => {
    return ( <>
        <HelmetProvider>
      <Helmet>
        <title>Agregar de productos</title>
    </Helmet>
    </HelmetProvider>
    <div className="h-screen w-full">
    
    <section className="bg-[#a84e4e] h-auto w-full">
    <HeaderAdmin titule="Agregar producto"></HeaderAdmin>   
    <AddProductForm></AddProductForm>
    </section>
    </div>
    </> );
}

export default AddProduct;