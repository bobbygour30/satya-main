"use client";

import React from "react";
import { Maximize2 } from "lucide-react";

export default function ClinicSection() {
  return (
    <section className="w-full bg-[#FFF8EF] py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Where
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
          Our Care Network
        </h2>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mb-10">
          Maven partners with thousands of top-rated providers worldwide to deliver virtual and in-person care that’s personalized, evidence-based, and built around you.
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT IMAGE CARD */}
          <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[330px] group shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/662e5390115777703fa6e8da/663a68b645c5aaf6dbbe5d51_Clinic%202.webp"
              alt="Maven care space"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Expand Icon */}
            <div className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-sm cursor-pointer transition">
              <Maximize2 size={18} />
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[330px] group shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/662e5390115777703fa6e8da/663a68b63009967fc1cd5452_Clinic%201-p-2600.webp"
              alt="Maven provider consultation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Expand Icon */}
            <div className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-sm cursor-pointer transition">
              <Maximize2 size={18} />
            </div>

            {/* CTA Button */}
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white text-sm font-medium px-8 py-3 rounded-full shadow-xl hover:opacity-90 transition-all">
              Book a consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}