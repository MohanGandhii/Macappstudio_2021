"use client";

import React from "react";

export default function SeamlessIntegrationSection() {
  return (
    <section className="bg-white py-10 md:py-14 select-none">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="max-w-6xl mx-auto w-full bg-[#EBF2FE] rounded-[24px] md:rounded-[32px] py-10 px-8 md:py-12 md:px-16 text-center border border-[#D5E4FD] shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          <h3 
            className="text-[#1E2229] font-bold text-lg sm:text-[20px] md:text-[22px] tracking-tight mb-3 font-heading"
          >
            All roles work seamlessly with your existing team
          </h3>
          <p 
            className="text-[#5E6675] text-sm sm:text-base md:text-[15px] leading-relaxed font-normal opacity-95 max-w-3xl mx-auto font-sans"
          >
            Our extended team members integrate directly into your workflow, using your tools, processes,
            and communication channels for maximum efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
