"use client";

import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/assets";

/* ===============================
   VIDEO DATA
================================ */
const videos = [
  {
    type: "youtube",
    id: "Embq01ugYYg",
    thumbnail: assets.insta,
  },
  {
    type: "youtube",
    id: "0_1JwEAQh10",
    thumbnail: "https://img.youtube.com/vi/0_1JwEAQh10/hqdefault.jpg",
  },
];

export default function ProductShowcaseSection() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlide = () => {
    setPlayingIndex(null); // Stop current video
    setTimeout(() => {
      prevSlide();
    }, 10);
  };

  const handleNextSlide = () => {
    setPlayingIndex(null); // Stop current video
    setTimeout(() => {
      nextSlide();
    }, 10);
  };

  const handleDotClick = (index) => {
    setPlayingIndex(null); // Stop current video
    setTimeout(() => {
      setCurrentSlide(index);
    }, 10);
  };

  return (
    <div className="bg-[#FFF8EF] sm:py-16 py-4 px-3 w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:items-stretch items-start">

        {/* LEFT CARD – Compact Version */}
<div className="md:w-1/3 bg-white border border-[#FCEBDE] rounded-2xl flex flex-col justify-between py-8 px-6 shadow-sm h-full">

  <div>
    <h2
      className="text-2xl md:text-3xl font-bold mb-6 text-[#2B333C]"
      style={{ fontFamily: "'Oswald', sans-serif" }}
    >
      Why Choose Satya?
    </h2>

    {/* 🔥 2 COLUMN BULLET GRID (Reduces Height Dramatically) */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-[#828D9C] text-sm leading-relaxed">
      {[
        "46+ Years Combined Experience",
        "Global Patient Trust",
        "Minimum Medicine Approach",
        "Innovative Technique (DSFT™) (MHT™)",
        "Mastery in Corrective Procedures",
        "Donor Preservation  Philosophy",
        "Balanced Hair Transplant Approach",
        "Minimum Grafts. Minimum Medication.",
        "Repair & Corrective Expertise",
        "Dermatology-Led Skin Treatments",
        "Science Over Trends",
        "Long-Term Relationship, Not One-Time Procedure",
      ].map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="mt-1.5 w-2 h-2 bg-[#9E4A47] rounded-full shrink-0"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* CTA BOX - Reduced Padding */}
  <div className="bg-[#2B333C] rounded-xl shadow-md py-6 px-6 mt-8">
    <span
      className="uppercase text-white font-semibold text-base tracking-wide"
      style={{ fontFamily: "'Oswald', sans-serif" }}
    >
      Need expert guidance?
    </span>

    <button
      className="mt-4 bg-[#FFF8EF] hover:bg-[#FCEBDE] text-[#2B333C] font-medium py-3 px-6 rounded transition-colors text-base shadow-sm"
      style={{ fontFamily: "'Oswald', sans-serif" }}
    >
      Book An Appointment
    </button>
  </div>

</div>

        {/* RIGHT – VIDEO SECTION */}
        <div className="md:w-2/3 w-full relative flex flex-col">

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 h-full">
            {videos.map((video, idx) => (
              <VideoCard
                key={`desktop-${idx}`}
                video={video}
                idx={idx}
                playingIndex={playingIndex}
                setPlayingIndex={setPlayingIndex}
              />
            ))}
          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden relative">
            {/* ONLY ONE VIDEO RENDERED with key that forces re-mount on slide change */}
            {videos[currentSlide] && (
              <VideoCard
                key={`mobile-slide-${currentSlide}`}
                video={videos[currentSlide]}
                idx={currentSlide}
                playingIndex={playingIndex}
                setPlayingIndex={setPlayingIndex}
              />
            )}

            {/* Navigation buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots indicator - clickable buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, idx, playingIndex, setPlayingIndex }) {
  const iframeRef = useRef(null);
  const isPlaying = playingIndex === idx;

  // Stop YouTube video when not playing or when component unmounts
  useEffect(() => {
    const iframe = iframeRef.current;
    
    // Function to stop video
    const stopVideo = () => {
      if (iframe && iframe.contentWindow) {
        try {
          iframe.contentWindow.postMessage(
            JSON.stringify({
              event: "command",
              func: "stopVideo",
              args: [],
            }),
            "*"
          );
        } catch (error) {
          console.log("Error stopping video:", error);
        }
      }
    };

    // Stop video if it's no longer playing
    if (!isPlaying) {
      stopVideo();
    }

    // Cleanup function - runs when component unmounts or before next effect
    return () => {
      if (iframe && iframe.contentWindow) {
        try {
          // Stop the video
          stopVideo();
        } catch (error) {
          console.log("Error during cleanup:", error);
        }
      }
    };
  }, [isPlaying]);

  // Don't render if video is undefined
  if (!video) {
    return null;
  }

  return (
    <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-[#FCEBDE] shadow-sm">
      {!isPlaying && (
        <button
          onClick={() => setPlayingIndex(idx)}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label="Play video"
        >
          <img
            src={video.thumbnail}
            alt="Video testimonial"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#9E4A47] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Play size={30} className="text-white ml-1" />
            </div>
          </div>
        </button>
      )}

      {isPlaying && (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0&enablejsapi=1`}
          title={`YouTube Short - ${video.id}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}