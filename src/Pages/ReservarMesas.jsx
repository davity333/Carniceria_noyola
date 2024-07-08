import ReservarMesaForm from '../assets/components/Organism/ReservarMesa'
import Header from "../assets/components/Organism/HeaderReservation";
function ReservarMesas() {
    return ( <>
    <div className="h-screen w-full">
    <Header></Header>
    <section className="bg-customColor-came h-auto w-full">
        
    <ReservarMesaForm></ReservarMesaForm>
    </section>
    </div>
    </> );
}

export default ReservarMesas;