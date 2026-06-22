"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DreamTeamSection() {
  const cards = [
    {
      id: "start-weeks",
      title: "Start in 1-2 Weeks",
      description: "Get your project moving immediately",
      bgClass: "bg-[#FFF2F2]",
      borderClass: "border-[#FECACA]",
      hoverShadow: "hover:shadow-[0_24px_60px_rgba(239,68,68,0.12)]",
      icon: (
        <svg width="76" height="76" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#EF4444] mb-6">
          {/* Calendar base */}
          <rect x="6" y="12" width="52" height="44" rx="10" stroke="currentColor" strokeWidth="3.5" fill="none" />
          <path d="M6 24H58" stroke="currentColor" strokeWidth="3.5" />
          {/* 5 top binder ring hooks */}
          <path d="M14 6V14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M23 6V14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M32 6V14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M41 6V14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 6V14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Small binder hole circle on top right page */}
          <circle cx="48" cy="30" r="2.5" stroke="currentColor" strokeWidth="2.5" fill="none" />
          {/* Bold "1" */}
          <text x="32" y="49" textAnchor="middle" fill="currentColor" fontSize="23" fontWeight="900" fontFamily="CircularStd-Bold, system-ui, sans-serif">1</text>
        </svg>
      ),
    },
    {
      id: "transparency",
      title: "Complete Transparency",
      description: "Full tracking and reporting visibility",
      bgClass: "bg-[#EFF6FF]",
      borderClass: "border-[#BFDBFE]",
      hoverShadow: "hover:shadow-[0_24px_60px_rgba(59,130,246,0.12)]",
      icon: (
        <svg width="76" height="76" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3B82F6] mb-6">
          {/* Eye outline */}
          <path d="M6 32C14 16 50 16 58 32C50 48 14 48 6 32Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" fill="none" />
          {/* Top and Bottom Radiating Rays */}
          <path d="M32 10V5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 16L52 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 16L12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 54V59" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 48L52 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 48L12 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Inner checkmark and circle */}
          <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M28 32.5L30.5 35L35.5 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "scale-anytime",
      title: "Scale Anytime",
      description: "Adjust team size as needed",
      bgClass: "bg-[#FAF5FF]",
      borderClass: "border-[#E9D5FF]",
      hoverShadow: "hover:shadow-[0_24px_60px_rgba(139,92,246,0.12)]",
      icon: (
        <svg width="76" height="76" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B5CF6] mb-6">
          {/* Center Circle with 24 */}
          <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="3.5" fill="none" />
          <text x="32" y="36.5" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="900" fontFamily="CircularStd-Bold, system-ui, sans-serif">24</text>
          
          {/* Curved scale tracks */}
          <path d="M22 32C22 20 26 13 36 13" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M22 28V36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M17 24L22 17L27 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          
          <path d="M42 32C42 44 38 51 28 51" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M42 36V28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M37 40L42 47L47 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "peace-mind",
      title: "Peace of Mind",
      description: "Notice period flexibility + instant replacements",
      bgClass: "bg-[#ECFDF5]",
      borderClass: "border-[#A7F3D0]",
      hoverShadow: "hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)]",
      icon: (
        <svg width="76" height="76" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#10B981] mb-6">
          {/* Supportive Hands holding smiley */}
          <circle cx="32" cy="21" r="9.5" stroke="currentColor" strokeWidth="3.5" fill="none" />
          <circle cx="28.5" cy="19" r="1.5" fill="currentColor" />
          <circle cx="35.5" cy="19" r="1.5" fill="currentColor" />
          <path d="M28 23.5C29.5 25.5 30.5 26 32 26C33.5 26 34.5 25.5 36 23.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Hands with realistic fingers cradling face */}
          <path d="M20 45C16 39 17.5 31 20 28C21 26.5 22.5 27 23 29C24 32 25.5 37 26.5 41" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M15 43C13.5 39 15 34 17 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M21.5 48C20 52 22 54 25 54C29 54 31.5 50 31.5 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          <path d="M45 44C49 38 46.5 31 44 28C43 26.5 41.5 27 41 29C40 32 38.5 37 37.5 41" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M49 43C50.5 39 49 34 47 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M42.5 48C44 52 42 54 39 54C35 54 32.5 50 32.5 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none overflow-hidden" id="dream-team">
      <div className="max-w-[1360px] mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight mb-3 font-heading"
          >
            Your Dream Deserves the Right Team
          </h2>
          <p 
            className="text-[#5E6675] text-[15.5px] sm:text-[16.5px] font-normal mb-8 leading-relaxed text-center font-heading"
          >
            Book your slot today & start building in 2 weeks
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0052FF] text-white hover:bg-[#1e60eb] py-4 px-8 rounded-full font-bold text-[15px] sm:text-[16px] tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 w-full sm:w-auto font-heading"
            >
              <span>Book Your Slot Today</span>
              <ArrowRight size={18} className="stroke-[2.5px]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#1E2229] border border-gray-200 hover:bg-gray-50 py-4 px-8 rounded-full font-bold text-[15px] sm:text-[16px] tracking-wide shadow-sm flex items-center justify-center cursor-pointer transition-all duration-300 w-full sm:w-auto font-heading"
            >
              Schedule a Call
            </motion.button>
          </div>
        </div>

        {/* 2x2 Grid of Saturated Color Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`${card.bgClass} border ${card.borderClass} rounded-[32px] p-10 sm:p-12 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.01)] ${card.hoverShadow} transition-all duration-300 min-h-[290px]`}
            >
              {/* Custom High-Fidelity SVG Icon Container */}
              <div className="shrink-0 transition-transform duration-300 hover:scale-105">
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[#1E2229] font-bold text-[20px] sm:text-[22px] tracking-tight mb-2.5 font-heading"
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#5E6675] text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-[320px] mx-auto font-sans"
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
