"use client";

import React from "react";
import Image from "next/image";
import { Package, Users, Shield, Heart, Calendar, Brain, FlaskConical, TrendingUp } from "lucide-react";


export default function GrowthPartnerSection() {
  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1380px] mx-auto flex flex-col">

        {/* ── 1. HEADING AND PILARS + MOUNTAIN ILLUSTRATION ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 w-full relative">
          
          {/* LEFT COLUMN: Heading + Cards */}
          <div className="w-full lg:w-[60%] xl:w-[60%] flex flex-col gap-6 lg:gap-8 z-20 shrink-0">
            
            {/* Centered Heading (Over the cards) */}
            <div className="text-center w-full px-2 lg:px-0">
              <h2
                className="font-extrabold text-[#0F172A] leading-[1.15] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[40px] xl:text-[42px] tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Most agencies stop after development.
                <br className="hidden md:block" />
                <span className="relative inline-block text-[#0052FF] mt-1 md:mt-2">
                  We stay through growth.
                  <svg
                    className="absolute left-0 right-0 -bottom-2 md:-bottom-3 w-[100%] h-[8px] md:h-[10px] text-[#0052FF]"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 8C70 3 230 3 295 8"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Cards row below heading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Product Thinking */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 p-4 rounded-[20px] border border-[#ECECF3] bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full shrink-0 flex items-center justify-center bg-[#F3EAFF] text-[#7C3AED]">
                  <Brain className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-extrabold text-[#0F172A] text-[14px] md:text-[15px] leading-tight mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>Product Thinking</h4>
                  <p className="text-gray-500 text-[12px] md:text-[13px] leading-[1.3] font-medium">
                    We challenge assumptions and improve ideas.
                  </p>
                </div>
              </div>

              {/* R&D Innovation */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 p-4 rounded-[20px] border border-[#ECECF3] bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full shrink-0 flex items-center justify-center bg-[#E8F7ED] text-[#10B981]">
                  <FlaskConical className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-extrabold text-[#0F172A] text-[14px] md:text-[15px] leading-tight mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>R&D Innovation</h4>
                  <p className="text-gray-500 text-[12px] md:text-[13px] leading-[1.3] font-medium">
                    We explore emerging technologies before competitors do.
                  </p>
                </div>
              </div>

              {/* Growth Mindset */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 p-4 rounded-[20px] border border-[#ECECF3] bg-white shadow-sm hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full shrink-0 flex items-center justify-center bg-[#FFF6D8] text-[#F59E0B]">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-extrabold text-[#0F172A] text-[14px] md:text-[15px] leading-tight mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>Growth Mindset</h4>
                  <p className="text-gray-500 text-[12px] md:text-[13px] leading-[1.3] font-medium">
                    Every feature should create measurable business impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Mountain Path Illustration */}
          <div className="w-full lg:w-[38%] xl:w-[38%] flex items-center justify-end mt-6 lg:mt-0">
            {/* Boxed Image Container to look like a row */}
            <div className="relative w-full h-[200px] md:h-[240px] rounded-[24px] border border-[#ECECF3] shadow-sm overflow-hidden bg-[#F8FAFC]">
              <Image
                src="/assets/images/mountain_vision.png"
                alt="We stay through growth path"
                fill
                priority
                className="object-cover object-right"
                unoptimized
              />
            </div>
          </div>
        </div>        <div className="w-full bg-white border border-[#ECECF3] rounded-[20px] py-4 md:py-5 px-4 md:px-6 shadow-sm flex flex-col items-center mt-4 md:mt-6">
          <h3 className="text-[9px] md:text-[10px] font-extrabold text-slate-400 tracking-[0.2em] md:tracking-[0.25em] uppercase mb-3 md:mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Numbers Behind The Journey
          </h3>

          <div className="flex flex-wrap md:flex-nowrap flex-row items-center justify-center md:justify-between gap-6 md:gap-2 w-full">

            {/* Stat 1 */}
            <div className="flex items-center gap-3 md:flex-1 justify-center min-w-[130px] md:min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#F3EAFF] text-[#7C3AED]">
                <Package className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[18px] md:text-[20px] text-[#0F172A] leading-none mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>120+</span>
                <span className="text-[9px] md:text-[10px] font-medium text-slate-500 leading-tight">Products Delivered</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-slate-100"></div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 md:flex-1 justify-center min-w-[130px] md:min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#E8F7ED] text-[#10B981]">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[18px] md:text-[20px] text-[#0F172A] leading-none mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>100+</span>
                <span className="text-[9px] md:text-[10px] font-medium text-slate-500 leading-tight">Founder Dreams Built</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-slate-100"></div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 md:flex-1 justify-center min-w-[130px] md:min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#FFF6D8] text-[#F59E0B]">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[18px] md:text-[20px] text-[#0F172A] leading-none mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>10+</span>
                <span className="text-[9px] md:text-[10px] font-medium text-slate-500 leading-tight">Years Experience</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-slate-100"></div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 md:flex-1 justify-center min-w-[130px] md:min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#E0E7FF] text-[#3B82F6]">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[18px] md:text-[20px] text-[#0F172A] leading-none mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>50+</span>
                <span className="text-[9px] md:text-[10px] font-medium text-slate-500 leading-tight">Product Experts</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-slate-100"></div>

            {/* Stat 5 */}
            <div className="flex items-center gap-3 md:flex-1 justify-center min-w-[130px] md:min-w-0">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#FCE7F3] text-[#EC4899]">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[18px] md:text-[20px] text-[#0F172A] leading-none mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>95%</span>
                <span className="text-[9px] md:text-[10px] font-medium text-slate-500 leading-tight">Client Retention</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── 3. CTA BANNER ── */}
        <div className="w-full bg-[#F5F5FA] rounded-[24px] flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 relative overflow-hidden px-6 md:px-10 py-8 md:py-0 min-h-[160px] lg:min-h-[180px]">
          
          {/* Left Image (Desktop: Absolute flush bottom-left) */}
          <div className="hidden md:block absolute left-2 lg:left-4 bottom-0 w-[240px] lg:w-[280px] h-[140px] lg:h-[160px] z-0 pointer-events-none">
             <Image 
               src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png" 
               alt="Team Collaboration" 
               fill 
               className="object-contain object-bottom" 
               unoptimized 
             />
          </div>

          {/* Left Image (Mobile: Flowing) */}
          <div className="block md:hidden relative w-[220px] h-[120px] z-0 mb-4 pointer-events-none">
             <Image 
               src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png" 
               alt="Team Collaboration" 
               fill 
               className="object-contain object-bottom" 
               unoptimized 
             />
          </div>

          {/* Middle: Text Context */}
          <div className="flex flex-col text-center md:text-left justify-center z-10 md:pl-[250px] lg:pl-[290px] py-2 md:py-8 lg:py-10">
            <h3 className="font-extrabold text-[20px] lg:text-[24px] text-[#0F172A] mb-1.5 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              From CTO pressure to predictable product delivery.
            </h3>
            <p className="text-[13px] lg:text-[15px] text-[#64748B] font-medium leading-relaxed">
              That&apos;s why startups, scaleups and enterprises trust <br className="hidden lg:block"/>
              MacAppStudio as their execution partner.
            </p>
          </div>

          {/* Right side: Action Buttons (Stacked Vertically) */}
          <div className="flex flex-col gap-3 w-full md:w-[240px] lg:w-[260px] z-10 shrink-0 mt-4 md:mt-0 py-2 md:py-8 lg:py-10">
             <button className="flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors text-white rounded-[12px] px-6 py-3.5 w-full font-semibold text-[14px]">
               <Calendar className="w-4 h-4 shrink-0" />
               Book Free Discovery Call
             </button>
             <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 transition-colors border border-[#2563EB] text-[#2563EB] rounded-[12px] px-6 py-3.5 w-full font-semibold text-[14px] shadow-sm">
               <Users className="w-4 h-4 shrink-0" />
               Build My Team
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
