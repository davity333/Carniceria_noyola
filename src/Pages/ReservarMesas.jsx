import HeaderOrganism from '../assets/components/Organism/OrganismInicio/HeaderOrganism';
import ReservarMesaForm from '../assets/components/Organism/ReservarMesa'
import DropDownOptionsOrg from '../assets/components/Organism/OrganismInicio/DropDownOptionsOrg';
import DropDownUserOrg from "../assets/components/Organism/OrganismInicio/DropDownUserOrg";
import { useState } from 'react';

function ReservarMesas() {

    const [dropDownMenu, setDropDown] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);
    
    const clickDown = () =>{            //DropDown Menu
        if(dropDownMenu){
            setDropDown(false);
        }else{
            setDropDownUser(false);
            setDropDown(!false);
        }

    }


    const clickDownUser = () =>{        //DropDown Usuario
        if(dropDownUser){
            setDropDownUser(false);
        }else{
            setDropDown(false)
            setDropDownUser(!false);
        }

    }

    return ( <>
    <div className="bg-[#8d5e5e] min-h-screen">
    
    <HeaderOrganism onClick={clickDown} onClickLogin={clickDownUser}></HeaderOrganism>
    
    
    {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}

    {dropDownUser && (<DropDownUserOrg></DropDownUserOrg>)}
       
    <ReservarMesaForm></ReservarMesaForm>
    
    
    </div>
    </> );
}

export default ReservarMesas;