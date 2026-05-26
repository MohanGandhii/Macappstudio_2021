"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SlotSelection() {
  const slots = [
    { number: "11", isBooked: true },
    { number: "12", isBooked: true },
    { number: "13", isBooked: false },
    { number: "14", isBooked: false },
    { number: "14", isBooked: false }, // matching the duplicate "Team - 14" exactly!
    { number: "15", isBooked: false },
    { number: "16", isBooked: false },
    { number: "17", isBooked: false },
  ];

  return (
    <section className="bg-white py-16 md:py-24 select-none flex flex-col items-center">
      <div className="max-w-[1360px] mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Centered Top Availability Legend */}
        <div 
          className="flex items-center justify-center gap-8 mb-10 text-[14.5px] sm:text-[15.5px] font-bold text-[#5E6675]"
          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4CD964]" />
            <span>Available: 90</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8E8E93]" />
            <span>Booked: 10</span>
          </div>
        </div>

        {/* Wide Rectangular Cards Row (Stretched Left-to-Right matching Image 2) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full max-w-[1300px] mx-auto mb-10">
          {slots.map((slot, index) => (
            <motion.div
              key={index}
              whileHover={!slot.isBooked ? { y: -3 } : {}}
              className={`rounded-[18px] py-4 px-3 flex flex-col items-center justify-center text-center border-[1.5px] transition-all duration-300 min-h-[96px] ${
                slot.isBooked
                  ? "bg-[#F5F5FA] border-[#C0C2D3]"
                  : "bg-[#F0FBF5] border-[#4CD964] hover:shadow-[0_6px_18px_rgba(76,217,100,0.06)] cursor-pointer"
              }`}
            >
              
              {/* Team Label */}
              <span 
                className="text-[#1E2229] font-bold text-[15px] sm:text-[16px] mb-1"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                Team - {slot.number}
              </span>

              {/* Status Booking Label */}
              <span 
                className={`text-[12.5px] sm:text-[13.5px] font-bold ${
                  slot.isBooked ? "text-[#8E8E93]" : "text-[#4CD964]"
                }`}
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                {slot.isBooked ? "Book" : "Book"}
              </span>

            </motion.div>
          ))}
        </div>

        {/* Secure Slot CTA Button */}
        <motion.div 
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.985 }}
          className="mb-5"
        >
          <button 
            className="bg-[#4CD964] hover:bg-[#43c45a] active:scale-[0.985] text-white font-bold py-4 px-8 rounded-full transition-all text-[15px] sm:text-[16px] tracking-wide shadow-md flex items-center gap-2.5 cursor-pointer"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            <span>Secure My Dream Team Slot Now</span>
            <ArrowRight size={18} className="stroke-[2.5px]" />
          </button>
        </motion.div>

        {/* Bottom Alert Text */}
        <p 
          className="text-[#5E6675] text-[13px] sm:text-[14px] font-semibold opacity-90 tracking-wide text-center"
          style={{ fontFamily: "'AvenirNextLTPro-Medium', 'AvenirNext-Medium', sans-serif" }}
        >
          Limited slots available • First-come, first-served
        </p>

      </div>
    </section>
  );
}
