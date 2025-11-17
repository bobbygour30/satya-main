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

const HomePage = () => {
  const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo_of_the_United_Nations_%28UN%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/McDonald%27s_Golden_Arches.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Tesla_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
];

  return (
    <div>
      <Navbar />
      <BannerSlider />
      <LogoSlider logos={logos} />
      <HeroSection />
      <ServicesAndEvolution />
      <Testimonials />
      <FaceLoveForm />
      <ClinicSection />
      <TeamSlider />
      <InsightsSection />
      <FAQComponent />
      <ProductShowcaseSection />
      <BadgesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
