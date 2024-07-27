import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PagePay from './Pages/PagePay';
import AllMeats from './Pages/AllMeats';
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
import AddEmploye from './Pages/AddEmploye.jsx';
import ConfirmationPay from './Pages/ConfirmationPay.jsx';
import Pedidos from './Pages/Pedidos.jsx';
import AddStock from './assets/components/Molecules/addStockProduct/AddStock.jsx';
import { UserProvider } from './context/UserContext.jsx';
import ProtectedRoute from './assets/components/ProtectedRoute.jsx';
import ProductFound from './Pages/ProductFound.jsx';
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<HomeAdmin />} requiredRole={1} />} />
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path="/payComplete" element={<ProductModal />} />
          <Route path="/addStock" element={<ProtectedRoute element={<AddStock />} requiredRole={1} />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/confirmationPay" element={<ConfirmationPay />}/>
          <Route path="/pay" element={<PagePay />} />
          <Route path="/allMeats" element={<AllMeats />}/>
          <Route path="/allMeatsAdmin" element={<ProtectedRoute element={<AllMeatsAdmin />} requiredRole={1} />} />
          <Route path="/verMesas" element={<ProtectedRoute element={<VerMesas />} requiredRole={1} />} />
          <Route path="/homeAdmin" element={<ProtectedRoute element={<HomeAdmin />} requiredRole={1} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservarMesas" element={<ReservarMesas />} />
          <Route path="/addProduct" element={<ProtectedRoute element={<AddProduct />} requiredRole={1} />} />
          <Route path="/estadoMesa" element={<ProtectedRoute element={<PageTableStatus />} requiredRole={1} />} />
          <Route path="/pdf" element={<ProtectedRoute element={<Pdf />} requiredRole={1} />} />
          <Route path="/addEmploye" element={<ProtectedRoute element={<AddEmploye />} requiredRole={1} />} />
          <Route path="/Pedido" element={<ProtectedRoute element={<Pedidos />} requiredRole={1} />} />
          <Route path="/ProductFound" element={<ProductFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
