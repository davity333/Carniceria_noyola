import { useNavigate } from 'react-router-dom';
import carritoDeSupermercadoSilueta from '/carritoSupermercado.png'

function SupermercadoLogo(){
    const navegar = useNavigate();

    const handleClick = () =>{
        navegar("/pay")
    }

return(

    
    <>
        <img onClick={handleClick} title='Carrito' src={carritoDeSupermercadoSilueta} className='flex items-end cursor-pointer' />
    </>

);
}
export default SupermercadoLogo;