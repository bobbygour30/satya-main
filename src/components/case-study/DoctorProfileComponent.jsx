import React from 'react';

const DoctorProfileComponent = () => {
  return (
    <div className="bg-[#EAE2D8] min-h-screen">
      {/* Top Accent Border */}
      <div className="h-2 bg-[#C8734B]"></div>
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Image Placeholder */}
        <div className="md:col-span-5 lg:col-span-4 relative flex flex-col items-center">
          <div className="aspect-[3/4] w-full bg-[#EFEBE3] border border-[#2D1B13]/10 p-12 flex flex-col items-center justify-center text-center">
            {/* Center Icon */}
            <svg 
              className="w-16 h-16 text-[#2D1B13]/30 mb-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            
            {/* Main Label */}
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#2D1B13]/60 mb-2">
              DOCTOR PORTRAIT
            </p>
            
            {/* Sub Label */}
            <p className="text-xs text-[#2D1B13]/40 font-serif italic">
              Reserved for lead specialist portrait
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Text and Details */}
        <div className="md:col-span-7 lg:col-span-8 space-y-12">
          
          {/* Section Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C8734B]" />
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#C8734B]">
                YOUR SPECIALIST
              </h2>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-[#2D1B13] leading-tight">
              Dr. <span className="italic text-[#C8734B] font-medium">Satya’s</span> Team
            </h1>
            
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#2D1B13]/70">
              LEAD DERMATOLOGIST & TRICHOLOGIST
            </p>
          </div>

          {/* Description Text */}
          <div className="max-w-2xl space-y-6 text-[#2D1B13]/90 leading-relaxed text-sm md:text-base">
            <p>
              Over 15 years of specialisation in trichology and cosmetic dermatology. 
              Pioneer of the GFC protocol in India, with more than 4,000 successful 
              hair restoration cases.
            </p>
            <p className="border-t border-[#2D1B13]/10 pt-6">
              Every case at Satya is treated as unique — precision diagnostics, 
              personalised protocols, and root-cause treatment that goes beyond 
              symptom management.
            </p>
          </div>

          {/* Credentials Badges */}
          <div className="pt-6 border-t border-[#2D1B13]/10 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { label: 'IADVL Fellow' },
              { label: '4,000+ Cases' },
              { label: 'GFC Pioneer' },
              { label: '15+ Years' },
            ].map((item) => (
              <div key={item.label} className="text-center group flex flex-col items-center">
                <span className="text-[11px] uppercase tracking-widest text-[#2D1B13]/60 font-medium group-hover:text-[#C8734B] transition-colors">
                  {item.label}
                </span>
                <span className="w-1.5 h-1.5 bg-[#C8734B] rounded-full mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorProfileComponent;