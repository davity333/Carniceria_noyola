import Input from "../../Atoms/AtomsPagar/Input";
import Lupa from "../../Atoms/AtomsPagar/Lupa";

function InputPrincipal(){
    return(
        <>

        <div className="flex flex-1 justify-center ">

        <div className="w-full px-4 py-2 h-16 flex  justify-center relative">
        <Lupa/>
        <Input />
        </div>

        </div>   

        </>
    );
}
export default InputPrincipal;