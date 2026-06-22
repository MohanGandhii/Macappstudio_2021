"use client";

import React from "react";
import Image from "next/image";
import { Package, Users, Shield, Heart, Calendar, Brain, FlaskConical, TrendingUp } from "lucide-react";
import { useModal } from "@/context/ModalContext";


export default function GrowthPartnerSection() {
  const { openProposalModal } = useModal();
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
        <div className="w-full bg-[#F6F8FD] rounded-[24px] flex flex-col md:flex-row items-stretch justify-between mt-4 md:mt-6 relative overflow-hidden border border-[#ECECF3] shadow-sm">

          {/* Left Illustration */}
          <div className="relative w-full md:w-[220px] lg:w-[260px] xl:w-[320px] min-h-[140px] md:min-h-[160px] shrink-0 border-b md:border-b-0 md:border-r border-[#ECECF3]">
            <Image
              src="/assets/images/resources/team_collaboration.png"
              alt="Ready to start"
              fill
              priority
              quality={100}
              className="object-cover object-top"
            />
          </div>

          {/* Middle Content & Buttons Wrapper */}
          <div className="flex-1 flex flex-col xl:flex-row items-center justify-between p-5 md:p-6 gap-5 md:gap-4 lg:gap-6">
            {/* Middle Content */}
            <div className="flex-1 text-center xl:text-left z-10 min-w-[280px]">
              <h3 className="text-[#0F172A] font-extrabold text-[17px] md:text-[19px] xl:text-[21px] leading-tight mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                Ready To Start Your Journey?
              </h3>
              <p className="text-[#64748B] text-[13px] md:text-[14px] leading-relaxed max-w-[500px] mx-auto xl:mx-0 font-medium">
                Let's build something incredible together.
              </p>
            </div>

            {/* Right Buttons - SIDE BY SIDE */}
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4 w-full xl:w-auto shrink-0 z-10 justify-center">
              <button onClick={openProposalModal} className="w-full md:w-[220px] xl:w-[240px] rounded-[14px] bg-[#2F63F5] hover:bg-[#2552CC] transition-colors text-white flex items-center justify-center lg:justify-start gap-3 p-3 shadow-sm">
                <Calendar className="w-[18px] h-[18px] shrink-0 md:ml-3" />
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold text-[13px] leading-tight">Book Free Discovery Call</span>
                  <span className="text-[10px] font-normal text-blue-100 mt-0.5">30-minute strategy session</span>
                </div>
              </button>

              <button className="invisible pointer-events-none w-full md:w-[220px] xl:w-[240px] rounded-[14px] bg-white border border-[#ECECF3] hover:border-gray-300 hover:bg-gray-50 transition-colors text-[#2F63F5] flex items-center justify-center lg:justify-start gap-3 p-3 shadow-sm">
                <Users className="w-[18px] h-[18px] shrink-0 md:ml-3" />
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold text-[13px] leading-tight">Build My Team</span>
                  <span className="text-[10px] font-normal text-slate-500 mt-0.5">Squad ready in 1-2 weeks</span>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
