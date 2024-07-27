import React, { useEffect, useState } from 'react';
import CardOrder from './CardOrder';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast, Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import Loading from './../Loading';
import { getUser } from '../../../../service/User';

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
        setOrdersData(prevOrders =>
          prevOrders.map(order =>
            order.orders_id === orderId ? { ...order, status: newStatus } : order
          )
        );
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

  const handleDeleteOrder = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No se encontró el token. Por favor, inicie sesión nuevamente.');
        return;
      }
      
      const response = await fetch(`${import.meta.env.VITE_URL}/orders/delete/${orderId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          deleted: 1, updated_by: getUser().name
        })
      });

      if (response.ok) {
        setOrdersData(prevOrders => prevOrders.filter(order => order.orders_id !== orderId));
        toast.success('Pedido eliminado correctamente');
      } else {
        const errorData = await response.json();
        console.error('Failed to delete order:', response.statusText, errorData);
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
    const userId = order.user_id;
    if (!acc[userId]) {
      acc[userId] = {
        user: {
          name: order.name,
          lastname: order.lastname,
          email: order.email,
          number_phone: order.number_phone
        },
        orders: []
      };
    }
    acc[userId].orders.push(order);
    return acc;
  }, {});

  const renderOrders = (status) => {
    return Object.entries(groupedOrders).flatMap(([userId, { user, orders }]) => {
      const filteredOrders = orders.filter(order => order.status && order.status.toLowerCase() === status);

      if (filteredOrders.length === 0) {
        return [];
      }

      const firstOrder = filteredOrders[0];
      return (
        <CardOrder
          key={userId}
          clientName={`${user.name} ${user.lastname}`}
          email={user.email}
          numberPhone={user.number_phone}
          orders={filteredOrders}
          deliveryDate={formatDate(firstOrder.order_date)}
          totalAmount={firstOrder.total_amount}
          status={firstOrder.status}
          onStatusChange={handleStatusChange}
          orderId={firstOrder.orders_id}
        />
      );
    });
  };

  const renderDeleteTable = () => {
    return (
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Cliente</th>
            <th className="py-2">Email</th>
            <th className="py-2">Teléfono</th>
            <th className="py-2">Fecha de Entrega</th>
            <th className="py-2">Total</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(order => (
            <tr key={order.orders_id}>
              <td className="border px-4 py-2">{order.orders_id}</td>
              <td className="border px-4 py-2">{order.name} {order.lastname}</td>
              <td className="border px-4 py-2">{order.email}</td>
              <td className="border px-4 py-2">{order.number_phone}</td>
              <td className="border px-4 py-2">{formatDate(order.order_date)}</td>
              <td className="border px-4 py-2">{order.total_amount}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteOrder(order.orders_id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Pedidos Confirmados</Tab>
          <Tab>Pedidos Pendientes</Tab>
          <Tab>Pedidos Entregados</Tab>
          <Tab>Pedidos Cancelados</Tab>
          <Tab>Eliminar Pedidos</Tab>
        </TabList>

        <TabPanel key="confirmada">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('confirmada')}
          </div>
        </TabPanel>
        <TabPanel key="pendiente">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('pendiente')}
          </div>
        </TabPanel>
        <TabPanel key="entregada">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('entregada')}
          </div>
        </TabPanel>
        <TabPanel key="cancelada">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderOrders('cancelada')}
          </div>
        </TabPanel>
        <TabPanel key="eliminar">
          <div className="overflow-x-auto">
            {renderDeleteTable()}
          </div>
        </TabPanel>
      </Tabs>
      <Toaster />
    </div>
  );
}

export default CardOrders;