"use client";
import React from "react";
import assets from "../assets/assets";
import { ArrowUpRight } from "lucide-react";

export default function InsightsSection() {
  return (
    <section className="w-full bg-[#FFF8EF] px-6 md:px-16 py-20">
      
      {/* ================= HEADER ================= */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="uppercase tracking-[3px] text-[#B87C72] text-sm font-medium mb-2">
            News Over News
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            INSIGHTS
          </h2>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-[#2B333C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#9E4A47] transition">
          VIEW INSIGHTS
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ===== BIG IMAGE (LEFT) ===== */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden h-[420px]">
          <img
            src={assets.insite}
            alt="Insight cover"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ===== BIG TEXT CARD (RIGHT) ===== */}
        <div className="lg:col-span-5 bg-[#F4F5F6] rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#828D9C] mb-3">
              Innovation
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#2B333C] mb-4 leading-snug">
              Behind the Smile: A Day in the Life of a Dentist
            </h3>

            <p className="text-sm text-[#828D9C] leading-relaxed">
              Delve into the bustling world of dentistry as we shadow a dentist
              through their daily routine, from early morning consultations to
              late-night emergencies.
            </p>
          </div>

          <ArrowUpRight className="self-end text-[#2B333C]" />
        </div>

        {/* ===== IMAGE SMALL 1 ===== */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[260px]">
          <img
            src={assets.insite1}
            alt="Awareness"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== TEXT SMALL 1 ===== */}
        <div className="lg:col-span-3 bg-[#F4F5F6] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#828D9C] mb-3">
              News
            </p>

            <h4 className="text-xl font-semibold text-[#2B333C] leading-snug">
              Navigating the Dental Marketplace
            </h4>
          </div>

          <ArrowUpRight className="self-end text-[#2B333C]" />
        </div>

        {/* ===== IMAGE SMALL 2 ===== */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[260px]">
          <img
            src={assets.insite2}
            alt="Dentist portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== TEXT SMALL 2 ===== */}
        <div className="lg:col-span-3 bg-[#F4F5F6] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#828D9C] mb-3">
              Dentist
            </p>

            <h4 className="text-xl font-semibold text-[#2B333C] leading-snug">
              Laying the Foundation for a Healthy Smile
            </h4>
          </div>

          <ArrowUpRight className="self-end text-[#2B333C]" />
        </div>

      </div>
    </section>
  );
}
