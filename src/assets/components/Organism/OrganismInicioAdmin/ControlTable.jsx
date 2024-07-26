import React from 'react';
import TextEncabezado from "../../Molecules/MoleculesControlMesas/TextEncabezado";
import Mesas from "../../Organism/OrgVerMesas/CardsOrg";

function ControlTable(){
    return (
        <>
            <TextEncabezado />
            <Mesas />
        </>
    );
}

export default ControlTable;