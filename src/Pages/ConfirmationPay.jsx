import PurchaseConfirmation from "../assets/components/Organism/OrganismAllMeats/PurchaseConfirmation";
import HeaderOrganism from "../assets/components/Organism/OrganismInicio/HeaderOrganism";
import DropDownOptionsOrg from "../assets/components/Organism/OrganismInicio/DropDownOptionsOrg";
import DropDownUserOrg from "../assets/components/Organism/OrganismInicio/DropDownUserOrg";
import { useState } from "react";
function ConfirmationPay() {

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

    return (  
        <>
        <div className="bg-[#C29292] h-[100vh] w-full">
        <HeaderOrganism onClick={clickDown} onClickLogin={clickDownUser}></HeaderOrganism>
        {dropDownMenu && (<DropDownOptionsOrg onClick={clickDown}></DropDownOptionsOrg>)}

        {dropDownUser && (<DropDownUserOrg></DropDownUserOrg>)}

        <div className="m-10">
        <PurchaseConfirmation></PurchaseConfirmation>
        </div>
        </div>
        </>
    );
}

<>
</>;
export default ConfirmationPay;