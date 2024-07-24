import React, { useEffect, useState } from 'react';
import NewCard from "./CardReservations";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast, Toaster } from 'react-hot-toast';
import { format } from 'date-fns';

function CardsOrg() {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCardsData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No se encontró el token. Por favor, inicie sesión nuevamente.');
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`${import.meta.env.VITE_URL}/reservations/reservationsUsers`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched data:', data);
                    setCardsData(data);
                } else {
                    const errorData = await response.json();
                    console.error('Failed to fetch cards data:', response.statusText, errorData);
                    toast.error('Lo sentimos, intente más tarde');
                }
            } catch (error) {
                console.error('An error occurred:', error);
                toast.error('Ocurrió un error. Intente nuevamente.');
            } finally {
                setLoading(false);
            }
        };

        fetchCardsData();
    }, []);

    const handleStatusChange = (id, newStatus) => {
        setCardsData(prevCards =>
            prevCards.map(card =>
                card.reservation_id === id ? { ...card, status: newStatus } : card
            )
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy HH:mm');
    };

    const renderCards = (status) => {
        return cardsData
            .filter(product => product.status.toLowerCase() === status)
            .map((product, index) => (
                <NewCard
                    key={index}
                    id={product.reservation_id}
                    img={'/mesa.png'}
                    solicitante={product.solicitante}
                    numeroPersonas={product.amount_persons}
                    fechas={formatDate(product.reservationsDate)}
                    cantidadMesas={product.amount_tables}
                    state={product.status}
                    onStatusChange={handleStatusChange}
                />
            ));
    };

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Mesas Confirmadas</Tab>
                    <Tab>Mesas Pendientes</Tab>
                    <Tab>Mesas Canceladas</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {renderCards('confirmada')}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {renderCards('pendiente')}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {renderCards('cancelada')}
                    </div>
                </TabPanel>
            </Tabs>
            <Toaster />
        </div>
    );
}

export default CardsOrg;
