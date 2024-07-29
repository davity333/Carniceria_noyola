import { useState, useEffect, useRef } from 'react';
import FormField from '../../Molecules/Register/FormField';
import { jsPDF } from "jspdf";
import toast, { Toaster } from 'react-hot-toast';

function GeneratorPdf() {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const dateRef = useRef(null);
    const token = localStorage.getItem('token');
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const fetchOrders = async () => {
        const selectedDate = dateRef.current.value;
        const response = await fetch(`${import.meta.env.VITE_URL}/orders/ordersWithProducts/${selectedDate}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setOrders(data);
    };

    const fetchTotal = async () => {
        const selectedDate = dateRef.current.value;
        const response = await fetch(`${import.meta.env.VITE_URL}/orders/allAmount/${selectedDate}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        setTotal(data.fullAmount);
    };

    useEffect(() => {
        if (dateRef.current) {
            fetchOrders();
            fetchTotal();
        }
    }, [date]);

    const validateDate = () => {
        const selectedDate = dateRef.current.value;
        if (!selectedDate) {
            toast.error("Por favor, seleccione una fecha.");
            return false;
        }
        return true;
    }

    const generatePDF = () => {
        if (!validateDate()) return;

        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 0, 0);
        doc.text('Carniceria Noyola', 105, 20, null, null, 'center');

        doc.setDrawColor(255, 0, 0);
        doc.setLineWidth(1);
        doc.line(10, 35, 200, 35);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`Fecha: ${formattedDate}`, 10, 45);

        doc.text(`Total de ventas: $${total}`, 10, 55);
        
        const groupedOrdersByUser = orders.reduce((accumulator, currentOrder) => {
            const userKey = `${currentOrder.name} ${currentOrder.lastname} (${currentOrder.email})`;
            if (!accumulator[userKey]) {
                accumulator[userKey] = [];
            }
            accumulator[userKey].push(currentOrder);
            return accumulator;
        }, {});

        let currentYPosition = 65;
        Object.keys(groupedOrdersByUser).forEach((userKey) => {
            if (currentYPosition > 250) {
                doc.addPage();
                currentYPosition = 20;
            }

            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.text(`Cliente: ${userKey}`, 10, currentYPosition);

            currentYPosition += 10;
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            groupedOrdersByUser[userKey].forEach((order, orderIndex) => {
                if (currentYPosition > 280) {
                    doc.addPage();
                    currentYPosition = 20;
                }
                doc.text(`${orderIndex + 1}. Producto: ${order.description} - Cantidad: ${order.amount} - Total: $${order.price}`, 10, currentYPosition);
                currentYPosition += 10;
            });

            currentYPosition += 10;
            doc.setDrawColor(255, 0, 0);
            doc.setLineWidth(0.5);
            doc.line(10, currentYPosition, 200, currentYPosition);
            currentYPosition += 10;
        });

        doc.save(`reporte_ventas_${formattedDate}.pdf`);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return (
        <>
            <h1 className="text-5xl flex justify-center m-10">Descargar PDF</h1>
            <h1 className="text-3xl flex justify-center m-10 text-gray-800 font-extralight">Reporte de ventas del {formattedDate}</h1>
            <div className="flex justify-center">
                <div className='w-[15%]'> 
                    <FormField
                        id="date"
                        name="date"
                        type="date"
                        placeholder=""
                        autoComplete="time"
                        required={true}
                        label="Fecha de reporte de ventas"
                        innerRef={dateRef}
                        onChange={handleDateChange}
                    />
                </div>
                <button
                    className="bg-gray-800 px-7 py-5 m-4 rounded-2xl text-white hover:bg-slate-700"
                    onClick={generatePDF}>
                    Descargar PDF
                </button>
                <Toaster />
            </div>
        </>
    );
}

export default GeneratorPdf;
