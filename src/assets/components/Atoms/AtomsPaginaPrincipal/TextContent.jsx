
function TextContent(props){
    const lines = props.Content.split('  '); 
    return(
        <div className="flex items-center  flex-col text-1xl text-center sm:text-4xl sm:flex items-center">
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
}
export default TextContent;

