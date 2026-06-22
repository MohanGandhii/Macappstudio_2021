"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamsSection() {
  const teams = [
    {
      title: "Team 1",
      company: "Diamler - Jan 2025 to Dec 2026",
      border: "border-purple-400/80",
      bg: "bg-purple-50/50",
      text: "text-purple-700",
      items: [
        { name: "Android - 1", icon: "/packaged_assets/TeamSection/Team1/1.1.svg" },
        { name: "iOS - 2", icon: "/packaged_assets/TeamSection/Team1/1.2.svg" },
        { name: "Web - 1", icon: "/packaged_assets/TeamSection/Team1/1.3.svg" },
        { name: "Full Stack - 1", icon: "/packaged_assets/TeamSection/Team1/1.4.svg" },
        { name: "QA - 1", icon: "/packaged_assets/TeamSection/Team1/1.5.svg" },
        { name: "UI/UX - 1", icon: "/packaged_assets/TeamSection/Team1/1.6.svg" },
        { name: "Business Analyst - 1", icon: "/packaged_assets/TeamSection/Team1/1.7.svg" },
      ],
    },
    {
      title: "Team 2",
      company: "Jio - Jan 2025 to Dec 2026",
      border: "border-red-400/80",
      bg: "bg-red-50/50",
      text: "text-red-700",
      items: [
        { name: "Android - 1", icon: "/packaged_assets/TeamSection/Team2/1.svg" },
        { name: "iOS - 2", icon: "/packaged_assets/TeamSection/Team2/2.svg" },
        { name: "Web - 1", icon: "/packaged_assets/TeamSection/Team2/3.svg" },
        { name: "Full Stack - 1", icon: "/packaged_assets/TeamSection/Team2/4.svg" },
        { name: "QA - 1", icon: "/packaged_assets/TeamSection/Team2/5.svg" },
        { name: "UI/UX - 1", icon: "/packaged_assets/TeamSection/Team2/6.svg" },
        { name: "Business Analyst - 1", icon: "/packaged_assets/TeamSection/Team2/7.svg" },
      ],
    },
    {
      title: "Team 3",
      company: "Power Soap - Dec 2025 to Mar 2026",
      border: "border-orange-400/80",
      bg: "bg-orange-50/50",
      text: "text-orange-700",
      items: [
        { name: "Android - 1", icon: "/packaged_assets/TeamSection/Team3/1.svg" },
        { name: "iOS - 2", icon: "/packaged_assets/TeamSection/Team3/2.svg" },
        { name: "Web - 1", icon: "/packaged_assets/TeamSection/Team3/3.svg" },
        { name: "Full Stack - 1", icon: "/packaged_assets/TeamSection/Team3/4.svg" },
        { name: "QA - 1", icon: "/packaged_assets/TeamSection/Team3/5.svg" },
        { name: "UI/UX - 1", icon: "/packaged_assets/TeamSection/Team3/6.svg" },
        { name: "Business Analyst - 1", icon: "/packaged_assets/TeamSection/Team3/7.svg" },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-[1360px] mx-auto px-6">

        {/* TITLE */}
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 font-heading"
        >
          Total 20 Teams
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {teams.map((team, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`rounded-[24px] p-8 md:p-10 border ${team.border} ${team.bg} transition-all duration-300 flex flex-col`}
            >

              <h3 
                className={`text-2xl font-bold ${team.text} font-heading`}
              >
                {team.title}
              </h3>

              <p 
                className="text-base text-gray-600 mt-2 mb-8 font-heading"
              >
                {team.company}
              </p>

              {/* LIST */}
              <div className="space-y-5">
                {team.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-pointer">

                    {/* ICON (No border, no background, directly raw vector logo) */}
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>

                    {/* TEXT */}
                    <p 
                      className="text-base text-gray-800 font-semibold font-heading"
                    >
                      {item.name}
                    </p>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
