import React from 'react';

const SuccessStoriesComponent = () => {
  const caseStudies = [
    {
      treatment: 'HAIR RESTORATION · 18 MONTHS',
      name: 'Arun, 29',
      details: 'Norwood Grade IV · PRP Protocol',
      placeholder: 'PATIENT PHOTO'
    },
    {
      treatment: 'SCALP TREATMENT · 12 MONTHS',
      name: 'Meera, 41',
      details: 'Diffuse thinning · LLLT + GFC',
      placeholder: 'PATIENT PHOTO'
    },
    {
      treatment: 'HAIR RESTORATION · 22 MONTHS',
      name: 'Vikram, 38',
      details: 'Norwood Grade VI · Full protocol',
      placeholder: 'PATIENT PHOTO'
    },
  ];

  return (
    <div className="bg-[#EFEBE3] min-h-screen text-[#2D1B13] font-sans antialiased">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20 lg:py-32">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16 lg:mb-24 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-[#C8734B]" />
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#C8734B]">
                MORE TRANSFORMATIONS
              </h2>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              Other <span className="italic text-[#C8734B] font-medium">success stories</span>
            </h1>
          </div>
          <a href="#" className="flex items-center gap-2 group text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D1B13] opacity-80 hover:opacity-100 transition-opacity">
            VIEW ALL CASES
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="transform transition-transform group-hover:translate-x-1">
              <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2D1B13]/5 rounded-sm overflow-hidden">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={index} 
              className={`flex flex-col group ${index !== caseStudies.length - 1 ? 'md:border-r border-[#2D1B13]/5' : ''}`}
            >
              {/* Photo Placeholder Area */}
              <div className="aspect-[4/3] bg-[#D6CEC1] border-b border-[#2D1B13]/5 flex items-center justify-center p-8 group-hover:bg-[#DED8CE] transition-colors relative">
                {/* Content */}
                <div className="text-center opacity-30 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-[#2D1B13] rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#2D1B13] rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-[9px] tracking-[0.2em] font-bold uppercase">{caseStudy.placeholder}</span>
                </div>
              </div>

              {/* Patient Details Area */}
              <div className="bg-[#EFEBE3] p-10 md:p-12 lg:p-14 space-y-6 flex-grow">
                <div className="space-y-1">
                  <p className="text-[9px] tracking-[0.2em] font-bold uppercase text-[#2D1B13]/60">
                    {caseStudy.treatment}
                  </p>
                  <h3 className="text-3xl font-serif text-[#2D1B13]">
                    {caseStudy.name}
                  </h3>
                </div>
                <div className="w-12 h-px bg-[#2D1B13]/10"></div>
                <p className="text-sm leading-relaxed text-[#2D1B13]/70 font-sans">
                  {caseStudy.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SuccessStoriesComponent;