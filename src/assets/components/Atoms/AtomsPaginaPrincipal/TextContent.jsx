
function TextContent(props){
    const lines = props.Content.split('  '); 
    return(
        <div className="items-center flex flex-col">
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
}
export default TextContent;

