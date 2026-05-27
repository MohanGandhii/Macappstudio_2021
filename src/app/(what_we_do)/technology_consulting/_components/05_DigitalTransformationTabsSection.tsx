"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

const TABS = [
  { id: "blockchain", title: "Blockchain Technology", icon: "/assets/images/technology_Consulting/blockchain.svg", desc: "Make businesses more secure and transparent by leveraging the distributed ledger technology" },
  { id: "ar", title: "Augmented Reality", icon: "/assets/images/technology_Consulting/ar.svg", desc: "Experience a jaw dropping seamless interaction of the digital objects blended in the real-world environment." },
  { id: "ai", title: "Artificial Intelligence", icon: "/assets/images/technology_Consulting/ai.svg", desc: "Automate your business, maximize efficiency and minimize errors with the advanced state of art technology." },
  { id: "cyber", title: "Cyber Security", icon: "/assets/images/technology_Consulting/cyber.svg", desc: "Secure your business, protect your data from prying eyes and enhance your customers privacy with the help of our experts" },
  { id: "iot", title: "Internet of Things", icon: "/assets/images/technology_Consulting/iot.svg", desc: "Make people's life easy and delightful by interconnecting and communicating with everyday technologies, thus providing a holistic experience." },
  { id: "cloud", title: "Cloud Computing", icon: "/assets/images/technology_Consulting/cloud.svg", desc: "Move your business to cloud and seamlessly operate across the globe with minimum maintenance and maximum flexibility." },
];

export default function DigitalTransformationTabsSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#444] mb-2">
            Digital Transformation
          </h3>
          <h2 className="text-[28px] md:text-[34px] font-black text-[#2B2B2B] leading-[1.2] lg:leading-[38px] mb-4 tracking-tight">
            Reinvent and accelerate your digital transformation journey
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6]">
            We help customers experience stunning digital growth and thrive in the digital era.
          </p>
        </div>

        {/* Horizontal Tabs List */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center border-b border-[#e1e1e1] pb-10 gap-4">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-[45%] md:w-[15.5%] text-center cursor-pointer min-h-[140px] py-6 px-3 transition-all duration-300 rounded-none border
                  ${isActive ? "border-[#1461ff] shadow-sm" : "border-transparent hover:border-gray-200"}
                `}
              >
                <Image
                  src={tab.icon}
                  alt={tab.title}
                  width={38}
                  height={38}
                  className="mx-auto mb-3 object-contain"
                />
                <span className={`text-[14px] leading-tight block ${isActive ? "font-bold text-black" : "font-medium text-gray-700"}`}>
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {TABS.map((tab) => activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col md:flex-row items-center py-[50px] pb-[40px]"
              >
                {/* Left Column (30%) */}
                <div className="w-full md:w-[30%] text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0">
                  <h4 className="text-[20px] font-black text-[#2B2B2B] uppercase tracking-wider leading-tight">
                    {tab.title}
                  </h4>
                </div>

                {/* Right Column (70%) */}
                <div className="w-full md:w-[70%] text-left border-l-0 md:border-l border-[#e1e1e1] pl-0 md:pl-12">
                  <p className="text-[18px] text-[#444] leading-[30px]">
                    {tab.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Proposal Button */}
        <div className="text-center mt-6">
          <GetProposalButton className="btn consulted_btn bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors rounded-none w-[300px] h-[60px] flex items-center justify-center mx-auto" />
        </div>

      </div>
    </section>
  );
}
