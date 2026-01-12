"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: `I feel very good and fantastic. My impression about the team is that they are very capable and pleasant people. They make you feel unbelievably safe.`,
    author: "Norullah, FOREContour®",
  },
  {
    id: 2,
    text: `Exceptional care and attention they listened carefully, explained every step, and delivered better-than-expected results.`,
    author: "Anjali S.",
  },
  {
    id: 3,
    text: `Professional team, calming environment and excellent follow-up. I always felt confident in their hands.`,
    author: "Rohit K.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timerRef.current);
  }, []);

  const variants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <section className="relative w-full bg-[#FFF8EF] min-h-[50vh] flex items-center py-20 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center relative">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full border-2 border-[#9E4A47] bg-[#9E4A47]/10">
              <MessageCircle size={20} className="text-[#9E4A47]" />
            </div>

            <h2 className="text-[52px] leading-none md:text-[65px] lg:text-[72px] font-serif text-[#2B333C]">
              Testimonials
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* TOP-LEFT QUOTE */}
          <Quote
            className="
              absolute text-[#B87C72] opacity-40 rotate-180
              left-1 -top-16 w-16 h-16
              lg:-left-30 lg:-top-30 lg:w-28 lg:h-28
            "
            strokeWidth={1.2}
          />

          {/* BOTTOM-RIGHT QUOTE */}
          <Quote
            className="
              absolute text-[#B87C72] opacity-40
              right-4 bottom-0 w-20 h-20
              lg:-right-8 lg:-bottom-10 lg:w-32 lg:h-32
            "
            strokeWidth={1.2}
          />

          {/* TESTIMONIAL TEXT */}
          <div className="w-full max-w-xl text-center lg:text-left relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-serif tracking-tight"
              >
                <p className="text-[26px] md:text-[32px] leading-snug text-[#2B333C]">
                  {testimonials[index].text}
                </p>

                <p className="mt-6 text-lg font-medium tracking-wide text-[#9E4A47]">
                  — {testimonials[index].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* DOTS */}
            <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-[#9E4A47] scale-125 shadow-md"
                      : "bg-[#FCEBDE] border-2 border-[#B87C72]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}