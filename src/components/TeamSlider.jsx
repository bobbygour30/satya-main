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

        {/* TWO BIG HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white border border-[#FCEBDE] rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3"
            >
              {/* IMAGE */}
              <div className="md:col-span-1 h-[300px] md:h-auto">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#2B333C] mb-2">
                  {doctor.name}
                </h3>

                <p className="text-[#9E4A47] font-medium mb-4">
                  {doctor.role}
                </p>

                <div className="w-16 h-[2px] bg-[#9E4A47] mb-6" />

                <p className="text-[#828D9C] leading-relaxed text-sm md:text-base">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
