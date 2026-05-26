"use client";

import { useState } from "react";

export default function IndustrySection() {
  const [active, setActive] = useState("FinTech");

  const items = [
    { name: "FinTech", icon: "/Assets/IndustrySection/fintech.svg", bg: "bg-green-100" },
    { name: "Education", icon: "/Assets/IndustrySection/ServiceQuote1.svg", bg: "bg-blue-100" },
    { name: "eCommerce", icon: "/Assets/IndustrySection/ServiceQuote2.svg", bg: "bg-orange-100" },
    { name: "SaaS", icon: "/Assets/IndustrySection/ServiceQuote3.svg", bg: "bg-pink-100" },
    { name: "Marketplace", icon: "/Assets/IndustrySection/ServiceQuote4.svg", bg: "bg-blue-100" },
    { name: "Chat Bot", icon: "/Assets/IndustrySection/ServiceQuote5.svg", bg: "bg-green-100" },
    { name: "VR/AR", icon: "/Assets/IndustrySection/ServiceQuote6.svg", bg: "bg-purple-100" },
    { name: "Healthcare", icon: "/Assets/IndustrySection/ServiceQuote7.svg", bg: "bg-red-100" },
  ];

  return (
    <div className="bg-gray-50 py-16 text-center">

      {/* TOP TEXT */}
      <p className="text-blue-600 text-xs font-medium tracking-wide">
        SELECT YOUR PROJECT TYPE
      </p>

      <h2 className="text-4xl font-bold mt-3 text-gray-900">
        Choose Your Industry
      </h2>

      <p className="text-gray-500 mt-4 text-sm">
        We specialize in building world-class applications across industries
      </p>

      {/* ICONS ROW */}
      <div className="flex flex-wrap justify-center gap-5 mt-10 px-4">

        {items.map((item, i) => {
          const isActive = active === item.name;

          return (
            <div
              key={i}
              onClick={() => setActive(item.name)}
              className={`cursor-pointer rounded-xl px-5 py-5 w-[95px] flex flex-col items-center transition
                ${isActive ? "bg-white shadow-md" : "bg-gray-100/50"}
              `}
            >
              {/* ICON */}
             <div className={`w-12 h-12 ${item.bg}/70 rounded-full flex items-center justify-center`}>
  <img
    src={item.icon}
    alt={item.name}
    className="w-7 h-7 object-contain"
  />
</div>
              {/* TEXT */}
              <p className={`text-[12px] mt-2 font-medium ${
                isActive ? "text-gray-800" : "text-gray-500"
              }`}>
                {item.name}
              </p>
            </div>
          );
        })}

      </div>

      {/* IMAGE CARD */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <div className="relative rounded-2xl overflow-hidden">

          <img
            src="/Assets/IndustrySection/fintech.png"
            alt="fintech"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-10 left-10 text-left text-white">

            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              $
            </div>

            <h3 className="text-4xl font-semibold">
              {active} Application
            </h3>

            <p className="text-sm mt-3 text-gray-200 max-w-md">
              Comprehensive solution with modern features and scalable architecture
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}