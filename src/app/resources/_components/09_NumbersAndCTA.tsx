"use client";

import React from "react";
import Image from "next/image";

// Icons
const BoxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GroupIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const ShieldStarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polygon points="12,8 13.2,11 16.5,11 13.8,13 14.8,16.2 12,14.2 9.2,16.2 10.2,13 7.5,11 10.8,11" fill="currentColor" strokeWidth="0" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const CalendarRefreshIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserXIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="18" y1="8" x2="23" y2="13" />
    <line x1="23" y1="8" x2="18" y2="13" />
  </svg>
);

export default function NumbersAndCTA() {
  const stats = [
    { num: "120+", label: "Products Delivered", icon: <BoxIcon />, bg: "bg-[#F3EAFF]", color: "text-[#7C3AED]" },
    { num: "100+", label: "Founder Dreams Built", icon: <UsersIcon />, bg: "bg-[#EAF2FF]", color: "text-[#0052FF]" },
    { num: "500+", label: "Engineers Deployed", icon: <GroupIcon />, bg: "bg-[#FFF6D8]", color: "text-[#F59E0B]" },
    { num: "20+", label: "Industries Served", icon: <BadgeIcon />, bg: "bg-[#E8F7ED]", color: "text-[#10B981]" },
    { num: "10+", label: "Years Experience", icon: <ShieldStarIcon />, bg: "bg-[#F3EAFF]", color: "text-[#7C3AED]" },
    { num: "Millions", label: "Users Impacted Globally", icon: <HeartIcon />, bg: "bg-[#FFF0F5]", color: "text-[#EF4444]" },
  ];

  const tags = [
    { text: "Start in 1-2 weeks", icon: <ClockIcon /> },
    { text: "Scale anytime", icon: <ChartIcon /> },
    { text: "Full ownership", icon: <ShieldCheckIcon /> },
    { text: "Weekly updates", icon: <CalendarRefreshIcon /> },
    { text: "No hiring hassle", icon: <UserXIcon /> },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white flex flex-col gap-12">
      <div className="max-w-[1380px] mx-auto w-full flex flex-col gap-12">
        
        {/* ── 1. NUMBERS BEHIND THE DREAMS BANNER ── */}
        <div className="w-full bg-white border border-[#ECECF3] rounded-[28px] py-7 px-6 md:px-8 shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
          <div className="text-center mb-6">
            <span 
              className="text-[12px] md:text-[13px] font-extrabold text-[#0052FF] uppercase tracking-[0.2em]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              The Numbers Behind The Dreams
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 lg:gap-6 md:divide-x divide-gray-200/60 items-center justify-items-center">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-4 w-full justify-start md:justify-center ${idx > 0 ? "md:pl-4 lg:pl-6" : ""}`}
              >
                <div className={`w-[44px] h-[44px] md:w-[40px] md:h-[40px] lg:w-[44px] lg:h-[44px] rounded-full flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col text-left md:text-center lg:text-left">
                  <div className="text-[20px] lg:text-[22px] font-extrabold text-[#0F172A] leading-none mb-0.5" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {stat.num}
                  </div>
                  <div className="text-[11px] lg:text-[12px] text-gray-500 font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#F4F6FC] to-[#F1F4FD] border border-[#E8ECF5] rounded-[28px] overflow-hidden relative shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col lg:flex-row items-center px-6 lg:px-4 xl:px-6 py-6 lg:py-0 gap-6 lg:gap-4">
            
            {/* Left: Rocket Illustration */}
            <div className="hidden lg:flex w-[120px] xl:w-[140px] shrink-0 self-end relative h-[120px]">
              <Image
                src="/assets/images/appdevelopment/rocket@2x.png"
                alt="Rocket taking off"
                fill
                className="object-contain object-bottom"
                unoptimized
              />
            </div>

            {/* Middle: Text + Tags */}
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-2.5 text-center lg:text-left lg:pl-2 xl:pl-4 py-4 lg:py-5">
              <div>
                <h3 
                  className="text-[#0F172A] font-extrabold text-[20px] md:text-[22px] xl:text-[24px] leading-tight mb-0.5"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Your Dream Is Closer Than You Think
                </h3>
                <p className="text-gray-500 text-[13px] xl:text-[14px] font-medium leading-relaxed">
                  Let&apos;s build the next big thing together.
                </p>
              </div>

              {/* Tags — single row */}
              <div className="flex items-center justify-center lg:justify-start gap-2 overflow-x-auto">
                {tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-gray-200/80 shadow-sm text-gray-600">
                    <span className="text-[#0052FF]">{tag.icon}</span>
                    <span className="text-[10px] xl:text-[11px] font-bold tracking-wide whitespace-nowrap">{tag.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 z-10 w-full lg:w-auto">
              {/* Button 1: Book Call */}
              <button 
                onClick={() => {
                  const modalEvent = new CustomEvent("openVideoModal");
                  window.dispatchEvent(modalEvent);
                }}
                className="bg-[#0052FF] hover:bg-[#0041cc] text-white rounded-xl py-2.5 px-4 flex items-center gap-2.5 transition-all hover:scale-[1.01] active:scale-95 shadow-[0_4px_20px_rgba(0,82,255,0.2)] border border-transparent cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-white">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[13px] font-extrabold leading-tight whitespace-nowrap">Book Free Discovery Call</div>
                  <div className="text-[10px] text-blue-100 font-medium mt-0.5 whitespace-nowrap">Free 30-min strategy session</div>
                </div>
              </button>

              {/* Button 2: Build My Team */}
              <button 
                onClick={() => window.open("/contactus", "_self")}
                className="bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200 rounded-xl py-2.5 px-4 flex items-center gap-2.5 transition-all hover:scale-[1.01] shadow-sm active:scale-95 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] flex items-center justify-center shrink-0 text-[#0052FF]">
                  <UsersIcon />
                </div>
                <div className="text-left">
                  <div className="text-[13px] font-extrabold leading-tight whitespace-nowrap">Build My Dream Team</div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5 whitespace-nowrap">Start building in 1-2 weeks</div>
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
