import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* ================= CORE ================= */
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import BeforeAfterPage from "./pages/BeforeAfterPage";

/* ================= CASE STUDIES ================= */
import CaseDetailPage from "./pages/CaseDetailPage";
import Shubham from "./pages/Shubham";
import Arjun from "./pages/Arjun";

/* ================= CLINIC ================= */
import AboutSatyaDelhi from "./pages/AboutSatyaDelhi";
import AboutSatyaGurugram from "./pages/AboutSatyaGurugram";

/* ================= SKIN ================= */
import LaserHairRemoval from "./pages/LaserHairRemoval";
import ChemicalPeelTreatment from "./pages/ChemicalPeelTreatment";
import MoleRemovalTreatment from "./pages/MoleRemovalTreatment";
import LaserToningTreatment from "./pages/LaserToningTreatment";
import CO2FractionalLaserTreatment from "./pages/CO2FractionalLaserTreatment";
import MNRFTreatment from "./pages/MNRFTreatment";
import BotoxTreatment from "./pages/BotoxTreatment";

/* ================= HAIR ================= */
import BeardHairTransplant from "./pages/BeardHairTransplant";
import EyebrowTransplant from "./pages/EyebrowTransplant";
import FemaleHairTransplant from "./pages/FemaleHairTransplant";
import FUEHairTransplant from "./pages/FUEHairTransplant";
import FUTHairTransplant from "./pages/FUTHairTransplant";
import BodyHairTransplant from "./pages/BodyHairTransplant";
import RepairHairTransplant from "./pages/RepairHairTransplant";
import LongHairTransplant from "./pages/LongHairTransplant";
import HairWeaving from "./pages/HairWeaving";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<HomePage />} />

        {/* ================= BLOG ================= */}
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />

        {/* ================= BEFORE / AFTER ================= */}
        <Route path="/before-after" element={<BeforeAfterPage />} />

        {/* ================= CASE STUDIES ================= */}
        <Route path="/case/prakhar" element={<CaseDetailPage />} />
        <Route path="/case/shubham" element={<Shubham />} />
        <Route path="/case/arjun" element={<Arjun />} />

        {/* ================= CLINIC ================= */}
        <Route path="/delhi" element={<AboutSatyaDelhi />} />
        <Route path="/gurgaon" element={<AboutSatyaGurugram />} />

        {/* ================= SKIN ================= */}
        <Route path="/skin/laser-hair-reduction" element={<LaserHairRemoval />} />
        <Route path="/skin/chemical-peel" element={<ChemicalPeelTreatment />} />
        <Route path="/skin/mole-removal" element={<MoleRemovalTreatment />} />
        <Route path="/skin/laser-toning" element={<LaserToningTreatment />} />
        <Route
          path="/skin/fractional-co2-laser"
          element={<CO2FractionalLaserTreatment />}
        />
        <Route path="/skin/mnrf-treatment" element={<MNRFTreatment />} />
        <Route path="/skin/botox" element={<BotoxTreatment />} />

        {/* ================= HAIR ================= */}
        <Route path="/beard-hair-transplant" element={<BeardHairTransplant />} />
        <Route path="/eyebrow-transplant" element={<EyebrowTransplant />} />
        <Route
          path="/hair-transplant/female"
          element={<FemaleHairTransplant />}
        />
        <Route path="/hair-transplant/fue" element={<FUEHairTransplant />} />
        <Route path="/hair-transplant/fut" element={<FUTHairTransplant />} />
        <Route path="/hair-transplant/body" element={<BodyHairTransplant />} />
        <Route path="/hair-transplant/repair" element={<RepairHairTransplant />} />
        <Route path="/hair-transplant/long" element={<LongHairTransplant />} />
        <Route path="/hair-weaving" element={<HairWeaving />} />
      </Routes>

      <Footer />
    </>
  );
}
