import React from 'react';

const MeasuredOutcomesSection = () => {
  const outcomes = [
    { label: "Hair Density", value: 94 },
    { label: "Hairline Coverage", value: 88 },
    { label: "Hair Shaft Diameter", value: 76 },
    { label: "Scalp Sebum Balance", value: 82 },
    { label: "Patient Satisfaction", value: 97 },
  ];

  return (
    <div className="bg-[#2D1B13] text-[#DFD0BA] font-sans antialiased selection:bg-[#C8734B]/30 selection:text-white">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 p-10 md:p-16 lg:p-24 items-start">
        
        {/* Left Column: Text Content */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#DFD0BA]/30" />
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#DFD0BA]/80">
                MEASURED OUTCOMES
              </h2>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.15] text-white">
              Results that <br />
              <span className="italic text-[#C8734B] font-medium">speak for themselves</span>
            </h1>
          </div>

          <div className="max-w-xl space-y-6 text-[#DFD0BA]/90 text-sm md:text-base leading-relaxed">
            <p>
              Every metric was objectively measured using trichoscopy and
              standardised photography at baseline, 12 months, and final
              assessment at 28 months.
            </p>
            <p className="border-t border-[#DFD0BA]/10 pt-6">
              Numbers represent improvement percentage from Lokesh's
              baseline measurements at initial consultation.
            </p>
          </div>
        </div>

        {/* Right Column: Progress Bars */}
        <div className="space-y-10 lg:space-y-12 md:pt-16">
          {outcomes.map((item, index) => (
            <div key={index} className="space-y-3 group">
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-xs uppercase tracking-widest text-[#DFD0BA]/70 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <span className="text-2xl md:text-3xl font-serif font-light text-[#DFD0BA]">
                  {item.value}%
                </span>
              </div>
              
              {/* Custom Progress Bar with Percentage-based Fill */}
              <div className="h-0.5 bg-[#DFD0BA]/10 w-full relative overflow-hidden rounded-full">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#C8734B]"
                  style={{ width: `${item.value}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeasuredOutcomesSection;