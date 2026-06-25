import React, { useState } from 'react';

export default function ProgressGallery() {
  // State to manage the active perspective tab
  const [activeTab, setActiveTab] = useState('FRONT VIEW');

  const tabs = ['FRONT VIEW', 'RIGHT PROFILE', 'LEFT PROFILE', 'TOP / BACK'];

  const timelineColumns = [
    { label: 'BEFORE SURGERY', statusColor: 'bg-[#B07355]' },
    { label: 'IMMEDIATE POST', statusColor: 'bg-[#B07355]' },
    { label: 'MONTH 14', statusColor: 'bg-[#B07355]' },
    { label: 'MONTH 28', statusColor: 'bg-[#55B074]' }, // Green highlight for final result
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F4EE] text-[#4A3B32] font-sans p-4 md:p-8 flex flex-col justify-between selection:bg-[#B07355] selection:text-white">
      
      {/* --- HEADER SECTION --- */}
      <header className="max-w-7xl w-full mx-auto mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#B07355] font-semibold block mb-2 relative before:content-[''] before:inline-block before:w-4 before:h-[1px] before:bg-[#B07355] before:mr-2 before:align-middle">
              Visual Evidence
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#33251D]">
              Lokesh's <span className="italic text-[#B07355]">Progress</span> <br />
              &amp; Results
            </h1>
          </div>
          <p className="text-[11px] leading-relaxed text-[#8A7A70] max-w-md font-light">
            Every angle, every stage — documented under standardised clinic lighting. Click any image to view full size. 
            Photos are shown across four views: Front, Right, Left, and Top/Back.
          </p>
        </div>
      </header>

      {/* --- INTERACTIVE TABS --- */}
      <div className="max-w-7xl w-full mx-auto mb-4">
        <div className="flex flex-wrap gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-[10px] tracking-wider font-medium uppercase transition-all duration-200 border-b-2 ${
                activeTab === tab
                  ? 'bg-[#B07355] text-white border-[#B07355]'
                  : 'bg-[#EAE4D9] text-[#7A6A5F] border-transparent hover:bg-[#E2D9CB]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- PHOTO GRID MATRIX --- */}
      <main className="max-w-7xl w-full mx-auto bg-[#312219] grid grid-cols-1 md:grid-cols-[60px_1fr] overflow-hidden shadow-sm">
        
        {/* Left Side Label Column (Sticky-style label on desktop) */}
        <div className="bg-[#312219] flex items-center justify-center py-4 md:py-0 border-b border-[#423228] md:border-b-0 md:border-r">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#9C8B80] transform md:-rotate-90 whitespace-nowrap">
            {activeTab.split(' ')[0]} {/* Dynamically shows 'FRONT', 'RIGHT', etc. */}
          </span>
        </div>

        {/* Timeline Columns Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F7F4EE]">
          {timelineColumns.map((col, index) => (
            <div key={index} className="flex flex-col bg-[#DDD7CB]">
              
              {/* Header Label for Timeline Stage */}
              <div className="bg-[#B07355] text-white text-center py-2 text-[10px] tracking-widest font-semibold uppercase relative">
                {col.label}
                {/* Visual indicator bar matching the subtle bottom borders in the original design */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${col.statusColor}`} />
              </div>

              {/* Photo Placeholder Slot */}
              <div className="aspect-[3/4] md:aspect-auto md:h-[550px] flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:bg-[#D5CEBF] transition-colors duration-300 relative">
                
                {/* Upload / Placeholder UI */}
                <div className="flex flex-col items-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                  <svg 
                    className="w-6 h-6 mb-2 text-[#4A3B32]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[9px] tracking-wider uppercase font-medium text-[#4A3B32]">
                    Upload Photo
                  </span>
                </div>

                {/* Optional Note: Dynamic content based on state can be passed here seamlessly */}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- FOOTER & LEGEND SECTION --- */}
      <footer className="max-w-7xl w-full mx-auto mt-6 pt-4 border-t border-[#E6DECFC5] flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-[10px] text-[#8A7A70]">
        <p className="italic font-light text-center sm:text-left">
          All photographs taken under standardised clinic lighting. Results are patient-specific and may vary.
        </p>
        
        {/* Color Legend mapping */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#8E867A] block rounded-sm" />
            <span className="uppercase tracking-wider text-[9px]">Before</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#9E5B37] block rounded-sm" />
            <span className="uppercase tracking-wider text-[9px]">Immediate Post</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#B07355] block rounded-sm" />
            <span className="uppercase tracking-wider text-[9px]">Mid Treatment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#55B074] block rounded-sm" />
            <span className="uppercase tracking-wider text-[9px]">Final Result</span>
          </div>
        </div>
      </footer>

    </div>
  );
}