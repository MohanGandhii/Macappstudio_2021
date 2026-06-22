"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Users2, Zap } from "lucide-react";

export default function RolesSection() {
  const cards = [
    {
      title: "Core Development",
      description: "Essential team members for\nyour project foundation",
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
      description: "Expert professionals for\nadvanced requirements",
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
      description: "Cutting-edge specialists for\ninnovation",
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
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none relative overflow-hidden">
      {/* Ambient background glow shapes */}
      <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-200/20 to-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating decorative geometric shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-16 w-16 h-16 border border-gray-200/60 rounded-[20px] opacity-40 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 18, 0], rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-16 w-12 h-12 border border-gray-200/60 rounded-full opacity-40 pointer-events-none hidden lg:block"
      />

      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-6 font-heading"
          >
            Complete <span className="text-[#0052FF]">Team Structure</span>
          </h2>
          
          <p
            className="text-[#5E6675] text-sm sm:text-base md:text-[17px] leading-relaxed font-normal opacity-90 font-sans"
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
      className="bg-white border border-[#E5E7EB] rounded-[32px] p-5 sm:p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgb(0,0,0,0.05)] transition-all h-full"
    >
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-[20px] bg-gradient-to-tr ${card.gradient} flex items-center justify-center mb-6 shadow-md relative overflow-hidden shrink-0`}>
        <IconComponent className="w-8 h-8 text-white stroke-[2.2px]" />
      </div>

      {/* Title */}
      <h3 
        className="text-[#1E2229] font-bold text-[22px] tracking-tight mb-3 font-heading"
      >
        {card.title}
      </h3>

      {/* Description */}
      <p 
        className="text-[#5E6675] text-[15px] leading-relaxed font-normal opacity-90 max-w-[280px] mb-8 font-sans whitespace-pre-line"
      >
        {card.description}
      </p>

      {/* Pills Grid */}
      <div className="w-full mt-2">
        <div className="grid grid-cols-2 gap-4 w-full">
          {card.pills.map((pill: string, idx: number) => (
            <div
              key={idx}
              className="bg-[#F1F3F9] text-[#1E2229] text-[12px] sm:text-[14px] md:text-[15px] py-3.5 px-3 rounded-[20px] font-bold text-center transition-all hover:bg-[#E5E8F3] hover:scale-[1.02] flex items-center justify-center min-h-[46px] sm:min-h-[52px] leading-tight font-sans whitespace-nowrap"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
