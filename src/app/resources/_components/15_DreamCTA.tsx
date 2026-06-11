"use client";

import React from "react";
import Image from "next/image";

export default function DreamCTASection() {
  return (
    <section className="w-full py-8 px-4 bg-white">
      <div className="max-w-[1380px] mx-auto relative rounded-[20px] bg-gradient-to-r from-[#0F55FA] via-[#0C4EE0] to-[#0A3CB5] overflow-hidden shadow-[0_10px_35px_rgba(12,84,236,0.12)] min-h-[120px] lg:min-h-[140px] flex items-center">

        {/* ── BACKGROUND ILLUSTRATIONS (ABSOLUTE POSITIONED) ── */}

        {/* Left: Rocket Illustration (Dummy Path) - Commented out until asset is provided */}
        {/*
        <div className="hidden lg:block absolute bottom-0 left-0 w-[200px] h-[110%] select-none pointer-events-none z-10">
          <Image 
            src="/assets/images/resources/15/rocket.png"
            alt="Rocket illustration"
            fill
            className="object-contain object-bottom object-left"
            unoptimized
          />
        </div>
        */}

        {/* Right: Team Members Illustration */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-[300px] xl:w-[350px] h-[105%] select-none pointer-events-none z-10">
          <Image
            src="/assets/images/resources/15/IMG_20260611_000030.png"
            alt="Team members illustration"
            fill
            className="object-contain object-bottom object-right"
            unoptimized
          />
        </div>

        {/* ── CONTENT CONTAINER ── */}
        <div className="w-full relative z-20 py-4 px-5 md:px-8 lg:pl-[185px] lg:pr-[250px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* Left Text Block */}
          <div className="flex flex-col text-left max-w-[580px]">
            <h3
              className="text-white font-extrabold text-[20px] md:text-[23px] lg:text-[25px] tracking-tight leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Your Dream Is Closer Than You Think
            </h3>
            <p className="text-white/90 text-[13px] md:text-[13.5px] font-medium mt-1">
              Let's build the next big thing together.
            </p>

            {/* 4 Bullet Points (Horizontal Flex Row) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 border-t border-white/10 pt-3">
              {/* Item 1 */}
              <div className="flex items-center gap-1.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white/80 text-[10.5px] font-semibold leading-none whitespace-nowrap">
                  Free 30-min strategy call
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-1.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white/80 text-[10.5px] font-semibold leading-none whitespace-nowrap">
                  No obligation whatsoever
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-1.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-white/80 text-[10.5px] font-semibold leading-none whitespace-nowrap">
                  Actionable insights for your idea
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-1.5">
                <div className="w-[20px] h-[20px] rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                </div>
                <span className="text-white/80 text-[10.5px] font-semibold leading-none whitespace-nowrap">
                  Expert guidance given product ninjas
                </span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 mt-3 lg:mt-0">
            {/* Button 1 */}
            <button
              onClick={() => {
                const modalEvent = new CustomEvent("openVideoModal");
                window.dispatchEvent(modalEvent);
              }}
              className="bg-white hover:bg-white/95 text-[#0C54EC] text-left py-3 px-4 rounded-[12px] shadow-md transition-all hover:scale-[1.02] flex flex-col justify-center min-w-[190px] cursor-pointer"
            >
              <span className="font-extrabold text-[13.5px] tracking-tight">
                Book Free Discovery Call
              </span>
              <span className="text-[#0C54EC]/75 text-[10.5px] font-semibold mt-0.5">
                Free 30-min strategy session
              </span>
            </button>

            {/* Button 2 */}
            <button className="bg-white hover:bg-white/95 text-[#0C54EC] text-left py-3 px-4 rounded-[12px] shadow-md transition-all hover:scale-[1.02] flex flex-col justify-center min-w-[190px] cursor-pointer">
              <span className="font-extrabold text-[13.5px] tracking-tight">
                Build My Dream Team
              </span>
              <span className="text-[#0C54EC]/75 text-[10.5px] font-semibold mt-0.5">
                Start building in 1-2 weeks
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
