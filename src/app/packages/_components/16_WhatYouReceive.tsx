"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Phone, BarChart2, Eye } from "lucide-react";

export default function WhatYouReceive() {
  const items = [
    {
      id: "progress-reports",
      title: "Weekly Progress Reports",
      description: "Detailed updates on project advancement and team performance",
      icon: FileText,
      iconColor: "text-[#0052FF]", // Vibrant Blue
    },
    {
      id: "weekly-calls",
      title: "Weekly Calls",
      description: "Regular communication to ensure alignment and address concerns",
      icon: Phone,
      iconColor: "text-[#4CD964]", // Vibrant Green
    },
    {
      id: "task-dashboard",
      title: "Task Dashboard",
      description: "Real-time visibility into project status and task completion",
      icon: BarChart2,
      iconColor: "text-[#9254DE]", // Vibrant Purple/Violet
    },
    {
      id: "milestone-reviews",
      title: "Milestone Reviews",
      description: "Comprehensive evaluation of project phases and deliverables",
      icon: Eye,
      iconColor: "text-[#FF9500]", // Vibrant Orange
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 select-none overflow-hidden" id="what-you-receive">
      <div className="max-w-[1360px] mx-auto px-6 w-full">
        
        {/* Large Rounded Content Container with Soft Blue-Gray Background */}
        <div 
          className="bg-[#F5F8FF] border border-gray-100 rounded-[36px] md:rounded-[48px] py-16 px-8 sm:px-12 md:py-20 md:px-16 flex flex-col items-center w-full shadow-[0_12px_40px_rgba(0,0,0,0.01)]"
        >
          
          {/* Component Title */}
          <h2 
            className="text-[#1E2229] font-bold text-2xl sm:text-3xl md:text-[34px] tracking-tight text-center mb-14 md:mb-20 font-heading"
          >
            What You'll Receive
          </h2>

          {/* Centered flat grid list (no card boxes, matching mockup) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-8 w-full max-w-[1140px] mx-auto">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Clean, simple icon placement - matching flat mockup style */}
                  <div className="mb-5 shrink-0 transition-transform duration-300 group-hover:scale-115">
                    <IconComponent className={`w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] ${item.iconColor} stroke-[1.75px]`} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#1E2229] font-bold text-[18px] sm:text-[20px] tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-[#0052FF] font-heading"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#5E6675] text-[13.5px] sm:text-[14.5px] leading-relaxed font-normal max-w-[240px] mx-auto font-sans"
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
