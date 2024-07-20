import React, { useEffect, useState } from 'react';
import tachuela from '/tachuela.png';
import { getUser } from '../../../../../User';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function chunkArray(array, chunkSize) {
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}


function BoxStatusTable() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchStatus = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No se encontró el token. Por favor, inicie sesión nuevamente.');
                navigate('/login')
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_URL}/reservations/byUser/${getUser().user_id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setReservations(data);
                } else {
                    const errorData = await response.json();
                    console.error('Failed to fetch reservations:', response.statusText, errorData);
                    toast.error('Lo sentimos, intente más tarde');
                }
            } catch (error) {
                console.error('An error occurred:', error);
                toast.error('Ocurrió un error. Intente nuevamente.');
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy HH:mm');
    };

    const ReservationFilas = chunkArray(reservations, 4);

    return (
        <>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  2xl:grid-cols-3">
            {reservations.map((reservation, index) => (
                <div key={index} className="w-[9rem]  h-auto bg-white text-[10px] p-5 space-y-2 rounded-xl m-5 shadow-[2px_13px_23px_5px_rgba(0,0,0,0.2)] 
                 sm:w-[40rem]  sm:text-2xl sm:m-5 sm:p-5 sm:text-[22px] sm:space-y-4 ml-1
                 md:w-[20rem] lg:w-[20em] xl:w-[40rem] 2xl:w-[35rem]
                 tablet:w-[15rem] tablet:ml-0">
                    
                    <p className="m-2">Nombre del solicitante: {getUser().name}</p>
                    <p className="m-2">Número de personas: {reservation.amount_persons}</p>
                    <p className="m-2">Fecha y hora: {formatDate(reservation.reservationsDate)}</p>
                    <p className="m-2">Cantidad de mesas: {reservation.amount_tables}</p>
                    <p className="m-9 flex justify-center">Solicitud:</p>
                    <p className="flex justify-center">{reservation.status}</p>
                </div>
            ))}
            </div>
            <Toaster />
        </>
    );
}

export default BoxStatusTable;
//<img src={tachuela} alt="logo" className='absolute h-[5rem] ml-[16rem] -mt-14' />