"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, MoveUpRight } from "lucide-react";
import assets from "../assets/assets";

const doctors = [
  {
    name: "Dr. Shail Gupta",
    image: assets.drShailGupta,
    description:
      "Dr. Shail Gupta is a leading OB-GYN and fertility specialist with over 15 years of experience supporting families through conception and beyond.",
  },
  {
    name: "Dr. Ruchi Agarwal",
    image: assets.drRuchiAgarwal,
    description:
      "Dr. Ruchi Agarwal specializes in high-risk pregnancy and maternal-fetal medicine, delivering compassionate, evidence-based care.",
  },

];

export default function TeamSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % doctors.length);
  const prev = () =>
    setIndex((i) => (i - 1 + doctors.length) % doctors.length);

  const doctor = doctors[index];

  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-6 md:px-20">
      <div className="max-w-[1500px] mx-auto">

        {/* TOP TEXT */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Who we are
        </p>

        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            Our Care Team
          </h2>

          {/* SLIDER NAV BUTTONS */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#9E4A47] text-white hover:bg-[#84332F] transition shadow-md"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#9E4A47] text-white hover:bg-[#84332F] transition shadow-md"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mt-3 mb-10">
          Meet the experts behind Maven Clinic board-certified physicians, midwives, mental health providers, and coaches dedicated to delivering personalized, high-quality care at every stage.
        </p>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT CARD – Featured */}
          <div className="bg-[#2B333C] text-white rounded-2xl p-10 flex flex-col justify-between min-h-[420px] shadow-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-sm uppercase tracking-wider font-medium text-[#DFDFDD]">
                Meet the team
              </h3>
              <MoveUpRight size={19} className="text-[#DFDFDD]/70" />
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-4 text-white">
                Leaders in women’s & family health
              </h3>
              <p className="text-[#DFDFDD] text-sm leading-relaxed">
                Our network includes top-rated specialists across fertility, pregnancy, postpartum, pediatrics, menopause, and mental health all in one place.
              </p>
            </div>

            <button className="bg-[#FFF8EF] text-[#2B333C] px-7 py-3 rounded-full font-medium mt-6 hover:bg-[#FCEBDE] transition shadow-md">
              Learn more about us
            </button>
          </div>

          {/* MIDDLE IMAGE WITH ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={doctor.image}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden h-[420px] shadow-lg border border-[#FCEBDE]"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* RIGHT DOCTOR CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-2xl p-10 flex flex-col justify-between min-h-[420px] shadow-lg border border-[#FCEBDE]"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#2B333C] mb-6">
                  {doctor.name}
                </h3>
                <p className="text-[#828D9C] leading-relaxed text-sm">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}