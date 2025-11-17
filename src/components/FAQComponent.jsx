// FAQComponent.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Updated FAQ Data – now on-brand for Maven Clinic
const faqItems = [
  {
    question: "How quickly can I book an appointment?",
    answer:
      "Most members are matched with a provider and have their first visit within 24–48 hours — often same-day for urgent needs.",
  },
  {
    question: "Is Maven covered by my insurance or employer?",
    answer:
      "Maven is offered at no cost to members through thousands of employers and health plans. Check your eligibility instantly on our homepage.",
  },
  {
    question: "What types of care does Maven cover?",
    answer:
      "Everything from fertility & adoption to pregnancy, postpartum, menopause, pediatrics, mental health, and ongoing women’s health.",
  },
  {
    question: "Can my partner or family access Maven too?",
    answer:
      "Yes! Many plans include partners and dependents — fertility, parenting, pediatrics, and mental health support are available to the whole family.",
  },
  {
    question: "Is care virtual or in-person?",
    answer:
      "Both. You’ll have 24/7 virtual care plus access to top-rated in-person providers when needed (labs, ultrasounds, procedures, etc.).",
  },
];

export default function FAQComponent() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full bg-[#FFF8EF] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-6xl">
        {/* FAQ Heading */}
        <div className="mb-12 text-center md:text-left">
          <span className="block text-[#B87C72] tracking-widest text-sm font-medium mb-2">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B333C] leading-tight">
            GOT ANY QUESTIONS?
          </h1>
        </div>

        {/* FAQ Panel */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#FCEBDE]">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className={`border-b border-[#FCEBDE] last:border-none transition-all duration-300
              ${active === idx ? "bg-[#FFF8EF]" : "bg-white"}`}
            >
              <button
                className={`w-full flex items-center justify-between px-8 py-6 text-left
                focus:outline-none hover:bg-[#FFF8EF] transition-colors duration-300 group`}
                onClick={() => setActive(active === idx ? null : idx)}
                aria-expanded={active === idx}
              >
                <span className="text-lg md:text-xl text-[#2B333C] font-medium group-hover:text-[#9E4A47] transition">
                  {item.question}
                </span>

                {/* Animated Chevron */}
                <motion.span
                  animate={{ rotate: active === idx ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="ml-6 flex-shrink-0"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={active === idx ? "#9E4A47" : "#828D9C"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-300"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {active === idx && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="px-8 pb-7 text-[#828D9C] text-base leading-relaxed overflow-hidden"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}