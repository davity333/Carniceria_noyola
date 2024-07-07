import Header from '../../Atoms/AtomsPagar/header';
import Logo from '../../Molecules/MoleculesPagar/LogoPrincipal';
import InputInicial from '../../Molecules/MoleculesPagar/InputPrincipal';
import BotonesHeader from '../../Molecules/MoleculesPagar/BotonesHeader';
import LineaGris from '../../Atoms/AtomsPagar/LineaGris';

function HeaderOrganism(){
    return(
        <>
        <Header>
            <Logo></Logo>
            <InputInicial></InputInicial>

            <BotonesHeader></BotonesHeader>

        </Header>
        <LineaGris></LineaGris>
        </>
    );
}
export default HeaderOrganism;