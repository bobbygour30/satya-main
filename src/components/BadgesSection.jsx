// BadgesSection.jsx
import React from "react";

const features = [
  {
    label: "Evidence-Based Care",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9E4A47" strokeWidth="2">
        <path d="M4 12a8 8 0 018-8v16a8 8 0 01-8-8zM20 12a8 8 0 01-8 8V4a8 8 0 018 8z" />
      </svg>
    ),
  },
  {
    label: "Virtual-First Access",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9E4A47" strokeWidth="2">
        <path d="M3 12h3M6 9v6M9 12h12M18.36 9.64L21 12l-2.64 2.36M19.36 12H15" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Personalized Support",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9E4A47" strokeWidth="2">
        <path d="M12 2L13.09 8.26L19 9L12 16L5 9L10.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    label: "Family Inclusive",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#9E4A47" />
      </svg>
    ),
  },
  {
    label: "Trusted by Employers",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#9E4A47" />
      </svg>
    ),
  },
  {
    label: "Care with Compassion",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9E4A47" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export default function BadgesSection() {
  return (
    <div className="relative bg-[#FFF8EF] overflow-hidden">
      {/* Top horizontal line – warm primary */}
      <div className="w-full h-px bg-[#9E4A47]" />
      
      {/* Main container for badges */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 px-6 py-14 ">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[140px]">
            <div className="mb-4 flex-shrink-0">{feature.icon}</div>
            <div className="text-center font-bold text-xs uppercase tracking-widest text-[#2B333C] leading-tight">
              {feature.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom wave – now in rich primary gradient */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C300 120 600 40 900 80C1200 120 1440 40 1440 80V120H0V80Z"
            fill="url(#mavenGradient)"
          />
          <defs>
            <linearGradient id="mavenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9E4A47" />
              <stop offset="100%" stopColor="#84332F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}