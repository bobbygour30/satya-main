"use client";

import React, { useState } from "react";
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
    setPlayingIndex(null); // stop any playing video when changing slide
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setPlayingIndex(null);
  };

  return (
    <div className="bg-[#FFF8EF] sm:py-16 py-4 px-3 w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-stretch">

        {/* LEFT CARD – unchanged */}
        <div className="md:w-1/3 bg-white border border-[#FCEBDE] rounded-2xl flex flex-col justify-between py-10 px-8 shadow-sm">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-[#2B333C]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Why Choose Satya?
            </h2>

            <p className="text-[#828D9C] text-base leading-relaxed">
              With over 23 years of clinical experience, Satya Skin & Hair Solutions follows a transparent, doctor-led approach to skin and hair care. Every recommendation is based on careful medical evaluation and honest discussion of options and outcomes. We prioritise safety, long-term results, and natural appearance, earning the trust of patients from India and across the world.
            </p>
          </div>

          <div className="bg-[#2B333C] rounded-xl shadow-lg py-9 px-8 mt-10">
            <span
              className="uppercase text-white font-semibold text-lg tracking-wider"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Need expert guidance for your skin or hair concern?
            </span>

            <button
              className="mt-6 bg-[#FFF8EF] hover:bg-[#FCEBDE] text-[#2B333C] font-medium py-3.5 px-8 rounded transition-colors flex items-center text-lg shadow-md"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Book An Appointment
            </button>
          </div>
        </div>

        {/* RIGHT – VIDEO SECTION */}
        <div className="md:w-2/3 w-full relative">

          {/* Desktop: side by side */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <VideoCard
                key={idx}
                video={video}
                idx={idx}
                playingIndex={playingIndex}
                setPlayingIndex={setPlayingIndex}
              />
            ))}
          </div>

          {/* Mobile: one video at a time + nav buttons */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {videos.map((video, idx) => (
                  <div key={idx} className="flex-none w-full">
                    <VideoCard
                      video={video}
                      idx={idx}
                      playingIndex={playingIndex}
                      setPlayingIndex={setPlayingIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {videos.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === idx ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Reusable Video Card
function VideoCard({ video, idx, playingIndex, setPlayingIndex }) {
  return (
    <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-[#FCEBDE] shadow-sm">
      {playingIndex !== idx ? (
        /* THUMBNAIL */
        <button
          onClick={() => setPlayingIndex(idx)}
          className="group absolute inset-0"
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
      ) : (
        <>
          {video.type === "youtube" && (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&playsinline=1`}
              title="YouTube Short"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}

          {video.type === "instagram" && (
            <iframe
              src={`https://www.instagram.com/reel/${video.id}/embed/?autoplay=1`}
              title="Instagram Reel"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full bg-black"
            />
          )}
        </>
      )}
    </div>
  );
}