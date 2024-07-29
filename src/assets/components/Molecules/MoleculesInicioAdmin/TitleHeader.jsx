import TextContent from "../../Atoms/AtomsPaginaPrincipal/TextContent";
import administrador from '/administrador.png';
import papelito from '/papelito.png';

function TitleHeaders() {
    return(
        <>
       <div className="flex justify-between items-center m-10 text-4xl text-slate-300">
    <img src={administrador} alt="logo" className="h-32 mr-4" />
    
    <div className="flex flex-col items-center">
         <TextContent Content="¿Que haremos hoy?" />
        <TextContent Content="“Carnitas Noyola”" />

    </div>
    
    <img src={papelito} alt="logo" className="h-28 ml-4" />
</div>
 
        </>
    );
}
export default TitleHeaders;