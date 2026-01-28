"use client";
import React from "react";
import assets from "../assets/assets";
import { ArrowUpRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export default function InsightsSection() {
  return (
    <section className="w-full bg-[#FFF8EF] px-6 md:px-16 py-20">
      {/* ================= HEADER ================= */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="uppercase tracking-[3px] text-[#B87C72] text-sm font-medium mb-2">
            International Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            International Patient Stories
          </h2>
          <p className="mt-4 max-w-2xl text-[#828D9C] leading-relaxed">
            From consultation to recovery, international patients trust our
            doctors for safe, natural, and well-planned outcomes.
          </p>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-[#2B333C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#9E4A47] transition">
          VIEW STORIES
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ===== BIG IMAGE (PRIMARY STORY) ===== */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden ">
          <img
            src={assets.insite1} // Mr. Brown (USA)
            alt="Mr. Brown USA Hair Transplant"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ===== BIG TEXT CARD (PRIMARY STORY) ===== */}
        <div className="lg:col-span-5 bg-[#F4F5F6] rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#828D9C] mb-3">
              Hair Transplant
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#2B333C] mb-4 leading-snug">
              Mr. Brown {" "}
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "1em", height: "1em" }}
              />
              <span className="text-[#828D9C] text-xl"> {" "}(USA)</span>
            </h3>

            <p className="text-sm text-[#828D9C] leading-relaxed">
              A well-planned, long-term hair transplant result with healthy
              regrowth, achieved while preserving donor safety and future
              treatment options.
            </p>
          </div>

          <ArrowUpRight className="self-end text-[#2B333C]" />
        </div>

        {/* ===== IMAGE SMALL 1 ===== */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[260px]">
          <img
            src={assets.insite2} // Kelsy Dubai UAE
            alt="Kelsy Dubai UAE Hairline Design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== TEXT SMALL 1 ===== */}
        <div className="lg:col-span-3 bg-[#F4F5F6] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#828D9C] mb-3">
              Hairline Design
            </p>

            <h4 className="text-xl font-semibold text-[#2B333C] leading-snug">
              Kelsy {" "}
              <ReactCountryFlag
                countryCode="AE"
                svg
                style={{ width: "1em", height: "1em" }}
              />
              <span className="text-[#828D9C] text-xl"> {" "}(UAE)</span>
            </h4>

            <p className="mt-2 text-sm text-[#828D9C] leading-relaxed">
              A natural, age-appropriate hairline designed for balance, realism,
              and long-term aesthetic harmony.
            </p>
          </div>

          <ArrowUpRight className="self-end text-[#2B333C]" />
        </div>

        {/* ===== IMAGE SMALL 2 ===== */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[260px]">
          <img
            src={assets.insite} // Supreet Australia
            alt="Supreet Australia Hair Transplant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== TEXT SMALL 2 ===== */}
        <div className="lg:col-span-3 bg-[#F4F5F6] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#828D9C] mb-3">
              Hair Transplant
            </p>

            <h4 className="text-xl font-semibold text-[#2B333C] leading-snug">
              Supreet {" "}
              <ReactCountryFlag 
                countryCode="AU"
                svg
                style={{ width: "1em", height: "1em" }}
              />
              <span className="text-[#828D9C] text-xl"> {" "}(Australia)</span>
            </h4>

            <p className="mt-2 text-sm text-[#828D9C] leading-relaxed">
              Gradual, natural improvement in hair density achieved through
              careful graft planning and conservative execution.
            </p>
          </div>

          <ArrowUpRight className="self-end text-[#2B333C]" />
        </div>
      </div>
    </section>
  );
}
