import Input from "../../Atoms/AtomsPaginaPrincipal/Input";
import Lupa from "../../Atoms/AtomsPaginaPrincipal/Img";
import LupaSilueta from '/lupa.png'
function InputPrincipal(){
    return(
        <>

        <div className="flex flex-1 justify-center">

        <div className="w-full py-2 h-16 flex  justify-center ">
        <Lupa imagen={LupaSilueta}></Lupa>
        <Input />
        </div>

        </div>   

        </>
    );
}
export default InputPrincipal;