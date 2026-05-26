"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamLimitSection() {
  const logos = [
    { name: "Taneira", src: "/packaged_assets/TeamLimitSection/1.svg" },
    { name: "Jio", src: "/packaged_assets/TeamLimitSection/2.svg" },
    { name: "Power Soaps", src: "/packaged_assets/TeamLimitSection/3.svg" },
    { name: "Addison", src: "/packaged_assets/TeamLimitSection/4.svg" },
    { name: "NiMera", src: "/packaged_assets/TeamLimitSection/5.svg" },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100/60 select-none">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-3"
          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
        >
          When have team of 100 People
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#5E6675] text-sm sm:text-base md:text-[17px] font-medium tracking-wide mb-14 opacity-90"
          style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
        >
          We have limited team, Kindly book your slot
        </p>

        {/* Logo Container Grid */}
        <div className="flex flex-nowrap items-center justify-between sm:justify-center gap-4 sm:gap-10 md:gap-16 lg:gap-20 mt-4 max-w-5xl mx-auto overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-[90px] h-[40px] sm:w-[130px] sm:h-[50px] md:w-[160px] md:h-[60px] flex-shrink-0 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="(max-width: 768px) 90px, 160px"
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
