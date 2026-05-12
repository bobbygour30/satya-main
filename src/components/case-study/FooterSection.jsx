import React from 'react';

const FooterSection = () => {
  return (
    <footer className="w-full font-sans antialiased">
      {/* START YOUR JOURNEY SECTION */}
      <div className="bg-[#1A1614] text-[#DFD0BA] px-8 md:px-16 lg:px-24 py-24 lg:py-32 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-[#C8734B]" />
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#C8734B] uppercase">
                START YOUR JOURNEY
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white">
              Your story could be <br />
              the <span className="italic text-[#C8734B] font-medium">next transformation.</span>
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed opacity-60 max-w-lg">
              Free 45-minute consultation with our specialist team. Comprehensive 
              diagnostics, honest assessment, and a personalised roadmap — no obligation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 lg:items-end">
            <button className="w-full lg:w-80 bg-[#C8734B] hover:bg-[#B3623D] text-white py-5 px-8 text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3">
              BOOK FREE CONSULTATION
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className="w-full lg:w-80 border border-white/20 hover:border-white/40 text-white py-5 px-8 text-[11px] font-bold tracking-[0.2em] uppercase transition-all">
              CALL +91 12345 67890
            </button>
          </div>
        </div>
      </div>

      {/* LOWER FOOTER */}
      <div className="bg-[#2D1B13] text-[#DFD0BA]/40 px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white text-lg tracking-widest font-serif flex items-center gap-2">
              <span className="text-[#C8734B]">✦</span> SATYA
            </span>
            <span className="italic font-serif text-sm ml-2">skin & hair solutions</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['PRIVACY', 'TERMS', 'ALL CASES', 'CONTACT', 'INSTAGRAM'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                className="text-[10px] tracking-[0.2em] font-bold hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;