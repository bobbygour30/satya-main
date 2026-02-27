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
// import BotoxTreatment from "./pages/BotoxTreatment";

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
import Lokesh from "./pages/Lokesh";
import Gopal from "./pages/Gopal";
import HairTreatment from "./pages/HairTreatment";
import SkinTreatment from "./pages/SkinTreatment";
import EyebrowHairTransplant from "./pages/EyebrowTransplant";
import MaximumHarvestingTechnique from "./pages/MHT";
import BalancedHairTransplant from "./pages/BalancedHairTransplant";
import TelogenEffluvium from "./pages/TelogenEffluvium";
import AlopeciaAreata from "./pages/AlopeciaAreata";
import MaleHairLoss from "./pages/MaleHairLoss";
import SyntheticHairTransplant from "./pages/SyntheticHairTransplant";
import HairWeavingSolutions from "./pages/HairWeaving";
import MesotherapyHairLoss from "./pages/MesotherapyHairLoss";
import StemCellHairTransplant from "./pages/StemCellHairTransplant";
import PRPHairTreatment from "./pages/PRPHairTreatment";
import LaserCombTreatment from "./pages/LaserCombTreatment";
import ScalpMicropigmentation from "./pages/ScalpMicropigmentation";
import CarbonLaserFacial from "./pages/CarbonLaserFacial";
import HIFUTreatment from "./pages/HIFUTreatment";
import FiveDFacialTreatment from "./pages/FiveDFacialTreatment";
import VampireFacelift from "./pages/VampireFacelift";
import MesotherapyTreatment from "./pages/MesotherapyTreatment";
import Admin from "./pages/Admin";

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
        <Route path="/case/lokesh" element={<Lokesh />} />
        <Route path="/case/gopal" element={<Gopal />} />

        {/* ================= CLINIC ================= */}
        <Route path="/delhi" element={<AboutSatyaDelhi />} />
        <Route path="/gurgaon" element={<AboutSatyaGurugram />} />

        {/* ================= SKIN ================= */}
        <Route
          path="/skin/laser-hair-reduction"
          element={<LaserHairRemoval />}
        />
        <Route path="/skin/chemical-peel" element={<ChemicalPeelTreatment />} />
        <Route path="/skin/mole-removal" element={<MoleRemovalTreatment />} />
        <Route path="/skin/laser-toning" element={<LaserToningTreatment />} />
        <Route
          path="/skin/fractional-co2-laser"
          element={<CO2FractionalLaserTreatment />}
        />
        <Route path="/skin/mnrf-treatment" element={<MNRFTreatment />} />
        <Route path="/skin/carbon-facial" element={<CarbonLaserFacial />} />
        <Route path="/skin/hifu" element={<HIFUTreatment />} />
        <Route path="/skin/5d-facial" element={<FiveDFacialTreatment />} />
        <Route path="/skin/vampire-facelift" element={<VampireFacelift />} />
        <Route path="/skin/mesotherapy" element={<MesotherapyTreatment />} />

        {/* ================= HAIR ================= */}

        <Route path="/hair-treatment" element={<HairTreatment />} />
        <Route path="/skin-treatment" element={<SkinTreatment />} />
        <Route
          path="/hair-transplant/beard-hair-transplant"
          element={<BeardHairTransplant />}
        />
        <Route
          path="/hair-transplant/eyebrow-transplant"
          element={<EyebrowHairTransplant />}
        />
        <Route
          path="/hair-transplant/balanced"
          element={<BalancedHairTransplant />}
        />
        <Route
          path="/hair-transplant/female"
          element={<FemaleHairTransplant />}
        />
        <Route path="/hair-transplant/fue" element={<FUEHairTransplant />} />
        <Route path="/hair-transplant/fut" element={<FUTHairTransplant />} />
        <Route path="/hair-transplant/body" element={<BodyHairTransplant />} />
        <Route
          path="/hair-transplant/repair"
          element={<RepairHairTransplant />}
        />
        <Route path="/hair-transplant/long" element={<LongHairTransplant />} />
        <Route
          path="/hair-transplant/mht"
          element={<MaximumHarvestingTechnique />}
        />
        <Route path="/hair-transplant/telogen" element={<TelogenEffluvium />} />
        <Route path="/hair-transplant/alopecia" element={<AlopeciaAreata />} />
        <Route
          path="/hair-transplant/male-hair-loss"
          element={<MaleHairLoss />}
        />
        <Route
          path="/hair-transplant/female-hair-loss"
          element={<FemaleHairTransplant />}
        />
        <Route
          path="/hair-transplant/synthetic"
          element={<SyntheticHairTransplant />}
        />
        <Route
          path="/hair-transplant/hair-weaving"
          element={<HairWeavingSolutions />}
        />
        <Route
          path="/hair-transplant/mesotherapy"
          element={<MesotherapyHairLoss />}
        />
        <Route
          path="/hair-transplant/stem-cell"
          element={<StemCellHairTransplant />}
        />
        <Route
          path="/hair-transplant/prp"
          element={<PRPHairTreatment />}
        />
        <Route
          path="/hair-transplant/laser-comb"
          element={<LaserCombTreatment />}
        />
        <Route
          path="/hair-transplant/scalp-micropigmentation"
          element={<ScalpMicropigmentation />}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>

      <Footer />
    </>
  );
}
