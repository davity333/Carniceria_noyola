

import Menu from '/MenuLogo.png'
function BotonesHeader({menu}){
return(
    <>
 

    <div onClick={menu} title='Menu' className="m-7 cursor-pointer hover:bg-[#2c2f1c84] rounded-3xl">
    <img src={Menu} alt="menu" className="w-12 cursor-pointer" title="Menu"/>
    </div>

    </>
);
}

export default BotonesHeader;