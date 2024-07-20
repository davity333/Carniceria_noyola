
function PrimerFotoCarne({children, encabezadoHome}){
return(
    <>
    <div className="relative w-full h-40 sm:h-screen" style={{ 
        backgroundImage: `url(${encabezadoHome})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
      {children}
    </div>
    </>
)
}

export default PrimerFotoCarne;
