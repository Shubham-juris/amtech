import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ScrollToTop from "../components/toptoscroll/ToptoScroll";
import ExportPage from "../pages/ExportPage";
import ContactPage from "../pages/ContactPage";
import GetQuote from "../pages/GetQuotePage";

const RoutesPage = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="export" element={<ExportPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="quote" element={<GetQuote />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
