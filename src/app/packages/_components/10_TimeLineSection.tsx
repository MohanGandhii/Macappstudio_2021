"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TimeLineSection() {
  const milestones = [
    {
      title: "Project Kickoff",
      amount: "20% payment",
      icon: "/packaged_assets/TimeLineSection/1.svg",
    },
    {
      title: "PRD and Design Sign Off",
      amount: "20% payment",
      icon: "/packaged_assets/TimeLineSection/2.svg",
    },
    {
      title: "Release 1",
      amount: "20% payment",
      icon: "/packaged_assets/TimeLineSection/3.svg",
    },
    {
      title: "Release 2",
      amount: "20% payment",
      icon: "/packaged_assets/TimeLineSection/4.svg",
    },
    {
      title: "Live",
      amount: "20% payment",
      icon: "/packaged_assets/TimeLineSection/5.svg",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none overflow-hidden relative">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight mb-4 font-heading"
          >
            Milestones Timeline
          </h2>
          <p 
            className="text-[#5E6675] text-[15px] sm:text-[16px] max-w-xl mx-auto font-normal leading-relaxed font-sans"
          >
            Get a great value and a world-class product with fully transparent, milestone-based releases.
          </p>
        </div>

        {/* Desktop Chronological Timeline Layout */}
        <div className="hidden md:flex justify-between items-start relative w-full mt-6 px-4">
          
          {/* Symmetrical Dashed Horizontal Connector Line */}
          <div className="absolute top-[38px] left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-[#E5E7EB] -z-10" />

          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="w-[18%] flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Icon Wrapper */}
              <div className="w-[76px] h-[76px] bg-white border border-[#E5E7EB] group-hover:border-[#0052FF] group-hover:shadow-[0_10px_25px_rgba(0,82,255,0.07)] rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={38}
                  height={38}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Milestone Title */}
              <h4 
                className="text-[#1E2229] font-bold text-[15px] sm:text-[16px] leading-snug mb-1.5 transition-colors group-hover:text-[#0052FF] font-heading"
              >
                {item.title}
              </h4>

              {/* Payment Allocation Label */}
              <span 
                className="text-[#0052FF] font-bold text-[12px] bg-[#EBF2FE] px-3.5 py-1 rounded-full uppercase tracking-wider font-heading"
              >
                {item.amount}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="flex md:hidden flex-col gap-10 relative pl-4 mt-4">
          
          {/* Symmetrical Dashed Vertical Connector Line */}
          <div className="absolute left-[38px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#E5E7EB] -z-10" />

          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-5 w-full text-left"
            >
              {/* Circular Icon Wrapper */}
              <div className="w-[52px] h-[52px] bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Details Column */}
              <div>
                <h4 
                  className="text-[#1E2229] font-bold text-[15px] leading-snug mb-1 font-heading"
                >
                  {item.title}
                </h4>
                <span 
                  className="text-[#0052FF] font-bold text-[11px] bg-[#EBF2FE] px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider font-heading"
                >
                  {item.amount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
