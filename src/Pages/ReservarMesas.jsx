import ReservarMesaForm from "../assets/Organism/ReservarMesa";
import Header from "../assets/Organism/HeaderReservation";
function ReservarMesas() {
    return ( <>
    <div className="h-screen w-full">
    <Header></Header>
    <section className="bg-customColor-fondo h-auto w-full">
        
    <ReservarMesaForm></ReservarMesaForm>
    </section>
    </div>
    </> );
}

export default ReservarMesas;