"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Calendar, Trophy, Clock } from "lucide-react";

export default function YourJourney() {
  const steps = [
    {
      id: "advance-payment",
      title: "Advance Payment",
      highlight: "50% secures your team slot",
      description:
        "Make your advance payment to immediately secure your dedicated team slot and begin the onboarding process.",
      icon: CreditCard,
      iconColor: "text-[#9254DE]", // Vibrant Purple icon
      iconBgBg: "bg-[#F3EBF9]",      // Soft solid Purple background
    },
    {
      id: "weekly-updates",
      title: "Weekly Updates",
      highlight: "Reports & calls for transparency",
      description:
        "Receive detailed weekly progress reports and participate in regular calls to ensure complete project transparency.",
      icon: Calendar,
      iconColor: "text-[#597EF7]", // Vibrant Indigo icon
      iconBgBg: "bg-[#ECEBFC]",      // Soft solid Indigo background
    },
    {
      id: "milestone-reviews",
      title: "Milestone Reviews",
      highlight: "Celebrate achievements with bonuses",
      description:
        "Comprehensive evaluation of project phases and deliverables, with milestone bonuses for exceptional performance.",
      icon: Trophy,
      iconColor: "text-[#2F54EB]", // Vibrant Blue icon
      iconBgBg: "bg-[#EBF2FE]",      // Soft solid Blue background
    },
    {
      id: "30-days-notice",
      title: "30 Days Notice",
      highlight: "Complete flexibility to adjust",
      description:
        "Scale your team up or down with just 30 days notice. Complete flexibility for your changing needs.",
      icon: Clock,
      iconColor: "text-[#13C2C2]", // Vibrant Teal icon
      iconBgBg: "bg-[#E6F9FC]",      // Soft solid Teal background
    },
  ];

  return (
    <section 
      className="bg-white py-16 md:py-24 border-t border-gray-50 select-none overflow-hidden relative" 
      id="your-journey"
    >
      <div className="max-w-[1360px] mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight mb-4 font-heading"
          >
            Your Journey with Us
          </h2>
          <p 
            className="text-[#5E6675] text-[15px] sm:text-[16px] max-w-xl mx-auto font-normal leading-relaxed font-sans"
          >
            From securing your team to celebrating milestones, here's how we work together to bring your vision to life.
          </p>
        </div>

        {/* Journey Timeline Wrapper */}
        <div className="relative w-full max-w-[1240px] mx-auto">
          
          {/* ========================================================================= */}
          {/* DESKTOP LAYOUT (Horizontal Grid with Connected Line in Middle)            */}
          {/* ========================================================================= */}
          <div className="hidden lg:block relative w-full">
            {/* Desktop Horizontal Connecting Gradient Line (Perfectly centered vertically behind cards) */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2.5px] bg-gradient-to-r from-[#B37FEB] via-[#5C7CFA] to-[#339AF0] z-0 opacity-100" 
            />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="bg-[#F7F8FA] border border-gray-100/70 rounded-[28px] p-8 flex flex-col items-start shadow-[0_12px_30px_rgba(0,0,0,0.025)] hover:bg-white hover:border-gray-200/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.07)] transition-all duration-300 group min-h-[300px] relative z-10"
                  >
                    {/* Icon Container inside the card - Solid Soft Color Background */}
                    <div className={`w-14 h-14 rounded-2xl ${step.iconBgBg} flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.015)]`}>
                      <IconComponent className={`w-6 h-6 ${step.iconColor}`} />
                    </div>

                    {/* Card Title */}
                    <h3
                      className="text-[#1E2229] font-bold text-[20px] tracking-tight mb-1 font-heading"
                    >
                      {step.title}
                    </h3>

                    {/* Step Highlight Text */}
                    <span
                      className="text-[#0052FF] font-semibold text-[13.5px] mb-3 inline-block font-heading"
                    >
                      {step.highlight}
                    </span>

                    {/* Description */}
                    <p
                      className="text-[#5E6675] text-[13.5px] leading-relaxed font-normal font-sans"
                    >
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE & TABLET LAYOUT (Vertical Timeline Track)                          */}
          {/* ========================================================================= */}
          <div className="block lg:hidden relative w-full px-2 sm:px-6">
            {/* Mobile Vertical Gradient Timeline Line (Centered perfectly behind 52px icons) */}
            <div 
              className="absolute left-[34px] sm:left-[52px] top-6 bottom-6 w-[2.5px] bg-gradient-to-b from-[#B37FEB] via-[#5C7CFA] to-[#339AF0] z-0 opacity-100" 
            />

            <div className="flex flex-col gap-10 relative z-10 w-full">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 sm:gap-8 items-start relative z-10 w-full"
                  >
                    {/* Icon Container overlapping the line track - Solid Soft Color Background */}
                    <div 
                      className={`w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-2xl ${step.iconBgBg} flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.02)] z-10`}
                    >
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${step.iconColor}`} />
                    </div>

                    {/* Content Card */}
                    <div 
                      className="bg-[#F7F8FA] border border-gray-100/70 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex-1 shadow-[0_10px_25px_rgba(0,0,0,0.025)] hover:bg-white hover:border-gray-200/50 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-300"
                    >
                      {/* Card Title */}
                      <h3
                        className="text-[#1E2229] font-bold text-[18px] sm:text-[20px] mb-0.5 font-heading"
                      >
                        {step.title}
                      </h3>

                      {/* Step Highlight Text */}
                      <span
                        className="text-[#0052FF] font-semibold text-[13px] sm:text-[14px] mb-2.5 inline-block font-heading"
                      >
                        {step.highlight}
                      </span>

                      {/* Description */}
                      <p
                        className="text-[#5E6675] text-[13px] sm:text-[14px] leading-relaxed font-normal font-sans"
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
