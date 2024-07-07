import carne from '/SiluetaCarne.png'
import cerdo from '/SiluetaCerdo.png'


function Siluetas({meat, pig, carneClass, cerdoClass}){
    return(
        
        <>
<div className="flex justify-between items-center -mt-16">
      <img src={carne} alt={meat} className={carneClass} />
      <img src={cerdo} alt={pig} className={cerdoClass} />
    </div>
        </>
    );
}
export default Siluetas;