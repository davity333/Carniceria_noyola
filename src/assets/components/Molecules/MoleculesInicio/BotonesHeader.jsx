
import Menu from '/MenuLogo.png'
import login from "/loginSilueta.png"

function BotonesHeader({onClick, onClickLogin}){
return(
    <>

<img onClick={onClickLogin} src={login} alt="Logo" className='hidden sm:block m-7 hover:bg-[#2c2f1c84] py-2 px-2 rounded-full flex items-end cursor-pointer justify-between items-center md:justify-start' title='Usuario' />  

<img onClick={onClick} src={Menu} alt="menu" className='m-1 hover:bg-[#2c2f1c66]  rounded-full w-12 cursor-pointer flex justify-between items-center md:justify-start sm:m-7' title="Menu" />
    </>
);
}

export default BotonesHeader;