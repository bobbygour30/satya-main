"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";

const insights = [
  {
    id: 1,
    tag: "Innovation",
    title: "The Future of Women’s & Family Health",
    desc:
      "Explore how Maven is redefining care with virtual-first access, personalized support, and evidence-based outcomes for every life stage.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2000",
  },
  {
    id: 2,
    tag: "Awareness",
    title: "Breaking the Silence on Postpartum Mental Health",
    desc:
      "Why 1 in 5 new mothers experience anxiety or depression and how early intervention can change everything.",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba0?q=80&w=2000",
  },
  {
    id: 3,
    tag: "Lifestyle",
    title: "Nutrition, Fertility & Long-Term Wellness",
    desc:
      "How diet impacts conception, pregnancy outcomes, and hormonal health across decades.",
    image:
      "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=2000",
  },
];

export default function InsightsSection() {
  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <p className="uppercase tracking-[3px] text-[#B87C72] text-sm font-medium">
            Thought Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-1 text-[#2B333C]">
            Insights & Stories
          </h2>
        </div>

        <button className="mt-5 md:mt-0 bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition shadow-lg">
          View all insights <MoveUpRight size={17} />
        </button>
      </div>

      {/* MAIN TWO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* LEFT BIG IMAGE CARD */}
        <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-[#FCEBDE] h-[420px] border border-[#FCEBDE]">
          <img
            src={insights[0].image}
            alt={insights[0].title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* RIGHT TEXT CARD */}
        <div className="bg-white p-10 rounded-2xl relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-[#FCEBDE]">
          <MoveUpRight
            size={19}
            className="absolute top-5 right-5 text-[#B87C72]/60 group-hover:text-[#9E4A47] transition"
          />
          <p className="uppercase text-[#B87C72] tracking-wider text-sm font-medium mb-4">
            {insights[0].tag}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2B333C] leading-snug mb-4">
            {insights[0].title}
          </h3>
          <p className="text-[#828D9C] leading-relaxed text-sm md:text-base">
            {insights[0].desc}
          </p>
        </div>
      </div>

      {/* LOWER GRID CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {insights.slice(1).map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl bg-white overflow-hidden border border-[#FCEBDE] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-[220px] overflow-hidden relative">
              <img
                src={item.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.title}
              />
            </div>

            <div className="p-7 relative">
              <MoveUpRight
                className="absolute top-6 right-6 text-[#B87C72]/60 group-hover:text-[#9E4A47] transition"
                size={19}
              />
              <p className="uppercase text-[#B87C72] text-sm tracking-wider font-medium mb-2">
                {item.tag}
              </p>
              <h3 className="text-xl font-semibold text-[#2B333C] mb-3">
                {item.title}
              </h3>
              <p className="text-[#828D9C] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}