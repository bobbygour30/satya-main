"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import assets from "../assets/assets";

/* ===============================
   VIDEO DATA
================================ */
const videos = [
  {
    type: "instagram",
    id: "DTdHmrtEixs",
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

  return (
    <div className="bg-[#FFF8EF] py-16 px-3 w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-stretch">

        {/* LEFT CARD */}
        <div className="md:w-1/3 bg-white border border-[#FCEBDE] rounded-2xl flex flex-col justify-between py-10 px-8 shadow-sm">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-[#2B333C]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Why Choose Satya?
            </h2>

            <p className="text-[#828D9C] text-base leading-relaxed">
              Satya Skin & Hair Solutions, established in 2005, stands as a global
              leader in dermatology and hair restoration with international,
              state-of-the-art facilities and advanced treatment protocols.
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

        {/* RIGHT – VIDEO CARDS */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-[#FCEBDE] shadow-sm"
            >
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
                  {/* YOUTUBE SHORT */}
                  {video.type === "youtube" && (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&playsinline=1`}
                      title="YouTube Short"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  )}

                  {/* INSTAGRAM REEL – FIXED */}
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
          ))}
        </div>

      </div>
    </div>
  );
}
