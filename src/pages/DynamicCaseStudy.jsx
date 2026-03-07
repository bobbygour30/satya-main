import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { caseStudyAPI } from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function DynamicCaseStudy() {
  const { slug } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= BEFORE / AFTER ================= */
  const [mode, setMode] = useState(0); // 0: before, 1: after
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ================= LIGHTBOX ================= */
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        console.log('🔍 Fetching case study with slug:', slug);
        
        const response = await caseStudyAPI.getOne(slug);
        console.log('✅ Case study fetched:', response.data);
        
        setCaseData(response.data.data);
        document.title = response.data.data.title || 
          "Hair Transplant Case Study | Satya Skin & Hair";
      } catch (err) {
        console.error('❌ Failed to fetch case study:', err);
        console.error('Error response:', err.response?.data);
        setError(err.response?.data?.message || 'Case study not found');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCaseStudy();
    }
  }, [slug]);

  // Log the data structure for debugging
  useEffect(() => {
    if (caseData) {
      console.log('📊 Case Data Structure:', {
        name: caseData.name,
        slug: caseData.slug,
        hasHeroImages: !!caseData.heroImages,
        beforeCount: caseData.heroImages?.before?.length || 0,
        afterCount: caseData.heroImages?.after?.length || 0,
        hasTableData: !!caseData.tableData,
        tableColumns: caseData.tableData?.columns?.length || 0,
        tableRows: caseData.tableData?.rows?.length || 0,
        tableImages: caseData.tableData?.images ? Object.keys(caseData.tableData.images).length : 0
      });
    }
  }, [caseData]);

  const beforeImages = caseData?.heroImages?.before || [];
  const afterImages = caseData?.heroImages?.after || [];
  const currentImages = mode === 0 ? beforeImages : afterImages;
  const displayedImage = currentImages[currentIndex]?.url || '';

  const prevSlide = () => {
    if (currentImages.length === 0) return;
    setCurrentIndex((prev) => {
      return prev === 0 ? currentImages.length - 1 : prev - 1;
    });
  };

  const nextSlide = () => {
    if (currentImages.length === 0) return;
    setCurrentIndex((prev) => {
      return prev === currentImages.length - 1 ? 0 : prev + 1;
    });
  };

  const switchToBefore = () => {
    setMode(0);
  };

  const switchToAfter = () => {
    setMode(1);
  };

  useEffect(() => {
    const images = mode === 0 ? beforeImages : afterImages;
    if (images.length > 0) {
      if (currentIndex >= images.length) {
        setCurrentIndex(images.length - 1);
      }
    } else {
      setCurrentIndex(0);
    }
  }, [mode, beforeImages, afterImages, currentIndex]);

  /* ================= LIGHTBOX ================= */
  const openLightbox = (imgs, i) => {
    const valid = imgs.filter(Boolean);
    if (valid.length) {
      setLightboxImages(valid);
      setLightboxIndex(i);
    }
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(null);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((p) => (p === 0 ? lightboxImages.length - 1 : p - 1));
  };

  const nextLightboxImage = () => {
    setLightboxIndex((p) => (p === lightboxImages.length - 1 ? 0 : p + 1));
  };

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightboxImage();
      if (e.key === "ArrowRight") nextLightboxImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, lightboxImages]);

  /* ================= RENDER PROGRESS TABLE ================= */
  const renderProgressTable = () => {
    if (!caseData?.tableData) {
      return (
        <div className="text-center py-8 text-gray-500">
          No progress data available
        </div>
      );
    }

    const { rows, columns, images } = caseData.tableData;
    
    if (!rows || !columns || rows.length === 0 || columns.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          Table structure not configured
        </div>
      );
    }
    
    // Define the four views in the exact order needed
    const viewOrder = ['front', 'right', 'left', 'back'];
    const viewLabels = {
      front: 'Front',
      right: 'Right',
      left: 'Left',
      back: 'Top / Back'
    };

    // Sort rows by the view order
    const sortedRows = [...rows].sort((a, b) => {
      return viewOrder.indexOf(a.id) - viewOrder.indexOf(b.id);
    });

    return (
      <div className="w-full overflow-x-auto sm:text-xs text-[8px]">
        <table className="w-full border border-[#FCEBDE] bg-white rounded-xl shadow-sm">
          <thead>
            <tr className="bg-[#9E4A47] text-white">
              <th className="border p-3 text-left font-medium">View</th>
              {columns?.map((col) => (
                <th
                  key={col.id}
                  className="border p-3 text-center font-medium bg-[#9E4A47] text-white"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row) => (
              <tr key={row.id}>
                <td className="border p-3 font-medium bg-[#9E4A47] text-white text-left">
                  {viewLabels[row.id] || row.label}
                </td>
                {columns?.map((col) => {
                  // Construct the image key in the format that matches your database
                  const imageKey = `${row.id}_${col.id}`;
                  const image = images?.[imageKey];
                  const imageUrl = image?.url || image;
                  
                  return (
                    <td key={col.id} className="border p-0">
                      <div
                        className="cursor-pointer transition overflow-hidden"
                        onClick={() => imageUrl && openLightbox([imageUrl], 0)}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={`${row.label} - ${col.label}`}
                            className="w-full h-16 sm:h-40 md:h-48 lg:h-56 sm:object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-16 sm:h-40 md:h-48 lg:h-56 bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">No image</span>
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-[#2B333C]">{caseData?.name}</p>
          <p className="text-sm opacity-80">{caseData?.patientDetails?.clinic || 'SATYA SKIN & HAIR SOLUTIONS'}</p>
        </div>
      </div>
    );
  };

  if (loading) return <LoadingSpinner />;
  
  if (error || !caseData) {
    return (
      <div className="bg-[#FFF8EF] min-h-screen flex items-center justify-center">
        <div className="text-center text-[#2B333C] max-w-md px-4">
          <h1 className="text-2xl font-semibold mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-2">The case study "{slug}" you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500">Please check the URL or try another case study.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8EF] min-h-screen text-[#2B333C]">
      {/* ================= HERO ================= */}
      <section className="">
        <div className="max-w-[1380px] mx-auto sm:px-6">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden min-h-[45vh] lg:min-h-[55vh]">
            {/* IMAGE SIDE */}
            <div className="relative w-full overflow-hidden rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
              <div className="relative w-full pb-[120%] lg:pb-[119%]">
                {displayedImage ? (
                  <img
                    src={displayedImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No hero images available</span>
                  </div>
                )}
              </div>

              {/* BEFORE / AFTER CONTROLS */}
              {(beforeImages.length > 0 || afterImages.length > 0) && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/40 rounded-full px-3 py-2 shadow-sm">
                    <button 
                      onClick={prevSlide} 
                      className="text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={currentImages.length <= 1}
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      onClick={switchToBefore}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        mode === 0
                          ? "bg-[#9E4A47] text-white"
                          : "text-white hover:bg-white/20"
                      } ${beforeImages.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={beforeImages.length === 0}
                    >
                      Before
                    </button>

                    <button
                      onClick={switchToAfter}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        mode === 1
                          ? "bg-[#9E4A47] text-white"
                          : "text-white hover:bg-white/20"
                      } ${afterImages.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={afterImages.length === 0}
                    >
                      After 
                    </button>

                    <button 
                      onClick={nextSlide} 
                      className="text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={currentImages.length <= 1}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  
                 
                </div>
              )}
            </div>

            {/* CONTENT SIDE */}
            <div className="bg-[#2B333C] text-white px-6 sm:px-10 lg:px-14 py-12 flex items-center">
              <div className="max-w-5xl space-y-6">
                <div className="space-y-1">
                  <p className="uppercase tracking-widest text-xs text-white/60">
                    Patient Transformation Details
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    {caseData?.name}’s Hair Restoration Journey
                  </h2>
                </div>

                <div className="w-24 h-[2px] bg-[#9E4A47]" />

                <div className="grid gap-4 sm:gap-6 text-sm sm:text-base">
                  <p className="leading-relaxed">
                    <span className="text-white/70">Patient Name</span>
                    <span className="block text-lg sm:text-xl font-medium mt-1">
                      {caseData?.patientDetails?.name || caseData?.name}
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Total Grafts Implanted</span>
                    <span className="block mt-1">
                      <span className="font-medium text-white">1st Surgery:</span>{' '}
                      {caseData?.patientDetails?.grafts?.first || 'N/A'} MHT
                      <span className="mx-2 text-white/40">|</span>
                      <span className="font-medium text-white">2nd Surgery:</span>{' '}
                      {caseData?.patientDetails?.grafts?.second || 'N/A'} MHT
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Technique Used</span>
                    <span className="block mt-1 text-white">
                      {caseData?.patientDetails?.technique || 'MHT'}{' '}
                      <span className="text-white/50">
                        {caseData?.patientDetails?.techniqueDetail || ''}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 py-12 sm:py-16 space-y-10 leading-relaxed">
        {/* Dynamic Content */}
        {caseData?.content?.length > 0 ? (
          caseData.content.sort((a, b) => a.order - b.order).map((section) => {
            if (section.type === 'heading') {
              const HeadingTag = section.level || 'h3';
              return (
                <HeadingTag key={section.id} className={`text-2xl font-semibold text-[#0E3A43] ${section.className || ''}`}>
                  {section.content}
                </HeadingTag>
              );
            }
            if (section.type === 'paragraph') {
              return (
                <p key={section.id} className={section.className || ''}>
                  {section.content}
                </p>
              );
            }
            if (section.type === 'list') {
              return (
                <ul key={section.id} className={`list-disc pl-6 space-y-2 ${section.className || ''}`}>
                  {section.items?.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              );
            }
            return null;
          })
        ) : (
          <p className="text-gray-500 text-center">No content available for this case study.</p>
        )}

        {/* ================= TABLE ================= */}
        <section className="sm:px-6 pb-16">
          <div className="bg-white/40 rounded-3xl">
            <h3 className="text-2xl font-semibold text-center lg:mb-4">
              {caseData?.name}’s Progress & Results
            </h3>
            <p className="mb-8 text-center sm:hidden block text-xs">
              Click on the images to view full size
            </p>
            {renderProgressTable()}
          </div>
        </section>

        {/* ================= VIDEO ================= */}
        {caseData?.video?.url && (
          <div className="py-10">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={caseData.video.url}
                  title={`${caseData.name} Hair Transplant`}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= FAQs ================= */}
        {caseData?.faqs?.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-[#0E3A43]">FAQs</h3>
            <div className="space-y-4">
              {caseData.faqs.sort((a, b) => a.order - b.order).map((faq) => (
                <div key={faq.id}>
                  <p>
                    <strong>{faq.question}</strong>
                  </p>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[lightboxIndex]}
              alt=""
              className="max-w-[95%] max-h-[90vh] object-contain"
            />

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevLightboxImage}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextLightboxImage}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}