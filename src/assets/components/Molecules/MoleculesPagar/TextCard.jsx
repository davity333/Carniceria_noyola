import TextContent from "../../Atoms/AtomsPagar/TextContent";


function TextCard({img, product, precio, quantity}){
    return(
        <>
        <TextContent>{product}</TextContent>
        </>
    );
}
export default TextCard;