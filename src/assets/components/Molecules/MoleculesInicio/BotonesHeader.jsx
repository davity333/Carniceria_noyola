import DropDownOptionsOrg from '../../Organism/OrganismInicio/DropDownOptionsOrg';
import DropDownUserOrg from "../../Organism/OrganismInicio/DropDownUserOrg";
import Menu from '/MenuLogo.png'
import login from "/loginSilueta.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function BotonesHeader(){
  
    const [dropDownMenu, setDropDown] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);
    const navigate = useNavigate()
    const clickDown = () =>{            //DropDown Menu
        if(dropDownMenu){
            setDropDown(false);
        }else{
            setDropDownUser(false);
            setDropDown(!false);
        }
    }
const logout = () => {
        localStorage.removeItem('token')
        navigate("/login")
}
    const clickDownUser = () =>{        //DropDown Usuario
        if(dropDownUser){
            setDropDownUser(false);
        }else{
            setDropDown(false)
            setDropDownUser(!false);
        }

    }

return(
    <>
{ !localStorage.getItem('token') && 
<img onClick={clickDownUser} src={login} alt="Logo" className='hidden sm:block m-7 hover:bg-[#2c2f1c84] py-2 px-2 rounded-full flex items-end cursor-pointer justify-between items-center md:justify-start' title='Usuario' />  
}

<img onClick={clickDown} src={Menu} alt="menu" className='m-1 hover:bg-[#2c2f1c66]  rounded-full w-12 cursor-pointer flex justify-between items-center md:justify-start sm:m-7' title="Menu" />
<p onClick={logout} >Cerrar sesión →</p>
        <div>
        {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}
        </div>
        {
        dropDownUser && (<DropDownUserOrg></DropDownUserOrg>)}
    </>
);
}

export default BotonesHeader;