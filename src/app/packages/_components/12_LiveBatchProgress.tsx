"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LiveBatchProgress() {
  const slots = [
    {
      title: "Booked by JIO",
      filled: 100,
      total: 100,
      isAvailable: false,
      hasBadge: false,
    },
    {
      title: "Booked by TANEIRA",
      filled: 100,
      total: 100,
      isAvailable: false,
      hasBadge: false,
    },
    {
      title: "June Month Slots",
      filled: 63,
      total: 100,
      isAvailable: true,
      hasBadge: true,
    },
    {
      title: "July Month Slots",
      filled: 44,
      total: 100,
      isAvailable: true,
      hasBadge: true,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 select-none">
      <div className="max-w-[1360px] mx-auto px-6 w-full">
        
        {/* Spacious Rounded Container Wrapper with light-grey background (Perfect Top & Bottom spacing) */}
        <div className="bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] pt-14 pb-16 px-6 sm:px-12 md:px-16 border border-[#E5E7EB]/40 shadow-sm w-full max-w-[1200px] mx-auto relative overflow-hidden">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 
              className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight mb-3"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Live Batch Progress
            </h2>
            <p 
              className="text-[#5E6675] text-[14px] sm:text-[15px] font-bold opacity-90 tracking-wide"
              style={{ fontFamily: "'AvenirNextLTPro-Medium', 'AvenirNext-Medium', sans-serif" }}
            >
              Real-time updates • Last updated: Just now
            </p>
          </div>

          {/* Symmetrical Grid of Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {slots.map((slot, index) => {
              const fillPercentage = (slot.filled / slot.total) * 100;

              return (
                <div key={index} className="relative w-full">
                  
                  {/* Floating Overlapping "Filling Fast" Badge */}
                  {slot.hasBadge && (
                    <div className="absolute -top-3 left-6 z-10 bg-gradient-to-r from-[#FF2D55] to-[#FF9500] text-white text-[10px] font-bold px-3 py-0.5 rounded-[6px] shadow-md flex items-center gap-1 uppercase tracking-wider">
                      <span>⚡</span>
                      <span>Filling Fast</span>
                    </div>
                  )}

                  {/* Sleek, Horizontally Stretched Card Container */}
                  <motion.div
                    whileHover={{ scale: slot.isAvailable ? 1.005 : 1 }}
                    className="bg-white border border-[#E5E7EB] rounded-[20px] py-5 px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative overflow-hidden"
                  >
                    
                    {/* Left Column: Progress details & sleek Progress Bar */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2.5">
                        <span 
                          className="text-[#1E2229] font-bold text-[15px] sm:text-[16px]"
                          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                        >
                          {slot.title}
                        </span>
                        <span 
                          className="text-[#4CD964] font-bold text-[13px] sm:text-[14px]"
                          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                        >
                          {slot.filled}/{slot.total} filled
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${fillPercentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-[#4CD964] rounded-full"
                        />
                      </div>
                    </div>

                    {/* Symmetrical Vertical Separator */}
                    <div className="hidden sm:block w-[1px] bg-gray-100 self-stretch mx-2" />

                    {/* Right Column: CTA Buttons */}
                    <div className="shrink-0 min-w-[140px] sm:min-w-[160px] flex items-center justify-center">
                      {slot.isAvailable ? (
                        <button 
                          className="w-full bg-[#4CD964] hover:bg-[#43c45a] active:scale-[0.985] text-white font-bold py-3 px-4 rounded-xl transition-all tracking-wide text-[13.5px] shadow-sm hover:shadow cursor-pointer text-center"
                          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                        >
                          Book Your Slot
                        </button>
                      ) : (
                        <button 
                          disabled
                          className="w-full bg-[#8E8E93] text-white font-bold py-3 px-4 rounded-xl cursor-not-allowed select-none text-[13.5px] text-center"
                          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                        >
                          Slot not Available
                        </button>
                      )}
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
