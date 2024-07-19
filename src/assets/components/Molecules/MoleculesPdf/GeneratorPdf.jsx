import { useState } from 'react';
import HeaderAdmin from "../../Molecules/MoleculesInicioAdmin/HeaderAdmin";
import { jsPDF } from "jspdf";

function GeneratorPdf() {
    const [date, setDate] = useState(new Date());

    const formattedDate = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const dataPdf = {
        total: 54,
        dia: formattedDate,
        productos: {
            carne: 'Carne de lomo',
            hueso: 'Hueso de lomo'
        }
    }

    const generatePDF = () => {
        const doc = new jsPDF();


        doc.setFontSize(22);
        doc.setFont("montserrat", "bold");
        doc.setTextColor(255, 0, 0);
        doc.text('Carniceria Noyola', 105, 20, null, null, 'center');

        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(1);
        doc.line(10, 35, 200, 35);

        
        doc.setFontSize(12);
        doc.setFont("montserrat", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`Fecha: ${dataPdf.dia}`, 10, 45);

        doc.setFontSize(16);
        doc.setFont("montserrat", "bold");
        doc.text('Productos:', 10, 55);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`1. ${dataPdf.productos.carne}`, 10, 65);
        doc.text(`2. ${dataPdf.productos.hueso}`, 10, 75);

        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(10, 80, 200, 80);

        doc.setFontSize(16);
        doc.setFont("montserrat", "bold");
        doc.setTextColor(255, 0, 0);
        doc.text(`Total: $${dataPdf.total}`, 10, 90);

        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(0.5);
        doc.rect(8, 85, 194, 15);
    
        doc.save(`factura_${dataPdf.dia}.pdf`);
    }

    return (
        <>
            <HeaderAdmin titule="Reporte de ventas"></HeaderAdmin>
            <h1 className="text-5xl flex justify-center m-10">Descargar PDF</h1>
            <h1 className="text-3xl flex justify-center m-10 text-gray-800 font-extralight">Reporte de ventas del {formattedDate}</h1>
            <div className="flex justify-center">
                <button
                    className="bg-gray-800 px-7 py-5 m-4 rounded-2xl text-white hover:bg-slate-700"
                    onClick={generatePDF}>
                    Descargar PDF
                </button>
            </div>
        </>
    );
}

export default GeneratorPdf;
