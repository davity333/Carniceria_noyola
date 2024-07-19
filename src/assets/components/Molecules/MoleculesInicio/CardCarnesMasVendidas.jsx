import SiluetaSupermercado from "../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado";

function CardCarnesMasVendidas({children, src, price, productName, amount}){
    return(


        <>

<div className="drop-shadow-xl product-card bg-neutral-300 p-8 m-4 rounded-lg text-center w-80 h-auto max-h-[500px]  items-center justify-between">
        {children}

        <div className="flex flex-col items-center justify-center h-full">
            <img className="flex items-center justify-center max-h-48" src={src} alt="" />
        </div>

        <div className="mt-2 w-full">
                <p className="text-3xl font-bold">{productName}</p>
                <p className="text-3xl text-[#8a2a2a] font-thin">{amount}</p>
                <p className="text-3xl text-gray-700">{price}</p>
            </div>

        <div className="bg-slate-700 m-5 rounded-lg flex items-center" >

        <div className="flex items-center ml-2">
          <SiluetaSupermercado/>
         </div> 
        
        <p className="text-white flex  text-3xl-mt-16 p-3 text-2xl">Agregar al carrito</p>
        </div>

        </div>

            </>
        );
}
export default CardCarnesMasVendidas;