"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const TABS = [
  { id: "FASTTRACK", category: "IT CONSULTING", name: "FASTTRACK" },
  { id: "HOWDY", category: "IOT APPLICATION", name: "HOWDY" },
  { id: "SARVA", category: "ON DEMAND APP", name: "SARVA" },
  { id: "SPEED", category: "DIGITAL TRANSFORMATION", name: "SPEED LEARNING APP" },
];

const TAB_CONTENT: Record<string, any> = {
  FASTTRACK: {
    name: "FASTTRACK",
    logo: "/assets/images/fasttrack/FT_logo.png",
    sub: "Cloud based end to end Uber Like Cab Aggregation Platform",
    description: "Fast Track is one of the best cab service provider in India. They provide both outstation taxi booking and local cab services and operates the network and offices at all major cities of Tamil Nadu. They have 10,000 professional drivers covering 9,000 + routes and having a customer base of 15 Million users.",
    achieved: "We created a reliable, scalable and module cab management platform with apps for users, drivers, owners and board of directors.",
    link: "/success_stories/fasttrack",
    banner: "/assets/images/index/fasttrack_banner_img.png"
  },
  HOWDY: {
    name: "HOWDY",
    logo: "/assets/images/index/howdy_logo.png",
    sub: "Hire eco friendly electric scooters for rent",
    description: "Howdy is an end to end bike rental company which is fully automated and also environmental friendly.They envisioned a system that allows the users to pick up bikes from any hub and drop the bikes at any hub which make it simple and easy for the end riders.",
    achieved: "Created an IOT based application where the entire bike operation like start, stop, speed control,remote immobilisation can be controlled via app.",
    link: "/success_stories/howdy",
    banner: "/assets/images/index/howdy_banner_img.png"
  },
  SARVA: {
    name: "SARVA",
    logo: "/assets/images/index/sarva_logo.svg",
    sub: "Robust and seamless system to support 1000+ yoga videos",
    description: "Sarva is a contemporary yoga app which had already made its international presence, and they need a robust system to support their backend. We had designed and provided a seamless experience for their users.",
    achieved: "A robust backend system which supports AWS for seamless integration.",
    link: "/success_stories/sarva",
    banner: "/assets/images/index/sarvaapp_image.png"
  },
  SPEED: {
    name: "SPEED LEARNING APP",
    logo: "/assets/images/speedlearning/speedlearning_logo.svg",
    sub: "India’s #1 NEET Training app",
    description: "Speed Medical Institute has over 20 centers and have trained over 1 Lakh students all over the country. The end to end app based digital content delivery and learning platform helps Speed students to study anywhere, anytime and on any device.",
    achieved: "A digital institute with 1000+ contents, Realtime Mock exams and All India Rankings all at one place.",
    link: "/success_stories/speedlearning",
    banner: "/assets/images/index/speed_banner_img.png"
  },
};

export default function InnovationsSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  // Automatic scrolling for tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = TABS.findIndex((t) => t.id === current);
        const nextIndex = (currentIndex + 1) % TABS.length;
        return TABS[nextIndex].id;
      });
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Tabs Selector matching the static layout */}
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 lg:gap-4 mb-16 overflow-x-auto hide-scrollbar pb-3 md:pb-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "p-4 md:p-6 text-center transition-all duration-300 flex flex-col items-center justify-center min-h-[90px] md:min-h-[110px] flex-shrink-0",
                tab.id === "SPEED" 
                  ? "w-[185px] sm:w-[200px] md:w-auto md:flex-1 md:max-w-none" 
                  : "w-[130px] sm:w-[145px] md:w-auto md:flex-1",
                activeTab === tab.id 
                  ? "bg-white border-t border-l border-r border-transparent border-b-[4px] border-b-black shadow-[0_8px_16px_rgba(0,0,0,0.04)]" 
                  : "bg-white border border-gray-100 border-b-[4px] border-b-transparent hover:border-gray-200"
              )}
            >
              <p className={clsx(
                "text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2",
                activeTab === tab.id ? "text-gray-900" : "text-gray-600"
              )}>
                {tab.category}
              </p>
              <p className={clsx(
                "text-[12px] sm:text-[14px] md:text-[18px] font-black tracking-tight leading-tight uppercase",
                activeTab === tab.id ? "text-gray-900" : "text-[#111]"
              )}>
                {tab.name}
              </p>
            </button>
          ))}
        </div>

        {/* Content Block Wrapper - White background to match design */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left Column: Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-30">
                
                <div className="mb-6 h-[65px] flex items-center justify-center lg:justify-start w-full">
                  <Image
                    src={TAB_CONTENT[activeTab].logo}
                    alt={TAB_CONTENT[activeTab].name}
                    width={220}
                    height={70}
                    className="max-h-[65px] w-auto object-contain"
                    unoptimized
                  />
                </div>
                
                <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#333] tracking-tight mb-5 leading-tight">
                  {TAB_CONTENT[activeTab].sub}
                </h3>
                
                <p className="text-[15px] md:text-[16px] text-gray-700 font-medium leading-[1.7] mb-8">
                  {TAB_CONTENT[activeTab].description}
                </p>
                
                <div className="mb-8 w-full">
                  <p className="text-[14px] font-semibold text-[#111] mb-4">Platforms developed :</p>
                  <div className="flex items-center justify-center lg:justify-start gap-8">
                    <div className="flex items-center gap-2">
                       <Image src="/assets/images/index/android.svg" width={22} height={22} alt="Android" unoptimized />
                       <span className="text-[14px] font-medium text-gray-800">Android</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Image src="/assets/images/index/apple.svg" width={22} height={22} alt="iOS" unoptimized />
                       <span className="text-[14px] font-medium text-gray-800">iOS</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Image src="/assets/images/index/html.svg" width={22} height={22} alt="Web" unoptimized />
                       <span className="text-[14px] font-medium text-gray-800">Web</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#fafafa] p-6 md:p-8 w-full border border-gray-50/50">
                   <p className="text-[15px] font-bold text-[#111] mb-3">What we achieved?</p>
                   <p className="text-[20px] md:text-[24px] font-bold text-[#333] leading-tight">
                     {TAB_CONTENT[activeTab].achieved}
                   </p>
                </div>
              </div>

              {/* Right Column: Static Banner */}
              <div className="flex justify-center items-center w-full">
                <Image
                  src={TAB_CONTENT[activeTab].banner}
                  alt={`${TAB_CONTENT[activeTab].name} App Interface`}
                  width={600}
                  height={600}
                  className="w-full max-w-[550px] h-auto object-contain"
                  unoptimized
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
