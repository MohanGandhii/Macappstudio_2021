"use client";

import React from "react";
import Image from "next/image";
import { Brain, Cpu, Cloud, Database, Boxes, Wifi } from "lucide-react";

// ── CUSTOM ICONS ──
const RocketIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
    <path d="M12 12l9-9-3 12-4 1-2-2-1-4z" />
    <path d="M9 15l-3-3" />
  </svg>
);

const LegacyIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const AiIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const ScaleUsersIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SecurityShieldIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const AlignedIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function InnovationAndRDLabs() {
  const executionItems = [
    { text: "Accelerate product delivery", icon: <RocketIcon /> },
    { text: "Modernize legacy systems", icon: <LegacyIcon /> },
    { text: "Build AI & data-driven solutions", icon: <AiIcon /> },
    { text: "Scale engineering capacity", icon: <ScaleUsersIcon /> },
    { text: "Reduce hiring & onboarding delays", icon: <ClockIcon /> },
    { text: "Enterprise-grade security & quality", icon: <SecurityShieldIcon /> },
    { text: "Aligned with your processes & goals", icon: <AlignedIcon /> },
  ];

  const rdTags = [
    { name: "AI / ML", icon: <Brain className="w-4 h-4" /> },
    { name: "Automation", icon: <Cpu className="w-4 h-4" /> },
    { name: "Cloud", icon: <Cloud className="w-4 h-4" /> },
    { name: "Data Engineering", icon: <Database className="w-4 h-4" /> },
    { name: "Blockchain", icon: <Boxes className="w-4 h-4" /> },
    { name: "IoT", icon: <Wifi className="w-4 h-4" /> },
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8 bg-[#F8F9FE] flex flex-col justify-center items-center">

      <div className="max-w-[1380px] w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── CARD 1: Execution Partner ── */}
        <div className="bg-gradient-to-r from-[#EFF4FF] via-[#F5F8FF] to-white border border-[#ECECF3] rounded-[28px] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-stretch min-h-[360px] md:min-h-[380px] lg:min-h-[400px]">

          {/* Desktop layout: content left, image right — both fill full card height */}
          <div className="hidden md:flex flex-1 min-h-[380px] lg:min-h-[400px] w-full">

            {/* Left: text content */}
            <div className="p-6 lg:p-8 w-[50%] flex flex-col justify-between relative z-10 shrink-0 h-full">
              <div>
                <span
                  className="text-[11px] font-bold text-[#0052FF] uppercase tracking-[0.15em] mb-2 block"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Why Enterprises Choose MacAppStudio
                </span>
                <h3
                  className="text-[#0F172A] font-extrabold text-[24px] lg:text-[28px] leading-[1.15] tracking-[-0.02em] mb-2.5"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  More Than A Vendor.<br />
                  Your <span className="text-[#0052FF]" style={{ fontStyle: "italic" }}>Execution Partner.</span>
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                  We become your extended team and own the execution from start to scale.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {executionItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 bg-[#EAF2FF] text-[#0052FF]">
                      {item.icon}
                    </div>
                    <span className="text-[#334155] text-[12.5px] font-semibold leading-none">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image fills remaining width and full height */}
            <div className="flex-1 relative">
              <Image
                src="/assets/images/resources/07/image 1883 (1).png"
                alt="MacAppStudio execution partner tower"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Mobile layout: stacked */}
          <div className="md:hidden flex flex-col">
            <div className="p-8 flex flex-col gap-6">
              <div>
                <span
                  className="text-[11px] font-bold text-[#0052FF] uppercase tracking-[0.15em] mb-4 block"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Why Enterprises Choose MacAppStudio
                </span>
                <h3
                  className="text-[#0F172A] font-extrabold text-[30px] leading-[1.15] tracking-[-0.02em] mb-4"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  More Than A Vendor.<br />
                  Your <span className="text-[#0052FF]">Execution Partner.</span>
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed font-medium mb-6">
                  We become your extended team and own the execution from start to scale.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {executionItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-[#EAF2FF] text-[#0052FF]">
                      {item.icon}
                    </div>
                    <span className="text-[#334155] text-[13.5px] font-semibold leading-none">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[280px] relative">
              <Image
                src="/assets/images/resources/07/image 1883 (1).png"
                alt="Tower"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>


        {/* ── CARD 2: Innovation & R&D Lab ── */}
        <div className="bg-gradient-to-r from-[#EFF3FF] via-[#F4F6FF] to-white border border-[#ECECF3] rounded-[28px] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.02)] min-h-[360px] md:min-h-[380px] lg:min-h-[400px]">

          {/* Desktop layout */}
          <div className="hidden md:block h-full min-h-[380px] md:min-h-[380px] lg:min-h-[400px]">

            {/* Background image — constrained to right 65% of card to scale down the details */}
            <div className="absolute top-0 right-0 bottom-0 w-[65%] z-0 select-none">
              <Image
                src="/assets/images/resources/07/image 1884 (1).png"
                alt="Innovation & R&D Lab man pointing at hologram"
                fill
                className="object-contain object-right-bottom"
                priority
                unoptimized
              />
            </div>

            {/* Left-side light lavender/blue fade so text is always readable, blending the left edge of the image */}
            <div
              className="absolute inset-0 z-[2] pointer-events-none"
              style={{
                background: "linear-gradient(to right, rgba(239,243,255,1) 0%, rgba(239,243,255,1) 36%, rgba(239,243,255,0.9) 45%, rgba(239,243,255,0) 65%)"
              }}
            />

            {/* Subtle bottom gradient to smoothly fade the desk image to white at the card bottom border */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,0.7) 92%, rgba(255,255,255,1) 100%)"
              }}
            />

            {/* Content overlay */}
            <div className="relative z-10 h-full min-h-[380px] md:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between p-6 lg:p-8">
              {/* Text content — constrained to left side */}
              <div className="max-w-[55%]">
                <span
                  className="text-[11px] font-bold text-[#0052FF] uppercase tracking-[0.15em] mb-2 block"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Our Innovation & R&D Lab
                </span>
                <h3
                  className="text-[#0F172A] font-extrabold text-[24px] lg:text-[28px] leading-[1.15] tracking-[-0.02em] mb-2.5"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Building <span className="text-[#0052FF]">What&apos;s Next.</span>
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                  Our R&D team explores emerging technologies to keep your product future-ready.
                </p>
              </div>

              {/* Tags — full width at bottom, overlapping desk/laptop image */}
              <div className="mt-auto grid grid-cols-3 gap-2 w-full max-w-[320px] mb-9">
                {rdTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-1.5 py-3 rounded-[8px] bg-white/95 backdrop-blur-md border border-[#ECECF3] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <div className="text-[#0052FF] shrink-0">
                      {tag.icon}
                    </div>
                    <span className="text-[#1E293B] text-[11px] font-semibold leading-tight">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col">
            <div className="p-8 flex flex-col gap-6">
              <div>
                <span
                  className="text-[11px] font-bold text-[#0052FF] uppercase tracking-[0.15em] mb-4 block"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Our Innovation & R&D Lab
                </span>
                <h3
                  className="text-[#0F172A] font-extrabold text-[30px] leading-[1.15] tracking-[-0.02em] mb-4"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Building <span className="text-[#0052FF]">What's Next.</span>
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed font-medium mb-6">
                  Our R&D team explores emerging technologies to keep your product future-ready.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {rdTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-[#ECECF3] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  >
                    <div className="text-[#0052FF] shrink-0">
                      {tag.icon}
                    </div>
                    <span className="text-[#1E293B] text-[13px] font-semibold leading-tight">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[280px] relative">
              <Image
                src="/assets/images/resources/07/image 1884 (1).png"
                alt="Man at desk"
                fill
                className="object-cover object-bottom"
                unoptimized
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}