"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Ship 3× Faster",
      description: "Pre-vetted developers onboarded in weeks, not months. Your first sprint starts in 14 days.",
      badge: "14-day deployment",
      icon: "/packaged_assets/FeaturesSection/Container.svg",
      bgColor: "bg-[#F0F4FF]",
      iconBg: "bg-[#0052FF]",
      badgeBg: "bg-[#0052FF]",
    },
    {
      title: "Scale Without Overhead",
      description: "Add iOS, Android, Web, QA, or AI/ML engineers on demand. Scale up for launch, scale down after.",
      badge: "30-day flexibility",
      icon: "/packaged_assets/FeaturesSection/Container (1).svg",
      bgColor: "bg-[#F0FBF6]",
      iconBg: "bg-[#10B981]",
      badgeBg: "bg-[#10B981]",
    },
    {
      title: "Full Transparency",
      description: "Weekly reports, live task dashboards, and milestone reviews. You see everything, every week.",
      badge: "Weekly reports",
      icon: "/packaged_assets/FeaturesSection/Container (2).svg",
      bgColor: "bg-[#FFF7F0]",
      iconBg: "bg-[#F97316]",
      badgeBg: "bg-[#F97316]",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[44px] tracking-tight leading-tight mb-6 font-heading"
          >
            Unlock Your Potential with Our <br className="hidden md:inline" />
            <span className="text-[#0052FF]">Extended Tech Team</span>
          </h2>
          
          <p
            className="text-[#5E6675] text-sm sm:text-base md:text-[17px] leading-relaxed font-normal font-sans"
          >
            Our extended tech team brings a wealth of benefits designed to streamline your
            operations and accelerate your success. Having built over 120+ apps, we know
            what works.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`${feature.bgColor} rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[380px] shadow-sm hover:shadow-md transition-shadow`}
            >
              <div>
                {/* Icon circle */}
                <div className={`w-12 h-12 rounded-full ${feature.iconBg} flex items-center justify-center mb-8 relative`}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[#1E2229] font-bold text-xl md:text-[22px] tracking-tight mb-4 font-heading"
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#5E6675] text-sm sm:text-base leading-relaxed font-normal opacity-90 font-sans"
                >
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 flex">
                <span
                  className={`${feature.badgeBg} text-white text-[11px] sm:text-[12px] font-bold px-4 py-2 rounded-full tracking-wide shadow-sm font-heading`}
                >
                  {feature.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
