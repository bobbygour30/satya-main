import React from "react";
import { Play } from "lucide-react";

const videos = [
  {
    url: "https://www.instagram.com/reel/DTdHmrtEixs/?igsh=bmpzM3pydjR1ZDlw",
    thumbnail: "/images/insta-reel-thumb.jpg",
  },
  {
    url: "https://www.youtube.com/shorts/0_1JwEAQh10",
    thumbnail: "https://img.youtube.com/vi/0_1JwEAQh10/hqdefault.jpg",
  },
];

export default function ProductShowcaseSection() {
  return (
    <div className="bg-[#FFF8EF] py-16 px-3 w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-stretch">

        {/* LEFT CARD */}
        <div className="md:w-1/3 h-full bg-white border border-[#FCEBDE] rounded-2xl flex flex-col justify-between py-10 px-8 shadow-sm">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-[#2B333C]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Why Choose Satya?
            </h2>

            <p className="text-[#828D9C] text-base leading-relaxed">
              Satya Skin & Hair Solutions, established in 2005, stands as a global
              leader in dermatology and hair restoration. Recognized as a premier
              institute, Satya is renowned for its international, state-of-the-art
              facilities and advanced treatment protocols. The clinic specializes
              in skin laser treatments, anti-aging solutions, and both surgical
              and non-surgical hair restoration procedures, with particular
              expertise in corrective and repair hair transplant surgeries.
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
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full bg-black rounded-2xl overflow-hidden border border-[#FCEBDE] shadow-sm flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <img
                  src={video.thumbnail}
                  alt="Video testimonial"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#9E4A47] flex items-center justify-center shadow-xl">
                    <Play size={30} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
