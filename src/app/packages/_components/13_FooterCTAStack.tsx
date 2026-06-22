"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

// ─── ICON COMPONENTS ──────────────────────────────────────────────────────────

const ShieldIcon = () => (
  <svg className="w-6 h-6 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ExperienceIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polygon points="12,8 13.2,11 16.5,11 13.8,13 14.8,16.2 12,14.2 9.2,16.2 10.2,13 7.5,11 10.8,11" fill="currentColor" strokeWidth="0" />
  </svg>
);

const ExpertIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M9 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="13" cy="7" r="4" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="absolute left-4 top-2 w-14 h-14 text-indigo-500/10 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TeamBtnIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function FooterCTAStack() {
  const { openProposalModal } = useModal();
  const logos = [
    { name: "DAIMLER", image: "/assets/images/resources/logos/daimler.png", width: 90, height: 28 },
    { name: "Jio", image: "/assets/images/resources/logos/jio.png", width: 34, height: 34 },
    { name: "intel", image: "/assets/images/resources/logos/intel.png", width: 55, height: 28 },
    { name: "paytm", image: "/assets/images/resources/logos/paytm.png", width: 65, height: 20 },
    { name: "accesshealthcare", image: "/assets/images/resources/logos/accesshealthcare.png", width: 145, height: 28 },
  ];

  const stats = [
    { value: "120+", label: "Products Delivered", icon: <BoxIcon />, bg: "bg-[#F3EAFF]", color: "text-[#7C3AED]" },
    { value: "100+", label: "Founder Dreams Built", icon: <UsersIcon />, bg: "bg-[#EAFDF5]", color: "text-[#10B981]" },
    { value: "10+", label: "Years of Experience", icon: <ExperienceIcon />, bg: "bg-[#FFF6D8]", color: "text-[#F59E0B]" },
    { value: "50+", label: "Product Experts", icon: <ExpertIcon />, bg: "bg-[#EAF2FF]", color: "text-[#0052FF]" },
    { value: "95%", label: "Client Retention", icon: <HeartIcon />, bg: "bg-[#FFF0F6]", color: "text-[#EC4899]" },
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8 bg-white flex flex-col gap-6 select-none">
      <div className="max-w-[1380px] mx-auto w-full flex flex-col gap-6">

        {/* ── Line 1: Logo & Partner Bar ── */}
        <div className="w-full bg-[#FBFDFF] border border-[#E8ECF5] rounded-[24px] p-6 lg:py-4.5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          {/* Left Text Block */}
          <div className="flex items-center gap-4 w-full lg:max-w-[390px] text-left shrink-0">
            <div className="w-11 h-11 rounded-full bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
              <ShieldIcon />
            </div>
            <div className="flex flex-col">
              <h4
                className="text-[#0F172A] font-extrabold text-[14px] md:text-[14.5px] leading-snug tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Trusted by innovators worldwide
              </h4>
              <p className="text-slate-500 text-[11.5px] md:text-[12px] leading-normal font-semibold">
                We take pride in building long-term partnerships and delivering results that matter.
              </p>
            </div>
          </div>

          {/* Right Logos Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 md:gap-8 lg:gap-9 w-full lg:w-auto">
            {logos.map((logo, idx) => (
              <div key={idx} className="relative select-none filter opacity-75 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
            <span className="text-slate-400 text-[12.5px] font-extrabold tracking-wide">and more...</span>
          </div>
        </div>

        {/* ── Line 2: Stats & Testimonial Bar ── */}
        <div className="w-full bg-[#FBFDFF] border border-[#E8ECF5] rounded-[24px] p-6 flex flex-col xl:flex-row items-stretch gap-6 xl:gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          {/* Left Stats Grid */}
          <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 xl:gap-4 items-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 w-full justify-start sm:justify-center">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-[#0F172A] text-[18px] md:text-[20px] font-extrabold leading-none mb-0.5"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-slate-500 text-[11px] font-bold leading-tight max-w-[85px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Quote Card Block */}
          <div className="w-full xl:w-[580px] bg-gradient-to-r from-[#F4F6FC] to-[#F1F4FD] border border-[#E6EAF4] rounded-[20px] py-6 px-6 md:px-8 flex flex-col justify-center relative overflow-hidden shrink-0 min-h-[160px]">
            {/* Background Quote Mark */}
            <QuoteIcon />

            {/* Testimonial Quote (Constrained to left side) */}
            <div className="w-[45%] flex flex-col justify-center text-left relative z-10 py-1">
              <p className="text-slate-700 text-[13px] md:text-[14px] leading-relaxed font-semibold italic">
                "MacAppStudio became our extended team. They understood our vision, moved fast, and delivered beyond expectations."
              </p>
              <span
                className="text-[#0F172A] font-extrabold text-[12px] md:text-[13px] mt-3 block"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                — CTO, Daimler
              </span>
            </div>

            {/* Team Illustration (Spans the right side with a fade) */}
            <div className="absolute right-0 top-0 bottom-0 w-[60%] h-full z-0 select-none pointer-events-none">
              {/* Soft gradient fade on the left to blend image seamlessly into the card background */}
              <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#F4F6FC] to-transparent z-10"></div>
              <Image
                src="/assets/images/resources/13/IMG_20260615_125603.png"
                alt="CTO Daimler Testimonial Illustration"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* ── Line 3: Closing Success Story CTA Bar ── */}
        <div className="w-full bg-[#FBFDFF] border border-[#E8ECF5] rounded-[24px] p-6 lg:py-4.5 lg:pr-6 lg:pl-[28%] xl:pl-[26%] flex flex-col lg:flex-row items-center justify-between gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative overflow-hidden min-h-[100px] lg:min-h-[110px]">

          {/* Left Mountain Illustration (Spans the left side with a fade) */}
          <div className="absolute left-0 top-0 bottom-0 w-[50%] lg:w-[35%] xl:w-[32%] h-full z-0 select-none pointer-events-none">
            {/* Soft gradient fade on the right to blend image seamlessly into the card background */}
            <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#FBFDFF] to-transparent z-10"></div>
            <Image
              src="/assets/images/resources/13/Moutain.png"
              alt="Mountain peak with flag"
              fill
              className="object-cover object-left"
              unoptimized
            />
          </div>

          {/* Middle Headline Text */}
          <div className="flex-grow flex flex-col text-center lg:text-left gap-0.5 z-10 relative">
            <h3
              className="text-[#0F172A] font-extrabold text-[20px] md:text-[22px] tracking-tight leading-tight lg:whitespace-nowrap"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Your Success Story Could Be Next
            </h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-semibold leading-normal lg:whitespace-nowrap">
              Let's turn your idea into the next big success.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto z-10 relative">
            {/* Blue Button */}
            <button
              onClick={openProposalModal}
              className="bg-[#0052FF] hover:bg-[#0041cc] text-white rounded-[16px] py-2.5 px-5.5 flex items-center gap-3.5 shadow-[0_4px_15px_rgba(0,82,255,0.18)] cursor-pointer text-left transition-all active:scale-98 w-full sm:w-auto justify-start"
            >
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white">
                <CalendarIcon />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-extrabold text-[13.5px] leading-tight"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Book Free Discovery Call
                </span>
                <span className="text-white/80 text-[11px] font-semibold mt-0.5">
                  30-minute strategy session
                </span>
              </div>
            </button>

            {/* Outline Button */}
            <button
              className="invisible pointer-events-none bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-[16px] py-2.5 px-5.5 flex items-center gap-3.5 cursor-pointer text-left transition-all active:scale-98 w-full sm:w-auto justify-start"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EBF5FF] flex items-center justify-center shrink-0 text-[#0052FF]">
                <TeamBtnIcon />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-extrabold text-[13.5px] leading-tight text-[#0F172A]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Build My Dream Team
                </span>
                <span className="text-slate-500 text-[11px] font-semibold mt-0.5">
                  Dedicated squad in 1-2 weeks
                </span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
