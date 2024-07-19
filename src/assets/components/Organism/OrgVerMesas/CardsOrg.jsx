import React, { useEffect, useState } from 'react';
import CardsTables from "../../Molecules/MoleculesControlMesas/CardTables";
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
                const response = await fetch(`${import.meta.env.VITE_URL}/reservations`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
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

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Mesas Confirmadas</Tab>
                    <Tab>Mesas Pendientes</Tab>
                    <Tab>Mesas Canceladas</Tab>
                </TabList>

                <TabPanel>
                    {cardsData
                        .filter(product => product.status === 'Confirmada')
                        .map((product, index) => (
                            <CardsTables
                                key={index}
                                id={product.reservation_id}
                                img={'/mesa.png'}
                                solicitante={product.description}
                                numeroPersonas={product.amount_persons}
                                fechas={formatDate(product.reservationsDate)}
                                cantidadMesas={product.amount_tables}
                                state={product.status}
                                deleted={product.deleted}
                                onStatusChange={handleStatusChange}
                            />
                        ))}
                </TabPanel>

                <TabPanel>
                    {cardsData
                        .filter(product => product.status === 'Pendiente')
                        .map((product, index) => (
                            <CardsTables
                                key={index}
                                id={product.reservation_id}
                                img={'/mesa.png'}
                                solicitante={product.description}
                                numeroPersonas={product.amount_persons}
                                fechas={product.reservationsDate}
                                cantidadMesas={product.amount_tables}
                                state={product.status}
                                deleted={product.deleted}
                                onStatusChange={handleStatusChange}
                            />
                        ))}
                </TabPanel>

                <TabPanel>
                    {cardsData
                        .filter(product => product.status === 'Cancelada')
                        .map((product, index) => (
                            <CardsTables
                                key={index}
                                id={product.reservation_id}
                                img={'/mesa.png'}
                                solicitante={product.description}
                                numeroPersonas={product.amount_persons}
                                fechas={product.reservationsDate}
                                cantidadMesas={product.amount_tables}
                                state={product.status}
                                deleted={product.deleted}
                                onStatusChange={handleStatusChange}
                            />
                        ))}
                </TabPanel>
            </Tabs>
            <Toaster />
        </div>
    );
}

export default CardsOrg;
