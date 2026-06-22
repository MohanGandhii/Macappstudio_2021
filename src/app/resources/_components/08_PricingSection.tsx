"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PricingSection() {
  const [billingType, setBillingType] = useState<"onsite" | "offsite">("onsite");

  const plans = {
    onsite: [
      {
        title: "Web Core Team",
        price: "5 lakhs",
        save: "Save ₹4,000",
        discount: "50% OFF",
        experience: "3 Years of Experience Team Members",
        includes: [
          "3 Web Developers",
          "Weekly Reports",
          "Email Support",
        ],
        icon: "/assets/images/ic_balloon.png",
        isMostPurchased: false,
      },
      {
        title: "Mobile Dev Team",
        price: "10 lakhs",
        save: "Save ₹5,000",
        discount: "50% OFF",
        experience: "3 - 5 Years of Experience Team Members",
        includes: [
          "3 Android Developers",
          "Weekly Reports",
          "Email Support",
        ],
        icon: "/assets/images/ic_rocket.png",
        isMostPurchased: true,
      },
      {
        title: "Enterprise Scale",
        price: "25 lakhs",
        save: "Save ₹3,000",
        discount: "50% OFF",
        experience: "5 & Above Years of Experience Team Members",
        includes: [
          "3 iOS Developers",
          "Weekly Reports",
          "Email Support",
          "Dedicated PM & Architect",
        ],
        icon: "/assets/images/ic_diamond.png",
        isMostPurchased: false,
      },
    ],
    offsite: [
      {
        title: "Web Core Team",
        price: "3 lakhs",
        save: "Save ₹3,000",
        discount: "50% OFF",
        experience: "3 Years of Experience Team Members",
        includes: [
          "3 Web Developers",
          "Weekly Reports",
          "Email Support",
        ],
        icon: "/assets/images/ic_balloon.png",
        isMostPurchased: false,
      },
      {
        title: "Mobile Dev Team",
        price: "6.5 lakhs",
        save: "Save ₹4,000",
        discount: "50% OFF",
        experience: "3 - 5 Years of Experience Team Members",
        includes: [
          "3 Android Developers",
          "Weekly Reports",
          "Email Support",
        ],
        icon: "/assets/images/ic_rocket.png",
        isMostPurchased: true,
      },
      {
        title: "Enterprise Scale",
        price: "16 lakhs",
        save: "Save ₹2,500",
        discount: "50% OFF",
        experience: "5 & Above Years of Experience Team Members",
        includes: [
          "3 iOS Developers",
          "Weekly Reports",
          "Email Support",
          "Dedicated PM & Architect",
        ],
        icon: "/assets/images/ic_diamond.png",
        isMostPurchased: false,
      },
    ],
  };

  const activePlans = plans[billingType];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-50 select-none">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Toggle Switch */}
        <div className="max-w-6xl w-full mx-auto mb-12 sm:mb-16">
          <div className="bg-[#EEF0F3] p-1.5 rounded-2xl flex items-center w-full border border-gray-200">
            <button
              onClick={() => setBillingType("onsite")}
              className={`flex-1 py-3.5 sm:py-4 rounded-[14px] font-bold text-[16px] sm:text-[18px] tracking-wide transition-all ${
                billingType === "onsite"
                  ? "bg-[#0052FF] text-white shadow-md"
                  : "text-[#1E2229] hover:text-[#0052FF]"
              }`}
            >
              Onsite
            </button>
            <button
              onClick={() => setBillingType("offsite")}
              className={`flex-1 py-3.5 sm:py-4 rounded-[14px] font-bold text-[16px] sm:text-[18px] tracking-wide transition-all ${
                billingType === "offsite"
                  ? "bg-[#0052FF] text-white shadow-md"
                  : "text-[#1E2229] hover:text-[#0052FF]"
              }`}
            >
              Offsite
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activePlans.map((card, index) => (
            <div key={index} className="relative h-full">
              
              {/* Slanted "Most Purchased" Black Banner */}
              {card.isMostPurchased && (
                <div className="absolute -top-4 right-6 z-20 flex items-center gap-1.5 bg-[#1E2229] border border-slate-700 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow-md transform rotate-[2deg]">
                  <span>Most Purchased</span>
                  <span className="text-[12px]">👑</span>
                </div>
              )}

              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`bg-white rounded-[32px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_12px_40px_rgba(0,0,0,0.035)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.065)] transition-all h-full ${
                  card.isMostPurchased 
                    ? "border-[2.5px] border-[#0052FF]" 
                    : "border border-[#E5E7EB]"
                }`}
              >
                {/* 3D Illustration Image */}
                <div className="mb-4 h-24 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={90}
                    height={90}
                    className="object-contain animate-float"
                  />
                </div>

                {/* Price Display */}
                <div className="mb-1.5">
                  <span 
                    className="text-[#1E2229] font-bold text-[30px] sm:text-[34px] tracking-tight font-heading"
                  >
                    {card.price}
                  </span>
                  <span 
                    className="text-[#5E6675] text-[13px] sm:text-[14px] font-normal leading-none ml-0.5 font-sans"
                  >
                    /month
                  </span>
                </div>

                {/* Discount Badge Row */}
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="text-[#10B981] font-semibold text-[13px] font-sans"
                  >
                    {card.save}
                  </span>
                  <span 
                    className="bg-[#ECFDF5] text-[#10B981] font-bold text-[11px] px-2.5 py-0.5 rounded-md font-heading"
                  >
                    {card.discount}
                  </span>
                </div>

                {/* Ideal for Row */}
                <div className="text-center w-full mb-4">
                  <span 
                    className="text-[#5E6675] text-[12px] uppercase font-semibold tracking-wider block mb-1 font-heading"
                  >
                    Ideal for:
                  </span>
                  <span 
                    className="text-[#1E2229] font-bold text-[15px] sm:text-[16px] tracking-tight block max-w-[240px] mx-auto leading-snug font-heading"
                  >
                    {card.experience}
                  </span>
                </div>

                {/* Inclusion List */}
                <div className="flex flex-col gap-2.5 text-left mb-6 w-full border-t border-gray-100 pt-4.5">
                  {card.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#10B981] stroke-[3.5px]" />
                      </div>
                      <span 
                        className="text-[#1E2229] font-medium text-[14px] font-sans"
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Booking Button */}
                <div className="mt-auto w-full">
                  <button 
                    className="w-full bg-[#0052FF] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#1e60eb] transition-all tracking-wide text-[15px] font-heading"
                  >
                    Book team
                  </button>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
