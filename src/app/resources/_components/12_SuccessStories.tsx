"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// ─── ICON COMPONENTS ──────────────────────────────────────────────────────────

const SparkleIcon = () => (
  <svg 
    className="w-4 h-4 text-[#F59E0B]" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
  >
    <path d="M12 2a1 1 0 0 1 .9.6l1.8 4.2 4.2 1.8a1 1 0 0 1 0 1.8l-4.2 1.8-1.8 4.2a1 1 0 0 1-1.8 0l-1.8-4.2-4.2-1.8a1 1 0 0 1 0-1.8l4.2-1.8 1.8-4.2A1 1 0 0 1 12 2z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── CASE STUDIES CONFIG ──────────────────────────────────────────────────────

interface CaseStudy {
  title: string;
  category: string;
  desc: string;
  img: string;
  metrics: { value: string; label: string }[];
}

const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    title: "Mediyosa",
    category: "Healthcare",
    desc: "Digital prescription platform for doctors and patients.",
    img: "/assets/images/success_stories/Mediyoga.png",
    metrics: [
      { value: "50K+", label: "Doctors" },
      { value: "50K+", label: "Patients" },
    ],
  },
  {
    title: "Zena (UAE)",
    category: "Fintech",
    desc: "Fintech app for digital banking and payments.",
    img: "/assets/images/success_stories/Znap.png",
    metrics: [
      { value: "1M+", label: "Users" },
      { value: "100+", label: "Top Brands" },
    ],
  },
  {
    title: "Fastrack",
    category: "Mobility",
    desc: "Ultra-fast ride-hailing and delivery platform.",
    img: "/assets/images/success_stories/track.png",
    metrics: [
      { value: "500K+", label: "Rides" },
      { value: "20K+", label: "Drivers" },
    ],
  },
  {
    title: "Sarva",
    category: "Wellness",
    desc: "Wellness app for meditation, mindfulness and well-being.",
    img: "/assets/images/success_stories/Sarva.png",
    metrics: [
      { value: "1M+", label: "Users" },
      { value: "500+", label: "Instructors" },
    ],
  },
  {
    title: "AGS Cinemas",
    category: "Entertainment",
    desc: "End-to-end OTT platform for streaming and content.",
    img: "/assets/images/success_stories/ags.png",
    metrics: [
      { value: "2M+", label: "Bookings" },
      { value: "300+", label: "Screens" },
    ],
  },
  {
    title: "SPEED Learning App",
    category: "Education",
    desc: "India’s #1 NEET Training app for medical aspirants.",
    img: "/assets/images/success_stories/speed.png",
    metrics: [
      { value: "100K+", label: "Downloads" },
      { value: "95%", label: "Success Rate" },
    ],
  },
  {
    title: "Propcierge",
    category: "Real Estate",
    desc: "End to end Digital Platform for real estate and home services.",
    img: "/assets/images/success_stories/Propcierge.png",
    metrics: [
      { value: "10K+", label: "Properties" },
      { value: "50K+", label: "Bookings" },
    ],
  },
  {
    title: "DABB",
    category: "Real Estate",
    desc: "Digital environment for property search and building management.",
    img: "/assets/images/success_stories/dabb.png",
    metrics: [
      { value: "25K+", label: "Users" },
      { value: "200+", label: "Buildings" },
    ],
  },
  {
    title: "Daydoc",
    category: "Healthcare",
    desc: "Home Healthcare now a click away!",
    img: "/assets/images/success_stories/daydoc.png",
    metrics: [
      { value: "30K+", label: "Consultations" },
      { value: "200+", label: "Doctors" },
    ],
  },
  {
    title: "Howdy",
    category: "Mobility",
    desc: "Hire eco friendly electric scooters for rent.",
    img: "/assets/images/success_stories/Howdy.png",
    metrics: [
      { value: "200K+", label: "Rides" },
      { value: "5K+", label: "Scooters" },
    ],
  },
  {
    title: "Maidpro",
    category: "Others",
    desc: "Maid Service App in Boston.",
    img: "/assets/images/success_stories/Maidpro.png",
    metrics: [
      { value: "1K+", label: "Cleaners" },
      { value: "10K+", label: "Jobs" },
    ],
  },
  {
    title: "Godmusic",
    category: "Entertainment",
    desc: "Music app to enjoy Christian Devotional Songs.",
    img: "/assets/images/success_stories/GodMusic.png",
    metrics: [
      { value: "50K+", label: "Listeners" },
      { value: "10K+", label: "Songs" },
    ],
  },
  {
    title: "ATG",
    category: "Others",
    desc: "A devotional journal app to enjoy your walk with God.",
    img: "/assets/images/success_stories/ATG.png",
    metrics: [
      { value: "15K+", label: "Daily Users" },
      { value: "1M+", label: "Entries" },
    ],
  },
];

const CATEGORIES = [
  "All Projects",
  "Healthcare",
  "Fintech",
  "Mobility",
  "Education",
  "Real Estate",
  "Entertainment",
  "Wellness",
  "Others",
];

const THEME_MAP: Record<string, { textColor: string; badgeBg: string; shadowColor: string; blobColor: string }> = {
  Healthcare: { textColor: "text-[#7C3AED]", badgeBg: "bg-[#F3EAFF]", shadowColor: "rgba(124,58,237,0.06)", blobColor: "rgba(124,58,237,0.03)" },
  Fintech: { textColor: "text-[#0052FF]", badgeBg: "bg-[#EAF2FF]", shadowColor: "rgba(0,82,255,0.06)", blobColor: "rgba(0,82,255,0.03)" },
  Mobility: { textColor: "text-[#10B981]", badgeBg: "bg-[#EAFDF5]", shadowColor: "rgba(16,185,129,0.06)", blobColor: "rgba(16,185,129,0.03)" },
  Wellness: { textColor: "text-[#F59E0B]", badgeBg: "bg-[#FFF6D8]", shadowColor: "rgba(245,158,11,0.06)", blobColor: "rgba(245,158,11,0.03)" },
  Entertainment: { textColor: "text-[#EC4899]", badgeBg: "bg-[#FFF0F6]", shadowColor: "rgba(236,72,153,0.06)", blobColor: "rgba(236,72,153,0.03)" },
  Education: { textColor: "text-[#4F46E5]", badgeBg: "bg-[#EEF2FF]", shadowColor: "rgba(79,70,229,0.06)", blobColor: "rgba(79,70,229,0.03)" },
  "Real Estate": { textColor: "text-[#0ea5e9]", badgeBg: "bg-[#f0f9ff]", shadowColor: "rgba(14,165,233,0.06)", blobColor: "rgba(14,165,233,0.03)" },
  Others: { textColor: "text-[#64748B]", badgeBg: "bg-[#F1F5F9]", shadowColor: "rgba(100,116,139,0.06)", blobColor: "rgba(100,116,139,0.03)" },
};

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredStudies = CASE_STUDIES_DATA.filter((study) => {
    if (activeTab === "All Projects") return true;
    return study.category === activeTab;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#FBFDFF] overflow-hidden relative border-t border-[#ECECF3]/40">
      
      {/* Container wrapper */}
      <div className="max-w-[1380px] mx-auto w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-4 max-w-[800px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3EAFF]/60 border border-[#E9D5FF]/60 text-[#7C3AED] font-extrabold text-[12px] md:text-[13px] tracking-[0.12em] uppercase select-none w-max mx-auto">
            <SparkleIcon />
            <span>Success Stories</span>
          </div>

          {/* Heading */}
          <h2 
            className="text-[#0F172A] font-extrabold text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Dreams We've Already <span className="text-[#0052FF]">Brought To Life</span>
          </h2>

          {/* Subparagraph */}
          <p className="text-slate-500 text-[15px] md:text-[16px] leading-[1.6] max-w-[650px] mx-auto font-medium">
            From startups to enterprises, we've helped visionary teams turn ideas into
            impactful products loved by millions of users.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="w-full overflow-x-auto scrollbar-none flex justify-start md:justify-center items-center pb-4 -mb-4 px-2 select-none">
          <div className="flex gap-2.5 bg-slate-100/50 p-1.5 rounded-[18px] border border-slate-200/40 w-max shrink-0">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4.5 py-2 rounded-[13px] text-[13px] md:text-[14px] font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? "bg-[#0052FF] text-white shadow-sm" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Slider Section */}
        <div className="relative w-full group">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-16px] md:left-[-24px] top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors opacity-100 lg:opacity-0 group-hover:opacity-100"
          >
            <ArrowLeftIcon />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-16px] md:right-[-24px] top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors opacity-100 lg:opacity-0 group-hover:opacity-100"
          >
            <ArrowRightIcon />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="w-full flex gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-6 px-1"
          >
            {filteredStudies.map((study, idx) => {
              const theme = THEME_MAP[study.category] || THEME_MAP.Others;
              return (
                <div
                  key={idx}
                  className="w-[310px] md:w-[350px] shrink-0 border border-slate-100 rounded-[28px] bg-white p-5 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.035)] transition-all relative overflow-hidden group/card"
                >
                  
                  {/* Card Graphic/Phone mockups with radial background decoration */}
                  <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden bg-slate-50/50 border border-slate-100/40 p-4 flex items-center justify-center select-none">
                    
                    {/* Decorative Blob */}
                    <div 
                      className="absolute inset-0 pointer-events-none -z-10 transition-all group-hover/card:scale-105 duration-500" 
                      style={{ 
                        background: `radial-gradient(circle, ${theme.blobColor} 0%, transparent 70%)` 
                      }} 
                    />

                    {/* Image Mockup */}
                    <div className="relative w-[90%] h-[90%] pointer-events-none">
                      <Image
                        src={study.img}
                        alt={study.title}
                        fill
                        className="object-contain object-bottom transition-transform duration-500 group-hover/card:scale-[1.03]"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Card Content Stack */}
                  <div className="flex flex-col items-start gap-4 mt-5 flex-grow">
                    
                    {/* Tag badge */}
                    <span 
                      className={`text-[10px] font-extrabold uppercase tracking-[0.08em] px-3 py-1.5 rounded-lg select-none w-max ${theme.badgeBg} ${theme.textColor}`}
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {study.category}
                    </span>

                    {/* Title & Desc */}
                    <div className="flex flex-col gap-1.5 min-h-[75px]">
                      <h3 
                        className="text-[#0F172A] font-extrabold text-[19px] md:text-[21px] tracking-tight leading-tight"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {study.title}
                      </h3>
                      <p className="text-slate-500 text-[13px] md:text-[13.5px] leading-relaxed font-semibold">
                        {study.desc}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-slate-100" />

                    {/* Impact Metrics Block */}
                    <div className="flex flex-col gap-1.5 w-full mt-auto">
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Impact</span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-extrabold text-[#0F172A]">
                        {study.metrics.map((metric, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <span className="text-slate-200 font-normal">|</span>}
                            <span className="flex items-baseline gap-1">
                              <span className="text-[14.5px] text-[#0052FF] font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>
                                {metric.value}
                              </span>
                              <span className="text-[12.5px] text-slate-500 font-bold">
                                {metric.label}
                              </span>
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
