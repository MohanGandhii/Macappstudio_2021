"use client";

import React from "react";

// ── CUSTOM HIGH-QUALITY SVG ICONS ──
const SpeedometerIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 16a9 9 0 1 1 18 0" />
    <path d="m12 16-4-4" />
    <circle cx="12" cy="16" r="2" fill="currentColor" strokeWidth="0" />
    <path d="M7 10h.01M12 7h.01M17 10h.01" strokeWidth="3.5" />
  </svg>
);

const GearsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="2" />
    <path d="M9 5v1M9 12v1M5 9h1M12 9h1" />
    <circle cx="16" cy="15" r="2.5" />
    <path d="M16 11.5V13M16 17v1.5M12 15h1.5M18.5 15H20" />
    <path d="M7.6 6.1l.6.6M10.4 10.4l.6.6M10.4 6.1l-.6.6M7.6 10.4l-.6.6" strokeWidth="1.8" />
    <path d="M13.2 12.2l.9.9M16.8 15.8l.9.9M16.8 12.2l-.9.9M13.2 15.8l-.9.9" strokeWidth="1.8" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
    <path d="M12 12l9-9-3 12-4 1-2-2-1-4z" />
    <path d="M9 15l-3-3" />
  </svg>
);

const ShieldStarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polygon points="12,8 13.2,11 16.5,11 13.8,13 14.8,16.2 12,14.2 9.2,16.2 10.2,13 7.5,11 10.8,11" fill="currentColor" strokeWidth="0" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

export default function WhyHireUs() {
  const items = [
    {
      icon: <SpeedometerIcon />,
      text: "Move Faster than internal teams",
      bgColor: "bg-[#F3EAFF]",
      textColor: "text-[#7C3AED]",
    },
    {
      icon: <GearsIcon />,
      text: "Specialized expertise on demand",
      bgColor: "bg-[#F3EAFF]",
      textColor: "text-[#7C3AED]",
    },
    {
      icon: <RocketIcon />,
      text: "R&D / Innovation partner",
      bgColor: "bg-[#EAF2FF]",
      textColor: "text-[#0052FF]",
    },
    {
      icon: <ShieldStarIcon />,
      text: "Dedicated squads for critical initiatives",
      bgColor: "bg-[#E8F7ED]",
      textColor: "text-[#10B981]",
    },
    {
      icon: <ShieldCheckIcon />,
      text: "Reduce risk & deliver with confidence",
      bgColor: "bg-[#E8F7ED]",
      textColor: "text-[#10B981]",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 px-4 md:px-8 w-full">
      <div className="max-w-[1380px] mx-auto w-full">
        
        {/* Bordered card container */}
        <div className="w-full bg-white border border-[#ECECF3] rounded-[28px] p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          
          {/* Left Title Column */}
          <div className="w-full lg:w-[22%] flex flex-col justify-center text-left lg:pr-8">
            <h3 
              className="text-[18px] md:text-[20px] lg:text-[22px] font-extrabold text-[#0F172A] leading-[1.25] mb-2"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Why Do Even Large Companies Hire Us?
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed font-semibold">
              Because building products isn&apos;t just a developer problem. It&apos;s an execution, speed, innovation and focus problem.
            </p>
          </div>

          {/* Right Metrics Grid/Flex Column with vertical lines */}
          <div className="w-full lg:w-[78%] lg:border-l lg:border-gray-200/60 lg:pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-gray-200/60 items-center">
            {/* Metric Items */}
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-4 px-2 sm:px-4 text-left w-full ${idx > 0 ? "lg:pl-6" : ""}`}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.bgColor} ${item.textColor}`}>
                  {item.icon}
                </div>

                {/* Text */}
                <span className="text-[13px] font-extrabold text-[#334155] leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
