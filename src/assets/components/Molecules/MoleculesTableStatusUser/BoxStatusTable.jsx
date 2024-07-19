import React, { useEffect, useState } from 'react';
import tachuela from '/tachuela.png';
import { getUser } from '../../../../../User';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

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

    return (
        <>
            {reservations.map((reservation, index) => (
                <div key={index} className="w-[40rem] h-auto bg-white text-2xl p-5 space-y-4 rounded-xl m-5 shadow-[2px_13px_23px_5px_rgba(0,0,0,0.2)] relative">
                    <img src={tachuela} alt="logo" className='absolute h-[5rem] ml-[16rem] -mt-14' />
                    <p className="m-2">Nombre del solicitante: {getUser().name}</p>
                    <p className="m-2">Número de personas: {reservation.amount_persons}</p>
                    <p className="m-2">Fecha y hora: {formatDate(reservation.reservationsDate)}</p>
                    <p className="m-2">Cantidad de mesas: {reservation.amount_tables}</p>
                    <p className="m-9 flex justify-center">Solicitud:</p>
                    <p className="flex justify-center">{reservation.status}</p>
                </div>
            ))}
            <Toaster />
        </>
    );
}

export default BoxStatusTable;
