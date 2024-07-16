import papelitoPalomita from '/papelitoPapelito.png'

function Title(){
    return(
        <>
            <p className='flex justify-center m-10 text-5xl'>Estado de mesa</p>
        <div className='flex justify-between m-4'>
        <img src={papelitoPalomita} alt="logo" className='h-40'/>
        <p className='text-3xl flex items-center text-center text-4xl m-6 font-extralight'>En esta sección, podrás consultar el estado de tus mesas y verificar 
            si tu solicitud ha sido aceptada. </p>
            </div>
        </>
    );
}
export default Title;