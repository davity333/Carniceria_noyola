import { useNavigate } from 'react-router-dom';
import administrar from '/administrar.png'
import canita from '/CarnitaAbajo.png'
import AddStock from '../addStockProduct/AddStock';
function BotonsBody(){
    const navegar = useNavigate();

    const showProducts = () => {
        navegar("/allMeatsAdmin");
    }
    const employe = () => {
        navegar('/addEmploye')
    }
    
    const lookTables = () => {
        navegar("/verMesas");
    }
    
    const addProduct = () => {
        navegar("/addProduct");
    }

    return(
        <>
         <div className="flex justify-center items-center">
  <img src={administrar} alt="log" className='h-28 flex flex-col' />
</div>

        <div className="flex text-5xl justify-evenly items-center font-light">

        {/*BOTONES DE LA PRIMERA FILA*/}
        <div onClick={addProduct} className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.19)]
        hover:bg-[#c69696]">Agregar producto</button>
        </div>

        <div onClick={lookTables} className="p-6">
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

        <div onClick={employe} className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.19)]
        hover:bg-[#c69696]">Administracion de empleados</button>
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

        <div onClick={showProducts} className="p-6">
        <button className="bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]">Ver productos</button>
        </div>
            <AddStock></AddStock>
        </div>

        <div className="mt-20">
            <img src={canita} alt="logo" className='w-full shadow-[-1px_-6px_8px_4px_rgba(0,0,0,0.24)]' />
        </div>
        </>
    );
}
export default BotonsBody;