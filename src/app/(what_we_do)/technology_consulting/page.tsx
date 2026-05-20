"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

const SMARTER_SERVICES = [
  { title: "Digital Transformation", icon: "/assets/images/technology_Consulting/service_icon1.svg" },
  { title: "Customer Insight", icon: "/assets/images/technology_Consulting/service_icon2.svg" },
  { title: "Marketing and Sales", icon: "/assets/images/technology_Consulting/service_icon3.svg" },
  { title: "IT Consulting", icon: "/assets/images/technology_Consulting/service_icon4.svg" },
];

const PROPEL_STAGES = [
  { title: "Deep Analysis", icon: "/assets/images/technology_Consulting/propel_stage_icon1.svg" },
  { title: "Conceptualize Strategy", icon: "/assets/images/technology_Consulting/propel_stage_icon2.svg" },
  { title: "Identify Execution Plan", icon: "/assets/images/technology_Consulting/propel_stage_icon3.svg" },
  { title: "Setting Operation Constraints", icon: "/assets/images/technology_Consulting/propel_stage_icon4.svg" },
  { title: "Implementation", icon: "/assets/images/technology_Consulting/propel_stage_icon5.svg" },
  { title: "Feedback", icon: "/assets/images/technology_Consulting/propel_stage_icon6.svg" },
];

const INDUSTRIES = [
  { name: "Agriculture", icon: "/assets/images/technology_Consulting/industries_solution_icon1.svg" },
  { name: "Aerospacd and Defence", icon: "/assets/images/technology_Consulting/industries_solution_icon2.svg" },
  { name: "Chemicals", icon: "/assets/images/technology_Consulting/industries_solution_icon3.svg" },
  { name: "Consumer Products", icon: "/assets/images/technology_Consulting/industries_solution_icon4.svg" },
  { name: "Construction", icon: "/assets/images/technology_Consulting/industries_solution_icon5.svg" },
  { name: "Education", icon: "/assets/images/technology_Consulting/industries_solution_icon6.svg" },
  { name: "Finacial Institutions", icon: "/assets/images/technology_Consulting/industries_solution_icon7.svg" },
  { name: "Helthcare Service", icon: "/assets/images/technology_Consulting/industries_solution_icon8.svg" },
  { name: "Insurance", icon: "/assets/images/technology_Consulting/industries_solution_icon9.svg" },
  { name: "Oil and Gas", icon: "/assets/images/technology_Consulting/industries_solution_icon10.svg" },
  { name: "Public and Social Sector", icon: "/assets/images/technology_Consulting/industries_solution_icon11.svg" },
  { name: "Pharmaceuticals and Medical Products", icon: "/assets/images/technology_Consulting/industries_solution_icon12.svg" },
  { name: "Real Estate", icon: "/assets/images/technology_Consulting/industries_solution_icon13.svg" },
  { name: "Retail", icon: "/assets/images/technology_Consulting/industries_solution_icon14.svg" },
  { name: "Social Networking", icon: "/assets/images/technology_Consulting/industries_solution_icon15.svg" },
  { name: "Safty and Research", icon: "/assets/images/technology_Consulting/industries_solution_icon16.svg" },
  { name: "Sports", icon: "/assets/images/technology_Consulting/industries_solution_icon17.svg" },
  { name: "Travel and Tourism", icon: "/assets/images/technology_Consulting/industries_solution_icon18.svg" },
  { name: "Technology, Media and Telecommunication", icon: "/assets/images/technology_Consulting/industries_solution_icon19.svg" },
  { name: "Transportation and Logistics", icon: "/assets/images/technology_Consulting/industries_solution_icon20.svg" },
];

const TABS = [
  { id: "blockchain", title: "Blockchain Technology", icon: "/assets/images/technology_Consulting/blockchain.svg", desc: "Make businesses more secure and transparent by leveraging the distributed ledger technology" },
  { id: "ar", title: "Augmented Reality", icon: "/assets/images/technology_Consulting/ar.svg", desc: "Experience a jaw dropping seamless interaction of the digital objects blended in the real-world environment." },
  { id: "ai", title: "Artificial Intelligence", icon: "/assets/images/technology_Consulting/ai.svg", desc: "Automate your business, maximize efficiency and minimize errors with the advanced state of art technology." },
  { id: "cyber", title: "Cyber Security", icon: "/assets/images/technology_Consulting/cyber.svg", desc: "Secure your business, protect your data from prying eyes and enhance your customers privacy with the help of our experts" },
  { id: "iot", title: "Internet of Things", icon: "/assets/images/technology_Consulting/iot.svg", desc: "Make people’s life easy and delightful by interconnecting and communicating with everyday technologies, thus providing a holistic experience." },
  { id: "cloud", title: "Cloud Computing", icon: "/assets/images/technology_Consulting/cloud.svg", desc: "Move your business to cloud and seamlessly operate across the globe with minimum maintenance and maximum flexibility." },
];

export default function TechnologyConsultingPage() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-[#F6F6F2] min-h-[420px] flex items-center">
        
        {/* Right Edge Image with Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[38%] z-0 hidden md:block">
          {/* Gradient to blend the image into the background on the left */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F6F6F2] to-transparent z-10"></div>
          <Image
            src="/assets/images/technology_Consulting/banner_rigth_image.jpg"
            alt="Tech Consulting Hero"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-[62%] text-left lg:pl-16">
              <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-medium text-[#2B2B2B] leading-[1.1] lg:leading-[48px] mb-5 tracking-tight max-w-[780px]">
                <span className="block">Creating a change that matters,</span>
                <span className="block">by providing thoughtful solutions</span>
                <span className="block">through technology</span>
              </h1>
              <GetProposalButton className="btn consulted_btn bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors rounded-none w-[300px] h-[60px] flex items-center justify-center" />
            </div>
            
            {/* Mobile-only image display (fallback since absolute is hidden on mobile) */}
            <div className="w-full md:hidden mt-10 relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/technology_Consulting/banner_rigth_image.jpg"
                alt="Tech Consulting Hero"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Services */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-[#2B2B2B] mb-6 tracking-tight leading-snug">
              Smarter services to balance today’s needs <br className="hidden md:block" /> with tomorrow’s opportunities
            </h2>
            <p className="text-[15px] lg:text-[16px] text-gray-600 font-normal">
              Our world class consultants guide our customers to solve complex business challenges by providing novel strategic objectives.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {SMARTER_SERVICES.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="h-[72px] mb-6 flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain" />
                </div>
                <h3 className="text-[15px] font-medium text-[#444]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propel Business */}
      <section className="pt-16 pb-0 bg-[#EFE5F5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header Box */}
          <div className="w-full md:w-[55%] text-left mb-10">
            <h2 className="text-[26px] md:text-[34px] font-black text-[#2B2B2B] leading-[1.2] lg:leading-[38px] mb-2 tracking-tight">
              Our approach to propel your business towards the next breakthrough
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.6] lg:leading-[30px]">
              Attain the outcomes that are most critical to help you run and transform your business through our unique set of process.
            </p>
          </div>

          {/* White Main Block */}
          <div className="bg-white rounded-t-[3px] py-10 pb-12 px-6 relative overflow-hidden">
            
            {/* Dashed Line behind the circles */}
            <div className="absolute top-[80px] left-[10%] right-[10%] border-t-2 border-dashed border-gray-400 z-0 hidden md:block"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-2">
              {PROPEL_STAGES.map((stage, index) => (
                <div key={index} className="flex-1 w-full text-center relative group">
                  
                  {/* Circular Icon Container */}
                  <div className="w-[80px] h-[80px] rounded-full border border-gray-400 bg-white flex items-center justify-center mx-auto mb-4 relative z-10 transition-colors group-hover:border-black">
                    <Image 
                      src={stage.icon} 
                      alt={stage.title} 
                      width={38} 
                      height={38} 
                      className="object-contain" 
                    />
                  </div>

                  {/* Stage Title */}
                  <p className="text-[15px] font-medium text-gray-800 leading-tight max-w-[140px] mx-auto">
                    {stage.title}
                  </p>

                  {/* Horizontal Arrow Chevron on Dashed Line */}
                  {index < PROPEL_STAGES.length - 1 && (
                    <div className="absolute top-[30px] -right-2 translate-x-1/2 z-20 hidden md:flex items-center justify-center text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-[28px] md:text-[34px] font-black text-center text-[#2B2B2B] leading-[38px] mb-12 tracking-tight">
            Industries we provide solutions for
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden">
            {INDUSTRIES.map((ind, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col text-left justify-start p-6 pt-5 pl-6 min-h-[140px] border-[#e6e6e6] transition-all
                  ${(index + 1) % 5 === 0 ? "lg:border-r-0" : "lg:border-r"}
                  ${index >= 15 ? "lg:border-b-0" : "lg:border-b"}
                  ${(index + 1) % 3 === 0 ? "md:border-r-0" : "md:border-r"}
                  ${index >= 18 ? "md:border-b-0" : "md:border-b"}
                  ${(index + 1) % 2 === 0 ? "max-md:border-r-0" : "max-md:border-r"}
                  ${index >= 18 ? "max-md:border-b-0" : "max-md:border-b"}
                `}
              >
                <Image 
                  src={ind.icon} 
                  alt={ind.name} 
                  width={50} 
                  height={50} 
                  className="mb-4 object-contain" 
                />
                <p className="text-[16px] font-medium text-gray-800 leading-snug mt-1">
                  {ind.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Tabs */}
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

      {/* Why Digitize */}
      <section className="py-16 md:py-20 bg-[#E8F5E9]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-[28px] md:text-[34px] font-black text-center text-[#2B2B2B] leading-[38px] mb-12 tracking-tight">
            Why Digitize?
          </h2>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center max-w-5xl mx-auto gap-8 md:gap-0">
            {/* Left Column */}
            <div className="flex-1 text-left px-6 md:px-12 md:pl-[100px] flex flex-col justify-start">
              <h3 className="text-[72px] md:text-[80px] font-light text-[#2B2B2B] leading-none mb-4">
                96%
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#444] leading-[26px] max-w-[380px]">
                of leaders say the pandemic will speed their digital transformation by an average of 5.3 years
              </p>
            </div>

            {/* Right Column */}
            <div className="flex-1 text-left px-6 md:px-12 md:pl-[100px] flex flex-col justify-start border-t border-gray-300 md:border-t-0 md:border-l border-[#c9c9c9]">
              <h3 className="text-[72px] md:text-[80px] font-light text-[#2B2B2B] leading-none mb-4">
                70%
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#444] leading-[26px] max-w-[380px]">
                of organizations will use digital adoption solutions across the entire technology stack to overcome still insufficient application user experiences by 2025
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Customer Insight & Marketing Sales */}
      {[
        {
          id: "customer",
          tag: "Customer Insight",
          title: "Maximize Customer Experience and satisfaction by diving into customers journey",
          desc: "Customers are at the core of any business. By prioritizing right customer insights and the right strategy to act on them, leaders can capture growth opportunities and solve complex business problems.",
          img: "/assets/images/technology_Consulting/cus_insight_image.jpg",
          bulletTitle: "Understanding customers is the key to giving them good service which in turn results into strong customer relationships and new sales.",
          bullets: [
            { text: "Know your customers demand and their Real-Time Behavior", icon: "/assets/images/technology_Consulting/cus_insight_left_icon1.svg" },
            { text: "Identify the different categories of your Customers", icon: "/assets/images/technology_Consulting/cus_insight_left_icon2.svg" },
            { text: "Invest on Social Media Customer Engagement", icon: "/assets/images/technology_Consulting/cus_insight_left_icon3.svg" },
            { text: "Leverage Customer Service Interactions", icon: "/assets/images/technology_Consulting/cus_insight_left_icon4.svg" },
            { text: "Focus on Customers’ Personal Tastes and Preferences", icon: "/assets/images/technology_Consulting/cus_insight_left_icon5.svg" },
            { text: "Build Comprehensive Contact Information", icon: "/assets/images/technology_Consulting/cus_insight_left_icon6.svg" },
          ],
          reverse: true,
        },
        {
          id: "marketing",
          tag: "Marketing & Sales",
          title: "Breaking down the barriers and guiding clients grow faster than the market",
          desc: "Unlock continuous marketing transformation and increase your revenue by 10x",
          img: "/assets/images/technology_Consulting/market_sales_image.jpg",
          bulletTitle: "We provide Dynamic Solutions to navigate you through the shifting market by",
          bullets: [
            { text: "Monitoring Continuous data improvement to yield better performance", icon: "/assets/images/technology_Consulting/market_sales_left_icon1.svg" },
            { text: "Analyzing changing patterns in competitor and consumer behavior", icon: "/assets/images/technology_Consulting/market_sales_left_icon2.svg" },
            { text: "Suggesting capability building or process changes in your organization", icon: "/assets/images/technology_Consulting/market_sales_left_icon3.svg" },
            { text: "Prioritizing KPI and assessing new benchmarks to stay ahead in the market", icon: "/assets/images/technology_Consulting/market_sales_left_icon4.svg" },
          ],
          reverse: false,
        },
        {
          id: "it",
          tag: "IT Consulting",
          title: "Guiding you to maximize operational excellence and build a scalable resilient organization",
          desc: "Reinvigorate your organization and find a new trajectory by exploring the right operating model",
          img: "/assets/images/technology_Consulting/itconsulting_image.jpg",
          bulletTitle: "Expand your business globally, strategically and successfully.",
          bullets: [
            { text: "Achieve higher and faster Capital Excellence", icon: "/assets/images/technology_Consulting/it_consulting_left_icon1.svg" },
            { text: "Unlock the full potential through Operations Transformation", icon: "/assets/images/technology_Consulting/it_consulting_left_icon2.svg" },
            { text: "Invest in right technology to scale seamlessly", icon: "/assets/images/technology_Consulting/it_consulting_left_icon3.svg" },
            { text: "Find the right people with passion driven towards a better future", icon: "/assets/images/technology_Consulting/it_consulting_left_icon4.svg" },
          ],
          reverse: true,
        }
      ].map((section) => (
        <Fragment key={section.id}>
          <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#444] mb-2">
                {section.tag}
              </h3>
              <h2 className="text-[28px] md:text-[34px] font-black text-[#2B2B2B] leading-[1.2] lg:leading-[38px] mb-4 tracking-tight max-w-3xl mx-auto">
                {section.title}
              </h2>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] max-w-3xl mx-auto">
                {section.desc}
              </p>
            </div>

            {/* Content Row Split */}
            <div className={clsx(
              "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            )}>
              {/* Image Column */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image 
                  src={section.img} 
                  alt={section.tag} 
                  width={600} 
                  height={500} 
                  className="w-full h-auto object-contain" 
                />
              </div>

              {/* Text & Bullets Column */}
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#2B2B2B] mb-8 leading-snug">
                  {section.bulletTitle}
                </h3>
                
                {/* Clean, Flat Inline List */}
                <ul className="space-y-5 mb-8">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-5">
                      <Image 
                        src={item.icon} 
                        alt="" 
                        width={25} 
                        height={25} 
                        className="flex-shrink-0 object-contain" 
                      />
                      <p className="text-[16px] text-[#444] font-medium leading-tight">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Left-aligned Rectangular Button */}
                <GetProposalButton className="btn consulted_btn bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors rounded-none w-[300px] h-[60px] flex items-center justify-center mt-8" />
              </div>
            </div>

          </div>
          </section>

          {section.id === "marketing" && (
            <section className="py-[60px] bg-[#E3F2FD]">
              {/* Speed Learning Banner */}
              <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                <div className="flex flex-row items-center justify-start gap-8 md:gap-10">
                  {/* Logo on the left */}
                  <div className="flex-shrink-0">
                    <Image 
                      src="/assets/images/technology_Consulting/speedlearning_logo.png" 
                      alt="Speed Learning" 
                      width={110} 
                      height={110} 
                      className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] object-contain rounded-[24px]" 
                    />
                  </div>
                  
                  {/* Content block on the right */}
                  <div className="text-left flex flex-col justify-center">
                    <h2 className="text-[18px] md:text-[25px] font-medium text-[#2B2B2B] leading-tight md:leading-snug">
                      See how Speed Learning App has increased their revenue by <strong className="font-bold">15x</strong>
                      <br className="hidden md:inline" /> by partnering with us
                    </h2>
                    <Link 
                      href="/case-studies/speedlearning" 
                      className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-bold text-[#2B2B2B] hover:text-blue-700 transition-colors mt-3"
                    >
                      Read more <span className="text-[17px] leading-none">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Fragment>
      ))}

    </div>
  );
}
