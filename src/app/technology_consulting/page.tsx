"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import GetProposalButton from "@/components/ui/GetProposalButton";

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
  { name: "Aerospace and Defence", icon: "/assets/images/technology_Consulting/industries_solution_icon2.svg" },
  { name: "Chemicals", icon: "/assets/images/technology_Consulting/industries_solution_icon3.svg" },
  { name: "Consumer Products", icon: "/assets/images/technology_Consulting/industries_solution_icon4.svg" },
  { name: "Construction", icon: "/assets/images/technology_Consulting/industries_solution_icon5.svg" },
  { name: "Education", icon: "/assets/images/technology_Consulting/industries_solution_icon6.svg" },
  { name: "Financial Institutions", icon: "/assets/images/technology_Consulting/industries_solution_icon7.svg" },
  { name: "Healthcare Service", icon: "/assets/images/technology_Consulting/industries_solution_icon8.svg" },
  { name: "Insurance", icon: "/assets/images/technology_Consulting/industries_solution_icon9.svg" },
  { name: "Oil and Gas", icon: "/assets/images/technology_Consulting/industries_solution_icon10.svg" },
  { name: "Public and Social Sector", icon: "/assets/images/technology_Consulting/industries_solution_icon11.svg" },
  { name: "Pharmaceuticals", icon: "/assets/images/technology_Consulting/industries_solution_icon12.svg" },
  { name: "Real Estate", icon: "/assets/images/technology_Consulting/industries_solution_icon13.svg" },
  { name: "Retail", icon: "/assets/images/technology_Consulting/industries_solution_icon14.svg" },
  { name: "Social Networking", icon: "/assets/images/technology_Consulting/industries_solution_icon15.svg" },
  { name: "Safety and Research", icon: "/assets/images/technology_Consulting/industries_solution_icon16.svg" },
  { name: "Sports", icon: "/assets/images/technology_Consulting/industries_solution_icon17.svg" },
  { name: "Travel and Tourism", icon: "/assets/images/technology_Consulting/industries_solution_icon18.svg" },
  { name: "Technology, Media & Telecom", icon: "/assets/images/technology_Consulting/industries_solution_icon19.svg" },
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
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const displayedIndustries = showAllIndustries ? INDUSTRIES : INDUSTRIES.slice(0, 10);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-blue-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                Creating a change that matters, by providing thoughtful solutions through technology
              </h1>
              <GetProposalButton className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1" />
            </div>
            <div className="w-full lg:w-1/2 relative">
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Image
                  src="/assets/images/technology_Consulting/banner_rigth_image.jpg"
                  alt="Tech Consulting Hero"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smarter services to balance today’s needs with tomorrow’s opportunities</h2>
            <p className="text-lg text-gray-600">
              Our world class consultants guide our customers to solve complex business challenges by providing novel strategic objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SMARTER_SERVICES.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <Image src={item.icon} alt={item.title} width={64} height={64} className="mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propel Business */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our approach to propel your business towards the next breakthrough</h2>
            <p className="text-lg text-gray-300">
              Attain the outcomes that are most critical to help you run and transform your business through our unique set of process.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {PROPEL_STAGES.map((stage, index) => (
              <div key={index} className="flex flex-col items-center flex-1 min-w-[150px] relative group">
                <div className="bg-gray-800 p-6 rounded-2xl w-full text-center border border-gray-700 hover:border-blue-500 transition-colors mb-4 relative z-10">
                  <Image src={stage.icon} alt={stage.title} width={48} height={48} className="mx-auto mb-4 filter invert" />
                  <p className="font-semibold text-sm">{stage.title}</p>
                </div>
                {index < PROPEL_STAGES.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-600 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Industries we provide solutions for</h2>
          
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <AnimatePresence>
              {displayedIndustries.map((ind, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <Image src={ind.icon} alt={ind.name} width={48} height={48} className="mb-4 object-contain" />
                  <p className="font-semibold text-gray-800 text-sm">{ind.name}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllIndustries(!showAllIndustries)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              {showAllIndustries ? "Show Less" : "More Industries"}
            </button>
          </div>
        </div>
      </section>

      {/* Digital Transformation Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Digital Transformation</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reinvent and accelerate your digital transformation journey</h2>
            <p className="text-lg text-gray-600">
              We help customers experience stunning digital growth and thrive in the digital era.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={clsx(
                      "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                      activeTab === tab.id ? "bg-blue-600 text-white shadow-lg" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <div className={clsx("p-2 rounded-lg", activeTab === tab.id ? "bg-white/20" : "bg-white")}>
                      <Image src={tab.icon} alt={tab.title} width={24} height={24} className={activeTab === tab.id ? "filter brightness-0 invert" : ""} />
                    </div>
                    <span className="font-bold">{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                {TABS.map((tab) => activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-50 p-8 lg:p-16 rounded-3xl h-full flex flex-col justify-center border border-blue-100"
                  >
                    <h3 className="text-3xl font-extrabold text-blue-900 mb-6">{tab.title}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {tab.desc}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <GetProposalButton className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg" />
          </div>
        </div>
      </section>

      {/* Why Digitize */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Digitize?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center px-8 border-r-0 md:border-r border-gray-700">
              <h3 className="text-7xl font-black text-blue-500 mb-6">96%</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-md mx-auto">
                of leaders say the pandemic will speed their digital transformation by an average of 5.3 years
              </p>
            </div>
            <div className="text-center px-8">
              <h3 className="text-7xl font-black text-blue-500 mb-6">70%</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-md mx-auto">
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
          reverse: false,
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
          reverse: true,
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
          reverse: false,
        }
      ].map((section, idx) => (
        <section key={section.id} className={clsx("py-20", idx % 2 === 0 ? "bg-white" : "bg-gray-50")}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h3 className="text-blue-600 font-bold uppercase tracking-wider mb-2">{section.tag}</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-lg text-gray-600">{section.desc}</p>
            </div>
            <div className={clsx("flex flex-col gap-12 items-center", section.reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
              <div className="w-full lg:w-1/2">
                <Image src={section.img} alt={section.tag} width={600} height={500} className="w-full h-auto rounded-3xl shadow-xl" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">{section.bulletTitle}</h3>
                <ul className="space-y-6 mb-8">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <Image src={item.icon} alt="" width={32} height={32} className="flex-shrink-0 mt-1" />
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </li>
                  ))}
                </ul>
                <GetProposalButton className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Speed Learning Banner */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left bg-blue-700/50 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm shadow-2xl">
            <div className="w-full lg:w-1/4 flex justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <Image src="/assets/images/technology_Consulting/speedlearning_logo.png" alt="Speed Learning" width={150} height={150} className="w-32 h-32 object-contain" />
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                See how Speed Learning App has increased their revenue by <span className="text-yellow-400 font-black text-5xl">15x</span> by partnering with us
              </h2>
              <Link href="/case-studies/speedlearning" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors group">
                Read Case Study
                <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
