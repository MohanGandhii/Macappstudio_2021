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
        <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#F5F7FF] border border-[#E0E7FF] text-[#4F46E5] font-extrabold text-[11px] md:text-[12px] tracking-[0.08em] uppercase select-none">
            <ShieldCheckIcon />
            <span>100% Ownership. Complete Control.</span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#0F172A] font-extrabold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.15] tracking-[-0.02em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Your Vision. Your Product.<br />
            <span className="relative inline-block text-[#0052FF] mt-1.5 pb-2">
              Your Control.
              {/* Curved Hand-Drawn Underline Highlight */}
              <svg
                className="absolute left-0 bottom-0 w-full h-[10px] text-[#0052FF]"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1.5 6C65 2.5 155 1.5 298.5 7.5C198 8.5 97.5 7.5 1.5 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#475569] text-[15.5px] md:text-[17px] leading-[1.7] font-medium max-w-[480px]">
            We believe in complete transparency and full ownership.
            You own everything. We simply help you build it
            faster, better and smarter.
          </p>
        </div>

        {/* Right Illustration Column */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end relative select-none isolate">
          {/* Soft lavender background wash — not a circle, wide rounded rectangle */}
          <div className="absolute right-[-5%] top-[5%] w-[95%] h-[90%] rounded-[40px] bg-gradient-to-br from-[#EEF2FF] via-[#F0F3FF] to-[#F8F9FF] -z-10" />


          {/* Main illustration frame */}
          <div className="relative w-full max-w-[680px] aspect-square">
            <Image
              src="/assets/images/resources/10/image 1884 (2).png"
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
