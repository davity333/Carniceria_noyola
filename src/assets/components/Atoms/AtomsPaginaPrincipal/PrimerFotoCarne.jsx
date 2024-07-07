import carne from '/carneCerdo.png'

function PrimerFotoCarne({children, encabezado}){
return(
    <>
    <div className="relative w-full h-screen">
        <img  alt="Carne" src={encabezado} className="w-full h-full object-cover" />
        {children}
    </div>
    </>
)
}

export default PrimerFotoCarne;
