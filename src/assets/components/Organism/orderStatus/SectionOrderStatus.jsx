import CardOrders from "../../Molecules/CardOrderStatus";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Molecules/Loading";
import { getUser } from "../../../../service/User";
import { toast,Toaster } from 'react-hot-toast';

function SectionOrderStatus() {
    const [groupedOrders, setGroupedOrders] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStatus = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No se ha registrado');
                navigate('/login');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_URL}/orders/ordersByUserId/${getUser().user_id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    const grouped = data.reduce((acc, order) => {
                        const { orders_id } = order;
                        if (!acc[orders_id]) {
                            acc[orders_id] = [];
                        }
                        acc[orders_id].push(order);
                        return acc;
                    }, {});
                    setGroupedOrders(grouped);
                } else {
                    const errorData = await response.json();
                    console.error('Failed to fetch orders:', response.statusText, errorData);
                    toast.error('Sorry, please try again later.');
                }
            } catch (error) {
                console.error('An error occurred:', error);
                toast.error('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, [navigate]);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="flex w-full h-screen mx-auto flex-col items-center justify-center">
            <div className="flex flex-wrap flex-col gap-2 w-full items-center justify-center">
                <div><h1 className="text-2xl font-bold text-gray-800">Carnitas Noyola | Tu mejor opción</h1></div>
                <div><h2 className="text-lg text-gray-50">Aquí podrás checar el estado de tus pedido(s)</h2></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center w-full mt-6">
                {Object.keys(groupedOrders).length > 0 ? (
                    Object.entries(groupedOrders).map(([orderId, orders]) => (
                        <CardOrders key={orderId} orderId={orderId} orders={orders} />
                    ))
                ) : (
                    <p className="text-gray-600">No hay ningun pedido aún</p>
                )}
            </div>
            <Toaster></Toaster>
        </section>
    );
}

export default SectionOrderStatus;
