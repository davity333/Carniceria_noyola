import carne from '/carneCerdo.png'

function PrimerFotoCarne({children, encabezado}){
return(
    <>
    <div className="relative w-full h-32 sm:h-screen" style={{ 
        backgroundImage: `url(${carne})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
      {children}
    </div>
    </>
)
}

export default PrimerFotoCarne;
