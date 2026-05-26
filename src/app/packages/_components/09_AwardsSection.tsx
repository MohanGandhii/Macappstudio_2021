"use client";

import React from "react";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    {
      img: "/packaged_assets/Award/award01.svg",
      text: "Intel BlackBelt for App Development",
    },
    {
      img: "/packaged_assets/Award/award02.svg",
      text: "Most Valuable Developers Award",
    },
    {
      img: "/packaged_assets/Award/award03.svg",
      text: "Intel Worldwide Top Innovator 2017",
    },
    {
      img: "/packaged_assets/Award/award04.svg",
      text: "Winner of Intel Best App to Stay in Sync Contest",
    },
    {
      img: "/packaged_assets/Award/award05.svg",
      text: "Best App Award From Google - 2023",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Centered Main Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-[#1E2229] font-bold text-3xl sm:text-4xl md:text-[38px] tracking-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Awards & Recognition
          </h2>
        </div>

        {/* Awards Clean Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {awards.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              
              {/* Award Image Container (Floating) */}
              <div className="h-32 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.img}
                  alt={item.text}
                  width={112}
                  height={112}
                  className="object-contain max-h-32"
                />
              </div>

              {/* Award Description Text */}
              <p 
                className="text-[#5E6675] text-[13px] sm:text-[14px] leading-relaxed max-w-[160px] font-normal"
                style={{ fontFamily: "'AvenirNextLTPro-Regular', 'AvenirNext-Regular', sans-serif" }}
              >
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
