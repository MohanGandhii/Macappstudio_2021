"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

// ─── ICON COMPONENTS ──────────────────────────────────────────────────────────

const BoxIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const GroupIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TeamIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.746 3.746 0 0 1-3.296 1.043A3.746 3.746 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

// Bullet Icons
const ClockIcon = () => (
  <svg className="w-[15px] h-[15px] text-[#0C54EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-[15px] h-[15px] text-[#0C54EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-[15px] h-[15px] text-[#0C54EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-[15px] h-[15px] text-[#0C54EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

const UserOutlineIcon = () => (
  <svg className="w-[15px] h-[15px] text-[#0C54EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export default function NumbersBehindDreams() {
  const { openProposalModal } = useModal();
  const stats = [
    { value: "120+", label: "Products Delivered", icon: <BoxIcon />, bg: "bg-[#F3EAFF]", color: "text-[#7C3AED]" },
    { value: "100+", label: "Founder Dreams Built", icon: <GroupIcon />, bg: "bg-[#EFF6FF]", color: "text-[#3B82F6]" },
    { value: "500+", label: "Engineers Deployed", icon: <TeamIcon />, bg: "bg-[#FFF7ED]", color: "text-[#F97316]" },
    { value: "20+", label: "Industries Served", icon: <BadgeIcon />, bg: "bg-[#ECFDF5]", color: "text-[#10B981]" },
    { value: "10+", label: "Years Experience", icon: <StarIcon />, bg: "bg-[#F5F3FF]", color: "text-[#8B5CF6]" },
    { value: "Millions", label: "Users Impacted Globally", icon: <HeartIcon />, bg: "bg-[#FFF1F2]", color: "text-[#F43F5E]" },
  ];

  const bullets = [
    { text: "Start in 1-2 weeks", icon: <ClockIcon /> },
    { text: "Scale anytime", icon: <ChartIcon /> },
    { text: "Full ownership", icon: <ShieldIcon /> },
    { text: "Weekly updates", icon: <CalendarIcon /> },
    { text: "No hiring hassle", icon: <UserOutlineIcon /> },
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8 bg-white flex flex-col gap-6 select-none relative z-10">
      <div className="max-w-[1380px] mx-auto w-full flex flex-col gap-6">

        {/* ── 1. STATS BAR ── */}
        <div className="w-full bg-white border border-[#E8ECF5] rounded-[24px] p-6 md:p-8 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          <h4 className="text-[#1E3A8A] text-[11px] font-extrabold tracking-[0.15em] uppercase mb-8 text-center">
            THE NUMBERS BEHIND THE DREAMS
          </h4>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-between">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col xl:flex-row items-center xl:items-start gap-3 xl:gap-4 shrink-0 text-center xl:text-left">
                <div className={`w-[48px] h-[48px] xl:w-[52px] xl:h-[52px] rounded-full flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[#0F172A] text-[18px] md:text-[20px] xl:text-[22px] font-extrabold leading-none mb-1"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-slate-500 text-[10px] xl:text-[11px] font-semibold leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. LIGHT PURPLE DREAM CTA BANNER ── */}
        <div className="w-full bg-[#F6F8FF] border border-[#E8ECF5] rounded-[24px] py-8 px-5 md:px-8 relative flex flex-col xl:flex-row xl:items-center justify-between gap-8 xl:gap-12 overflow-hidden min-h-[140px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">

          {/* Left: Rocket Illustration */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-[180px] xl:w-[220px] h-[105%] select-none pointer-events-none z-10">
            <Image
              src="/assets/images/resources/15/image 1884 (4).png"
              alt="Rocket illustration"
              fill
              className="object-contain object-bottom object-left"
              unoptimized
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col text-left min-w-0 lg:pl-[140px] xl:pl-[150px] z-20 relative flex-grow w-full">
            <h3
              className="text-[#0F172A] font-extrabold text-[22px] md:text-[25px] xl:text-[28px] tracking-tight leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Your Dream Is Closer Than You Think
            </h3>
            <p className="text-slate-600 text-[14px] xl:text-[15px] font-medium mt-1.5">
              Let's build the next big thing together.
            </p>

            {/* 5 Bullet Points */}
            <div className="flex flex-wrap items-center gap-x-2 xl:gap-x-3 gap-y-2 mt-4">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-1.5 shrink-0 bg-white/60 py-1 px-2 rounded-md border border-white">
                  <div className="shrink-0">{bullet.icon}</div>
                  <span className="text-slate-600 text-[10px] xl:text-[11px] font-semibold whitespace-nowrap">
                    {bullet.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 shrink-0 mt-6 xl:mt-0 z-20 relative w-full xl:w-auto">
            {/* Blue Button */}
            <button
              onClick={openProposalModal}
              className="w-full sm:w-auto bg-[#0C54EC] hover:bg-[#0a47c9] text-white text-left py-3 px-4 rounded-[12px] shadow-[0_4px_15px_rgba(12,84,236,0.15)] transition-all hover:scale-[1.02] flex items-center justify-center sm:justify-start gap-2.5 cursor-pointer shrink-0"
            >
              <div className="shrink-0">
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[12px] xl:text-[13px] tracking-tight">
                  Book Free Discovery Call
                </span>
                <span className="text-white/80 text-[9px] xl:text-[10px] font-medium mt-0.5">
                  Free 30-min strategy session
                </span>
              </div>
            </button>

            {/* Outline Button */}
            <button className="invisible pointer-events-none w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] text-left py-3 px-4 rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all hover:scale-[1.02] flex items-center justify-center sm:justify-start gap-2.5 cursor-pointer shrink-0">
              <div className="shrink-0">
                <svg className="w-5 h-5 text-[#0C54EC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[12px] xl:text-[13px] tracking-tight">
                  Build My Dream Team
                </span>
                <span className="text-slate-500 text-[9px] xl:text-[10px] font-medium mt-0.5">
                  Start building in 1-2 weeks
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
