

function CardOrder(){
    return(
        <>
        <div className="h-auto w-80 bg-white p-4 rounded-3xl">
        <p>Nombre del cliente:</p>
        <p>Producto:</p>
        <p>Cantidad:</p>
        <p>Precio total:</p>
        <p>Fecha de entrega:</p>

        <div className="flex justify-center mt-5">
        <button className="bg-[#36be36] p-2 hover:bg-[#41c753] rounded-lg">PEDIDO ENTREGADO</button>
        </div>

        </div>
        </>
    );
}
export default CardOrder;