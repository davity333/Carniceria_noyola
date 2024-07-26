import React, { useEffect, useState } from 'react';
import CardOrder from './CardOrder';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast, Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import Loading from './../Loading';

function CardOrders() {
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No se encontró el token. Por favor, inicie sesión nuevamente.');
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/orders/ordersWithProducts`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched orders data:', data);
          setOrdersData(data);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch orders data:', response.statusText, errorData);
          toast.error('Lo sentimos, intente más tarde');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        toast.error('Ocurrió un error. Intente nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrdersData();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setOrdersData(prevOrders =>
      prevOrders.map(order =>
        order.orders_id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  if (loading) {
    return <Loading />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm');
  };

  const groupedOrders = ordersData.reduce((acc, order) => {
    const userId = order.user_id;
    if (!acc[userId]) {
      acc[userId] = [];
    }
    acc[userId].push(order);
    return acc;
  }, {});

  const renderOrders = (status) => {
    return Object.entries(groupedOrders).map(([userId, orders]) => {
      const filteredOrders = orders.filter(order => order.status && order.status.toLowerCase() === status);

      if (filteredOrders.length === 0) {
        return null;
      }

      const firstOrder = orders[0];
      return (
        <CardOrder
          key={userId}
          clientName={`${firstOrder.name} ${firstOrder.lastname}`}
          email={firstOrder.email}
          numberPhone={firstOrder.number_phone}
          orders={filteredOrders}
          deliveryDate={formatDate(firstOrder.order_date)}
          totalAmount={firstOrder.total_amount}
          status={firstOrder.status}
          onStatusChange={(newStatus) => handleStatusChange(firstOrder.orders_id, newStatus)}
        />
      );
    });
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Pedidos Confirmados</Tab>
          <Tab>Pedidos Pendientes</Tab>
          <Tab>Pedidos Entregados</Tab>
          <Tab>Pedidos Cancelados</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('confirmada')}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('pendiente')}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('entregada')}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('cancelada')}
          </div>
        </TabPanel>
      </Tabs>
      <Toaster />
    </div>
  );
}

export default CardOrders;
