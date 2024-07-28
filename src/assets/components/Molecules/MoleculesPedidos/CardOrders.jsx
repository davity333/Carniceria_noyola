import React, { useEffect, useState } from 'react';
import CardOrder from './CardOrder';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast, Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import Loading from './../Loading';
import { getUser } from '../../../../service/User';
import DeleteOrdersTable from './DeleteOrdersTable'; // Import the new component

function CardOrders() {
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchOrdersData();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No se encontró el token. Por favor, inicie sesión nuevamente.');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus, updated_by: getUser().name })
      });

      if (response.ok) {
        fetchOrdersData(); // Refresh the data
        toast.success('Estado del pedido actualizado correctamente');
      } else {
        const errorData = await response.json();
        console.error('Failed to update order status:', response.statusText, errorData);
        toast.error('Lo sentimos, intente más tarde');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Ocurrió un error. Intente nuevamente.');
    }
  };

  if (loading) {
    return <Loading />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm');
  };

  const groupedOrders = ordersData.reduce((acc, order) => {
    const orderId = order.orders_id;
    if (!acc[orderId]) {
      acc[orderId] = {
        user: {
          name: order.name,
          lastname: order.lastname,
          email: order.email,
          number_phone: order.number_phone
        },
        orders: [],
        totalAmount: order.total_amount,
        status: order.status,
        deliveryDate: formatDate(order.order_date)
      };
    }
    acc[orderId].orders.push(order);
    return acc;
  }, {});

  const renderOrders = (status) => {
    return Object.entries(groupedOrders).flatMap(([orderId, { user, orders, totalAmount, deliveryDate, status: orderStatus }]) => {
      const filteredOrders = orders.filter(order => order.status && order.status.toLowerCase() === status);

      if (filteredOrders.length === 0) {
        return [];
      }

      return (
        <CardOrder
          key={orderId}
          clientName={`${user.name} ${user.lastname}`}
          email={user.email}
          numberPhone={user.number_phone}
          orders={filteredOrders}
          deliveryDate={deliveryDate}
          totalAmount={totalAmount}
          status={orderStatus}
          onStatusChange={handleStatusChange}
          orderId={orderId}
        />
      );
    });
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Pedidos vendidos</Tab>
          <Tab>Pedidos pendientes</Tab>
          <Tab>Pedidos entregados</Tab>
          <Tab>Pedidos cancelados</Tab>
          <Tab>Eliminar pedidos</Tab>
        </TabList>

        <TabPanel key="vendido">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('vendido')}
          </div>
        </TabPanel>
        <TabPanel key="pendiente">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('pendiente')}
          </div>
        </TabPanel>
        <TabPanel key="entregado">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('entregado')}
          </div>
        </TabPanel>
        <TabPanel key="cancelado">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('cancelado')}
          </div>
        </TabPanel>
        <TabPanel key="eliminar">
          <div className="overflow-x-auto">
            <DeleteOrdersTable ordersData={ordersData} fetchOrdersData={fetchOrdersData} />
          </div>
        </TabPanel>
      </Tabs>
      <Toaster />
    </div>
  );
}

export default CardOrders;
