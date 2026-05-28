"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Check, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  BarChart3 
} from "lucide-react";

export default function ComparisonSection() {
  const problems = [
    {
      title: "Time Consuming",
      description: "3-6 months for hiring, onboarding & notice periods",
      icon: Clock,
    },
    {
      title: "High Overhead",
      description: "HR costs, payroll management, and retention challenges",
      icon: DollarSign,
    },
    {
      title: "Fixed Costs",
      description: "High expenses even when projects slow down",
      icon: TrendingUp,
    },
  ];

  const solutions = [
    {
      title: "Fast Deployment",
      description: "Get your team ready in just 1-2 weeks with pre-vetted professionals.",
      icon: Zap,
    },
    {
      title: "Fully Managed",
      description: "Complete accountability and management handled for you.",
      icon: CheckCircle,
    },
    {
      title: "Scalable Growth",
      description: "Easily scale your team as your project requirements evolve.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Main Grid Layout for Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-full mx-auto">
          
          {/* Left Column: The Problem */}
          <div className="flex flex-col items-center w-full">
            {/* Header Container (Fixed height on desktop to keep cards perfectly aligned) */}
            <div className="flex flex-col items-center justify-end w-full lg:h-[140px] mb-8">
              {/* Header Badge */}
              <div className="flex mb-4 justify-center">
                <span className="inline-flex items-center gap-1.5 bg-[#FFF0F0] text-[#EF4444] text-[12px] sm:text-[13px] font-bold px-5 py-2 rounded-full tracking-wide">
                  <AlertTriangle size={14} className="stroke-[2.5px] text-[#EF4444]" />
                  The Problem
                </span>
              </div>

              {/* Title */}
              <h2 
                className="text-[#1E2229] font-bold text-[22px] sm:text-[26px] md:text-[30px] tracking-tight leading-tight text-center font-heading"
              >
                The Problem with In-House Hiring
              </h2>
            </div>

            {/* Cards List */}
            <div className="flex flex-col gap-5 w-full">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full bg-[#FFF9F9] border border-[#FFE5E5] rounded-[24px] py-5 px-4 sm:p-6 md:py-6 md:px-8 flex items-start sm:items-center gap-3.5 sm:gap-4 hover:shadow-sm transition-all text-left min-h-[90px]"
                >
                  {/* Icon container */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#FFE4E4] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <item.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[#EF4444] stroke-[2px]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 
                      className="text-[#1E2229] font-bold text-[16px] sm:text-[17px] md:text-[18px] tracking-tight mb-1 font-heading"
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-[#5E6675] text-[12.5px] sm:text-[13px] md:text-[14px] leading-relaxed font-normal opacity-90 font-sans"
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Our Solution */}
          <div className="flex flex-col items-center w-full">
            {/* Header Container (Fixed height on desktop to keep cards perfectly aligned) */}
            <div className="flex flex-col items-center justify-end w-full lg:h-[140px] mb-8">
              {/* Header Badge */}
              <div className="flex mb-4 justify-center">
                <span className="inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#10B981] text-[12px] sm:text-[13px] font-bold px-5 py-2 rounded-full tracking-wide">
                  <Check size={14} className="stroke-[3px] text-[#10B981]" />
                  Our Solution
                </span>
              </div>

              {/* Title */}
              <h2 
                className="text-[#1E2229] font-bold text-[22px] sm:text-[26px] md:text-[30px] tracking-tight leading-tight text-center font-heading"
              >
                Ready-to-Go <span className="text-[#0052FF]">Extended Teams</span>
              </h2>
            </div>

            {/* Cards List */}
            <div className="flex flex-col gap-5 w-full">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full bg-[#F3FAF5] border border-[#D1FAE5] rounded-[24px] py-5 px-4 sm:p-6 md:py-6 md:px-8 flex items-start sm:items-center gap-3.5 sm:gap-4 hover:shadow-sm transition-all text-left min-h-[90px]"
                >
                  {/* Icon container */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#D1FAE5] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <item.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[#10B981] stroke-[2px]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 
                      className="text-[#1E2229] font-bold text-[16px] sm:text-[17px] md:text-[18px] tracking-tight mb-1 font-heading"
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-[#5E6675] text-[12.5px] sm:text-[13px] md:text-[14px] leading-relaxed font-normal opacity-90 font-sans"
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
