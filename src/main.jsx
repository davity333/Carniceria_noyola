import App from './App.jsx'
import './index.css'
import PagePay from './Pages/PagePay';
import AllMeats from "./Pages/AllMeats";
import VerMesas from './Pages/VerMesas';
import AddProduct from './Pages/AddProduct.jsx';
import ReservarMesas from './Pages/ReservarMesas.jsx';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
    path: "/verMesas",
    element: <VerMesas></VerMesas>,
  },
  {
    path: "/reservarMesas",
    element: <ReservarMesas></ReservarMesas>,
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
