import React from 'react';

const TransformationProtocols = () => {
  const protocols = [
    {
      id: "01",
      title: "Low-Level Laser Therapy",
      description: "650nm photobiomodulation to stimulate follicular activity, increase ATP production, and improve scalp circulation — a non-invasive foundation for all other treatments.",
      placeholder: "LLLT TREATMENT IMAGE"
    },
    {
      id: "02",
      title: "PRP Hair Treatment",
      description: "Autologous platelet-rich plasma derived from the patient's own blood, concentrated and injected to deliver growth factors directly to dormant follicles.",
      placeholder: "PRP PROCEDURE IMAGE"
    },
    {
      id: "03",
      title: "GFC Therapy",
      description: "Growth Factor Concentrate — a next-generation evolution of PRP with significantly higher concentration, delivering superior follicular regeneration outcomes.",
      placeholder: "GFC THERAPY IMAGE"
    }
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#2D1B13] font-sans antialiased selection:bg-[#C8734B]/20">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20 lg:py-32">
        
        {/* Header Section */}
<div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] items-center gap-10 lg:gap-24 mb-20 lg:mb-28">
  
  {/* Left Content */}
  <div>
    {/* Top Label */}
    <div className="flex items-center gap-3 mb-8">
      <div className="w-7 h-[1px] bg-[#C8734B]" />
      <span className="text-[10px] tracking-[0.32em] uppercase text-[#C8734B] font-medium">
        Protocols Used
      </span>
    </div>

    {/* Heading */}
    <h2 className="font-serif text-[52px] sm:text-[64px] lg:text-[78px] leading-[0.98] tracking-[-0.03em] text-[#2D1B13]">
      What made
      <br />
      <span className="italic text-[#C8734B] font-normal">
        the transformation
      </span>{" "}
      possible
    </h2>
  </div>

  {/* Right Paragraph */}
  <div className="lg:pt-10 flex lg:justify-end">
    <p className="max-w-[520px] text-[15px] leading-[2] text-[#8B776D] font-light">
      A multi-modal approach where each treatment built on the last —
      not a single solution, but a precisely sequenced combination
      tailored to Lokesh's biology.
    </p>
  </div>
</div>

        {/* Protocols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#2D1B13]/10">
          {protocols.map((protocol, index) => (
            <div 
              key={protocol.id} 
              className={`pt-12 pb-16 lg:px-12 first:pl-0 last:pr-0 
                ${index !== protocols.length - 1 ? 'md:border-r border-[#2D1B13]/10' : ''}
                ${index === 1 ? 'lg:px-12' : ''}
              `}
            >
              <div className="space-y-10">
                {/* Number ID */}
                <span className="block text-5xl font-serif text-[#C8734B]/20 font-light">
                  {protocol.id}
                </span>

                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-[#EAE4D8] border border-[#2D1B13]/5 flex items-center justify-center p-8 group cursor-pointer hover:bg-[#E2DBCF] transition-colors">
                  <span className="text-[9px] tracking-[0.25em] font-bold text-[#2D1B13]/30 uppercase text-center leading-loose">
                    {protocol.placeholder}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#2D1B13]">
                    {protocol.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2D1B13]/70">
                    {protocol.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformationProtocols;