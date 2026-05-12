import React from 'react';

const TreatmentJourneyProtocol = () => {
  const protocolPhases = [
    {
      month: "MONTH 01 — INITIAL CONSULTATION",
      title: "Comprehensive Diagnostic",
      description: "Trichoscopy, blood panel, DHT mapping, and scalp biopsy established baseline metrics. A personalised treatment roadmap was drafted.",
      placeholder: "TRICHOSCOPY IMAGE"
    },
    {
      month: "MONTH 11–16 — PHASE III",
      title: "GFC Protocol",
      description: "Growth Factor Concentrate injections targeting crown and temporal regions. 40% density increase from baseline confirmed by trichoscopy.",
      placeholder: "GFC INJECTION PHOTO"
    },
    {
      month: "MONTH 02–04 — PHASE I",
      title: "Scalp Priming",
      description: "Low-level laser therapy, topical Minoxidil, and a custom nutritional protocol to stimulate dormant follicles and improve scalp vascularity.",
      placeholder: "LLLT SESSION PHOTO"
    },
    {
      month: "MONTH 17–24 — PHASE IV",
      title: "Consolidation",
      description: "Quarterly maintenance, Finasteride protocol introduced, continued LLLT. Hair coverage approaching natural density benchmarks.",
      placeholder: "MID-TREATMENT PROGRESS PHOTO"
    },
    {
      month: "MONTH 05–10 — PHASE II",
      title: "PRP Therapy Series",
      description: "Six sessions of Platelet-Rich Plasma therapy at 4-week intervals. Significant reduction in hair fall by session four. New vellus hair noted.",
      placeholder: "PRP PROCEDURE PHOTO"
    },
    {
      month: "MONTH 25–28 — FINAL",
      title: "Result Assessment",
      description: "94% hair density restoration confirmed. Hairline re-establishment complete. Ongoing 6-monthly maintenance prescribed.",
      placeholder: "FINAL RESULT PHOTO"
    }
  ];

  return (
    <div className="bg-[#1A1614] text-[#D7C9AC] p-8 md:p-16 lg:p-24 font-sans selection:bg-[#C8734B]/30">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#C8734B]" />
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#C8734B] uppercase">
              TREATMENT JOURNEY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white">
            A carefully sequenced <br />
            <span className="italic text-[#C8734B] font-medium">28-month protocol</span>
          </h2>
        </div>
        <div className="lg:pt-16">
          <p className="text-sm md:text-base leading-relaxed opacity-60 max-w-md">
            Every phase was monitored, adjusted, and documented by our specialist team — beginning with diagnostics and ending with a verified result.
          </p>
        </div>
      </div>

      {/* Protocol Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
        {protocolPhases.map((phase, index) => (
          <div key={index} className="relative pl-10 border-l border-white/5">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#C8734B] ring-4 ring-[#1A1614] shadow-[0_0_10px_rgba(200,115,75,0.5)]" />
            
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#C8734B] uppercase">
                {phase.month}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-60 max-w-lg">
                {phase.description}
              </p>
              
              {/* Image Placeholder */}
              <div className="mt-8 aspect-video bg-[#261E1A] rounded-sm border border-white/5 flex items-center justify-center group cursor-pointer hover:border-[#C8734B]/30 transition-all">
                <span className="text-[9px] tracking-[0.25em] font-bold opacity-20 group-hover:opacity-40 transition-opacity uppercase">
                  {phase.placeholder}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentJourneyProtocol;