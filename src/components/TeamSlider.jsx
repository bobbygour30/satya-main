"use client";
import React from "react";
import assets from "../assets/assets";

const doctors = [
  {
    name: "Dr. Shail Gupta",
    role: "Founder & Hair Transplant Specialist",
    image: assets.drShailGupta,
    description:
      "Dr. Shail Gupta is a board-certified dermatologist, renowned hair transplant expert, and founder of Satya Skin & Hair Solutions. Known for his holistic approach, he focuses on both physical results and emotional well-being. Beyond clinical practice, he educates and inspires a global audience through social platforms. A multifaceted personality, musician, artist, writer, and subconscious healer, he is widely respected as a global authority in dermatology and hair restoration.",
  },
  {
    name: "Dr. Ruchi Agarwal",
    role: "Co-Founder & Consultant Dermatologist",
    image: assets.drRuchiAgarwal,
    description:
      "Dr. Ruchi Agarwal is a board certified dermatologist and co-founder of Satya Skin & Hair Solutions, bringing over 20 years of experience in clinical and cosmetic dermatology. She specializes in dermato-surgical and advanced aesthetic procedures, supported by world class training. Known for her empathetic, patient-first approach, Dr. Ruchi emphasizes attentive listening and personalized treatment planning ensuring every patient feels heard, understood, and confidently guided.",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-[#FFF8EF] py-20 px-6 md:px-16">
      <div className="">
        {/* Header */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Who we are
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
          Our Care Team
        </h2>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mb-16">
          Meet the experts behind Satya Skin & Hair Solutions, a trusted team of
          dermatologists and hair restoration specialists delivering
          personalized, high quality skin and hair care with honesty, precision,
          and proven results.
        </p>

        {/* 4-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Doctor 1 Image */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#FCEBDE]">
            <img
              src={doctors[0].image}
              alt={doctors[0].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor 1 Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#FCEBDE] p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#2B333C] mb-2">
              {doctors[0].name}
            </h3>
            <p className="text-[#9E4A47] font-medium mb-4">
              {doctors[0].role}
            </p>
            <div className="w-14 h-[2px] bg-[#9E4A47] mb-4" />
            <p className="text-[#828D9C] leading-relaxed text-sm">
              {doctors[0].description}
            </p>
          </div>

          {/* Doctor 2 Image */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#FCEBDE]">
            <img
              src={doctors[1].image}
              alt={doctors[1].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor 2 Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#FCEBDE] p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#2B333C] mb-2">
              {doctors[1].name}
            </h3>
            <p className="text-[#9E4A47] font-medium mb-4">
              {doctors[1].role}
            </p>
            <div className="w-14 h-[2px] bg-[#9E4A47] mb-4" />
            <p className="text-[#828D9C] leading-relaxed text-sm">
              {doctors[1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
