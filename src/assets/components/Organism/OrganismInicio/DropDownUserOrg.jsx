import DropDownAccount from "../../Molecules/MoleculesDropDown/DropDownAccount";

function DropDownUserOrg(){
    return(
        
        <>
        <div className="ml-[23.98%] bg-gradient-to-t z-10 left-0 absolute 
        sm:ml-[8.98%] -mt-[25%] sm:-mt-[0%] 
        md:ml-[60%] lg:ml-[70%] xl:ml-[78%] 2xl:ml-[88%]">
        <DropDownAccount></DropDownAccount>
        </div>
        </>
    );
}
export default DropDownUserOrg;