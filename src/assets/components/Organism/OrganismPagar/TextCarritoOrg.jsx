import TextCarrito from "../../Molecules/MoleculesPagar/TextCarrito";
import LineaSeparador from "../../Atoms/AtomsPagar/LineaSeparador";
function TextCarritoOrg(){
    return(
        <>

        <div className="m-5">
        <TextCarrito></TextCarrito>

        <div className="flex items-center justify-center -m-5">
        <LineaSeparador></LineaSeparador>
        </div>

        </div>
        </>
    );

}
export default TextCarritoOrg;