import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import PagePay from './Pages/PagePay';
import AllMeats from "./Pages/AllMeats";
import VerMesas from './Pages/VerMesas';
import AddProduct from './Pages/AddProduct.jsx';
import ReservarMesas from './Pages/ReservarMesas.jsx';
import ProductModal from './assets/components/Organism/OrganismAllMeats/ProductModal.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AllMeatsAdmin from './Pages/AllMeatsAdmin.jsx';
import PageTableStatus from './Pages/PageTableStatus.jsx';
import HomeAdmin from './Pages/HomeAdmin.jsx';
import Pdf from './Pages/Pdf.jsx';
import ThankYou from './assets/components/Organism/OrganismAllMeats/ThankYou.jsx';
import PurchaseConfirmation from './assets/components/Organism/OrganismAllMeats/PurchaseConfirmation.jsx';
import { AuthProvider } from './assets/components/Molecules/Register/AuthContext.jsx';
import AddEmploye from './Pages/AddEmploye.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payComplete",
    element: <ProductModal />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "/confirmationPay",
    element: <PurchaseConfirmation />,
  },
  {
    path: "/pay",
    element: <PagePay />,
  },
  {
    path: "/allMeats",
    element: <AllMeats />,
  },
  {
    path: "/allMeatsAdmin",
    element: <AllMeatsAdmin />,
  },
  {
    path: "/verMesas",
    element: <VerMesas />,
  },
  {
    path: "/homeAdmin",
    element: <HomeAdmin />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reservarMesas",
    element: <ReservarMesas />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
  {
    path: "/tableStatus",
    element: <PageTableStatus />,
  },
  {
    path: "/pdf",
    element: <Pdf />,
  },
  {
    path: "/addEmploye",
    element: <AddEmploye />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
