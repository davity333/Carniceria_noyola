import administrar from '/administrar.png'
import canita from '/CarnitaAbajo.png'
function BotonsBody(){
    return(
        <>
         <div className="flex justify-center items-center">
  <img src={administrar} alt="log" className='h-28 flex flex-col' />
</div>

        <div className="flex text-5xl justify-evenly items-center font-light">

        {/*BOTONES DE LA PRIMERA FILA*/}
        <div className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.19)]
        hover:bg-[#c69696]">Agregar producto</button>
        </div>

        <div className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]">Mesas reservadas</button>
        </div>
        </div>

        {/*BOTONES DE SEGUNDA FILA*/}

        <div className="flex text-5xl justify-evenly items-center font-thin">

        <div className="p-3">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]">Actualizar producto</button>
        </div>

        <div className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]">Reporte de ventas</button>
        </div>
        </div>

        {/*BOTONES DE TERCERA FILA*/}

        <div className="flex text-5xl justify-evenly items-center font-thin">

        <div className="">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]">Eliminar producto</button>
        </div>

        <div className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]">Ver productos</button>
        </div>
        </div>

        <div className="mt-20">
  <img src={canita} alt="logo" className='w-full shadow-[-1px_-6px_8px_4px_rgba(0,0,0,0.24)]' />
</div>
        </>
    );
}
export default BotonsBody;