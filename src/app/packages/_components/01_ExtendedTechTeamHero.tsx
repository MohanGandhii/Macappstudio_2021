"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ExtendedTechTeamHero() {
  // Avatars positioning, sizes, and borders matching the mockup layout precisely
  // We use responsive positions that scale nicely and prevent overlapping the central text
  const avatars = [
    {
      src: "/packaged_assets/avatar1.png",
      color: "border-[#0052FF]",
      sizeClass: "w-[44px] h-[44px] md:w-[50px] md:h-[50px]",
      positionClass: "top-[-12%] left-1/2 -translate-x-1/2 md:top-[-16%] lg:top-[-20%]",
      floatDuration: 5,
      delay: 0,
    },
    {
      src: "/packaged_assets/avatar2.png",
      color: "border-[#FFA500]",
      sizeClass: "w-[38px] h-[38px] md:w-[44px] md:h-[44px]",
      positionClass: "top-[4%] right-[10%] md:right-auto md:left-1/2 md:translate-x-[240px] lg:translate-x-[320px] xl:translate-x-[360px] md:top-[8%] lg:top-[10%]",
      floatDuration: 5.8,
      delay: 0.4,
    },
    {
      src: "/packaged_assets/avatar3.png",
      color: "border-[#A855F7]",
      sizeClass: "w-[38px] h-[38px] md:w-[44px] md:h-[44px]",
      positionClass: "top-[12%] left-[6%] md:left-auto md:left-1/2 md:-translate-x-[260px] lg:-translate-x-[340px] xl:-translate-x-[380px] md:top-[16%] lg:top-[20%]",
      floatDuration: 4.5,
      delay: 0.8,
    },
    {
      src: "/packaged_assets/avatar4.png",
      color: "border-[#EC4899]",
      sizeClass: "w-[38px] h-[38px] md:w-[44px] md:h-[44px]",
      positionClass: "top-[24%] right-[6%] md:right-auto md:left-1/2 md:translate-x-[240px] lg:translate-x-[320px] xl:translate-x-[360px] md:top-[28%] lg:top-[32%]",
      floatDuration: 5.2,
      delay: 0.2,
    },
    {
      src: "/packaged_assets/avatar5.png",
      color: "border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
      sizeClass: "w-[68px] h-[68px] md:w-[86px] md:h-[86px]",
      positionClass: "top-[52%] left-[2%] md:left-auto md:left-1/2 md:-translate-x-[320px] lg:-translate-x-[440px] xl:-translate-x-[500px] md:top-[56%] lg:top-[60%]",
      floatDuration: 6.2,
      delay: 1.2,
    },
    {
      src: "/packaged_assets/avatar6.png",
      color: "border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
      sizeClass: "w-[68px] h-[68px] md:w-[86px] md:h-[86px]",
      positionClass: "top-[40%] right-[2%] md:right-auto md:left-1/2 md:translate-x-[280px] lg:translate-x-[380px] xl:translate-x-[440px] md:top-[44%] lg:top-[48%]",
      floatDuration: 4.8,
      delay: 0.6,
    },
  ];

  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden bg-white">
      {/* Background radial gradients for soft color mesh matching the mockup */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-15%] w-[60%] h-[70%] rounded-full bg-[#e8fbf3]/60 blur-[130px]" />
        <div className="absolute top-[10%] right-[-15%] w-[55%] h-[70%] rounded-full bg-[#fdeef4]/50 blur-[130px]" />
      </div>

      {/* Hero Body Content */}
      <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-12 md:mt-16">
        
        {/* Scattered Avatars with Floating Animations */}
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className={`absolute z-10 ${avatar.positionClass}`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: avatar.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: avatar.delay,
              }}
            >
              <div className={`relative rounded-full border-[3px] md:border-[4px] overflow-hidden ${avatar.sizeClass} ${avatar.color} bg-white cursor-pointer`}>
                <Image
                  src={avatar.src}
                  alt={`Team Member ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 80px, 120px"
                  className="object-cover"
                  priority={idx < 3}
                />
              </div>
            </motion.div>
          </div>
        ))}

        {/* Text and Call to Action */}
        <div className="max-w-4xl mx-auto px-4 relative z-20 flex flex-col items-center mb-3 md:mb-4">
          {/* Header Title */}
          <h1 
            className="text-[#1E2229] font-medium text-2xl sm:text-3xl md:text-[40px] tracking-tight mb-3 select-none leading-tight"
            style={{ fontFamily: "CircularStd-Medium, sans-serif" }}
          >
            Build Your Dream with Our
          </h1>
          <h2 
            className="text-[#1E2229] font-bold text-5xl sm:text-6xl md:text-[76px] tracking-tight leading-none mb-8 select-none"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            <span className="text-[#0052FF]">Extended</span>{" "}Tech Team
          </h2>

          {/* Subtext */}
          <p 
            className="text-[#5E6675] text-sm sm:text-base md:text-lg max-w-[700px] mt-2 mb-10 leading-relaxed font-normal"
            style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
          >
            Get ready-to-go extended teams in just 1-2 weeks. Having built over 120+ apps on almost 
            every platform, we bring scalable support and transparent collaboration.
          </p>

          {/* Start Building Button */}
          <Link
            href="/contactus"
            className="group bg-[#0052FF] hover:bg-[#0041cc] text-[#ffffff] px-9 py-4 rounded-full font-bold shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-[0.98] transition-all text-[15px] inline-flex items-center gap-2.5"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Start Building Today
            <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Metrics, Completed Projects Badge & Chart Card */}
        <div className="relative z-20 w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 mt-3 md:mt-4">
          
          {/* Left Side: Tilted Projects Completed Badge */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-6, -5, -6] }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-[#7c3aed] text-white py-4.5 px-6 rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10 select-none cursor-pointer w-[205px]"
            >
              <div className="flex flex-col text-left">
                <span 
                  className="text-[30px] font-bold leading-none tracking-tight"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  200+
                </span>
                <span 
                  className="text-[12px] font-medium opacity-90 mt-2 tracking-wide"
                  style={{ fontFamily: "CircularStd-Book, sans-serif" }}
                >
                  Project completed
                </span>
              </div>
            </motion.div>
          </div>

          {/* Center Section: Core Metrics */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-20 md:gap-24 w-full lg:w-auto select-none">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <span 
                className="text-3xl md:text-[38px] font-bold text-[#1E2229] tracking-tight leading-none"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                1-2
              </span>
              <span 
                className="text-[11px] md:text-[13px] text-gray-400 mt-2 font-medium"
                style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
              >
                Weeks to Start
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <span 
                className="text-3xl md:text-[38px] font-bold text-[#1E2229] tracking-tight leading-none"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                100%
              </span>
              <span 
                className="text-[11px] md:text-[13px] text-gray-400 mt-2 font-medium"
                style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
              >
                Managed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <span 
                className="text-3xl md:text-[38px] font-bold text-[#1E2229] tracking-tight leading-none"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                30
              </span>
              <span 
                className="text-[11px] md:text-[13px] text-gray-400 mt-2 font-medium"
                style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
              >
                Days Flexibility
              </span>
            </div>

          </div>

          {/* Right Side: Floating SVG Chart Card */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [2, 3, 2] }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="bg-white border border-gray-100/80 shadow-2xl rounded-2xl p-4.5 w-[240px] md:w-[260px] select-none cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3 text-left">
                <div className="flex flex-col">
                  <span 
                    className="text-gray-400 text-[9px] font-bold uppercase tracking-wider"
                    style={{ fontFamily: "AvenirNext-Bold, sans-serif" }}
                  >
                    Monthly Project Views
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span 
                      className="text-gray-800 text-sm font-bold"
                      style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                    >
                      17221
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-emerald-500 font-bold">&#9650;</span>
                  </div>
                </div>
              </div>

              {/* SVG line chart and grid matching mockup */}
              <div className="w-full h-20 mt-1 relative">
                <svg viewBox="0 0 240 80" className="w-full h-full">
                  {/* Horizontal grid lines */}
                  <line x1="0" y1="15" x2="240" y2="15" stroke="#f3f4f6" strokeWidth="1" />
                  <line x1="0" y1="35" x2="240" y2="35" stroke="#f3f4f6" strokeWidth="1" />
                  <line x1="0" y1="55" x2="240" y2="55" stroke="#f3f4f6" strokeWidth="1" />
                  <line x1="0" y1="75" x2="240" y2="75" stroke="#f3f4f6" strokeWidth="1" />

                  <defs>
                    <linearGradient id="chartLineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0052FF" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#0052FF" stopOpacity="0.00"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Smooth growing line path with slight dip matching mockup */}
                  <path
                    d="M 0 70 C 30 60, 50 40, 80 48 C 110 56, 130 50, 160 38 C 190 26, 210 12, 240 8"
                    fill="none"
                    stroke="#0052FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Area under line */}
                  <path
                    d="M 0 70 C 30 60, 50 40, 80 48 C 110 56, 130 50, 160 38 C 190 26, 210 12, 240 8 L 240 80 L 0 80 Z"
                    fill="url(#chartLineGrad)"
                  />

                  {/* Nodes */}
                  <circle cx="80" cy="48" r="3.5" fill="#0052FF" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="160" cy="38" r="3.5" fill="#0052FF" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="240" cy="8" r="4.5" fill="#0052FF" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Chart Month Labels */}
              <div 
                className="flex justify-between text-[8px] text-gray-400 font-medium px-1 mt-1.5"
                style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
              >
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
