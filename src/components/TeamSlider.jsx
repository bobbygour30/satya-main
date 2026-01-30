"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import assets from "../assets/assets";

const doctors = [
  {
    name: "Dr. Shail Gupta",
    role: "Founder",
    image: assets.drShailGupta,
    description:
      "Dr. Shail Gupta is a board-certified dermatologist, renowned hair transplant expert, and founder of Satya Skin & Hair Solutions. Known for his holistic approach, he focuses on both physical results and emotional well-being. Beyond clinical practice, he educates and inspires a global audience through social platforms. A multifaceted personality, musician, artist, writer, and subconscious healer, he is widely respected as a global authority in dermatology and hair restoration.",
  },
  {
    name: "Dr. Ruchi Agarwal",
    role: "Co-Founder",
    image: assets.drRuchiAgarwal,
    description:
      "Dr. Ruchi Agarwal is a board certified dermatologist and co-founder of Satya Skin & Hair Solutions, bringing over 24 years of experience in clinical and cosmetic dermatology. She specializes in dermato-surgical and advanced aesthetic procedures, supported by world class training. Known for her empathetic, patient-first approach, Dr. Ruchi emphasizes attentive listening and personalized treatment planning ensuring every patient feels heard, understood, and confidently guided.",
  },
];

export default function TeamSlider() {
  const [index, setIndex] = useState(0);
  const doctor = doctors[index];

  const prev = () =>
    setIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % doctors.length);

  return (
    <section className="w-full bg-[#FFF8EF] px-6 md:px-16 sm:py-20 py-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium">
            Our Care Team
          </p>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-[#2B333C] text-white flex items-center justify-center hover:bg-[#9E4A47] transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#2B333C] text-white flex items-center justify-center hover:bg-[#9E4A47] transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* LEFT CARD */}
        <div className="lg:col-span-3 bg-[#2B333C] rounded-3xl p-8 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Meet the Experts
            </h3>

            <p className="text-sm text-[#DFDFDD] leading-relaxed">
              Meet the experts behind Satya Skin & Hair Solutions, a trusted team
              of dermatologists and hair restoration specialists delivering
              personalized, high-quality skin and hair care with honesty,
              precision, and proven results.
            </p>
          </div>

          <button className="mt-8 bg-white text-[#2B333C] px-6 py-3 rounded-full text-sm font-medium w-fit hover:bg-[#FCEBDE] transition">
            ABOUT US
          </button>
        </div>

        {/* CENTER IMAGE */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>

        {/* MOBILE NAVIGATION (MOVED BELOW IMAGE) */}
        <div className="flex md:hidden justify-center gap-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-[#2B333C] text-white flex items-center justify-center active:scale-95 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#2B333C] text-white flex items-center justify-center active:scale-95 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT INFO */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#2B333C] mb-2">
              {doctor.name}
            </h3>

            <p className="text-sm text-[#828D9C] mb-2">{doctor.role}</p>

            <p className="text-[#828D9C] text-sm leading-relaxed">
              {doctor.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
