import React from 'react';

const HeroCaseStudy = () => {
  return (
    <div className="min-h-screen bg-[#2D1B13] text-[#D7C9AC] font-sans selection:bg-[#C8845D]/30 selection:text-white">
      <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT SECTION: CONTENT */}
        <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-20 flex flex-col justify-between">
          <div className="space-y-12">
            {/* Breadcrumb */}
            <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60 font-medium">
              CASES / HAIR RESTORATION / LOKESH
            </nav>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="h-px w-24 bg-[#D7C9AC]/30" />
              <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-80">
                PATIENT CASE STUDY
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white">
                Lokesh's <br />
                <span className="italic text-[#C8845D] font-medium">Hair Revival</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#D7C9AC]/90">
                A 28-month journey restored.
              </h2>
            </div>

            {/* Description and Tags */}
            <div className="max-w-md space-y-8">
              <p className="text-sm md:text-base leading-relaxed opacity-80">
                From Norwood Grade V alopecia to 94% density restoration — 
                a documented, science-led transformation by Satya's specialist team in Delhi NCR.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Androgenetic Alopecia", "Norwood Grade V", "PRP + GFC Protocol"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 border border-[#D7C9AC]/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#D7C9AC]/10 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Footer */}
          <div className="mt-16 pt-12 border-t border-[#D7C9AC]/10 grid grid-cols-3 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">PATIENT AGE</p>
              <p className="text-2xl md:text-3xl font-serif">34 yrs</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">DURATION</p>
              <p className="text-2xl md:text-3xl font-serif">28 mo.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">SESSIONS</p>
              <p className="text-2xl md:text-3xl font-serif">12+</p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: IMAGE PLACEHOLDERS */}
        <div className="w-full lg:w-[55%] flex flex-col border-t lg:border-t-0 lg:border-l border-[#D7C9AC]/10">
          
          {/* Top Placeholder (Before) */}
          <div className="flex-1 min-h-[400px] p-8 flex flex-col relative group cursor-pointer overflow-hidden border-b border-[#D7C9AC]/10">
            <div className="absolute top-8 right-8 z-10">
              <span className="px-4 py-1.5 border border-[#D7C9AC]/30 rounded-full text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                BEFORE
              </span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-4 opacity-40 group-hover:opacity-100 transition-all transform group-hover:scale-105">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs uppercase tracking-[0.2em] font-light">BEFORE — UPLOAD PATIENT PHOTO</p>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-auto">
              INITIAL PRESENTATION · MONTH 01
            </div>
          </div>

          {/* Bottom Placeholder (After) */}
          <div className="flex-1 min-h-[400px] p-8 flex flex-col relative group cursor-pointer bg-[#26160F] transition-colors hover:bg-[#2D1B13]">
            <div className="absolute top-8 right-8 z-10">
              <span className="px-4 py-1.5 bg-[#C8845D] text-white rounded-md text-[10px] uppercase tracking-widest font-bold">
                AFTER
              </span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-4 opacity-40 group-hover:opacity-100 transition-all transform group-hover:scale-105">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs uppercase tracking-[0.2em] font-light">AFTER — UPLOAD PATIENT PHOTO</p>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-auto">
              FINAL RESULT · MONTH 28
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroCaseStudy;