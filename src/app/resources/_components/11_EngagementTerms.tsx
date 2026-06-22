"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EngagementTerms() {
  const cards = [
    {
      title: "Advance Payment",
      description: "Secures your dedicated team slot immediately",
      icon: "/packaged_assets/FlexibleEngagementTerms/Icon.svg",
      iconBg: "bg-[#EBF2FE]", // Soft blue tint
    },
    {
      title: "30 Days Notice",
      description: "Complete flexibility to scale or adjust as needed",
      icon: "/packaged_assets/FlexibleEngagementTerms/Icon (1).svg",
      iconBg: "bg-[#F5EBFC]", // Soft purple tint
    },
    {
      title: "Milestone",
      description: "Celebrate project wins and achievements together",
      icon: "/packaged_assets/FlexibleEngagementTerms/Icon (2).svg",
      iconBg: "bg-[#EBFCEF]", // Soft green tint
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none flex flex-col items-center">
      <div className="max-w-[1360px] mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight font-heading"
          >
            Flexible Engagement Terms
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 min-h-[280px]"
            >
              
              {/* Premium Icon Container with soft background tint */}
              <div className={`w-20 h-20 ${card.iconBg} rounded-[22px] flex items-center justify-center mb-6 shrink-0`}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* Card Title */}
              <h3 
                className="text-[#1E2229] font-bold text-[18px] sm:text-[20px] tracking-tight mb-2.5 font-heading"
              >
                {card.title}
              </h3>

              {/* Card Description */}
              <p 
                className="text-[#5E6675] text-[14px] sm:text-[15px] leading-relaxed max-w-[240px] font-sans"
              >
                {card.description}
              </p>

            </motion.div>
          ))}
        </div>

        {/* Start Building Today CTA Button */}
        <motion.div 
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.985 }}
          className="mt-4"
        >
          <button 
            className="bg-[#0052FF] text-white font-bold py-4 px-8 rounded-full hover:bg-[#1e60eb] transition-all text-[15px] sm:text-[16px] tracking-wide shadow-md flex items-center gap-2.5 cursor-pointer font-heading"
          >
            <span>Start Building Today</span>
            <ArrowRight size={18} className="stroke-[2.5px]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
