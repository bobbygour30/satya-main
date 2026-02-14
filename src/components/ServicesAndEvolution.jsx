import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Slider images
const skinImages = [assets.skin, assets.skin2, assets.skin3, assets.skin4];
const hairImages = [assets.hair1, assets.hair2, assets.hair3];

const ServicesSection = () => {
  const [skinIndex, setSkinIndex] = useState(0);
  const [hairIndex, setHairIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const skinTimer = setInterval(() => {
      setSkinIndex((prev) => (prev + 1) % skinImages.length);
    }, 3500);

    const hairTimer = setInterval(() => {
      setHairIndex((prev) => (prev + 1) % hairImages.length);
    }, 4000);

    return () => {
      clearInterval(skinTimer);
      clearInterval(hairTimer);
    };
  }, []);

  return (
    <div className="w-full bg-[#FFF8EF] sm:pt-10 pt-4 sm:pb-20 px-4 md:px-8 lg:px-12">
      {/* REAL RESULTS SECTION */}
      <div className="grid md:grid-cols-3 gap-10 sm:mt-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] leading-tight">
            Real Care.
            <br />
            Real Results.
          </h2>

          <p className="text-[#828D9C] max-w-sm leading-relaxed">
            When ethics lead medicine, outcomes follow naturally. Thousands of
            patients trust Satya for honest guidance and results that feel real.
          </p>

          <button className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition shadow-lg">
            See Patient Stories
          </button>
        </motion.div>

        {/* ================= SKIN RESULTS SLIDER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#FCEBDE]
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]"
        >
          <img
            src={skinImages[skinIndex]}
            alt="Skin Result"
            className="w-full h-auto object-cover transition-opacity duration-700"
          />

          <div className="p-5">
            <button className="w-full border border-[#9E4A47] text-[#9E4A47] py-2.5 rounded-full text-sm font-medium hover:bg-[#9E4A47] hover:text-white transition">
              Explore Skin Results
            </button>
          </div>
        </motion.div>

        {/* ================= HAIR RESULTS SLIDER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#FCEBDE]
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]"
        >
          <img
            src={hairImages[hairIndex]}
            alt="Hair Result"
            className="w-full h-auto object-cover transition-opacity duration-700"
          />

          <div className="p-5">
            <button className="w-full border border-[#9E4A47] text-[#9E4A47] py-2.5 rounded-full text-sm font-medium hover:bg-[#9E4A47] hover:text-white transition">
              Explore Hair Results
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
