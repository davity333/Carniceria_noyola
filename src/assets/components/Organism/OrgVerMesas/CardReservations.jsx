import React, { useState } from 'react';
import basura from "/basura.png";
import { toast, Toaster } from 'react-hot-toast';
import { getUser } from '../../../../service/User';

function NewCard({ img, solicitante, numeroPersonas, fechas, cantidadMesas, state, id, onStatusChange }) {
    const [status, setStatus] = useState(state);
    const [showModal, setShowModal] = useState(false);
    const name = getUser().name;

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const deleteReservation = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_URL}/reservations/delete/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ deleted: 1, updated_by: name })
            });

            if (response.ok) {
                toast.success('Se eliminó correctamente');
                closeModal();
                onStatusChange(id, 'deleted');
            } else {
                const errorData = await response.json();
                console.error('Falló al eliminar la reservación:', response.statusText, errorData);
                toast.error('No se pudo eliminar la reservación');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('Ocurrió un error. Intente nuevamente.');
        }
    };

    const handleStatusChange = async (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);
        onStatusChange(id, newStatus);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_URL}/reservations/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (response.ok) {
                toast.success('Status actualizado correctamente');
            } else {
                const errorData = await response.json();
                console.error('Failed to update status:', response.statusText, errorData);
                toast.error('No se pudo actualizar el status, intente más tarde');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('Ocurrió un error. Intente nuevamente.');
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 border border-gray-300">
            <div className="flex h-full">
                <img src={img} alt="imagen" className="h-32 w-32 object-cover p-3 rounded-l-lg" />
                <div className="flex flex-col p-5 space-y-3 flex-1">
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold text-gray-900">Nombre del solicitante:</p>
                        <p className="text-gray-700">{solicitante}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold text-gray-900">Número de personas:</p>
                        <p className="text-gray-700">{numeroPersonas}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold text-gray-900">Hora y fecha:</p>
                        <p className="text-gray-700">{fechas}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold text-gray-900">Cantidad de mesas:</p>
                        <p className="text-gray-700">{cantidadMesas}</p>
                    </div>
                    <select
                        name="select"
                        className="h-10 bg-white border border-gray-300 rounded-md px-3 py-1 text-gray-700"
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <option value="Confirmada">Confirmada</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Cancelada">Cancelada</option>
                    </select>
                </div>
                <button onClick={openModal} className="h-10 w-10 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600">
                    <img src={basura} alt="Eliminar" className="h-5 w-5" />
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">Confirmación</h2>
                        <p>¿Estás seguro que deseas eliminar esta reserva?</p>
                        <div className="flex justify-end space-x-3 mt-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={deleteReservation}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Toaster />
        </div>
    );
}

export default NewCard;
