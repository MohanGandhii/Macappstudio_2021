"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Users2, Zap } from "lucide-react";

export default function RolesSection() {
  const cards = [
    {
      title: "Core Development",
      description: "Essential team members for your project foundation",
      icon: Code2,
      gradient: "from-[#4F46E5] to-[#3B82F6]", // Indigo to Blue gradient
      pills: [
        "QA Engineer",
        "UI/UX Designer",
        "Project Manager",
        "iOS Developer",
        "Android Developer",
        "Web Developer",
      ],
    },
    {
      title: "Specialized Roles",
      description: "Expert professionals for advanced requirements",
      icon: Users2,
      gradient: "from-[#A855F7] to-[#EC4899]", // Purple to Pink gradient
      pills: [
        "Business Analyst",
        "System Architect",
        "Backend Developer",
        "DevOps Engineer",
      ],
    },
    {
      title: "Advanced Tech",
      description: "Cutting-edge specialists for innovation",
      icon: Zap,
      gradient: "from-[#F97316] to-[#EF4444]", // Orange to Red gradient
      pills: [
        "AI/ML Specialists",
        "Data Scientists",
        "Cloud Architects",
        "Security Experts",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-6"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Complete <span className="text-[#0052FF]">Team Structure</span>
          </h2>
          
          <p
            className="text-[#5E6675] text-sm sm:text-base md:text-[17px] leading-relaxed font-normal opacity-90"
            style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
          >
            From core development to specialized expertise, we provide complete teams
            tailored to your project requirements.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <CardComponent key={index} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CardComponent({ card }: { card: any }) {
  const IconComponent = card.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all h-full"
    >
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-[20px] bg-gradient-to-tr ${card.gradient} flex items-center justify-center mb-6 shadow-md relative overflow-hidden shrink-0`}>
        <IconComponent className="w-8 h-8 text-white stroke-[2.2px]" />
      </div>

      {/* Title */}
      <h3 
        className="text-[#1E2229] font-bold text-[22px] tracking-tight mb-3"
        style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p 
        className="text-[#5E6675] text-[15px] leading-relaxed font-normal opacity-90 max-w-[280px] mb-8"
        style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
      >
        {card.description}
      </p>

      {/* Pills Grid */}
      <div className="w-full mt-4">
        <div className="grid grid-cols-2 gap-3 w-full">
          {card.pills.map((pill: string, idx: number) => (
            <div
              key={idx}
              className="bg-[#F3F4F6] text-[#1E2229] text-[12px] sm:text-[13px] md:text-[14px] py-2.5 px-2 rounded-[12px] font-semibold text-center transition-colors hover:bg-[#E5E7EB] whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
