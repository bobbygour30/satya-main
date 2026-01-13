"use client";

import React from "react";
import assets from "../assets/assets";

export default function InsightsSection() {
  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER (AS EARLIER) ================= */}
        <div className="mb-12 max-w-3xl">
          <p className="uppercase tracking-[3px] text-[#B87C72] text-sm font-medium mb-2">
            Thought Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
            Insights & Stories
          </h2>
          <p className="text-[#828D9C] leading-relaxed">
            Explore the philosophy behind our clinical approach — where medical
            science, ethical care, and patient comfort come together to deliver
            consistently trusted outcomes.
          </p>
        </div>

        {/* ================= IMAGES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* IMAGE 1 */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={assets.insite}
              alt="Clinic insights environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={assets.insite1}
              alt="Advanced treatment insights"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-10 max-w-4xl">
          <p className="text-[#828D9C] leading-relaxed mb-4">
            Our clinics are designed as spaces of trust and precision — combining
            advanced dermatological technology with a calming, patient-first
            environment that supports both physical and emotional well-being.
          </p>
          <p className="text-[#828D9C] leading-relaxed">
            From consultation rooms to treatment suites, every detail reflects
            our commitment to transparency, safety, and outcomes backed by
            medical expertise.
          </p>
        </div>

      </div>
    </section>
  );
}
