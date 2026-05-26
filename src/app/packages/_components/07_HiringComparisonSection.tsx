"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function HiringComparisonSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Main Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Hiring Yourself vs Hiring with Us
          </h2>
        </div>

        {/* Comparison Block Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Ambient Background Glows */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#10B981] opacity-[0.05] blur-[70px] pointer-events-none z-0" />
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#3B82F6] opacity-[0.07] blur-[70px] pointer-events-none z-0" />
          
          {/* Central Vertical Green Glow Stripe */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[460px] rounded-full bg-[#10B981] opacity-[0.18] blur-[40px] pointer-events-none z-0" />

          {/* Decorative Spark Icon (Top Left) */}
          <div className="absolute -left-8 -top-12 w-12 h-12 text-[#1E2229] opacity-80 hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="4" x2="18" y2="10" />
              <line x1="8" y1="8" x2="13" y2="13" />
              <line x1="4" y1="18" x2="10" y2="18" />
              <line x1="8" y1="28" x2="13" y2="23" />
            </svg>
          </div>

          {/* Symmetrical Headers Row (for logo / other way titles) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full mb-6 relative z-10">
            
            {/* Left Header: MacAppStudio logo & text */}
            <div className="flex items-center justify-start h-10 px-2">
              <svg className="w-8 h-8 mr-2.5 shrink-0" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="4" height="9" rx="1" fill="url(#masGrad1)" />
                <rect x="10" y="7" width="4" height="13" rx="1" fill="url(#masGrad2)" />
                <rect x="17" y="3" width="4" height="17" rx="1" fill="url(#masGrad3)" />
                <defs>
                  <linearGradient id="masGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                  <linearGradient id="masGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="masGrad3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
              </svg>
              <span 
                className="text-[#1E2229] font-bold text-xl sm:text-[22px] tracking-tight"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                MacAppStudio
              </span>
            </div>

            {/* Right Header: OTHER WAY */}
            <div className="flex items-center justify-start h-10 px-2 lg:pl-4">
              <span 
                className="text-[#1E2229] font-bold text-lg sm:text-xl tracking-[0.08em] uppercase"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                OTHER WAY
              </span>
            </div>

          </div>

          {/* VS Center badge for desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#10B981] rounded-full text-white items-center justify-center font-bold text-base z-20 shadow-md">
            VS
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full relative z-10">
            
            {/* Left Card: With Extended Tech Team */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(16,185,129,0.08)] relative overflow-hidden text-left"
              >
                {/* Section green tag header */}
                <span className="text-[#10B981] font-bold text-[12px] sm:text-[13px] tracking-[0.06em] uppercase mb-6 block">
                  WITH EXTENDED TECH TEAM
                </span>

                {/* List items */}
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#10B981] stroke-[3px]" />
                    </div>
                    <span 
                      className="text-[#1E2229] font-medium text-[15px] sm:text-[16px] tracking-tight"
                      style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
                    >
                      1-2 week team setup
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#10B981] stroke-[3px]" />
                    </div>
                    <span 
                      className="text-[#1E2229] font-medium text-[15px] sm:text-[16px] tracking-tight"
                      style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
                    >
                      Flexible & scalable
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#10B981] stroke-[3px]" />
                    </div>
                    <span 
                      className="text-[#1E2229] font-medium text-[15px] sm:text-[16px] tracking-tight"
                      style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
                    >
                      Experienced & accountable developers
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Hand-drawn Underline decoration (bottom left card) */}
              <div className="absolute -bottom-8 left-10 right-10 h-6 text-slate-800 opacity-70 hidden md:block">
                <svg className="w-full h-full" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
                  <path d="M5,15 C50,15 150,5 295,12 C240,8 100,6 5,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Mobile VS Badge splitter */}
            <div className="lg:hidden w-12 h-12 bg-[#10B981] rounded-full text-white flex items-center justify-center font-bold text-base mx-auto -my-4 z-10 relative shadow-sm">
              VS
            </div>

            {/* Right Card: Traditional Hiring */}
            <motion.div
              whileHover={{ scale: 1.005 }}
              className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(59,130,246,0.08)] relative overflow-hidden text-left"
            >
              {/* Section red tag header */}
              <span className="text-[#EF4444] font-bold text-[12px] sm:text-[13px] tracking-[0.06em] uppercase mb-6 block">
                TRADITIONAL HIRING
              </span>

              {/* List items */}
              <div className="flex flex-col gap-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFF0F0] border border-[#FECACA] flex items-center justify-center shrink-0">
                    <X size={12} className="text-[#EF4444] stroke-[3px]" />
                  </div>
                  <span 
                    className="text-[#1E2229] font-medium text-[15px] sm:text-[16px] tracking-tight"
                    style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
                  >
                    Time-consuming hiring
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFF0F0] border border-[#FECACA] flex items-center justify-center shrink-0">
                    <X size={12} className="text-[#EF4444] stroke-[3px]" />
                  </div>
                  <span 
                    className="text-[#1E2229] font-medium text-[15px] sm:text-[16px] tracking-tight"
                    style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
                  >
                    Expensive payroll & overheads
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFF0F0] border border-[#FECACA] flex items-center justify-center shrink-0">
                    <X size={12} className="text-[#EF4444] stroke-[3px]" />
                  </div>
                  <span 
                    className="text-[#1E2229] font-medium text-[15px] sm:text-[16px] tracking-tight"
                    style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
                  >
                    Skill gaps & hiring risks
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
