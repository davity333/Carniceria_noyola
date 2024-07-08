import Mesa from '/MesaLogo.png'
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
function MesaLogo(){
    const navigate = useNavigate();

    const handleClick = () => {

       
            navigate('/verMesas'); 
        
    };

    return(
        
        <>
         <img src={Mesa} onClick={handleClick} className='flex items-end cursor-pointer' />
        </>
    );
}
export default MesaLogo;