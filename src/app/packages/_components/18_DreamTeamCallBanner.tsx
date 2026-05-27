"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function DreamTeamCallBanner() {
  const { openProposalModal } = useModal();
  const highlights = [
    "2-week deployment",
    "30-day flexibility",
    "Trusted by Daimler, Jio, Intel",
  ];

  return (
    <section className="bg-white py-16 md:py-20 select-none overflow-hidden" id="dream-team-banner">
      <div className="max-w-[1360px] mx-auto px-6 w-full">
        
        {/* Banner Container with rounded corners and glassmorphism borders */}
        <div 
          className="bg-white/30 backdrop-blur-md border border-gray-200/60 rounded-[36px] md:rounded-[48px] p-6 sm:p-16 md:py-20 md:px-20 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.015)] w-full"
        >
          {/* ========================================================================= */}
          {/* HIGH-FIDELITY CSS GLOW MESH BACKGROUND CIRCLES (Vibrant & Saturated)      */}
          {/* ========================================================================= */}
          {/* Saturated Left Orange-Red Glow */}
          <div className="absolute -left-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-[#FF5500] opacity-40 blur-[85px] pointer-events-none z-0" />
          
          {/* Saturated Left Hot Pink Glow */}
          <div className="absolute -left-28 top-0 w-[340px] h-[340px] rounded-full bg-[#FF0055] opacity-25 blur-[85px] pointer-events-none z-0" />
          
          {/* Saturated Right Electric Cyan Glow */}
          <div className="absolute right-[12%] -bottom-28 w-[480px] h-[480px] rounded-full bg-[#00E5FF] opacity-45 blur-[105px] pointer-events-none z-0" />
          
          {/* Saturated Far Right/Bottom-Right Deep Purple Glow */}
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-[#7A00FF] opacity-45 blur-[85px] pointer-events-none z-0" />
          
          {/* Saturated Right-Top Cobalt Blue Glow */}
          <div className="absolute right-4 top-0 w-[340px] h-[340px] rounded-full bg-[#0052FF] opacity-25 blur-[75px] pointer-events-none z-0" />

          {/* ========================================================================= */}
          {/* BANNER CONTENT                                                            */}
          {/* ========================================================================= */}
          
          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-8 z-10 max-w-4xl mx-auto"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Your Dream Team Is <br className="sm:hidden" /> One Call Away.
          </motion.h2>

          {/* Bullet Highlight Features Row (Flat checkmarks without circular wrappers) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mb-10 md:mb-12 z-10 w-full flex-wrap"
          >
            {highlights.map((text, index) => (
              <div key={index} className="flex items-center gap-2.5">
                {/* Flat, bold checkmark vector directly inline */}
                <Check className="w-[18px] h-[18px] text-[#22C55E] stroke-[3.5px] shrink-0" />
                {/* Feature Text */}
                <span 
                  className="text-[#1E2229] font-bold text-[14.5px] sm:text-[15.5px] tracking-wide"
                  style={{ fontFamily: "'AvenirNextLTPro-Medium', 'AvenirNext-Medium', sans-serif" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons Row (Solid white backing for secondary button to prevent glow bleed-through) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center z-10 w-full max-w-md"
          >
            <motion.button
              onClick={openProposalModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0052FF] text-white hover:bg-[#1e60eb] py-4 px-8 rounded-full font-bold text-[15px] sm:text-[16px] tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 w-full sm:w-auto z-10"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              <span>Book Your Slot Today</span>
              <ArrowRight size={18} className="stroke-[2.5px]" />
            </motion.button>

            <Link href="/contactus" className="w-full sm:w-auto z-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white hover:bg-gray-50 text-[#1E2229] border border-[#1E2229] py-4 px-8 rounded-full font-bold text-[15px] sm:text-[16px] tracking-wide shadow-sm flex items-center justify-center cursor-pointer transition-all duration-300 w-full sm:w-auto"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                Schedule a Call
              </motion.button>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
