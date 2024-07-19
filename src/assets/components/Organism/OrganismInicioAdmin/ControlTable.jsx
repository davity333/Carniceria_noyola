import React from 'react';
import TextEncabezado from "../../Molecules/MoleculesControlMesas/TextEncabezado";
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
import Mesas from "../../Organism/OrgVerMesas/CardsOrg";

function ControlTable(){
    return (
        <>
            <HeaderAdmin title="Mesas reservadas" />
            <TextEncabezado />
            <Mesas />
        </>
    );
}

export default ControlTable;