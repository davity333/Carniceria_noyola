import user from '/loginSilueta.png'
import { useNavigate } from 'react-router-dom';
function LogoUsuario(){
  const navegar = useNavigate();

    const handleClick = () =>{
        navegar("/login")
    }
return(
    
    <>
      <img onClick={handleClick} src={user} alt="Logo" className='flex items-end cursor-pointer' title='Usuario'/>  
    </>
);
}
export default LogoUsuario;