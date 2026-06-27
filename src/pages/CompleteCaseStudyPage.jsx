import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { caseStudyAPI } from "../services/api";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SEOMeta from "../components/common/SEOMeta";
import ConsultationPopup from "../components/ConsultationPopup";
import assets from "../assets/assets";

export default function CompleteCaseStudyPage() {
  const { slug } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  
  // State for ProgressGallery tabs
  const [activeTab, setActiveTab] = useState("FRONT VIEW");

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        const response = await caseStudyAPI.getOne(slug);
        setCaseData(response.data.data);
      } catch (err) {
        console.error("Failed to fetch case study:", err);
        setError(err.response?.data?.message || "Case study not found");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCaseStudy();
    }
  }, [slug]);

  if (loading) return <LoadingSpinner />;
  if (error || !caseData) {
    return (
      <div className="bg-[#FFF8EF] min-h-screen flex items-center justify-center">
        <div className="text-center text-[#2B333C] max-w-md px-4">
          <h1 className="text-2xl font-semibold mb-4">Case Study Not Found</h1>
          <p className="text-gray-600">The case study you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Get images from API
  const beforeImages = caseData?.heroImages?.before || [];
  const afterImages = caseData?.heroImages?.after || [];
  
  // Get the first before and after image for hero section
  const heroBeforeImage = beforeImages.length > 0 ? beforeImages[0]?.url : null;
  const heroAfterImage = afterImages.length > 0 ? afterImages[0]?.url : null;
  
  // Get all table images from API
  const tableImages = caseData?.tableData?.images || {};
  const tableRows = caseData?.tableData?.rows || [
    { id: "front", label: "FRONT VIEW" },
    { id: "right", label: "RIGHT PROFILE" },
    { id: "left", label: "LEFT PROFILE" },
    { id: "back", label: "TOP / BACK" },
  ];
  
  const tableColumns = caseData?.tableData?.columns || [
    { id: "before", label: "BEFORE SURGERY" },
    { id: "immediate", label: "IMMEDIATE POST" },
    { id: "month14", label: "MONTH 14" },
    { id: "month28", label: "MONTH 28" },
  ];

  // Map tab names to row IDs
  const tabToRowId = {
    "FRONT VIEW": "front",
    "RIGHT PROFILE": "right",
    "LEFT PROFILE": "left",
    "TOP / BACK": "back",
  };

  // Get the current row ID based on active tab
  const currentRowId = tabToRowId[activeTab];
  
  // Get the timeline columns with status colors
  const timelineColumns = tableColumns.map((col) => ({
    label: col.label,
    statusColor: col.label.includes("28") || col.label.includes("AFTER") || col.label === "MONTH 28" 
      ? "bg-[#55B074]" 
      : "bg-[#B07355]"
  }));

  // Function to get image for current tab and column
  const getImageForTabAndColumn = (colId) => {
    const imageKey = `${currentRowId}_${colId}`;
    const image = tableImages[imageKey];
    return image?.url || image || null;
  };

  // Get stats from API or use defaults
  const stats = caseData?.stats && caseData.stats.length > 0 ? caseData.stats : [
    { value: "94", unit: "%", label: "DENSITY RESTORED" },
    { value: "3", label: "PROTOCOLS USED" },
    { value: "28", label: "MONTH JOURNEY" },
    { value: "12", unit: "+", label: "TREATMENT SESSIONS" },
  ];

  // Get protocol phases from API or use defaults
  const protocolPhases = caseData?.protocols && caseData.protocols.length > 0 ? caseData.protocols : [
    {
      month: "MONTH 01 — INITIAL CONSULTATION",
      title: "Comprehensive Diagnostic",
      description: "Trichoscopy, blood panel, DHT mapping, and scalp biopsy established baseline metrics. A personalised treatment roadmap was drafted.",
      placeholder: "TRICHOSCOPY IMAGE",
    },
    {
      month: "MONTH 11–16 — PHASE III",
      title: "GFC Protocol",
      description: "Growth Factor Concentrate injections targeting crown and temporal regions. 40% density increase from baseline confirmed by trichoscopy.",
      placeholder: "GFC INJECTION PHOTO",
    },
    {
      month: "MONTH 02–04 — PHASE I",
      title: "Scalp Priming",
      description: "Low-level laser therapy, topical Minoxidil, and a custom nutritional protocol to stimulate dormant follicles and improve scalp vascularity.",
      placeholder: "LLLT SESSION PHOTO",
    },
    {
      month: "MONTH 17–24 — PHASE IV",
      title: "Consolidation",
      description: "Quarterly maintenance, Finasteride protocol introduced, continued LLLT. Hair coverage approaching natural density benchmarks.",
      placeholder: "MID-TREATMENT PROGRESS PHOTO",
    },
    {
      month: "MONTH 05–10 — PHASE II",
      title: "PRP Therapy Series",
      description: "Six sessions of Platelet-Rich Plasma therapy at 4-week intervals. Significant reduction in hair fall by session four. New vellus hair noted.",
      placeholder: "PRP PROCEDURE PHOTO",
    },
    {
      month: "MONTH 25–28 — FINAL",
      title: "Result Assessment",
      description: "94% hair density restoration confirmed. Hairline re-establishment complete. Ongoing 6-monthly maintenance prescribed.",
      placeholder: "FINAL RESULT PHOTO",
    },
  ];

  // Get protocols - Hardcoded with local assets
const protocols = [
  {
    id: "01",
    title: "Low-Level Laser Therapy",
    description: "650nm photobiomodulation to stimulate follicular activity, increase ATP production, and improve scalp circulation — a non-invasive foundation for all other treatments.",
    placeholder: "LLLT TREATMENT IMAGE",
    image: assets.lowlazor,
  },
  {
    id: "02",
    title: "PRP Hair Treatment",
    description: "Autologous platelet-rich plasma derived from the patient's own blood, concentrated and injected to deliver growth factors directly to dormant follicles.",
    placeholder: "PRP PROCEDURE IMAGE",
    image: assets.prp4,
  },
  {
    id: "03",
    title: "GFC Therapy",
    description: "Growth Factor Concentrate — a next-generation evolution of PRP with significantly higher concentration, delivering superior follicular regeneration outcomes.",
    placeholder: "GFC THERAPY IMAGE",
    image: assets.gfc,
  },
];

  // Get outcomes from API or use defaults
  const outcomes = caseData?.outcomes && caseData.outcomes.length > 0 ? caseData.outcomes : [
    { label: "Hair Density", value: 94 },
    { label: "Hairline Coverage", value: 88 },
    { label: "Hair Shaft Diameter", value: 76 },
    { label: "Scalp Sebum Balance", value: 82 },
    { label: "Patient Satisfaction", value: 97 },
  ];

  // Get success stories from API or use defaults
  const successStories = caseData?.successStories && caseData.successStories.length > 0 
    ? caseData.successStories.map((story, idx) => ({
        treatment: story.treatment,
        name: story.name,
        details: story.details,
        image: idx % 2 === 0 ? heroBeforeImage : heroAfterImage,
      }))
    : [
        {
          treatment: "HAIR RESTORATION · 18 MONTHS",
          name: "Arun, 29",
          details: "Norwood Grade IV · PRP Protocol",
          image: heroBeforeImage || null,
        },
        {
          treatment: "SCALP TREATMENT · 12 MONTHS",
          name: "Meera, 41",
          details: "Diffuse thinning · LLLT + GFC",
          image: heroBeforeImage || null,
        },
        {
          treatment: "HAIR RESTORATION · 22 MONTHS",
          name: "Vikram, 38",
          details: "Norwood Grade VI · Full protocol",
          image: heroAfterImage || null,
        },
      ];

  // Get content paragraphs from API
  const storyParagraphs = caseData?.content
    ?.filter(c => c.type === "paragraph")
    .sort((a, b) => a.order - b.order)
    .slice(0, 2) || [];

  // Get banner details
  const bannerDetails = caseData?.bannerDetails || {
    patientName: caseData?.name?.split(" ")[0] || "Patient",
    totalGrafts: {
      first: "",
      second: "",
      technique: "MHT (FUT + FUE)"
    },
    techniqueUsed: "MHT (FUT + FUE)",
    sessions: ""
  };

  // Tabs for ProgressGallery
  const tabs = ["FRONT VIEW", "RIGHT PROFILE", "LEFT PROFILE", "TOP / BACK"];

  // ============================================
  // SMART IMAGE LOADING FOR VISUAL EVIDENCE
  // ============================================
  
  // Helper to get ALL available images grouped by view
  const getImagesByView = () => {
    const viewGroups = {
      front: { before: null, immediate: null, month14: null, month28: null },
      right: { before: null, immediate: null, month14: null, month28: null },
      left: { before: null, immediate: null, month14: null, month28: null },
      back: { before: null, immediate: null, month14: null, month28: null }
    };
    
    for (const [key, value] of Object.entries(tableImages)) {
      const parts = key.split('_');
      if (parts.length === 2) {
        const view = parts[0];
        const col = parts[1];
        if (viewGroups[view] && ['before', 'immediate', 'month14', 'month28'].includes(col)) {
          viewGroups[view][col] = value?.url || value;
        }
      }
    }
    
    return viewGroups;
  };

  // Get all available images by view
  const imagesByView = getImagesByView();

  // Helper to get image for a view and time period with smart fallback
  const getVisualEvidenceImage = (view, timePeriod) => {
    // Try exact match first
    if (imagesByView[view] && imagesByView[view][timePeriod]) {
      return imagesByView[view][timePeriod];
    }
    
    // Try to find any image from the same view
    if (imagesByView[view]) {
      const periods = ['before', 'immediate', 'month14', 'month28'];
      for (const period of periods) {
        if (imagesByView[view][period]) {
          return imagesByView[view][period];
        }
      }
    }
    
    // Try front view as fallback (for crown section)
    if (view !== 'front' && imagesByView['front']) {
      const periods = ['before', 'immediate', 'month14', 'month28'];
      for (const period of periods) {
        if (imagesByView['front'][period]) {
          return imagesByView['front'][period];
        }
      }
    }
    
    // Try right view as fallback (for profile section)
    if (view !== 'right' && imagesByView['right']) {
      const periods = ['before', 'immediate', 'month14', 'month28'];
      for (const period of periods) {
        if (imagesByView['right'][period]) {
          return imagesByView['right'][period];
        }
      }
    }
    
    // Try any view
    for (const viewName of ['front', 'right', 'left', 'back']) {
      if (imagesByView[viewName]) {
        const periods = ['before', 'immediate', 'month14', 'month28'];
        for (const period of periods) {
          if (imagesByView[viewName][period]) {
            return imagesByView[viewName][period];
          }
        }
      }
    }
    
    // Final fallback to hero images
    return timePeriod === 'before' || timePeriod === 'immediate' || timePeriod === 'month14' 
      ? heroBeforeImage 
      : heroAfterImage;
  };

  // Debug: Log available images to console
  console.log('Images by view:', imagesByView);

  return (
    <>
      <SEOMeta caseStudy={caseData} />
      <div>
       {/* HeroCaseStudy Component - FIXED: Square images, vertically aligned on desktop */}
<div className="min-h-screen bg-[#2D1B13] text-[#D7C9AC] font-sans selection:bg-[#C8845D]/30 selection:text-white">
  <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col lg:flex-row">

    {/* LEFT SECTION: CONTENT */}
    <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-20 flex flex-col">
      <div className="space-y-12 flex-1">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60 font-medium">
          CASES / HAIR RESTORATION / {caseData?.name?.toUpperCase() || "PATIENT"}
        </nav>

        <div className="space-y-6">
          <div className="h-px w-24 bg-[#D7C9AC]/30" />
          <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-80">
            PATIENT CASE STUDY
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white">
            {bannerDetails.patientName}'s <br />
            <span className="italic text-[#C8845D] font-medium">Hair Revival</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#D7C9AC]/90">
            A {caseData?.patientDetails?.duration || "28"}-month journey restored.
          </h2>
        </div>

        {/* MOBILE IMAGES - Appear after the h2 on mobile */}
        <div className="block lg:hidden w-full">
          <div className="space-y-6">
            {/* BEFORE Image - Mobile */}
            <div className="relative group overflow-hidden">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-4 py-1.5 border border-[#D7C9AC]/30 rounded-full text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-all">
                  BEFORE
                </span>
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#1a0f0a] shadow-2xl">
                {heroBeforeImage ? (
                  <img
                    src={heroBeforeImage}
                    alt="Before treatment"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                    <svg className="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs uppercase tracking-[0.2em] font-light">BEFORE — UPLOAD PATIENT PHOTO</p>
                  </div>
                )}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-3 text-center">
                INITIAL PRESENTATION · MONTH 01
              </div>
            </div>

            {/* AFTER Image - Mobile */}
            <div className="relative group bg-[#26160F] hover:bg-[#2D1B13] transition-colors rounded-2xl overflow-hidden">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-4 py-1.5 bg-[#C8845D] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-lg">
                  AFTER
                </span>
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#1a0f0a] shadow-2xl">
                {heroAfterImage ? (
                  <img
                    src={heroAfterImage}
                    alt="After treatment"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                    <svg className="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs uppercase tracking-[0.2em] font-light">AFTER — UPLOAD PATIENT PHOTO</p>
                  </div>
                )}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-3 text-center">
                FINAL RESULT · MONTH 28
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md space-y-8">
          <p className="text-sm md:text-base leading-relaxed opacity-80">
            {storyParagraphs[0]?.content ||
              "From Norwood Grade V alopecia to 94% density restoration — a documented, science-led transformation by Satya's specialist team in Delhi NCR."}
          </p>
          <div className="flex flex-wrap gap-2">
            {["Androgenetic Alopecia", "Norwood Grade V", "PRP + GFC Protocol"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-[#D7C9AC]/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#D7C9AC]/10 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-[#D7C9AC]/10 grid grid-cols-3 gap-4 lg:mt-auto">
        <div>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">PATIENT AGE</p>
          <p className="text-2xl md:text-3xl font-serif">{caseData?.patientDetails?.age || "34"} yrs</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">DURATION</p>
          <p className="text-2xl md:text-3xl font-serif">{caseData?.patientDetails?.duration || "28"} mo.</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">SESSIONS</p>
          <p className="text-2xl md:text-3xl font-serif">{bannerDetails.sessions || "12+"}</p>
        </div>
      </div>
    </div>

    {/* RIGHT SECTION: IMAGES - Square + Vertically Stacked on Desktop (Hidden on Mobile) */}
    <div className="hidden lg:flex w-full lg:w-[55%] flex-col border-t lg:border-t-0 lg:border-l border-[#D7C9AC]/10 order-2 lg:order-none">
      
      {/* BEFORE Image */}
      <div className="flex-1 min-h-[420px] lg:min-h-[50vh] p-4 md:p-8 flex flex-col relative group overflow-hidden border-b border-[#D7C9AC]/10">
        <div className="absolute top-6 md:top-8 right-6 md:right-8 z-20">
          <span className="px-5 py-2 border border-[#D7C9AC]/30 rounded-full text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-all">
            BEFORE
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {heroBeforeImage ? (
            <div className="w-full h-full max-w-[520px] mx-auto aspect-square rounded-2xl overflow-hidden bg-[#1a0f0a] shadow-2xl">
              <img
                src={heroBeforeImage}
                alt="Before treatment"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4 text-center">
              <svg className="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs uppercase tracking-[0.2em] font-light">BEFORE — UPLOAD PATIENT PHOTO</p>
            </div>
          )}
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-6 text-center">
          INITIAL PRESENTATION · MONTH 01
        </div>
      </div>

      {/* AFTER Image */}
      <div className="flex-1 min-h-[420px] lg:min-h-[50vh] p-4 md:p-8 flex flex-col relative group bg-[#26160F] hover:bg-[#2D1B13] transition-colors">
        <div className="absolute top-6 md:top-8 right-6 md:right-8 z-20">
          <span className="px-5 py-2 bg-[#C8845D] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-lg">
            AFTER
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {heroAfterImage ? (
            <div className="w-full h-full max-w-[520px] mx-auto aspect-square rounded-2xl overflow-hidden bg-[#1a0f0a] shadow-2xl">
              <img
                src={heroAfterImage}
                alt="After treatment"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4 text-center">
              <svg className="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs uppercase tracking-[0.2em] font-light">AFTER — UPLOAD PATIENT PHOTO</p>
            </div>
          )}
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-6 text-center">
          FINAL RESULT · MONTH 28
        </div>
      </div>
    </div>
  </div>
</div>

        {/* TreatmentStatsComponent */}
<div className="w-full bg-[#C8734B]">
  <div className="grid grid-cols-2 lg:grid-cols-4">
    {stats.map((stat, index) => (
      <div
        key={index}
        className={`flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 px-6 border-white/10 ${
          index % 2 === 0 ? "border-r" : ""
        } ${index < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
      >
        <div className="flex items-start justify-center mb-2">
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-[#F3EFE0] leading-none">
            {stat.value}
          </span>
          {stat.unit && (
            <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F3EFE0] mt-1 ml-1">
              {stat.unit}
            </span>
          )}
        </div>
        <p className="text-[10px] md:text-xs lg:text-sm font-sans tracking-[0.2em] text-[#F3EFE0]/90 font-medium text-center">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* LokeshJourneyDetailComponent */}
        <div className="w-full bg-[#EFEBE3] text-[#2D1B13] font-sans antialiased">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:p-24 bg-[#EFEBE3] flex flex-col justify-center">
              <div className="max-w-xl space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-px bg-[#C8734B]" />
                  <span className="text-[10px] tracking-[0.3em] font-bold text-[#2D1B13]/60 uppercase">
                    HIS STORY
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-[#2D1B13]">
                  When {bannerDetails.patientName} walked in, <br />
                  <span className="italic text-[#C8734B] font-medium">hope was thin.</span>
                </h2>
                <div className="space-y-6 text-[#2D1B13]/80 leading-relaxed text-sm md:text-base">
                  {storyParagraphs.length > 0 ? (
                    storyParagraphs.map((para) => (
                      <p key={para.id}>{para.content}</p>
                    ))
                  ) : (
                    <>
                      <p>
                        At {caseData?.patientDetails?.age || "34"}, {bannerDetails.patientName} had been experiencing progressive hair loss for over six
                        years. By the time he came to Satya Skin & Hair, he had reached
                        Norwood Grade V — significant recession across the crown and
                        temples, with a rapidly shrinking hairline.
                      </p>
                      <p>
                        He had tried multiple OTC treatments and two previous clinical
                        consultations elsewhere with minimal results. His confidence was
                        severely impacted — both professionally and personally.
                      </p>
                    </>
                  )}
                </div>
                <button className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold text-[#C8734B] uppercase border-b border-[#C8734B]/30 pb-1 hover:border-[#C8734B] transition-all">
                  READ FULL CONSULTATION NOTES
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                    <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col border-l border-[#2D1B13]/5">
              <div className="flex-1 min-h-[450px] bg-[#D6CEC1] flex flex-col items-center justify-center relative p-8">
                {heroBeforeImage ? (
                  <div className="w-full max-w-[300px] mx-auto aspect-square rounded-full overflow-hidden border-4 border-[#C8734B]/30">
                    <img src={heroBeforeImage} alt="Consultation" className="w-full h-full object-cover object-center" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 opacity-30">
                    <div className="w-12 h-12 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-[#2D1B13] rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#2D1B13] rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-[10px] tracking-[0.2em] font-medium uppercase">CONSULTATION PHOTO</span>
                  </div>
                )}
                <div className="absolute bottom-6 left-8 text-[10px] tracking-[0.15em] font-medium text-[#2D1B13]/40 uppercase">
                  FIRST VISIT · JANUARY 2024
                </div>
              </div>

              <div className="bg-[#33241B] p-12 md:p-16 text-[#EFEBE3]">
                <blockquote className="max-w-md">
                  <p className="text-2xl md:text-3xl font-serif italic font-light leading-snug mb-6">
                    "I had tried everything. Nothing worked until I walked into Satya."
                  </p>
                  <footer className="text-[10px] tracking-[0.2em] font-medium text-[#EFEBE3]/50 uppercase">
                    — {bannerDetails.patientName?.toUpperCase() || "PATIENT"}, ON HIS FIRST CONSULTATION
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2D1B13]/10">
            <div className="py-8 bg-[#EFEBE3] text-center border-t border-[#2D1B13]/5">
              <p className="text-[10px] tracking-[0.05em] text-[#2D1B13]/50 font-medium italic">
                Progressive documentation — months 1 through 28. Photos taken under standardised clinic lighting.
              </p>
            </div>
          </div>
        </div>

        {/* TreatmentJourneyProtocol */}
        <div className="bg-[#1A1614] text-[#D7C9AC] p-8 md:p-16 lg:p-24 font-sans selection:bg-[#C8734B]/30">
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

          
        </div>

        {/* TransformationProtocols */}
<div className="bg-[#F8F5F0] text-[#2D1B13] font-sans antialiased selection:bg-[#C8734B]/20">
  <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20 lg:py-32">
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] items-center gap-10 lg:gap-24 mb-20 lg:mb-28">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-7 h-[1px] bg-[#C8734B]" />
          <span className="text-[10px] tracking-[0.32em] uppercase text-[#C8734B] font-medium">
            Protocols Used
          </span>
        </div>
        <h2 className="font-serif text-[52px] sm:text-[64px] lg:text-[78px] leading-[0.98] tracking-[-0.03em] text-[#2D1B13]">
          What made
          <br />
          <span className="italic text-[#C8734B] font-normal">the transformation</span>{" "}
          possible
        </h2>
      </div>
      <div className="lg:pt-10 flex lg:justify-end">
        <p className="max-w-[520px] text-[15px] leading-[2] text-[#8B776D] font-light">
          A multi-modal approach where each treatment built on the last —
          not a single solution, but a precisely sequenced combination
          tailored to Lokesh's biology.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#2D1B13]/10">
      {protocols.map((protocol, index) => (
        <div 
          key={protocol.id} 
          className={`pt-12 pb-16 lg:px-12 first:pl-0 last:pr-0 
            ${index !== protocols.length - 1 ? "md:border-r border-[#2D1B13]/10" : ""}
            ${index === 1 ? "lg:px-12" : ""}
          `}
        >
          <div className="space-y-10">
            <span className="block text-5xl font-serif text-[#C8734B]/20 font-light">
              {protocol.id}
            </span>
            <div className="aspect-square max-w-[300px] mx-auto bg-[#EAE4D8] border border-[#2D1B13]/5 flex items-center justify-center p-8 group cursor-pointer hover:bg-[#E2DBCF] transition-colors overflow-hidden">
              {protocol.image ? (
                <img src={protocol.image} alt={protocol.title} className="w-full h-full object-cover object-center" />
              ) : (
                <span className="text-[9px] tracking-[0.25em] font-bold text-[#2D1B13]/30 uppercase text-center leading-loose">
                  {protocol.placeholder}
                </span>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#2D1B13]">{protocol.title}</h3>
              <p className="text-sm leading-relaxed text-[#2D1B13]/70">{protocol.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* ProgressGallery */}
        <div className="w-full min-h-screen bg-[#F7F4EE] text-[#4A3B32] font-sans p-4 md:p-8 flex flex-col justify-between selection:bg-[#B07355] selection:text-white">
          
          {/* HEADER SECTION */}
          <header className="max-w-7xl w-full mx-auto mb-6 md:mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-3 md:gap-4">
              <div>
                <span className="text-xs tracking-widest uppercase text-[#B07355] font-semibold block mb-2 relative before:content-[''] before:inline-block before:w-4 before:h-[1px] before:bg-[#B07355] before:mr-2 before:align-middle">
                  Visual Evidence
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#33251D]">
                  {bannerDetails.patientName}'s <span className="italic text-[#B07355]">Progress</span> <br className="hidden sm:block" />
                  &amp; Results
                </h1>
              </div>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-[#8A7A70] max-w-md font-light">
                Every angle, every stage — documented under standardised clinic lighting. Click any image to view full size. 
                Photos are shown across four views: Front, Right, Left, and Top/Back.
              </p>
            </div>
          </header>

          {/* INTERACTIVE TABS */}
          <div className="max-w-7xl w-full mx-auto mb-4 overflow-x-auto">
            <div className="flex flex-nowrap gap-1 min-w-[320px]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-4 py-2 text-[8px] md:text-[10px] tracking-wider font-medium uppercase transition-all duration-200 border-b-2 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab
                      ? "bg-[#B07355] text-white border-[#B07355]"
                      : "bg-[#EAE4D9] text-[#7A6A5F] border-transparent hover:bg-[#E2D9CB]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* PHOTO GRID MATRIX */}
          <main className="max-w-7xl w-full mx-auto bg-[#312219] grid grid-cols-1 md:grid-cols-[60px_1fr] overflow-hidden shadow-sm">
            
            {/* Left Side Label Column - hidden on mobile */}
            <div className="hidden md:flex bg-[#312219] items-center justify-center py-4 md:py-0 border-b border-[#423228] md:border-b-0 md:border-r">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9C8B80] transform md:-rotate-90 whitespace-nowrap">
                {activeTab.split(" ")[0]}
              </span>
            </div>

            {/* Timeline Columns Container */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-[#F7F4EE]">
              {timelineColumns.map((col, index) => {
                const imageUrl = getImageForTabAndColumn(tableColumns[index]?.id);
                return (
                  <div key={index} className="flex flex-col bg-[#DDD7CB]">
                    
                    {/* Header Label for Timeline Stage */}
                    <div className={`bg-[#B07355] text-white text-center py-1.5 md:py-2 text-[7px] md:text-[10px] tracking-widest font-semibold uppercase relative px-1`}>
                      <span className="truncate block">{col.label}</span>
                      <div className={`absolute bottom-0 left-0 right-0 h-[2px] md:h-[3px] ${col.statusColor}`} />
                    </div>

                    {/* Photo Slot */}
                    <div className="aspect-square md:aspect-[3/4] md:h-[550px] flex flex-col items-center justify-center p-2 md:p-6 text-center group cursor-pointer hover:bg-[#D5CEBF] transition-colors duration-300 relative bg-[#DDD7CB]">
                      
                      {imageUrl ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={imageUrl} 
                            alt={`${activeTab} - ${col.label}`}
                            className="w-full h-full object-cover md:object-contain rounded-lg shadow-md"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                          <svg 
                            className="w-4 h-4 md:w-6 md:h-6 mb-1 md:mb-2 text-[#4A3B32]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-[7px] md:text-[9px] tracking-wider uppercase font-medium text-[#4A3B32] text-center">
                            Upload Photo
                          </span>
                        </div>
                      )}
                      
                      {/* Mobile view label overlay */}
                      <div className="absolute bottom-1 left-1 right-1 md:hidden bg-black/50 text-white text-[6px] uppercase tracking-wider py-0.5 px-1 rounded text-center truncate">
                        {col.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          {/* FOOTER & LEGEND SECTION */}
          <footer className="max-w-7xl w-full mx-auto mt-4 md:mt-6 pt-4 border-t border-[#E6DECFC5] flex flex-col sm:flex-row sm:justify-between items-center gap-3 md:gap-4 text-[8px] md:text-[10px] text-[#8A7A70]">
            <p className="italic font-light text-center sm:text-left">
              All photographs taken under standardised clinic lighting. Results are patient-specific and may vary.
            </p>
            
            {/* Color Legend mapping */}
            <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#8E867A] block rounded-sm" />
                <span className="uppercase tracking-wider text-[7px] md:text-[9px]">Before</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#9E5B37] block rounded-sm" />
                <span className="uppercase tracking-wider text-[7px] md:text-[9px]">Immediate</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#B07355] block rounded-sm" />
                <span className="uppercase tracking-wider text-[7px] md:text-[9px]">Mid</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#55B074] block rounded-sm" />
                <span className="uppercase tracking-wider text-[7px] md:text-[9px]">Final</span>
              </div>
            </div>
          </footer>
        </div>

        {/* MeasuredOutcomesSection */}
        <div className="bg-[#2D1B13] text-[#DFD0BA] font-sans antialiased selection:bg-[#C8734B]/30 selection:text-white">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 p-6 md:p-10 lg:p-16 xl:p-24 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#DFD0BA]/30" />
                  <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#DFD0BA]/80">
                    MEASURED OUTCOMES
                  </h2>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.15] text-white">
                  Results that <br />
                  <span className="italic text-[#C8734B] font-medium">speak for themselves</span>
                </h1>
              </div>
              <div className="max-w-xl space-y-4 md:space-y-6 text-[#DFD0BA]/90 text-sm md:text-base leading-relaxed">
                <p>
                  Every metric was objectively measured using trichoscopy and
                  standardised photography at baseline, 12 months, and final
                  assessment at 28 months.
                </p>
                <p className="border-t border-[#DFD0BA]/10 pt-4 md:pt-6">
                  Numbers represent improvement percentage from {bannerDetails.patientName}'s
                  baseline measurements at initial consultation.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 md:pt-8 lg:pt-16">
              {outcomes.map((item, index) => (
                <div key={index} className="space-y-2 md:space-y-3 group">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#DFD0BA]/70 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-[#DFD0BA]">
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-0.5 bg-[#DFD0BA]/10 w-full relative overflow-hidden rounded-full">
                    <div 
                      className="absolute left-0 top-0 h-full bg-[#C8734B]"
                      style={{ width: `${item.value}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            VisualEvidenceComponent - UPDATED WITH SMART IMAGE LOADING
            ============================================================ */}
        <div className="w-full bg-[#EFEBE3] text-[#2D1B13] font-sans antialiased">
          <div className="p-6 md:p-10 lg:p-16 xl:p-24 pb-8 md:pb-12">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-6 h-px bg-[#C8734B]" />
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#2D1B13]/60 uppercase">
                VISUAL EVIDENCE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              The <span className="italic text-[#C8734B] font-medium">before & after</span> <br />
              in full detail
            </h2>
          </div>

          {/* CROWN SECTION - 3 images using front view with different time periods */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#2D1B13]/10">
            {[
              { 
                label: "BEFORE", 
                status: "CROWN — BEFORE", 
                view: "front",
                period: "before",
                badgeColor: "bg-[#2D1B13]/40"
              },
              { 
                label: "MID TREATMENT", 
                status: "CROWN — MONTH 14", 
                view: "front",
                period: "month14",
                badgeColor: "bg-[#2D1B13]/40"
              },
              { 
                label: "AFTER", 
                status: "CROWN — MONTH 28", 
                view: "front",
                period: "month28",
                badgeColor: "bg-[#C8734B]"
              },
            ].map((photo, idx) => {
              const imageUrl = getVisualEvidenceImage(photo.view, photo.period);
              return (
                <div 
                  key={idx} 
                  className={`min-h-[350px] md:min-h-[450px] bg-[#D6CEC1] p-6 md:p-8 flex flex-col justify-between relative group
                    ${idx !== 2 ? "md:border-r border-[#2D1B13]/10" : ""}
                    border-b md:border-b-0
                  `}
                >
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <span className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[7px] md:text-[9px] font-bold tracking-widest uppercase text-white 
                      ${photo.label === "AFTER" ? "bg-[#C8734B]" : "bg-[#2D1B13]/40"}`}
                    >
                      {photo.label}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center transition-all group-hover:opacity-100">
                    {imageUrl ? (
                      <div className="w-full max-w-[200px] md:max-w-[250px] mx-auto aspect-square rounded-lg overflow-hidden">
                        <img src={imageUrl} alt={photo.label} className="w-full h-full object-cover object-center" />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 md:gap-4 opacity-40">
                        <div className="w-8 h-8 md:w-10 md:h-10 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                          <div className="w-4 h-4 md:w-5 md:h-5 border border-[#2D1B13] rounded-full" />
                        </div>
                        <span className="text-[7px] md:text-[9px] tracking-[0.2em] font-bold uppercase">PROGRESS PHOTO</span>
                      </div>
                    )}
                  </div>
                  <div className="text-[8px] md:text-[10px] tracking-[0.15em] font-bold text-[#2D1B13]/40 uppercase text-center mt-3 md:mt-4">
                    {photo.status}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FULL PROFILE SECTION - 2 images using right view */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#2D1B13]/10">
            {[
              { 
                label: "BEFORE — FULL VIEW", 
                status: "FULL PROFILE — BEFORE", 
                view: "right",
                period: "before",
                isAfter: false 
              },
              { 
                label: "AFTER — FULL VIEW", 
                status: "FULL PROFILE — AFTER", 
                view: "right",
                period: "month28",
                isAfter: true 
              },
            ].map((photo, idx) => {
              const imageUrl = getVisualEvidenceImage(photo.view, photo.period);
              return (
                <div 
                  key={idx} 
                  className={`min-h-[400px] md:min-h-[500px] bg-[#D6CEC1] p-6 md:p-8 flex flex-col justify-between relative group
                    ${idx === 0 ? "md:border-r border-[#2D1B13]/10" : ""}
                    border-b md:border-b-0
                  `}
                >
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <span className={`px-3 md:px-4 py-0.5 md:py-1.5 rounded-full text-[7px] md:text-[9px] font-bold tracking-widest uppercase text-white 
                      ${photo.isAfter ? "bg-[#C8734B]" : "bg-[#2D1B13]/40"}`}
                    >
                      {photo.label}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center transition-all group-hover:opacity-100">
                    {imageUrl ? (
                      <div className="w-full max-w-[250px] md:max-w-[300px] mx-auto aspect-square rounded-xl overflow-hidden shadow-lg">
                        <img src={imageUrl} alt={photo.label} className="w-full h-full object-cover object-center" />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 md:gap-4 opacity-40">
                        <div className="w-10 h-10 md:w-12 md:h-12 border border-[#2D1B13] rounded-sm flex items-center justify-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 border border-[#2D1B13] rounded-full" />
                        </div>
                        <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold uppercase">FULL PROFILE PHOTO</span>
                      </div>
                    )}
                  </div>
                  <div className="text-[8px] md:text-[10px] tracking-[0.15em] font-bold text-[#2D1B13]/40 uppercase text-center mt-3 md:mt-4">
                    {photo.status}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="py-6 md:py-8 bg-[#EFEBE3] text-center border-t border-[#2D1B13]/5">
            <p className="text-[8px] md:text-[10px] tracking-[0.05em] text-[#2D1B13]/50 font-medium italic uppercase">
              All photographs taken under standardised clinic lighting. Results are patient-specific and may vary.
            </p>
          </div>
        </div>

        {/* PatientTestimonial */}
        <section className="w-full bg-[#C76F4A] overflow-hidden">
          <div className="relative max-w-[1700px] mx-auto px-4 md:px-6 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 xl:py-28">
            <div className="absolute top-0 left-4 md:left-8 opacity-[0.08] pointer-events-none select-none">
              <span className="font-serif text-[160px] md:text-[220px] leading-none text-[#F6ECDD]">“</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.8fr] gap-12 md:gap-16 lg:gap-8 items-center">
              <div className="relative z-10 pt-6 md:pt-8 lg:pt-10 xl:pt-16">
                <blockquote className="font-serif italic text-[#FFF6EE] text-2xl md:text-4xl lg:text-[46px] xl:text-[58px] leading-[1.28] tracking-[-0.03em] max-w-[1180px]">
                  "I had lost hope before coming to Satya. What they did in
                  {caseData?.patientDetails?.duration || "28"} months, no one else could in years. I look in the mirror
                  now and feel like myself again — younger, confident, whole."
                </blockquote>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full bg-[#8E5439] border-4 border-white/20 flex items-center justify-center relative overflow-hidden shadow-xl">
                  {heroAfterImage ? (
                    <img src={heroAfterImage} alt="Patient" className="w-full h-full object-cover object-center" />
                  ) : (
                    <div className="flex flex-col items-center opacity-40">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#F6ECDD]">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="mt-2 md:mt-3 text-[8px] md:text-[10px] tracking-[0.28em] uppercase text-[#F6ECDD]">Patient Photo</span>
                    </div>
                  )}
                </div>
                <div className="mt-6 md:mt-8 text-center lg:text-left w-full max-w-[360px]">
                  <h3 className="font-serif text-3xl md:text-[42px] leading-none text-[#FFF6EE]">
                    {bannerDetails.patientName}
                  </h3>
                  <p className="mt-2 md:mt-3 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#F5D7C6]">
                    {caseData?.patientDetails?.age || "34"} YRS · DELHI NCR · HAIR RESTORATION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DoctorProfileComponent */}
        <div className="bg-[#EAE2D8]">
          <div className="h-2 bg-[#C8734B]"></div>
          <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-24 py-12 md:py-16 lg:py-20 xl:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="md:col-span-5 lg:col-span-4 relative flex flex-col items-center">
              <div className="aspect-square w-full max-w-[280px] md:max-w-[350px] mx-auto bg-[#EFEBE3] border-4 border-[#C8734B]/20 rounded-full overflow-hidden flex flex-col items-center justify-center text-center shadow-xl">
                <img src={assets.drshailteam} alt="Doctor" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-8 space-y-8 md:space-y-10 lg:space-y-12">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#C8734B]" />
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#C8734B]">YOUR SPECIALIST</h2>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D1B13] leading-tight">
                  Dr. <span className="italic text-[#C8734B] font-medium">Satya’s</span> Team
                </h1>
                <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#2D1B13]/70">LEAD DERMATOLOGIST & TRICHOLOGIST</p>
              </div>
              <div className="max-w-2xl space-y-4 md:space-y-6 text-[#2D1B13]/90 leading-relaxed text-sm md:text-base">
                <p>
                  Over 15 years of specialisation in trichology and cosmetic dermatology. 
                  Pioneer of the GFC protocol in India, with more than 4,000 successful 
                  hair restoration cases.
                </p>
                <p className="border-t border-[#2D1B13]/10 pt-4 md:pt-6">
                  Every case at Satya is treated as unique — precision diagnostics, 
                  personalised protocols, and root-cause treatment that goes beyond 
                  symptom management.
                </p>
              </div>
              <div className="pt-4 md:pt-6 border-t border-[#2D1B13]/10 flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
                {[
                  { label: "IADVL Fellow" },
                  { label: "4,000+ Cases" },
                  { label: "GFC Pioneer" },
                  { label: "15+ Years" },
                ].map((item) => (
                  <div key={item.label} className="text-center group flex flex-col items-center">
                    <span className="text-[9px] md:text-[11px] uppercase tracking-widest text-[#2D1B13]/60 font-medium group-hover:text-[#C8734B] transition-colors">
                      {item.label}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#C8734B] rounded-full mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section from API */}
        {caseData?.video?.url && (
          <div className="bg-[#EFEBE3] py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={caseData.video.url}
                  title={`${caseData.name} Hair Transplant Journey`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* FAQs from API */}
        {caseData?.faqs?.length > 0 && (
          <div className="bg-[#EFEBE3] px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-6 h-px bg-[#C8734B]" />
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8734B]">FREQUENTLY ASKED QUESTIONS</h2>
              </div>
              <div className="space-y-4 md:space-y-6">
                {caseData.faqs
                  .sort((a, b) => a.order - b.order)
                  .map((faq) => (
                    <div key={faq.id} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#2D1B13]/5">
                      <h3 className="text-base md:text-lg font-serif font-semibold text-[#2D1B13] mb-1 md:mb-2">{faq.question}</h3>
                      <p className="text-sm md:text-base text-[#2D1B13]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="bg-[#EFEBE3] py-8 md:py-12 flex justify-center px-4">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#9E4A47] hover:bg-[#8a3f3a] text-white font-medium py-3 md:py-4 px-6 md:px-8 lg:px-12 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Book Your First Free Assessment
          </button>
        </div>

        {/* FooterSection */}
        <footer className="w-full font-sans antialiased">
          <div className="bg-[#1A1614] text-[#DFD0BA] px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-20 lg:py-24 xl:py-32 border-b border-white/5">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-px bg-[#C8734B]" />
                  <span className="text-[10px] tracking-[0.3em] font-bold text-[#C8734B] uppercase">START YOUR JOURNEY</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] text-white">
                  Your story could be <br />
                  the <span className="italic text-[#C8734B] font-medium">next transformation.</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-60 max-w-lg">
                  Free 45-minute consultation with our specialist team. Comprehensive 
                  diagnostics, honest assessment, and a personalised roadmap — no obligation.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 lg:items-end">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="w-full lg:w-80 bg-[#C8734B] hover:bg-[#B3623D] text-white py-4 md:py-5 px-6 md:px-8 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3"
                >
                  BOOK FREE CONSULTATION
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                    <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-full lg:w-80 border border-white/20 hover:border-white/40 text-white py-4 md:py-5 px-6 md:px-8 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all">
                  CALL +919910094945
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}