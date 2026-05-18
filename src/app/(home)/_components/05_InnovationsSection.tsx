"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
    logo: "/assets/images/index/fasttrack_banner_img.png", // Fallback if logo not found
    title: "Cloud based end to end Uber Like Cab Aggregation Platform",
    description:
      "Fast Track is one of the best cab service provider in India. They provide both outstation taxi booking and local cab services and operates the network and offices at all major cities of Tamil Nadu. They have 10,000 professional drivers covering 9,000 + routes and having a customer base of 15 Million users.",
    image: "/assets/images/index/fasttrack_banner_img.png",
    link: "/case-studies/fasttrack",
    achieved: "We created a reliable, scalable and module cab management platform with apps for users, drivers, owners and board of directors.",
  },
  HOWDY: {
    name: "HOWDY",
    logo: "/assets/images/index/howdy_logo.png",
    title: "Hire eco friendly electric scooters for rent",
    description:
      "Howdy is an end to end bike rental company which is fully automated and also environmental friendly.They envisioned a system that allows the users to pick up bikes from any hub and drop the bikes at any hub which make it simple and easy for the end riders.",
    image: "/assets/images/index/howdy_banner_img.png",
    link: "/case-studies/howdy",
    achieved: "Created an IOT based application where the entire bike operation like start, stop, speed control,remote immobilisation can be controlled via app.",
  },
  SARVA: {
    name: "SARVA",
    logo: "/assets/images/index/sarva_logo.svg",
    title: "Robust and seamless system to support 1000+ yoga videos",
    description:
      "Sarva is a contemporary yoga app which had already made its international presence, and they need a robust system to support their backend. We had designed and provided a seamless experience for their users.",
    image: "/assets/images/index/sarvaapp_image.png",
    link: "/case-studies/sarva",
    achieved: "A robust backend system which supports AWS for seamless integration.",
  },
  SPEED: {
    name: "SPEED LEARNING APP",
    logo: "/assets/images/index/speed_banner_img.png",
    title: "India’s #1 NEET Training app",
    description:
      "Speed Medical Institute has over 20 centers and have trained over 1 Lakh students all over the country. The end to end app based digital content delivery and learning platform helps Speed students to study anywhere, anytime and on any device.",
    image: "/assets/images/index/speed_banner_img.png",
    link: "/case-studies/speedlearning",
    achieved: "A digital institute with 1000+ contents, Realtime Mock exams and All India Rankings all at one place.",
  },
};

export default function InnovationsSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[38px] font-black text-[#111827] mb-3 tracking-tight">Powering innovations worldwide</h2>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Bring your ideas to life through great expertise and consultations
          </p>
        </div>

        {/* Tabs - Box Style */}
        <div className="flex flex-wrap justify-center gap-0 mb-12 border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex-1 min-w-[200px] p-6 text-center border-r border-gray-100 last:border-r-0 transition-all duration-300 relative",
                activeTab === tab.id ? "bg-white" : "bg-gray-50/50 hover:bg-white"
              )}
            >
              <p className={clsx(
                "text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-1",
                activeTab === tab.id ? "text-gray-900" : "text-gray-400"
              )}>
                {tab.category}
              </p>
              <p className={clsx(
                "text-base md:text-lg font-black tracking-tight",
                activeTab === tab.id ? "text-gray-900" : "text-gray-400"
              )}>
                {tab.name}
              </p>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBorder"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Block */}
        <div className="bg-white p-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
            >
              {/* Info Side */}
              <div className="w-full lg:w-1/2 pt-4">
                <div className="mb-10">
                  <Image
                    src={TAB_CONTENT[activeTab].logo}
                    alt={TAB_CONTENT[activeTab].name}
                    width={180}
                    height={80}
                    className="h-14 md:h-[65px] w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-3xl md:text-[32px] font-black text-[#111827] mb-6 leading-tight tracking-tight">
                  {TAB_CONTENT[activeTab].title}
                </h3>
                
                <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed mb-10 font-medium">
                  {TAB_CONTENT[activeTab].description}
                </p>

                <div className="mb-10">
                  <p className="text-[13px] font-bold text-gray-900 uppercase tracking-widest mb-4">Platforms developed :</p>
                  <div className="flex gap-8">
                    <div className="flex items-center gap-3">
                      <Image src="/assets/images/index/android.svg" alt="Android" width={24} height={24} className="opacity-80" /> 
                      <span className="text-[14px] font-bold text-gray-600">Android</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src="/assets/images/index/apple.svg" alt="iOS" width={24} height={24} className="opacity-80" /> 
                      <span className="text-[14px] font-bold text-gray-600">iOS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src="/assets/images/index/html.svg" alt="Web" width={24} height={24} className="opacity-80" /> 
                      <span className="text-[14px] font-bold text-gray-600">Web</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f9f9f9] p-8 md:p-10 rounded-lg">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">What we achieved?</h4>
                  <p className="text-xl md:text-[22px] font-black text-[#111827] mb-8 leading-snug tracking-tight">
                    {TAB_CONTENT[activeTab].achieved}
                  </p>
                  <Link href={TAB_CONTENT[activeTab].link} className="inline-flex items-center text-[#111827] font-black text-[15px] hover:translate-x-1 transition-transform group">
                    <span>Read full case study</span>
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 flex justify-end">
                <Image
                  src={TAB_CONTENT[activeTab].image}
                  alt="Project Preview"
                  width={900}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
