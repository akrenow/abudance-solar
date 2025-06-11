// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
// import ProductDetailPage from './pages/ProductDetail';
// import ProductCatalog from './components/products/ProductCatalog';

import DownloadCenter from "./components/downloads/DownloadCenter";
import MainProductsPage from "./components/products/MainProductsPage";
import Home from "./pages/Home";
import SubproductPage from "./components/products/SubproductPage";
import Contact from "./components/Contact";
import Career from "./pages/Career";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<MainProductsPage />} />
        <Route path="/products/solar-panels" element={<SubproductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="/products/:model" element={<ProductDetailPage />} /> */}
        <Route path="/downloads" element={<DownloadCenter />} />
      </Routes>
    </Router>
  );
};

export default App;
