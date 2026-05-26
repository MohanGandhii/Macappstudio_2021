"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TechSelection() {
  const technologies = [
    { name: "React", icon: "/packaged_assets/TechSelection/1.svg" },
    { name: "Node.js", icon: "/packaged_assets/TechSelection/2.svg" },
    { name: "Swift", icon: "/packaged_assets/TechSelection/3.svg" },
    { name: "Kotlin", icon: "/packaged_assets/TechSelection/4.svg" },
    { name: "AWS", icon: "/packaged_assets/TechSelection/5.svg" },
    { name: "Firebase", icon: "/packaged_assets/TechSelection/6.svg" },
    { name: "MongoDB", icon: "/packaged_assets/TechSelection/7.svg" },
    { name: "PostgreSQL", icon: "/packaged_assets/TechSelection/8.svg" },
    { name: "Docker", icon: "/packaged_assets/TechSelection/9.svg" },
    { name: "Kubernetes", icon: "/packaged_assets/TechSelection/10.svg" },
    { name: "GraphQL", icon: "/packaged_assets/TechSelection/11.svg" },
    { name: "TypeScript", icon: "/packaged_assets/TechSelection/12.svg" },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight mb-3"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Tools & Technologies We Use
          </h2>
          <p 
            className="text-[#5E6675] text-[15px] sm:text-[16px] font-normal leading-relaxed opacity-95"
            style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
          >
            Modern, scalable, and battle-tested technologies
          </p>
        </div>

        {/* 12-Card Premium Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#F8FAFC]/60 hover:bg-white border border-[#E5E7EB]/50 hover:border-[#0052FF]/30 hover:shadow-[0_10px_30px_rgba(0,82,255,0.04)] rounded-[20px] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[140px] cursor-pointer group"
            >
              {/* Technology Icon Wrapper */}
              <div className="h-16 flex items-center justify-center mb-3">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Technology Name */}
              <span 
                className="text-[#1E2229] font-bold text-[14px] sm:text-[15px] tracking-tight block mt-1"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
