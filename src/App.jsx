import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BeforeAfterPage from "./pages/BeforeAfterPage";
import CaseDetailPage from "./pages/CaseDetailPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />
        <Route path="/case/:id" element={<CaseDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}
