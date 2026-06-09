"use client";

import React from "react";
import { 
  FiTrendingUp, 
  FiSettings, 
  FiBox, 
  FiUsers, 
  FiShield 
} from "react-icons/fi";

export default function WhyHireUs() {
  const items = [
    {
      icon: <FiTrendingUp size={20} />,
      text: "Move Faster than internal teams",
      bgColor: "bg-blue-50/70",
      textColor: "text-blue-600",
    },
    {
      icon: <FiSettings className="animate-spin-slow" size={20} />,
      text: "Specialized expertise on demand",
      bgColor: "bg-purple-50/70",
      textColor: "text-purple-600",
    },
    {
      icon: <FiBox size={20} />,
      text: "R&D / Innovation partner",
      bgColor: "bg-indigo-50/70",
      textColor: "text-indigo-600",
    },
    {
      icon: <FiUsers size={20} />,
      text: "Dedicated squads for critical initiatives",
      bgColor: "bg-emerald-50/70",
      textColor: "text-emerald-600",
    },
    {
      icon: <FiShield size={20} />,
      text: "Reduce risk & deliver with confidence",
      bgColor: "bg-teal-50/70",
      textColor: "text-teal-600",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Bordered card container */}
        <div className="w-full bg-[#FAF9F6] border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          
          {/* Left Title Column */}
          <div className="w-full lg:w-[25%] flex flex-col justify-center text-left lg:pr-8">
            <h3 
              className="text-[18px] md:text-[20px] font-bold text-[#111] leading-tight mb-2"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Why Do Even Large Companies Hire Us?
            </h3>
            <p className="text-[13px] text-gray-500 leading-normal font-normal">
              Because building products isn&apos;t just a developer problem. It&apos;s an execution, speed, innovation and focus problem.
            </p>
          </div>

          {/* Vertical divider line for desktop */}
          <div className="hidden lg:block w-[1px] bg-gray-200/60 my-2" />

          {/* Right Metrics Grid/Flex Column */}
          <div className="w-full lg:w-[75%] flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch lg:pl-8 gap-y-6 sm:gap-y-8 lg:gap-y-0">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {/* Metric Item */}
                <div className="flex-1 flex items-center gap-4 text-left px-2 sm:px-4 min-w-[200px] lg:min-w-0">
                  
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.bgColor} ${item.textColor}`}>
                    {item.icon}
                  </div>

                  {/* Text */}
                  <span className="text-[13px] font-semibold text-gray-700 leading-snug">
                    {item.text}
                  </span>

                </div>

                {/* Divider between items (hidden on last item, hidden on mobile/tablet wrap if not lg) */}
                {index < items.length - 1 && (
                  <div className="hidden lg:block w-[1px] bg-gray-200/50 my-4 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
