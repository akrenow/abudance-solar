// src/App.jsx
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
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<MainProductsPage />} />
        <Route path="/products/solar-panels" element={<SubproductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="/products/:model" element={<ProductDetailPage />} /> */}
        <Route path="/downloads" element={<DownloadCenter />} />
        {/* Catch-all route for 404 - This should be the last route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
