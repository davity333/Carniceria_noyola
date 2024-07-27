

function Input({value, onChange, onKeyUp}){
return(
    
    <>
    
    <input type="text" 
               className="w-full px-4  h-12 focus:outline-none text-lg 
               md:text-3xl font-thin rounded-full hover:shadow-[0px 7px 5px 2px #0000004f]
               border-4 border-[#581a1ab5] focus:border-[#711818]
               " placeholder="Buscar 🔍" value={value} onChange={onChange} onKeyUp={onKeyUp} title="Buscar"/>
    </>
);
}
export default Input;

