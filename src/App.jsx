import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import PagePay from './Pages/PagePay';
import AllMeats from "./Pages/AllMeats";
import ScrollToTop from "./assets/components/Molecules/ScrollToTop"
import VerMesas from './Pages/VerMesas';
function App() {

  return (
    <>
    <Router>
    <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-meats" element={<AllMeats />} />
                <Route path="/pay" element={<PagePay />} />
                <Route path="/mesa" element={<VerMesas />} />
            </Routes>
        </Router>
    </>
  )
}

export default App;

//<Home></Home>
