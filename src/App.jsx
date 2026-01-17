import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BeforeAfterPage from "./pages/BeforeAfterPage";
import CaseDetailPage from "./pages/CaseDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import Shubham from "./pages/Shubham";
import Arjun from "./pages/Arjun";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />
        <Route path="/case/prakhar" element={<CaseDetailPage />} />
        <Route path="/case/shubham" element={<Shubham />} />
        <Route path="/case/arjun" element={<Arjun />} />
      </Routes>

      <Footer />
    </>
  );
}
