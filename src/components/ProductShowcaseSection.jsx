// ProductShowcaseSection.jsx
import React from "react";

const products = [
  {
    title: "FERTILITY & FAMILY BUILDING",
    description:
      "From fertility testing and egg freezing to IVF, IUI, adoption, and surrogacy, get personalized support at every step.",
    image: "https://via.placeholder.com/350x150?text=Fertility+Care",
    cta: "Explore Care"
  },
  {
    title: "PREGNANCY & POSTPARTUM",
    description:
      "24/7 access to OB-GYNs, midwives, doulas, lactation consultants, and mental health specialists throughout your journey.",
    image: "https://via.placeholder.com/350x150?text=Pregnancy+Care",
    cta: "Explore Care"
  }
];

export default function ProductShowcaseSection() {
  return (
    <div className="bg-[#FFF8EF] py-16 px-3 w-full flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

        {/* Left Info & CTA */}
        <div className="md:w-1/3 bg-white border-r border-[#FCEBDE] flex flex-col justify-between py-10 px-8 shadow-sm">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#2B333C]" style={{fontFamily:"'Oswald', sans-serif"}}>
              BUILT FOR FAMILIES,<br/>BY EXPERTS
            </h2>
            <p className="text-[#828D9C] text-base leading-relaxed mb-8">
              Maven is the world’s largest virtual clinic for women’s and family health trusted by 15M+ lives and 2,000+ employers to deliver better outcomes, lower costs, and truly personalized care.
            </p>
          </div>

          <div className="bg-[#2B333C] rounded-xl shadow-lg py-9 px-8 flex flex-col items-start mt-12">
            <span className="uppercase text-white font-semibold text-lg tracking-wider" style={{fontFamily:"'Oswald', sans-serif"}}>
              Need care for your team?
            </span>
            <button className="mt-6 bg-[#FFF8EF] hover:bg-[#FCEBDE] text-[#2B333C] font-medium py-3.5 px-8 rounded transition-colors flex items-center text-lg shadow-md"
              style={{fontFamily:"'Oswald', sans-serif"}}>
              Contact Sales
              <span className="ml-3">
                <svg width="22" height="22" fill="none">
                  <path d="M6 11h10m0 0l-4-4m4 4l-4 4" stroke="#2B333C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Product / Care Cards */}
        {products.map((p, idx) => (
          <div key={p.title} className={`md:w-1/3 bg-white py-10 px-8 flex rounded-xl flex-col items-center border-r ${idx === 0 ? 'border-[#FCEBDE]' : ''} last:border-none shadow-sm`}>
            <img src={p.image} alt={p.title} className="w-full max-w-lg mb-8 object-contain" style={{minHeight:"120px"}} />
            
            <h3 className="font-bold text-2xl md:text-3xl mb-3 text-[#2B333C]" style={{fontFamily:"'Oswald', sans-serif"}}>
              {p.title}
            </h3>
            
            <p className="text-[#828D9C] text-base mb-10 text-left leading-relaxed">
              {p.description}
            </p>
            
            <div className="flex items-center w-full">
              <button className="uppercase font-bold text-[#9E4A47] hover:text-[#84332F] text-base transition-colors" style={{fontFamily:"'Oswald', sans-serif"}}>
                {p.cta}
              </button>
              <span className="ml-3 mt-1">
                <svg width="24" height="24" fill="none">
                  <rect x="0" y="0" width="24" height="24" rx="6" fill="#9E4A47"/>
                  <path d="M10 12h4m0 0l-2-2m2 2l-2 2" stroke="#FFF8EF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}