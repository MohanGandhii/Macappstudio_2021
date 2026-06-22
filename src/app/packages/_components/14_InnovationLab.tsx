"use client";

import React, { useState } from "react";
import Image from "next/image";

// ── CUSTOM HIGH-QUALITY SVG ICONS FOR THE 6 LAB TILES ──
const AIIcon = () => (
  <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ArchIcon = () => (
  <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const MvpIcon = () => (
  <svg className="w-5 h-5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const PocIcon = () => (
  <svg className="w-5 h-5 text-[#EC4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const TechIcon = () => (
  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ValIcon = () => (
  <svg className="w-5 h-5 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function InnovationMetricsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "MacAppStudio became our extended team. They understand our vision, move fast, and deliver beyond expectations.",
      author: "— CTO, Daimler"
    },
    {
      text: "Their rapid prototyping and AI capabilities allowed us to test concepts and validate key architectures weeks ahead of schedule.",
      author: "— R&D Director, Daimler"
    },
    {
      text: "Delivering enterprise-grade architecture with startup velocity is rare. MacAppStudio consistently achieves both.",
      author: "— VP of Technology, Daimler"
    },
    {
      text: "Working with their dedicated specialists felt like an in-house lab, but with none of the hiring delays or overhead.",
      author: "— Engineering Partner, Daimler"
    }
  ];

  const tiles = [
    { name: "AI & ML Exploration", icon: <AIIcon /> },
    { name: "Architecture Prototyping", icon: <ArchIcon /> },
    { name: "MVP Development", icon: <MvpIcon /> },
    { name: "PoC & Experimentation", icon: <PocIcon /> },
    { name: "Emerging Tech Research", icon: <TechIcon /> },
    { name: "Product Validation", icon: <ValIcon /> },
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-[1380px] mx-auto flex flex-col gap-6">

        {/* ── TOP THIN BANNER ── */}
        <div className="w-full bg-[#F8FAFC] border border-[#E8EDF5] rounded-[16px] py-3 px-6 flex items-center justify-center gap-3">
          <svg className="w-5 h-5 text-[#0052FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-[#334155] text-[12.5px] md:text-[13.5px] font-semibold text-center leading-normal">
            From MVPs to enterprise platforms, we help founders and companies turn ideas into impactful digital products.
          </p>
        </div>

        {/* ── TWO-COLUMN GRID LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">

          {/* ── LEFT COLUMN: INNOVATION LAB ── */}
          <div className="lg:col-span-6 bg-white border border-[#ECECF3] rounded-[24px] p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.015)] relative overflow-hidden min-h-[380px]">
            <div className="flex flex-col text-left">
              <h3 
                className="font-extrabold text-[#0F172A] leading-tight text-[24px] md:text-[26px] tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Your Innovation Lab
                <br />
                Without Building One
              </h3>
              <p className="text-gray-500 text-[13px] md:text-[14px] font-medium leading-relaxed mt-2 max-w-[420px]">
                Our R&D experts help you explore, experiment and validate new ideas faster.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
              {/* Grid of 6 Tiles */}
              <div className="w-full sm:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
                {tiles.map((tile, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2.5 p-3 rounded-[14px] border border-[#ECECF3] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all"
                  >
                    <div className="shrink-0 flex items-center justify-center">
                      {tile.icon}
                    </div>
                    <span className="text-[#0F172A] text-[11.5px] font-bold leading-tight select-none">
                      {tile.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Lab Illustration */}
              <div className="w-full sm:flex-1 relative aspect-[1.1] min-h-[200px] sm:min-h-[220px] select-none pointer-events-none sm:self-end mt-4 sm:mt-0 sm:-mb-2">
                <Image 
                  src="/assets/images/resources/14/IMG_20260611_000054.png"
                  alt="Innovation lab collaboration illustration"
                  fill
                  className="object-contain object-bottom"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: METRICS & TESTIMONIALS ── */}
          <div className="lg:col-span-6 bg-white border border-[#ECECF3] rounded-[24px] p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.015)] min-h-[380px]">
            <div className="flex flex-col text-left">
              <h3 
                className="font-extrabold text-[#0F172A] leading-tight text-[24px] md:text-[26px] tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Our Numbers Speak For Themselves
              </h3>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-y-6 gap-x-4 md:gap-x-2 py-6 border-b border-gray-100 mt-3 mb-5">
              <div className="text-center flex flex-col min-w-[100px] md:min-w-0 md:flex-1">
                <span className="text-[#0052FF] text-[22px] md:text-[24px] font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>120+</span>
                <span className="text-[#0F172A] text-[10px] md:text-[11px] font-extrabold uppercase tracking-tight leading-tight mt-1">Products<br/>Delivered</span>
              </div>
              <div className="text-center flex flex-col min-w-[100px] md:min-w-0 md:flex-1">
                <span className="text-[#0052FF] text-[22px] md:text-[24px] font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>100+</span>
                <span className="text-[#0F172A] text-[10px] md:text-[11px] font-extrabold uppercase tracking-tight leading-tight mt-1">Founder<br/>Dreams Built</span>
              </div>
              <div className="text-center flex flex-col min-w-[100px] md:min-w-0 md:flex-1">
                <span className="text-[#0052FF] text-[22px] md:text-[24px] font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>10+</span>
                <span className="text-[#0F172A] text-[10px] md:text-[11px] font-extrabold uppercase tracking-tight leading-tight mt-1">Years of<br/>Experience</span>
              </div>
              <div className="text-center flex flex-col min-w-[100px] md:min-w-0 md:flex-1">
                <span className="text-[#0052FF] text-[22px] md:text-[24px] font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>50+</span>
                <span className="text-[#0F172A] text-[10px] md:text-[11px] font-extrabold uppercase tracking-tight leading-tight mt-1">Product<br/>Experts</span>
              </div>
              <div className="text-center flex flex-col min-w-[100px] md:min-w-0 md:flex-1">
                <span className="text-[#0052FF] text-[22px] md:text-[24px] font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>95%</span>
                <span className="text-[#0F172A] text-[10px] md:text-[11px] font-extrabold uppercase tracking-tight leading-tight mt-1">Client<br/>Retention</span>
              </div>
            </div>

            {/* Testimonial Block */}
            <div className="w-full relative aspect-[3.04] rounded-[20px] overflow-hidden shadow-[0_8px_25px_rgba(12,84,236,0.12)]">
              <Image 
                src="/assets/images/resources/14/IMG_20260611_060853.png"
                alt="Daimler CTO Testimonial Card"
                fill
                priority
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
