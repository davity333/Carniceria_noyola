import Mesa from '/MesaLogo.png'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
function MesaLogo(){
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {

        if(location.pathname === '/mesa'){
            alert("Ya estas en la pagina mesa")
        }else{
            navigate('mesa'); 
        }
    };

    return(
        
        <>
         <img src={Mesa} onClick={handleClick} className='flex items-end m-10 cursor-pointer' />
        </>
    );
}
export default MesaLogo;