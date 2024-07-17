import React, { useState } from 'react';
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";

function GeneratorPdf() {
    const [date, setDate] = useState(new Date());

    const formattedDate = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <>
            
            <HeaderAdmin titule="Reporte de ventas"></HeaderAdmin>
            <h1 className="text-5xl flex justify-center m-10">Descargar PDF</h1>

            <h1 className="text-3xl flex justify-center m-10 text-gray-800 font-extralight">Reporte de ventas {formattedDate}</h1>

            <div className="flex justify-center">
                <button className="bg-gray-800 px-7 py-5 m-4 rounded-2xl text-white hover:bg-slate-700">Descargar PDF</button>
            </div>
        </>
    );
}

export default GeneratorPdf;
