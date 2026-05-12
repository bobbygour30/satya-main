import React from 'react';

const VisualEvidenceComponent = () => {
  const crownPhotos = [
    { label: "BEFORE", status: "CROWN — BEFORE" },
    { label: "MID TREATMENT", status: "CROWN — MONTH 14" },
    { label: "AFTER", status: "CROWN — MONTH 28" },
  ];

  const fullViewPhotos = [
    { label: "BEFORE — FULL VIEW", status: "FULL PROFILE — BEFORE" },
    { label: "AFTER — FULL VIEW", status: "FULL PROFILE — AFTER" },
  ];

  return (
    <div className="w-full bg-[#EFEBE3] text-[#2D1B13] font-sans antialiased">
      {/* Header Section */}
      <div className="p-10 md:p-16 lg:p-24 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px bg-[#C8734B]" />
          <span className="text-[10px] tracking-[0.3em] font-bold text-[#2D1B13]/60 uppercase">
            VISUAL EVIDENCE
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-serif leading-tight">
          The <span className="italic text-[#C8734B] font-medium">before & after</span> <br />
          in full detail
        </h2>
      </div>

      {/* Top Grid: Crown Views (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#2D1B13]/10">
        {crownPhotos.map((photo, idx) => (
          <div 
            key={idx} 
            className={`min-h-[500px] bg-[#D6CEC1] p-8 flex flex-col justify-between relative group
              ${idx !== crownPhotos.length - 1 ? 'md:border-r border-[#2D1B13]/10' : ''}
              border-b md:border-b-0
            `}
          >
            {/* Tag */}
            <div className="absolute top-6 left-6">
              <span className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase text-white 
                ${photo.label === 'AFTER' ? 'bg-[#C8734B]' : 'bg-[#2D1B13]/40'}`}
              >
                {photo.label}
              </span>
            </div>

            {/* Placeholder Icon */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-10 h-10 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                <div className="w-5 h-5 border border-[#2D1B13] rounded-full" />
              </div>
              <span className="text-[9px] tracking-[0.2em] font-bold uppercase">PROGRESS PHOTO</span>
            </div>

            {/* Label */}
            <div className="text-[10px] tracking-[0.15em] font-bold text-[#2D1B13]/40 uppercase text-center">
              {photo.status}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid: Full Views (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#2D1B13]/10">
        {fullViewPhotos.map((photo, idx) => (
          <div 
            key={idx} 
            className={`min-h-[550px] bg-[#D6CEC1] p-8 flex flex-col justify-between relative group
              ${idx === 0 ? 'md:border-r border-[#2D1B13]/10' : ''}
              border-b md:border-b-0
            `}
          >
            {/* Tag */}
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase text-white 
                ${idx === 1 ? 'bg-[#C8734B]' : 'bg-[#2D1B13]/40'}`}
              >
                {photo.label}
              </span>
            </div>

            {/* Placeholder Icon */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-12 h-12 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                <div className="w-6 h-6 border border-[#2D1B13] rounded-full" />
              </div>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase">FULL PROFILE PHOTO</span>
            </div>

            {/* Label */}
            <div className="text-[10px] tracking-[0.15em] font-bold text-[#2D1B13]/40 uppercase text-center">
              {photo.status}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Disclaimer */}
      <div className="py-8 bg-[#EFEBE3] text-center border-t border-[#2D1B13]/5">
        <p className="text-[10px] tracking-[0.05em] text-[#2D1B13]/50 font-medium italic uppercase">
          All photographs taken under standardised clinic lighting. Results are patient-specific and may vary.
        </p>
      </div>
    </div>
  );
};

export default VisualEvidenceComponent;