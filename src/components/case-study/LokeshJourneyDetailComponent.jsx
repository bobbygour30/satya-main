import React from 'react';

const LokeshJourneyDetailComponent = () => {
  // Common styles for the progress placeholders
  const progressGrid = [
    { label: "PROGRESS PHOTO", month: "MONTH 1" },
    { label: "PROGRESS PHOTO", month: "MONTH 8" },
    { label: "PROGRESS PHOTO", month: "MONTH 14" },
    { label: "PROGRESS PHOTO", month: "MONTH 28" },
  ];

  return (
    <div className="w-full bg-[#EFEBE3] text-[#2D1B13] font-sans antialiased">
      {/* --- TOP SECTION (STORY & CONSULTATION) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Story Content */}
        <div className="p-10 md:p-16 lg:p-24 bg-[#EFEBE3] flex flex-col justify-center">
          <div className="max-w-xl space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-[#C8734B]" />
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#2D1B13]/60 uppercase">
                HIS STORY
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-[#2D1B13]">
              When Lokesh walked in, <br />
              <span className="italic text-[#C8734B] font-medium">hope was thin.</span>
            </h2>

            <div className="space-y-6 text-[#2D1B13]/80 leading-relaxed text-sm md:text-base">
              <p>
                At 34, Lokesh had been experiencing progressive hair loss for over six
                years. By the time he came to Satya Skin & Hair, he had reached
                Norwood Grade V — significant recession across the crown and
                temples, with a rapidly shrinking hairline.
              </p>
              <p>
                He had tried multiple OTC treatments and two previous clinical
                consultations elsewhere with minimal results. His confidence was
                severely impacted — both professionally and personally.
              </p>
            </div>

            <button className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold text-[#C8734B] uppercase border-b border-[#C8734B]/30 pb-1 hover:border-[#C8734B] transition-all">
              READ FULL CONSULTATION NOTES
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Consultation Photo & Quote */}
        <div className="flex flex-col border-l border-[#2D1B13]/5">
          {/* Consultation Photo Placeholder */}
          <div className="flex-1 min-h-[450px] bg-[#D6CEC1] flex flex-col items-center justify-center relative p-8">
            <div className="flex flex-col items-center gap-4 opacity-30">
              <div className="w-12 h-12 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#2D1B13] rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#2D1B13] rounded-full"></div>
                </div>
              </div>
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase">CONSULTATION PHOTO</span>
            </div>
            <div className="absolute bottom-6 left-8 text-[10px] tracking-[0.15em] font-medium text-[#2D1B13]/40 uppercase">
              FIRST VISIT · JANUARY 2024
            </div>
          </div>

          {/* Dark Quote Box */}
          <div className="bg-[#33241B] p-12 md:p-16 text-[#EFEBE3]">
            <blockquote className="max-w-md">
              <p className="text-2xl md:text-3xl font-serif italic font-light leading-snug mb-6">
                "I had tried everything. Nothing worked until I walked into Satya."
              </p>
              <footer className="text-[10px] tracking-[0.2em] font-medium text-[#EFEBE3]/50 uppercase">
                — LOKESH, ON HIS FIRST CONSULTATION
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION (PROGRESS GRID) --- */}
      <div className="border-t border-[#2D1B13]/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {progressGrid.map((item, idx) => (
            <div 
              key={idx} 
              className={`min-h-[500px] bg-[#D6CEC1] border-[#2D1B13]/5 flex flex-col justify-between p-8 group hover:bg-[#DED8CE] transition-colors
                ${idx !== progressGrid.length - 1 ? 'border-r' : ''}
              `}
            >
              <div className="flex-1 flex flex-col items-center justify-center gap-4 opacity-30 group-hover:opacity-50 transition-opacity">
                <div className="w-10 h-10 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                   <div className="w-5 h-5 border border-[#2D1B13] rounded-full" />
                </div>
                <span className="text-[9px] tracking-[0.2em] font-bold uppercase">{item.label}</span>
              </div>
              <div className="text-[10px] tracking-[0.15em] font-bold text-[#2D1B13]/40 uppercase">
                {item.month}
              </div>
            </div>
          ))}
        </div>
        
        {/* Fine Print Footer */}
        <div className="py-8 bg-[#EFEBE3] text-center border-t border-[#2D1B13]/5">
          <p className="text-[10px] tracking-[0.05em] text-[#2D1B13]/50 font-medium italic">
            Progressive documentation — months 1 through 28. Photos taken under standardised clinic lighting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LokeshJourneyDetailComponent;