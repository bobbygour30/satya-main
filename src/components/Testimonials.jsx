"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Quote, Play } from "lucide-react";

/* ===============================
   TESTIMONIAL DATA
================================ */
const testimonials = [
  {
    id: 1,
    text: `Came from Sweden for an honest transplant by an artist surgeon. I did not get this level of clarity from clinics in Europe or even the US. Highly recommend Satya.`,
    author: "Adam Anderson (Sweden)",
    videoId: "gNDIxX_tVMU",
  },
  {
    id: 2,
    text: `Even after 10 years, my hair transplant result is awesome and completely undetectable. I stopped medicines 5 years ago. This level of artistry happens only at Satya.`,
    author: "Sandeep (Canada)",
    videoId: "0SC4xifYpzc",
  },
  {
    id: 3,
    text: `My first transplant at Satya was done 3 years ago with a beautiful hairline and no medicines. I’m back only to lower my hairline as per the original plan.`,
    author: "Supreet (Australia)",
    videoId: "esPVOi8d9tE",
  },
  {
    id: 4,
    text: `Being a doctor and a victim of bad transplant earlier, I now understand repair work is best done at Satya. I wish I had come here the first time.`,
    author: "Dr. Manoharsha (India)",
    videoId: "KbuQRbVKrFA",
  },
];

/* ===============================
   COMPONENT
================================ */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

  /* Auto rotate testimonials */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setPlay(false); // reset video when slide changes
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-[#FFF8EF] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – TEXT */}
        <div className="relative">
          <Quote className="absolute -top-16 -left-10 w-28 h-28 text-[#B87C72] opacity-30 rotate-180" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full border-2 border-[#9E4A47] bg-[#9E4A47]/10">
                  <MessageCircle size={20} className="text-[#9E4A47]" />
                </div>
                <h2 className="text-[52px] md:text-[64px] lg:text-[72px] font-serif text-[#2B333C]">
                  Testimonials
                </h2>
              </div>

              <p className="text-[26px] md:text-[32px] leading-snug font-serif text-[#2B333C]">
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
        </div>

        {/* RIGHT – CLICK TO PLAY VIDEO */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[500px] md:w-[320px] md:h-[570px] rounded-3xl overflow-hidden shadow-2xl border border-[#DFDFDD] bg-black">

            {!play ? (
              /* THUMBNAIL */
              <button
                onClick={() => setPlay(true)}
                className="group absolute inset-0"
              >
                <img
                  src={`https://img.youtube.com/vi/${current.videoId}/hqdefault.jpg`}
                  alt={current.author}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#9E4A47] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                    <Play className="text-white ml-1" size={28} />
                  </div>
                </div>
              </button>
            ) : (
              /* YOUTUBE PLAYER */
              <iframe
                key={current.videoId}
                src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1&mute=0&playsinline=1`}
                title={current.author}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
