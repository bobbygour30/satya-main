import React from "react";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import LogoSlider from "../components/LogoSlider";
import HeroSection from "../components/HeroSection";
import ServicesAndEvolution from "../components/ServicesAndEvolution";
import Testimonials from "../components/Testimonials";
import FaceLoveForm from "../components/FaceLoveForm";
import ClinicSection from "../components/ClinicSection";
import TeamSlider from "../components/TeamSlider";
import InsightsSection from "../components/InsightsSection";
import FAQComponent from "../components/FAQComponent";
import ProductShowcaseSection from "../components/ProductShowcaseSection";
import BadgesSection from "../components/BadgesSection";
import Footer from "../components/Footer";
import Ratings from "../components/Ratings";
import SatyaIntroduction from "../components/SatyaIntroduction";
import Blogs from "../components/Blogs";

const HomePage = () => {


  return (
    <div>
      <Navbar />
      <BannerSlider />
      <LogoSlider  />
      <SatyaIntroduction />
      <Ratings />
      <ServicesAndEvolution />
      <Testimonials />  
      <HeroSection />
      <FaceLoveForm />
      <ClinicSection />
      <TeamSlider />
      <InsightsSection />
      <FAQComponent />
      <ProductShowcaseSection />
      <Blogs />
      <BadgesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
