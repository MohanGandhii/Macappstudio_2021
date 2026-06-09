"use client";

import React from "react";
import Image from "next/image";
import { 
  FiCalendar, 
  FiUsers, 
  FiClock, 
  FiTrendingUp, 
  FiShield, 
  FiLayers,
  FiBox,
  FiHeart,
  FiPlay
} from "react-icons/fi";

interface HeroProps {
  onPlayVideo: () => void;
}

export default function Hero({ onPlayVideo }: HeroProps) {
  return (
    <section className="relative py-12 md:py-16 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content (Columns 1-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[13px] font-bold mb-3 tracking-wide shadow-sm">
              <span className="animate-pulse">✨</span> Your Extended Product Team
            </div>

            {/* Title */}
            <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] font-black text-[#111] leading-[1.15] tracking-tight mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
              Every Great Product <br />
              Starts As An Idea. <br />
              <span className="text-[#0052FF]">
                We Turn It Into Reality.
              </span>
            </h1>

            {/* Description */}
            <div className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-[520px] mb-4 font-medium">
              <p className="mb-1 text-[#111] font-semibold">
                For founders, CTOs and enterprises that need to build faster without losing control.
              </p>
              <p className="text-gray-500 font-normal">
                MacAppStudio becomes your dedicated team of product experts, engineers, designers and R&D specialists—so you can focus on vision while we handle execution.
              </p>
            </div>

            {/* Stats/Badges Row */}
            <div className="flex flex-wrap gap-2 mb-5 w-full">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm">
                <FiClock className="text-blue-500" size={15} />
                <span>Start in 1-2 Weeks</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm">
                <FiTrendingUp className="text-green-500" size={15} />
                <span>Scale Anytime</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm">
                <FiShield className="text-purple-500" size={15} />
                <span>100% Ownership</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm">
                <FiLayers className="text-orange-500" size={15} />
                <span>Weekly Updates</span>
              </div>
            </div>

            {/* CTA Buttons Box */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full max-w-[520px] mb-6">
              
              {/* Book call button */}
              <button 
                onClick={onPlayVideo}
                className="flex-1 bg-[#0052FF] hover:bg-[#0041cc] text-white rounded-xl py-2.5 px-4 flex items-center gap-3.5 text-left transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/10 active:scale-95 border border-transparent"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <FiCalendar size={18} />
                </div>
                <div>
                  <div className="text-[14px] font-bold leading-tight">Book Free Discovery Call</div>
                  <div className="text-[11px] text-blue-100 font-normal leading-normal mt-0.5">Free 30-min strategy session</div>
                </div>
              </button>

              {/* Build dream team button */}
              <button 
                onClick={() => window.open("/contactus", "_self")}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200/80 rounded-xl py-2.5 px-4 flex items-center gap-3.5 text-left transition-all hover:scale-[1.02] shadow-sm active:scale-95"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#0052FF]">
                  <FiUsers size={18} />
                </div>
                <div>
                  <div className="text-[14px] font-bold leading-tight">Build My Dream Team</div>
                  <div className="text-[11px] text-gray-500 font-normal leading-normal mt-0.5">Start building in 1-2 weeks</div>
                </div>
              </button>

            </div>

            {/* Partner Logos Section */}
            <div className="w-full">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Trusted by innovative companies worldwide
              </p>
              {/* CHANGE LOGO IMAGE PATHS HERE: Replace the dummy src paths below with your actual partner logo assets when you have them */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 opacity-60">
                <div className="h-5 w-16 relative">
                  <Image
                    src="/assets/images/resources/daimler.png"
                    alt="Daimler Logo"
                    fill
                    className="object-contain filter grayscale brightness-50"
                  />
                </div>
                <div className="h-5 w-12 relative">
                  <Image
                    src="/assets/images/resources/jio.png"
                    alt="Jio Logo"
                    fill
                    className="object-contain filter grayscale brightness-50"
                  />
                </div>
                <div className="h-5 w-12 relative">
                  <Image
                    src="/assets/images/resources/intel.png"
                    alt="Intel Logo"
                    fill
                    className="object-contain filter grayscale brightness-50"
                  />
                </div>
                <div className="h-5 w-12 relative">
                  <Image
                    src="/assets/images/resources/paytm.png"
                    alt="Paytm Logo"
                    fill
                    className="object-contain filter grayscale brightness-50"
                  />
                </div>
                <div className="h-5 w-20 relative">
                  <Image
                    src="/assets/images/resources/accesshealthcare.png"
                    alt="Access Healthcare Logo"
                    fill
                    className="object-contain filter grayscale brightness-50"
                  />
                </div>
                <span className="text-[12px] text-gray-400 font-semibold lowercase">and more...</span>
              </div>
            </div>

          </div>

          {/* Right Side: Mountain Graphic & Floating Cards (Columns 7-12) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center relative">
            
            {/* Main Graphic Box */}
            <div className="w-full aspect-square md:aspect-[1.2] max-w-[600px] mx-auto rounded-3xl overflow-hidden relative shadow-xl border border-gray-200/50 bg-white">
              
              {/* Winding mountain path image */}
              <Image 
                src="/assets/images/mountain_vision.png"
                alt="Every Great Product starts as an Idea"
                fill
                className="object-cover"
                priority
              />

              {/* Hand-drawn styled text callouts (SVG overlays) */}
              <div className="absolute top-[35%] left-[8%] hidden md:block">
                <div className="flex flex-col text-left">
                  <span className="font-serif italic text-[#374151] text-[13px] leading-tight">Big Idea</span>
                  <span className="font-serif italic text-[#374151] text-[13px] leading-tight">+ Ambition</span>
                  <svg className="w-8 h-8 text-gray-400 mt-1 ml-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-[48%] right-[8%] hidden md:block">
                <div className="flex flex-col text-right items-end">
                  <span className="font-serif italic text-[#374151] text-[13px] leading-tight">Market Impact</span>
                  <span className="font-serif italic text-[#374151] text-[12px] leading-tight">Millions of Users</span>
                  <svg className="w-8 h-8 text-gray-400 mt-1 mr-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              {/* Glow Overlay for Summit Lightbulb */}
              <div className="absolute top-[16%] left-[50%] -translate-x-1/2 flex flex-col items-center">
                <span className="font-bold text-[13px] text-indigo-600 tracking-wider bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-sm mb-1 uppercase">
                  Your Vision
                </span>
                <div className="w-1.5 h-6 bg-indigo-500/30 animate-pulse rounded-full" />
              </div>

              {/* Watch Our Story Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5">
                <button 
                  onClick={onPlayVideo}
                  className="w-16 h-16 rounded-full bg-[#0052FF] hover:bg-[#0041cc] text-white flex items-center justify-center cursor-pointer shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  <FiPlay className="ml-1" size={24} />
                </button>
                <span className="mt-3 text-[14px] font-bold text-[#111] bg-white/95 px-3.5 py-1 rounded-full shadow-md select-none tracking-tight">
                  Watch Our Story
                </span>
              </div>

              {/* We build the bridge tag */}
              <div className="absolute bottom-[28%] right-[15%] hidden md:flex items-center gap-1 bg-[#EEF2FF] border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[12px] font-bold shadow-sm">
                <span>💡</span> We Build the Bridge
              </div>

              {/* Floating Stat Metrics overlaying the bottom container space */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 grid grid-cols-2 sm:grid-cols-4 gap-3 z-20">
                
                {/* Metric 1 */}
                <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600">
                    <FiBox size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[16px] font-extrabold text-[#111] leading-none">120+</div>
                    <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Products Delivered</div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <FiUsers size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[16px] font-extrabold text-[#111] leading-none">100+</div>
                    <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Founder Dreams</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                    <FiShield size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[16px] font-extrabold text-[#111] leading-none">10+</div>
                    <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Years Experience</div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-600">
                    <FiHeart size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[16px] font-extrabold text-[#111] leading-none">Millions</div>
                    <div className="text-[11px] text-gray-500 font-semibold mt-0.5 leading-tight">Users Impacted</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
