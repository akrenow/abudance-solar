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
import AiSummarize from "./components/AiSummarize";
import Bipvpage from "./components/products/Bipvsubproducts";
import ProductDetailPage from "./components/products/ProductDetailPage";
import Faq from "./pages/Faq";
import Analytics from "./components/Analytics";
import { LocaleLayout, DefaultLanguageRedirect } from "./i18n/LocaleLayout";

// The same pages exist in every language: English at "/...", Arabic at "/ar/...".
// When adding a page, also add it to src/seo/pages.js (pre-rendering, sitemap, llms.txt).
const pageRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="products" element={<MainProductsPage />} />
    <Route path="products/solar-panels" element={<SubproductPage />} />
    <Route path="products/bipv-products" element={<Bipvpage />} />
    <Route path="products/solar-panels/:slug" element={<ProductDetailPage kind="pv" />} />
    <Route path="products/bipv-products/:slug" element={<ProductDetailPage kind="bipv" />} />
    <Route path="faq" element={<Faq />} />
    <Route path="contact" element={<Contact />} />
    <Route path="career" element={<Career />} />
    {/* <Route path="products/:model" element={<ProductDetailPage />} /> */}
    <Route path="downloads" element={<DownloadCenter />} />
    {/* Catch-all route for 404 - This should be the last route */}
    <Route path="*" element={<PageNotFound />} />
  </>
);

export const AppRoutes = () => (
  <>
    <Analytics />
    <ScrollToTop />
    <ScrollToTopButton />
    <AiSummarize />
    <Routes>
      <Route path="/ar" element={<LocaleLayout lang="ar" />}>
        {pageRoutes}
      </Route>
      <Route path="/en/*" element={<DefaultLanguageRedirect />} />
      <Route path="/" element={<LocaleLayout lang="en" />}>
        {pageRoutes}
      </Route>
    </Routes>
  </>
);

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
