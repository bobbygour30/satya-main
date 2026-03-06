"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { Link } from "react-router-dom";
import ConsultationPopup from "./ConsultationPopup";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="w-full bg-[#FFF8EF] px-6 sm:py-20 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* ================= TOP + LEFT TEXT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 space-y-6 flex flex-col justify-center items-center"
        >
          <div>
            <p className="text-3xl md:text-4xl font-semibold text-[#2B333C] mb-3">
              What We Do Differently?
            </p>

            <h2 className="text-xl tracking-widest text-[#B87C72] mb-2 uppercase">
              Comprehensive Care
            </h2>

            <p className="text-sm text-[#828D9C] mb-2">
              <span className="font-medium text-[#2B333C]">Our Promise:</span>{" "}
              We will never over treat you.
            </p>

            <p className="text-sm text-[#828D9C]">
              Every treatment philosophy at Satya is rooted in three pillars:
              Science, Artistry, Trust
            </p>
          </div>
        </motion.div>

        {/* ================= CARD 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-white rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between items-center"
        >
          <div>
            <h3 className="text-3xl font-semibold text-[#2B333C] mb-4">
              Hair Concerns
            </h3>

            <ul className="text-xl text-[#828D9C] space-y-1">
              <li>
                <Link
                  to="/hair-transplant/male-hair-loss"
                  className="hover:text-[#B87C72] transition-colors duration-200"
                >
                  Male Hair Loss
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-transplant/female-hair-loss"
                  className="hover:text-[#B87C72] transition-colors duration-200"
                >
                  Female Hair Loss
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-transplant/alopecia"
                  className="hover:text-[#B87C72] transition-colors duration-200"
                >
                  Alopecia Areata
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-transplant/telogen"
                  className="hover:text-[#B87C72] transition-colors duration-200"
                >
                  Telogen Effluvium
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="/hair-treatment"
            className="
    mt-6
    inline-flex items-center gap-2
    text-sm md:text-base
    font-medium
    text-[#B87C72]
    px-4 py-2
    rounded-full
    border border-transparent
    transition-all duration-300 ease-out
    hover:border-[#B87C72]
    hover:bg-[#FFF8EF]
    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-[#B87C72]/40
  "
          >
            Read more
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* ================= CARD 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#2B333C] rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between items-center"
        >
          <div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Hair Treatments
            </h3>

            <ul className="text-xl text-[#DFDFDD] space-y-1">
              <li>
                <Link
                  to="/hair-treatment"
                  className="hover:text-[#B87C72] transition-colors duration-200 block"
                >
                  Hair Transplant
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-treatment"
                  className="hover:text-[#B87C72] transition-colors duration-200 block"
                >
                  Hairloss Treatment
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-transplant/repair"
                  className="hover:text-[#B87C72] transition-colors duration-200 block"
                >
                  Corrective Transplants
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-treatment"
                  className="hover:text-[#B87C72] transition-colors duration-200 block"
                >
                  Regenerative Hair Therapies
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="/hair-treatment"
            className="
    mt-6
    inline-flex items-center gap-2
    text-sm md:text-base
    font-medium
    text-[#B87C72]
    px-4 py-2
    rounded-full
    border border-transparent
    transition-all duration-300 ease-out
    hover:border-[#B87C72]
    hover:bg-[#FFF8EF]
    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-[#B87C72]/40
  "
          >
            Read more
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* ================= CARD 3 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-white rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between items-center"
        >
          <div>
            <h3 className="text-3xl font-semibold text-[#2B333C] mb-4">
              Skin Concerns
            </h3>

            <ul className="text-xl text-[#828D9C] space-y-1 ">
              <li>Pigmentation</li>
              <li>Wrinkles & Fine Lines</li>
              <li>Acne/Acne Scars</li>
              <li>Dull Skin & Open Pores</li>
            </ul>
          </div>

          <Link
            to="/skin-treatment"
            className="
    mt-6
    inline-flex items-center gap-2
    text-sm md:text-base
    font-medium
    text-[#B87C72]
    px-4 py-2
    rounded-full
    border border-transparent
    transition-all duration-300 ease-out
    hover:border-[#B87C72]
    hover:bg-[#FFF8EF]
    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-[#B87C72]/40
  "
          >
            Read more
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* ================= CARD 4 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#2B333C] rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between items-center"
        >
          <div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Skin Treatments
            </h3>

            <ul className="text-xl text-[#DFDFDD] space-y-1">
              <li>Anti Aging</li>
              <li>Medi-Facials</li>
              <li>Laser Treatments</li>
              <li>Acne & Scar</li>
            </ul>
          </div>

          <Link
            to="/skin-treatment"
            className="
    mt-6
    inline-flex items-center gap-2
    text-sm md:text-base
    font-medium
    text-[#B87C72]
    px-4 py-2
    rounded-full
    border border-transparent
    transition-all duration-300 ease-out
    hover:border-[#B87C72]
    hover:bg-[#FFF8EF]
    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-[#B87C72]/40
  "
          >
            Read more
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* ================= IMAGE (UNCHANGED) ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 rounded-2xl overflow-hidden relative min-h-[260px]"
        >
          <img
            src={assets.banner}
            alt="Satya Services"
            className="w-full h-full object-cover object-[50%_40%]"
          />

          <Link
            to="/hair-treatment"
            className="absolute bottom-5 left-5 bg-[#2B333C] hover:bg-[#9E4A47] transition text-white px-5 py-2.5 rounded-full text-sm font-medium"
          >
            VIEW SERVICES
          </Link>
        </motion.div>
      </div>
      {/* ================= CTA BUTTON ================= */}
      <div className="mt-8 flex justify-center">
        <button
        onClick={() => setShowPopup(true)}
          className="
      bg-[#9E4A47]
      hover:bg-[#84332F]
      active:scale-[0.98]
      text-white
      font-semibold
      text-sm sm:text-base md:text-lg
      px-6 sm:px-8 md:px-10
      py-3 sm:py-3.5 md:py-4
      rounded-xl
      shadow-lg
      hover:shadow-xl
      transition-all duration-300 ease-in-out
      w-full sm:w-auto
    "
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Book Your First Free Assessment
        </button>
      </div>
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
}
