function SpanAlert() {
    return ( <>
   <p className="text-red-500 text-sm before:content-['⚠']"></p> <span className="text-red-500 font-[Poppins] text-sm">{error}</span>
    </> );
}

export default SpanAlert;