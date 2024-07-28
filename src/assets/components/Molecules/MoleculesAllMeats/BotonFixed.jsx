
function BotonFixed ({src, title, number, onClick}) {
    return (  
        <>
            <div className='fixed top-[75%]  z-50 w-full p-4 ml-[50%] sm:ml-[86.9%] sm:fixed'>
                <img src={src} className='w-32 m-4 hover:drop-shadow-custom-white cursor-pointer absolute' 
                alt="Carrito Logo" onClick={onClick} title={title}/>
                    <div className='text-[#399128] text-3xl ml-[4.4%] mt-5 relative
                        [text-shadow:_1px_0px_3px_rgba(0,0,0,0.61)]'>{number}
                    </div>
            </div>
        </>
    );
} ;
export default BotonFixed