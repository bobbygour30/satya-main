import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from 'react-router-dom';
import assets from "../assets/assets";


/* =====================================================
   DATA
===================================================== */
export const CASES = [
  {
    id: 1,
    name: "Susanna",
    procedure: "Rhinoplasty",
    category: "Nose",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200",
  },
  {
    id: 2,
    name: "Antonio A",
    procedure: "Orthognathic Surgery",
    category: "Jaw",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200",
  },
  {
    id: 3,
    name: "Patricia",
    procedure: "Jaw Contouring",
    category: "Jaw",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200",
  },
  {
    id: 4,
    name: "Karen",
    procedure: "Facial Symmetry",
    category: "Face",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200",
  },
  {
    id: 5,
    name: "Daniel",
    procedure: "Chin Augmentation",
    category: "Face",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1200",
  },
  {
    id: 6,
    name: "Elena",
    procedure: "Jawline Definition",
    category: "Jaw",
    image:
      "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1200",
  },
];

/* =====================================================
   MAIN PAGE
===================================================== */
export default function BeforeAfterPage() {
  const [filter, setFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases =
    filter === "All" ? CASES : CASES.filter((c) => c.category === filter);

  return (
    <div className="bg-[#1a1f26] text-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <GallerySection
        filter={filter}
        setFilter={setFilter}
        cases={filteredCases}
        onSelectCase={setSelectedCase}
      />

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <CaseDetailModal
            caseData={selectedCase}
            onClose={() => setSelectedCase(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* =====================================================
   HERO SECTION - Wide Scatter
===================================================== */
function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const floatingImages = [
    {
      src: CASES[0].image,
      left: "6%",
      top: "10%",
      rot: -16,
      delay: 0.1,
      size: 210,
    },
    {
      src: CASES[1].image,
      left: "84%",
      top: "15%",
      rot: 12,
      delay: 0.25,
      size: 180,
    },
    {
      src: CASES[2].image,
      left: "4%",
      top: "72%",
      rot: -10,
      delay: 0.4,
      size: 250,
    },
    {
      src: CASES[3].image,
      left: "79%",
      top: "62%",
      rot: 14,
      delay: 0.55,
      size: 195,
    },
    {
      src: CASES[4].image,
      left: "46%",
      top: "18%",
      rot: -5,
      delay: 0.7,
      size: 270,
    },
    {
      src: CASES[5].image,
      left: "32%",
      top: "81%",
      rot: 9,
      delay: 0.85,
      size: 200,
    },
    {
      src: CASES[0].image,
      left: "90%",
      top: "38%",
      rot: -13,
      delay: 1.0,
      size: 165,
    },
    {
      src: CASES[2].image,
      left: "11%",
      top: "35%",
      rot: 11,
      delay: 0.15,
      size: 225,
    },
  ];

  return (
    <motion.section
      style={{ opacity }}
      className="relative min-h-[100vh] flex items-center justify-center px-5 sm:px-10 py-16 bg-gradient-to-br from-[#1a1f26] via-[#1f252e] to-[#242a33] overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-20 text-center pointer-events-none"
      >
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-none drop-shadow-2xl">
          Before & After
          <br />
          <span className="italic bg-gradient-to-r from-[#ff8a8a] via-[#ff6b6b] to-[#9e4a47] bg-clip-text text-transparent">
            Transformations
          </span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300/90 max-w-2xl mx-auto font-light">
          Real results. Real confidence. Real stories.
        </p>
      </motion.div>

      {/* Scattered images */}
      {floatingImages.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          className="absolute rounded-2xl shadow-2xl object-cover border-4 border-white/10 pointer-events-auto hidden sm:block"
          style={{
            width: img.size,
            height: img.size * 1.32,
            left: img.left,
            top: img.top,
          }}
          initial={{ opacity: 0, scale: 0.3, rotate: img.rot * 1.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: img.rot,
          }}
          whileHover={{
            scale: 1.22,
            rotate: img.rot + (i % 2 === 0 ? 7 : -7),
            y: -20,
            boxShadow: "0 0 80px 20px rgba(158, 74, 71, 0.5)",
            zIndex: 30,
          }}
          transition={{
            duration: 1.8 + i * 0.15,
            delay: img.delay,
            ease: [0.16, 1, 0.3, 1],
            whileHover: { type: "spring", stiffness: 280, damping: 18 },
          }}
        />
      ))}
    </motion.section>
  );
}

/* =====================================================
   STORY SECTION
===================================================== */
function StorySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#1a1f26] to-[#242a33]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          <div className="inline-block px-5 py-2 rounded-full bg-[#9e4a47]/20 text-[#ff9e9e] text-sm tracking-widest uppercase mb-6">
            Real People • Real Results
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl leading-tight mb-8">
            See the <span className="text-[#ffede0]">transformation</span>{" "}
            you've been dreaming of
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Every journey begins with a brave decision. Behind each before &
              after is a real person who chose to trust the process and the
              result speaks louder than words.
            </p>
            <p>
              We believe in honest transformations: natural-looking, balanced,
              and beautifully authentic.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9e4a47]/40 to-[#84332F]/30 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity" />
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400"
            alt="Transformation"
            className="relative z-10 rounded-3xl w-full shadow-2xl object-cover aspect-[4/5] lg:aspect-auto lg:h-[620px] object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection({ filter, setFilter, cases, onSelectCase }) {
  return (
    <section className="py-28 px-6 bg-[#FFF8EF] text-[#1a1f26]">

      {/*
      =====================================================
      FILTERS (COMMENTED OUT FOR NOW)
      =====================================================
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mb-20">
        {["All", "Jaw", "Nose", "Face"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "bg-gradient-to-r from-[#9e4a47] to-[#84332F] text-white shadow-lg shadow-[#9e4a47]/30"
                : "bg-white/80 border border-[#FCEBDE] hover:bg-[#FCEBDE]/80"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      */}

      {/*
      =====================================================
      DUMMY CASES GRID (COMMENTED OUT FOR NOW)
      =====================================================
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
        {cases.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.8 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {item.procedure}
              </p>

              <Link
                to={`/case/${item.id}`}
                className="mt-5 px-7 py-2.5 rounded-full bg-gradient-to-r from-[#9e4a47]/20 to-[#84332F]/20 border border-[#9e4a47]/30 text-white hover:bg-[#9e4a47]/40 transition inline-block"
              >
                View Transformation →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      */}

      {/* =====================================
         SINGLE REAL CASE (PRAKHAR ONLY)
      ===================================== */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3 className="font-serif text-4xl mb-10 text-[#1a1f26]">
          Prakhar
        </h3>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={assets.prakhar}
            alt="Prakhar Transformation"
            className="w-full h-[620px] object-contain bg-[#1a1f26]"
          />
        </div>

        {/* VIEW TRANSFORMATION BUTTON */}
        <div className="mt-10">
          <Link
            to="/case/prakhar"
            className="inline-block px-10 py-3 rounded-full text-white font-medium
                       bg-gradient-to-r from-[#9e4a47] to-[#84332F]
                       shadow-lg shadow-[#9e4a47]/30
                       hover:shadow-[#9e4a47]/50 transition"
          >
            View Transformation →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}


/* =====================================================
   CASE DETAIL MODAL
===================================================== */
function CaseDetailModal({ caseData, onClose }) {
  const [view, setView] = useState("before");

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl bg-[#1a1f26] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white text-3xl hover:text-gray-300 transition"
        >
          ×
        </button>

        <div className="p-8 md:p-12">
          <h2 className="font-serif text-4xl md:text-6xl text-center mb-10">
            {caseData.name}
          </h2>

          <div className="relative aspect-[4/5] md:aspect-[3/4] max-w-4xl mx-auto rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ x: view === "before" ? -80 : 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: view === "before" ? 80 : -80, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={caseData.image}
                  alt={`${caseData.name} - ${view}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-6 py-2 rounded-full text-lg">
                  {view === "before" ? "Before" : "After"}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10">
              <button
                onClick={() => setView("before")}
                className={`px-8 py-3 rounded-full transition-all ${
                  view === "before"
                    ? "bg-[#9e4a47] shadow-lg"
                    : "hover:bg-white/10"
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setView("after")}
                className={`px-8 py-3 rounded-full transition-all ${
                  view === "after"
                    ? "bg-[#9e4a47] shadow-lg"
                    : "hover:bg-white/10"
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-gray-400 mt-8 text-sm">
            * Currently showing placeholder image • In real project use separate
            before/after photos
          </p>
        </div>
      </motion.div>
    </div>
  );
}
