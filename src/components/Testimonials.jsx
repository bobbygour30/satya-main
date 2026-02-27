"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/assets";

/* ===============================
   TESTIMONIAL DATA
================================ */
const testimonials = [
  {
    id: 1,
    text: `Came from Sweden for an honest transplant by an artist surgeon. I did not get this level of clarity from clinics in Europe or even the US. Highly recommend Satya.`,
    author: "Adam Anderson (Sweden)",
    videoId: "gNDIxX_tVMU",
    thumbnail: assets.adam,
  },
  {
    id: 2,
    text: `Even after 10 years, my hair transplant result is awesome and completely undetectable. I stopped medicines 5 years ago. This level of artistry happens only at Satya.`,
    author: "Sandeep (Canada)",
    videoId: "0SC4xifYpzc",
    thumbnail: assets.sandeep,
  },
  {
    id: 3,
    text: `My first transplant at Satya was done 3 years ago with a beautiful hairline and no medicines. I’m back only to lower my hairline as per the original plan.`,
    author: "Supreet (Australia)",
    videoId: "esPVOi8d9tE",
    thumbnail: assets.supreet,
  },
  {
    id: 4,
    text: `Being a doctor and a victim of bad transplant earlier, I now understand repair work is best done at Satya. I wish I had come here the first time.`,
    author: "Dr. Manoharsha (India)",
    videoId: "KbuQRbVKrFA",
    thumbnail: assets.manoharsha,
  },
  {
    id: 4,
    text: `I am highly impressed with the knowledge of doctors, infrastructure, and the technology at Satya. They are better than USA and much affordable. I plan my India tour around my visit to Satya.`,
    author: "Neneh (USA)",
    videoId: "7x7GhR8S_v0",
    thumbnail: assets.neneh,
  },
  {
    id: 4,
    text: `My daughter had some skin issue for which I took treatment at Satya, during my visit to India. Would highly recommend Dr Ruchi for honest skin treatments.`,
    author: "Maggie (Italy)",
    videoId: "bo7RgLyn820",
    thumbnail: assets.maggie,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) return; // ⛔ Stop auto slide when video is playing

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [play]);

  const current = testimonials[index];

  // Reset play state whenever index changes (manual click or auto)
  useEffect(() => {
    setPlay(false);
  }, [index]);

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setPlay(false);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    setPlay(false);
  };

  return (
    <section className="relative w-full bg-[#FFF8EF] sm:py-24 py-5 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#FCEBDE] blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-[1500px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – unchanged */}
        <div className="relative">
          <Quote className="absolute -top-14 -left-10 w-28 h-28 text-[#B87C72] opacity-25 rotate-180" />

          <div className="mb-10 flex items-center gap-4">
            <div className="p-4 rounded-full bg-[#9E4A47]/10 border border-[#9E4A47]">
              <MessageCircle className="text-[#9E4A47]" size={22} />
            </div>
            <h2 className="text-[38px] md:text-[60px] lg:text-[68px] font-serif text-[#2B333C]">
              Testimonials
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white/60 backdrop-blur-xl border border-[#DFDFDD] rounded-3xl p-8 md:p-10 shadow-xl"
            >
              <p className="text-[22px] md:text-[26px] font-serif leading-snug text-[#2B333C]">
                {current.text}
              </p>

              <p className="mt-6 text-lg font-medium tracking-wide text-[#9E4A47]">
                — {current.author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="mt-10 flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-[#9E4A47] scale-125"
                    : "bg-[#FCEBDE] border-2 border-[#B87C72]"
                }`}
              />
            ))}
          </div>

          {/* SHORTS – CUSTOM IMAGE THUMBNAILS */}
          <div className="mt-12 flex gap-4 overflow-x-auto pb-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => {
                  setIndex(i);
                  setPlay(false);
                }}
                className={`relative min-w-[90px] h-[120px] rounded-2xl overflow-hidden transition ${
                  i === index
                    ? "ring-4 ring-[#9E4A47] scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={t.thumbnail}
                  alt={t.author}
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                    <Play size={14} className="text-white ml-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT – MAIN VIDEO + EXTERNAL MOBILE ARROWS */}
        <div className="relative flex justify-center">
          {/* Slightly wider wrapper to allow space for external arrows */}
          <div className="relative w-[320px] md:w-[380px] flex items-center justify-center">
            <div className="relative w-[280px] h-[500px] md:w-[330px] md:h-[600px] rounded-[32px] overflow-hidden shadow-2xl border border-[#DFDFDD] bg-black">
              {/* Always render iframe – control visibility with CSS */}
              <iframe
                key={current.videoId}
                src={`https://www.youtube.com/embed/${current.videoId}?autoplay=${
                  play ? "1" : "0"
                }&playsinline=1&rel=0&modestbranding=1`}
                title={current.author}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className={`w-full h-full transition-opacity duration-300 ${
                  play ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />

              {/* Thumbnail overlay – shown only when !play */}
              <button
                onClick={() => setPlay(true)}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  play ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <img
                  src={current.thumbnail}
                  alt={current.author}
                  className="w-full h-full object-cover opacity-90 hover:opacity-70 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#9E4A47] flex items-center justify-center shadow-xl hover:scale-110 transition">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
              </button>
            </div>

            {/* Mobile-only navigation arrows – positioned OUTSIDE the video */}
            <div className="lg:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button
                onClick={goToPrev}
                className="pointer-events-auto -ml-12 p-2.5 rounded-full bg-white/90 shadow-md hover:bg-white hover:scale-105 transition active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-[#9E4A47]" />
              </button>

              <button
                onClick={goToNext}
                className="pointer-events-auto -mr-12 p-2.5 rounded-full bg-white/90 shadow-md hover:bg-white hover:scale-105 transition active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-[#9E4A47]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}