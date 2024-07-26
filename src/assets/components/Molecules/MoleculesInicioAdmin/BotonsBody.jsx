import { useNavigate } from 'react-router-dom';
import administrar from '/administrar.png'
import canita from '/CarnitaAbajo.png'
import AddStock from '../addStockProduct/AddStock';
import Button from '../../Atoms/AtomsPaginaPrincipal/Buttons';
import style from './../../../../../fonts.module.css'
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

    const downladPdf = () => {
        navegar("/pdf");
    }
    const addStock = () =>{
            navegar('/addStock')
    }
    return(
    
        <>
         <div className="flex justify-center items-center">
  <img src={administrar} alt="log" className='h-28 flex flex-col -mt-10' />
</div>

        <div className="flex text-5xl justify-evenly items-center font-light m-4">

        {/*BOTONES DE LA PRIMERA FILA*/}
        <div className="p-6 bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.19)]
        hover:bg-[#c69696]" id={style.botonAdmin}>
        <Button onClick={addProduct} text="Agregar productos"></Button>
        </div>

        <div className="p-6 bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]" id={style.botonAdmin}>
        <Button onClick={lookTables} text="Mesas reservadas"></Button>
        </div>
        </div>

        {/*BOTONES DE SEGUNDA FILA*/}

        <div className="flex text-5xl justify-evenly items-center font-thin m-2">

        <div onClick={employe} className="p-6 bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.19)]
        hover:bg-[#c69696]" id={style.botonAdmin}>
        <Button onClick={employe} text="Empleados"></Button>
        </div>

        <div className="p-6 bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]" id={style.botonAdmin}>
        <Button onClick={downladPdf} text="Reporte de ventas"></Button>
        </div>
        </div>

        {/*BOTONES DE TERCERA FILA*/}
        <div className="flex text-5xl justify-evenly items-center font-thin m-5">

        <div onClick={showProducts} className="p-6 bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]" id={style.botonAdmin}>
        <Button onClick={downladPdf} text="Productos"></Button>
        </div >
        <div onClick={addStock} className="p-6 bg-[#e9baba] px-8 py-4 text-4xl rounded-3xl
        shadow-[1px_5px_6px_5px_rgba(0,0,0,0.24)]
        hover:bg-[#c69696]" id={style.botonAdmin}>
        <Button onClick={addStock} text="Agregar cantidad"></Button>
        </div >
        </div>


        <div className="mt-20">
            <img src={canita} alt="logo" className='w-full shadow-[-1px_-6px_8px_4px_rgba(0,0,0,0.24)]' />
        </div>
        </>
    );
}
export default BotonsBody;