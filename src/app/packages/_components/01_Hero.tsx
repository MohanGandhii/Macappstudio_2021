"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import {
  FiCalendar,
  FiUsers,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiLayers
} from "react-icons/fi";

interface HeroProps {
  onPlayVideo: () => void;
}

export default function Hero({ onPlayVideo }: HeroProps) {
  const { openProposalModal } = useModal();
  return (
    <section className="relative py-16 lg:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="mx-auto px-4 md:px-8 max-w-[1380px] w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Content (Columns 1-6) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-6 lg:items-start lg:text-left">

            {/* Badge & Title */}
            <div className="order-1 lg:order-1 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[13px] font-bold mb-3 tracking-wide shadow-sm">
                <span className="animate-pulse">✨</span> Your Extended Product Team
              </div>

              {/* Title */}
              <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] font-black text-[#111] leading-[1.15] tracking-tight mb-0 lg:mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
                Every Great Product <br />
                Starts As An Idea. <br />
                <span className="text-[#0052FF]">
                  We Turn It Into Reality.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="order-2 lg:order-2 text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-[520px] mb-0 lg:mb-4 font-medium flex flex-col gap-3 w-full text-left">
              <p className="text-[#111] font-semibold">
                For founders, CTOs and enterprises that need to build faster without losing control.
              </p>
              <p className="text-gray-500 font-normal">
                MacAppStudio becomes your dedicated team of product experts, engineers, designers and R&D specialists—so you can focus on vision while we handle execution.
              </p>
            </div>

            {/* Stats/Badges Row */}
            <div className="order-3 lg:order-3 grid grid-cols-1 min-[360px]:grid-cols-2 lg:flex lg:flex-wrap gap-2.5 mb-0 lg:mb-5 w-full">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 px-2.5 py-2.5 lg:py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm w-full lg:w-auto">
                <FiClock className="text-blue-500 shrink-0" size={15} />
                <span className="whitespace-nowrap">Start in 1-2 Weeks</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 px-2.5 py-2.5 lg:py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm w-full lg:w-auto">
                <FiTrendingUp className="text-green-500 shrink-0" size={15} />
                <span className="whitespace-nowrap">Scale Anytime</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 px-2.5 py-2.5 lg:py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm w-full lg:w-auto">
                <FiShield className="text-purple-500 shrink-0" size={15} />
                <span className="whitespace-nowrap">100% Ownership</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 px-2.5 py-2.5 lg:py-1.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-700 shadow-sm w-full lg:w-auto">
                <FiLayers className="text-orange-500 shrink-0" size={15} />
                <span className="whitespace-nowrap">Weekly Updates</span>
              </div>
            </div>

            {/* CTA Buttons Box */}
            <div className="order-6 lg:order-4 flex flex-col sm:flex-row gap-3.5 w-full max-w-[520px] mb-0 lg:mb-6">

              {/* Book call button */}
              <button
                onClick={openProposalModal}
                className="flex-1 bg-[#0052FF] hover:bg-[#0041cc] text-white rounded-xl py-3 lg:py-2.5 px-4 flex items-center justify-center lg:justify-start gap-3.5 text-left transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/10 active:scale-95 border border-transparent w-full"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <FiCalendar size={18} />
                </div>
                <div>
                  <div className="text-[14px] font-bold leading-tight">Book Free Discovery Call</div>
                  <div className="text-[11px] text-blue-100 font-normal leading-normal mt-0.5">Free 30-min strategy session</div>
                </div>
              </button>

              {/* Build dream team button */}
              <button
                onClick={() => window.open("/contactus", "_self")}
                className="hidden sm:flex sm:invisible pointer-events-none flex-1 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200/80 rounded-xl py-2.5 px-4 items-center gap-3.5 text-left transition-all hover:scale-[1.02] shadow-sm active:scale-95 w-full"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#0052FF]">
                  <FiUsers size={18} />
                </div>
                <div>
                  <div className="text-[14px] font-bold leading-tight">Build My Dream Team</div>
                  <div className="text-[11px] text-gray-500 font-normal leading-normal mt-0.5">Start building in 1-2 weeks</div>
                </div>
              </button>

            </div>

            {/* Partner Logos Section */}
            <div className="order-4 lg:order-5 w-full mb-0 text-center lg:text-left">
              <p className="text-[13px] md:text-[14px] text-[#475569] font-medium mb-3">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 md:gap-x-5 gap-y-3">
                <div className="h-5 w-20 sm:h-6 sm:w-24 md:h-7 md:w-28 relative">
                  <Image
                    src="/assets/images/resources/hero/dailmer.png"
                    alt="Daimler Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 relative">
                  <Image
                    src="/assets/images/resources/hero/jio.png"
                    alt="Jio Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="h-5 w-12 sm:h-6 sm:w-14 md:h-7 md:w-16 relative">
                  <Image
                    src="/assets/images/resources/hero/intel.png"
                    alt="Intel Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="h-5 w-12 sm:h-6 sm:w-14 md:h-7 md:w-16 relative">
                  <Image
                    src="/assets/images/resources/hero/paytm.png"
                    alt="Paytm Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="h-5 w-20 sm:h-6 sm:w-24 md:h-7 md:w-28 relative">
                  <Image
                    src="/assets/images/resources/hero/healthcare.png"
                    alt="Access Healthcare Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[12px] md:text-[13px] text-[#475569] font-medium whitespace-nowrap">and more...</span>
              </div>
            </div>

          </div>

          {/* Right Side: Mountain Graphic & Floating Cards (Columns 7-12) */}
          <div className="order-5 lg:order-last lg:col-span-6 w-full flex flex-col justify-center relative mb-0">

            {/* Main Graphic Box */}
            <div className="w-full aspect-square md:aspect-[1.2] max-w-[600px] mx-auto rounded-3xl overflow-hidden relative shadow-xl border border-gray-200/50 bg-white">

              {/* Winding mountain path image */}
              <Image
                src="/assets/images/resources/hero/mountain_vision.png"
                alt="Every Great Product starts as an Idea"
                fill
                className="object-contain"
                priority
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
