import SiluetaSupermercado from "../../Atoms/AtomsPaginaPrincipal/SiluetaSupermercado";

function CardCarnesMasVendidas({children, src, price, productName}){
    return(


        <>

<div className="drop-shadow-xl product-card bg-neutral-300 p-8 m-4 rounded-lg text-center w-96 h-2/4">
        {children}

        <div className="flex items-center justify-center h-full">
            <img className="flex items-center justify-center" src={src} alt="" />
        </div>

        <div className="mt-4">
                <p className="text-3xl font-bold">{productName}</p>
                <p className="text-3xl text-gray-700">{price}</p>
            </div>

        <div className="bg-slate-700 m-8 rounded-lg flex items-center" >

        <div className="flex items-center ml-3">
          <SiluetaSupermercado/>
         </div> 
        
        <p className="product-text text-white mt-2 flex justify-around text-3xl -mt-16 p-3 text-2xl">Agregar al carrito</p>
        </div>

        </div>

            </>
        );
}
export default CardCarnesMasVendidas;