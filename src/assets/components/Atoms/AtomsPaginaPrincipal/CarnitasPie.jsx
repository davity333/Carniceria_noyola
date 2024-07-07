import carniceria from '/carniceria.jpg';
function CarnitasPie({children}){
    return(
        
        <>
        
        <img className='w-full h-full object-cover' src={carniceria} >
        {children}
        </img>
        </>
    );
}
export default CarnitasPie;
