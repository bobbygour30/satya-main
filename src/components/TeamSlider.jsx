"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import assets from "../assets/assets";

const doctors = [
  {
    name: "Dr. Shail Gupta",
    role: "Founder & Hair Transplant Specialist",
    image: assets.drShailGupta,
    description:
      "Dr. Shail Gupta is a board-certified dermatologist and founder of Satya Skin & Hair Solutions. Known for his holistic approach, he combines medical precision with emotional understanding to deliver natural, lasting results.",
  },
  {
    name: "Dr. Ruchi Agarwal",
    role: "Co-Founder & Consultant Dermatologist",
    image: assets.drRuchiAgarwal,
    description:
      "Dr. Ruchi Agarwal brings over 20 years of expertise in dermatology and aesthetics. She is widely respected for her patient-first approach, precision treatments, and ethical clinical practice.",
  },
];

export default function TeamSlider() {
  const [index, setIndex] = useState(0);
  const doctor = doctors[index];

  return (
    <section className="w-full bg-[#FFF8EF] px-6 md:px-16 py-20">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-start mb-14">
        <div>
          <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
            Who we are
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
            Our Team
          </h2>

          <p className="text-[#828D9C] max-w-2xl leading-relaxed">
            Meet our team of experts, committed to delivering ethical,
            science-backed care with precision, empathy, and excellence.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex gap-3">
          <button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1))
            }
            className="w-11 h-11 rounded-full bg-[#2B333C] text-white flex items-center justify-center hover:bg-[#9E4A47] transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % doctors.length)
            }
            className="w-11 h-11 rounded-full bg-[#2B333C] text-white flex items-center justify-center hover:bg-[#9E4A47] transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* ===== LEFT CARD ===== */}
        <div className="lg:col-span-3 bg-[#2B333C] rounded-3xl p-8 flex flex-col justify-between text-white">
          <div>
            <p className="text-sm opacity-80 mb-2">Meet Us</p>

            <h3 className="text-2xl font-semibold mb-4">
              We are a team of experts
            </h3>

            <p className="text-sm text-[#DFDFDD] leading-relaxed">
              Our clinic stands at the forefront of skin & hair innovation,
              equipped with advanced technology and trusted medical expertise.
            </p>
          </div>

          <button className="mt-8 bg-white text-[#2B333C] px-6 py-3 rounded-full text-sm font-medium w-fit hover:bg-[#FCEBDE] transition">
            ABOUT US
          </button>
        </div>

        {/* ===== CENTER IMAGE ===== */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>

        {/* ===== RIGHT INFO ===== */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#2B333C] mb-6">
              {doctor.name}
            </h3>

            <p className="text-[#828D9C] text-sm leading-relaxed">
              {doctor.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
