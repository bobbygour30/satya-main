import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASES } from './BeforeAfterPage';; // ← make sure this path is correct!

export default function CaseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseData = CASES.find(c => c.id === Number(id));
  const [view, setView] = useState('before');

  if (!caseData) {
    return (
      <div className="min-h-screen bg-[#1a1f26] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Case not found</h2>
          <button 
            onClick={() => navigate(-1)}
            className="text-[#9e4a47] hover:underline"
          >
            ← Back to gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f26] to-[#13181f] text-white pb-20">
      {/* Header */}
      <header className="p-6 md:p-10 border-b border-white/5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Gallery
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 md:pt-16">
        {/* Patient name */}
        <h1 className="font-serif text-4xl md:text-6xl text-center mb-3 tracking-tight">
          {caseData.name}
        </h1>
        <p className="text-center text-gray-400 mb-12 md:mb-16">
          {caseData.procedure}
        </p>

        {/* Image Container */}
        <div className="relative max-w-3xl mx-auto mb-10 md:mb-16 rounded-xl overflow-hidden border border-white/8 shadow-2xl shadow-black/40">
          <div className="relative aspect-[4/5] md:aspect-[3/4] bg-black/40">
            <AnimatePresence mode="wait">
              <motion.img
                key={view}
                src={caseData.image}
                alt={`${caseData.name} - ${view}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Label */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/60 backdrop-blur-md px-5 py-2 md:px-6 md:py-2.5 rounded-full text-base md:text-lg font-medium border border-white/10">
              {view === 'before' ? 'Before' : 'After'}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setView('before')}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-black/60 transition-all hover:scale-110 active:scale-95"
              aria-label="Show before"
            >
              <span className="text-2xl md:text-3xl">←</span>
            </button>

            <button
              onClick={() => setView('after')}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-black/60 transition-all hover:scale-110 active:scale-95"
              aria-label="Show after"
            >
              <span className="text-2xl md:text-3xl">→</span>
            </button>
          </div>
        </div>

        {/* Toggle Buttons (alternative way) */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 md:mb-16">
          <button
            onClick={() => setView('before')}
            className={`px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
              view === 'before'
                ? 'bg-[#9e4a47] shadow-lg shadow-[#9e4a47]/40 scale-105'
                : 'bg-white/10 hover:bg-white/20 border border-white/10'
            }`}
          >
            Before
          </button>

          <button
            onClick={() => setView('after')}
            className={`px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
              view === 'after'
                ? 'bg-[#9e4a47] shadow-lg shadow-[#9e4a47]/40 scale-105'
                : 'bg-white/10 hover:bg-white/20 border border-white/10'
            }`}
          >
            After
          </button>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-serif mb-5 text-[#ffede0]">Concern</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Asymmetrical jawline</li>
              <li>• Chin misalignment</li>
              <li>• Underbite / Overbite</li>
              <li>• Facial profile imbalance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-5 text-[#ffede0]">Treatment</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• {caseData.procedure}</li>
              <li>• Advanced 3D planning</li>
              <li>• Precise osteotomies</li>
              <li>• Custom fixation</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 text-gray-500 text-sm">
          * This is a demonstration using placeholder images<br />
          Real cases use separate before & after photographs
        </div>
      </main>
    </div>
  );
}