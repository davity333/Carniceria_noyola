import tachuela from '/tachuela.png'

function BoxStatusTable(){
    return(
        <>
        <div className="w-[40rem] h-auto bg-white text-2xl p-5 space-y-4 rounded-xl m-5
        shadow-[2px_13px_23px_5px_rgba(0,0,0,0.2)]">
            <img src={tachuela} alt="logo" className='absolute h-[5rem] ml-[16rem] -mt-14'/>
            <p className="m-2">Nombre del solicitante:</p>
            <p className="m-2">Número de personas:</p>
            <p className="m-2">Fecha:</p>
            <p className="m-2">Cantidad de mesas:</p>
            <p className="m-9 flex justify-center">Solicitud:</p>

            <p className="flex justify-center">Pendiente</p>
        </div>
        </>
    );
}
export default BoxStatusTable;