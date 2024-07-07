
function Text(props, {children}){
    return(
        <>
            <p className={`flex justify-center text-8xl m-6 p-5 ${props.className}`}>
                {props.text}
                {children}
            </p>
        </>
    );
}
export default Text;

