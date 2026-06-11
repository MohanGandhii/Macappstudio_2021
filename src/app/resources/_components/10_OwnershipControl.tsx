"use client";

import React from "react";
import Image from "next/image";

const ShieldCheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#4F46E5]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

export default function OwnershipControl() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 bg-white overflow-hidden isolate">



      <div className="max-w-[1380px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Content Column */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left relative z-10 lg:pr-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F5F7FF] border border-[#E0E7FF] text-[#4F46E5] font-extrabold text-[11px] md:text-[12px] tracking-[0.08em] uppercase select-none">
            <ShieldCheckIcon />
            <span>100% OWNERSHIP. COMPLETE CONTROL.</span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#0F172A] font-extrabold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.15] tracking-[-0.02em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Your Vision. Your Product.<br />
            <span className="relative inline-block text-[#0052FF] mt-2 pb-3">
              Your Control.
              {/* Curved Hand-Drawn Underline Highlight */}
              <svg
                className="absolute left-0 bottom-0 w-full h-[12px] text-[#0052FF]"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1.5 8C65 3.5 155 2 298.5 8.5C198 10 97.5 9 1.5 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#475569] text-[16px] md:text-[18px] leading-[1.7] font-medium max-w-[480px]">
            We believe in complete transparency and full ownership.
            You own everything. We simply help you build it
            faster, better and smarter.
          </p>
        </div>

        {/* Right Illustration Column */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end relative select-none isolate">
          {/* Main illustration frame */}
          <div className="relative w-full max-w-[800px] aspect-[1.54]">
            <Image
              src="/assets/images/resources/10/IMG_20260611_000006.png"
              alt="Ownership and Control Illustration"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
