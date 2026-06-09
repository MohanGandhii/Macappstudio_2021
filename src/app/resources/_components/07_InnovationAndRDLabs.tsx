"use client";

import React from "react";
import Image from "next/image";

// ── CUSTOM ICONS ──
const RocketIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
    <path d="M12 12l9-9-3 12-4 1-2-2-1-4z" />
    <path d="M9 15l-3-3" />
  </svg>
);

const LegacyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const AiIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const ScaleUsersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SecurityShieldIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const AlignedIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const TagAiIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 1h6M9 23h6M1 9v6M23 9v6" />
  </svg>
);

const TagAutomationIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const TagCloudIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const TagDataIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const TagBlockchainIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
  </svg>
);

const TagIotIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.58 16.14a6 6 0 0 1 6.84 0" />
    <circle cx="12" cy="20" r="2" />
  </svg>
);



const FloatingTrendIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m23 6-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
);

export default function InnovationAndRDLabs() {
  const executionItems = [
    { text: "Accelerate product delivery", icon: <RocketIcon /> },
    { text: "Modernize legacy systems", icon: <LegacyIcon /> },
    { text: "Build AI & data-driven solutions", icon: <AiIcon /> },
    { text: "Scale engineering capacity", icon: <ScaleUsersIcon /> },
    { text: "Reduce hiring & onboarding delays", icon: <ClockIcon /> },
    { text: "Enterprise-grade security & quality", icon: <SecurityShieldIcon /> },
    { text: "Aligned with your processes & goals", icon: <AlignedIcon /> },
  ];

  const rdTags = [
    { name: "AI / ML", icon: <TagAiIcon /> },
    { name: "Automation", icon: <TagAutomationIcon /> },
    { name: "Cloud", icon: <TagCloudIcon /> },
    { name: "Data Engineering", icon: <TagDataIcon /> },
    { name: "Blockchain", icon: <TagBlockchainIcon /> },
    { name: "IoT", icon: <TagIotIcon /> },
  ];

  const teamCards = [
    {
      title: "Startup Team",
      subtitle: "Perfect for MVPs",
      themeColor: "text-purple-600",
      themeBg: "bg-[#F3EAFF]",
      bulletColor: "text-[#7C3AED]",
      bullets: ["1 Designer", "2 Developers", "1 QA Engineer", "Weekly Reports"],
      image: "/assets/images/resources/squads_startup.png",
      floatingIcon: <RocketIcon />,
      iconBg: "bg-[#F3EAFF]",
      iconColor: "text-[#7C3AED]",
    },
    {
      title: "Growth Team",
      subtitle: "Perfect for scaling startups",
      themeColor: "text-[#0052FF]",
      themeBg: "bg-[#EAF2FF]",
      bulletColor: "text-[#0052FF]",
      bullets: ["1 PM", "1 Designer", "4 Developers", "1 QA | 1 Architect"],
      image: "/assets/images/resources/squads_growth.png",
      floatingIcon: <FloatingTrendIcon />,
      iconBg: "bg-[#EAF2FF]",
      iconColor: "text-[#0052FF]",
    },
    {
      title: "Enterprise Team",
      subtitle: "For complex & large-scale products",
      themeColor: "text-emerald-600",
      themeBg: "bg-[#E8F7ED]",
      bulletColor: "text-[#10B981]",
      bullets: ["Dedicated Squad", "Product Leadership", "Architecture Team", "QA & DevOps Team"],
      image: "/assets/images/resources/squads_enterprise.png",
      floatingIcon: <SecurityShieldIcon />,
      iconBg: "bg-[#E8F7ED]",
      iconColor: "text-[#10B981]",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white flex flex-col gap-16">
      
      {/* ── PART 1: TOP TWO DUAL CARDS ── */}
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        
        {/* Card 1: Execution Partner */}
        <div className="border border-[#ECECF3] rounded-[32px] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col md:flex-row justify-between items-stretch gap-6 overflow-hidden p-0">
          {/* Left Column content */}
          <div className="flex-1 flex flex-col justify-between text-left p-6 sm:p-8 md:p-10 md:pr-4">
            <div>
              <span 
                className="text-[11px] font-bold text-[#0052FF] uppercase tracking-[0.15em] mb-3 block"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Why Enterprises Choose MacAppStudio
              </span>
              <h3 
                className="text-[#0F172A] font-extrabold text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-3"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                More Than A Vendor.
                <br />
                Your <span className="text-[#0052FF]">Execution Partner.</span>
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed font-medium mb-6">
                We become your extended team and own the execution from start to scale.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {executionItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-[#EAF2FF] text-[#0052FF]">
                    {item.icon}
                  </div>
                  <span className="text-[#334155] text-[13.5px] font-bold leading-none">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skyscraper Building Image sitting flush */}
          <div className="w-full md:w-[44%] relative min-h-[300px] md:min-h-auto select-none">
            <Image
              src="/assets/images/resources/execution_partner_building.png"
              alt="MacAppStudio execution partner tower"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Card 2: Innovation & R&D Lab */}
        <div className="border border-[#ECECF3] rounded-[32px] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col md:flex-row justify-between items-stretch gap-6 overflow-hidden p-0">
          {/* Left Column content */}
          <div className="flex-1 flex flex-col justify-between text-left p-6 sm:p-8 md:p-10 md:pr-4">
            <div>
              <span 
                className="text-[11px] font-bold text-[#0052FF] uppercase tracking-[0.15em] mb-3 block"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Our Innovation & R&D Lab
              </span>
              <h3 
                className="text-[#0F172A] font-extrabold text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-3"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Building <span className="text-[#0052FF]">What's Next.</span>
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed font-medium mb-8">
                Our R&D team explores emerging technologies to keep your product future-ready.
              </p>
            </div>

            {/* Grid of 6 Tags in 3 columns */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {rdTags.map((tag, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2.5 py-3 rounded-2xl border border-[#ECECF3] bg-white hover:border-[#0052FF]/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all"
                >
                  <div className="text-[#0052FF] shrink-0">
                    {tag.icon}
                  </div>
                  <span className="text-[#1E293B] text-[11px] md:text-[12px] font-extrabold leading-none">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* R&D Lab Illustration Image sitting flush */}
          <div className="w-full md:w-[44%] relative min-h-[300px] md:min-h-auto select-none">
            <Image
              src="/assets/images/resources/innovation_rd_lab.png"
              alt="Innovation & R&D Lab man pointing at hologram"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          </div>
        </div>

      </div>

    </section>
  );
}
