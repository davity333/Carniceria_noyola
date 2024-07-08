import AddProductForm from "../assets/components/Organism/addProduct/ReservarMesa";
import Header from "../assets/components/Organism/addProduct/HeaderAddProduct";
const AddProduct =() => {
    return ( <>
    <div className="h-screen w-full">
    <Header></Header>
    <section className="bg-customColor-came h-auto w-full">
        
    <AddProductForm></AddProductForm>
    </section>
    </div>
    </> );
}

export default AddProduct;