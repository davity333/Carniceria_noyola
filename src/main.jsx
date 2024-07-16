import App from './App.jsx'
import './index.css'
import PagePay from './Pages/PagePay';
import AllMeats from "./Pages/AllMeats";
import VerMesas from './Pages/VerMesas';
import HomeAdmin from './Pages/HomeAdmin.jsx';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import AddProduct from './Pages/AddProduct.jsx';
import ReservarMesas from './Pages/ReservarMesas.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AllMeatsAdmin from './Pages/AllMeatsAdmin.jsx';
import PageTableStatus from './Pages/PageTableStatus.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/pay",
    element: <PagePay></PagePay>,
  },
  {
    path: "/allMeats",
    element: <AllMeats></AllMeats>,
  },
  {
    path: "/allMeatsAdmin",
    element: <AllMeatsAdmin></AllMeatsAdmin>,
  },
  {
    path: "/verMesas",
    element: <VerMesas></VerMesas>,
  },
  {
    path: "/homeAdmin",
    element: <HomeAdmin></HomeAdmin>
  },{
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/reservarMesas",
    element: <ReservarMesas></ReservarMesas>,
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/tableStatus",
    element: <PageTableStatus></PageTableStatus>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
