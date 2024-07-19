import AddProductForm from "../assets/components/Organism/addProduct/ReservarMesa";
import Header from "../assets/components/Organism/addProduct/HeaderAddProduct";
import HeaderAdmin from "../assets/components/Molecules/MoleculesInicioAdmin/HeaderAdmin";
const AddProduct =() => {
    return ( <>
    <div className="h-screen w-full">
    
    <section className="bg-[#a84e4e] h-auto w-full">
    <HeaderAdmin titule="Agregar producto"></HeaderAdmin>   
    <AddProductForm></AddProductForm>
    </section>
    </div>
    </> );
}

export default AddProduct;