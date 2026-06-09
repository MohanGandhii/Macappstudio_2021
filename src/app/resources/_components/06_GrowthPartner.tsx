"use client";

import React from "react";
import Image from "next/image";

// ── CUSTOM HIGH-QUALITY SVG ICONS ──
const BrainIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const FlaskIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" />
    <path d="M14 9V3H10v6L4.2 19A2 2 0 0 0 6 22h12a2 2 0 0 0 1.8-3L14 9Z" />
    <path d="M8.5 15h7" />
  </svg>
);

const GrowthIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10" />
    <path d="M12 20V4" />
    <path d="M6 20v-6" />
    <path d="M3 20h18" />
    <path d="m3 12 6-4 6-4 6 5" />
  </svg>
);


export default function GrowthPartnerSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1380px] mx-auto flex flex-col gap-14">

        {/* ── 1. HEADING AND PILARS + MOUNTAIN ILLUSTRATION ── */}
        <div className="flex flex-col gap-10">
          {/* Centered Heading */}
          <div className="text-center w-full">
            <h2 
              className="font-extrabold text-[#0F172A] leading-[1.15] text-[34px] md:text-[44px] lg:text-[48px] tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Most agencies stop after development.
              <br />
              <span className="relative inline-block text-[#0052FF] mt-1">
                We stay through growth.
                <svg
                  className="absolute left-0 right-0 -bottom-2 w-full h-[8px] text-[#0052FF]"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 8C70 3 230 3 295 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Grid Layout below Centered Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (spans 7 out of 12) - 3 cards in row */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Product Thinking */}
                <div className="flex flex-row items-start gap-3.5 p-5 rounded-[22px] border border-[#ECECF3] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all min-h-[150px]">
                  <div className="w-[44px] h-[44px] rounded-full shrink-0 flex items-center justify-center bg-[#F3EAFF] text-[#7C3AED] mt-0.5">
                    <BrainIcon />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-extrabold text-[#0F172A] text-[15px] leading-tight mb-1.5" style={{ fontFamily: "Outfit, sans-serif" }}>Product Thinking</h4>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed font-medium">
                      We challenge assumptions and improve ideas.
                    </p>
                  </div>
                </div>

                {/* R&D Innovation */}
                <div className="flex flex-row items-start gap-3.5 p-5 rounded-[22px] border border-[#ECECF3] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all min-h-[150px]">
                  <div className="w-[44px] h-[44px] rounded-full shrink-0 flex items-center justify-center bg-[#E8F7ED] text-[#10B981] mt-0.5">
                    <FlaskIcon />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-extrabold text-[#0F172A] text-[15px] leading-tight mb-1.5" style={{ fontFamily: "Outfit, sans-serif" }}>R&D Innovation</h4>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed font-medium">
                      We explore emerging technologies before competitors do.
                    </p>
                  </div>
                </div>

                {/* Growth Mindset */}
                <div className="flex flex-row items-start gap-3.5 p-5 rounded-[22px] border border-[#ECECF3] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all min-h-[150px]">
                  <div className="w-[44px] h-[44px] rounded-full shrink-0 flex items-center justify-center bg-[#FFF6D8] text-[#F59E0B] mt-0.5">
                    <GrowthIcon />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-extrabold text-[#0F172A] text-[15px] leading-tight mb-1.5" style={{ fontFamily: "Outfit, sans-serif" }}>Growth Mindset</h4>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed font-medium">
                      Every feature should create measurable business impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mountain Path Illustration (spans 5 out of 12) */}
            <div className="lg:col-span-5 w-full flex justify-end">
              <div className="relative w-full aspect-[1.8] max-w-[500px]">
                <Image 
                  src="/assets/images/mountain_vision.png"
                  alt="We stay through growth path"
                  fill
                  priority
                  className="object-contain object-right"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
