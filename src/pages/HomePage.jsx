import React from "react";
import BannerSlider from "../components/BannerSlider";
// import LogoSlider from "../components/LogoSlider";
import HeroSection from "../components/HeroSection";
import ServicesAndEvolution from "../components/ServicesAndEvolution";
import Testimonials from "../components/Testimonials";
import FaceLoveForm from "../components/FaceLoveForm";
import ClinicSection from "../components/ClinicSection";
import TeamSlider from "../components/TeamSlider";
import InsightsSection from "../components/InsightsSection";
import FAQComponent from "../components/FAQComponent";
import ProductShowcaseSection from "../components/ProductShowcaseSection";
// import BadgesSection from "../components/BadgesSection";
import Ratings from "../components/Ratings";
import Blogs from "../components/Blogs";
import SatyaIntroduction from "../components/SatyaIntroduction";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <div>
      <SEO
        title="World’s Leading Skin & Hair Clinic | Advanced Hair Transplant & Skin Treatments"
        description="World’s leading skin & hair clinic offering advanced hair transplant, dermatology, and aesthetic skin treatments. Doctor-led care. Natural results. Trusted worldwide."
        canonical="https://satyaskinhair.com/"
        showSchema={true}
      />

      <BannerSlider />
      {/* <LogoSlider  /> */}
      <SatyaIntroduction />
      <HeroSection />
      <Ratings />
      <ServicesAndEvolution />
      <Testimonials />
      <FaceLoveForm />
      <ClinicSection />
      <TeamSlider />
      <InsightsSection />
      <FAQComponent />
      <ProductShowcaseSection />
      <Blogs />
      {/* <BadgesSection /> */}
    </div>
  );
};

export default HomePage;
