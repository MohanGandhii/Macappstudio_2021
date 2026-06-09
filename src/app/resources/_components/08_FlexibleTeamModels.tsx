"use client";

import React from "react";
import Image from "next/image";

// ─── ICON COMPONENTS ──────────────────────────────────────────────────────────

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
    <path d="M12 12l9-9-3 12-4 1-2-2-1-4z" />
    <path d="M9 15l-3-3" />
  </svg>
);

const FloatingTrendIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m23 6-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
);

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function FlexibleTeamModels() {
  const teamCards = [
    {
      title: "Startup Team",
      desc: "Perfect for founders building their MVP.",
      themeColor: "text-[#6D28D9]",
      badgeBg: "bg-[#F3EAFF]",
      borderClass: "border-[#E9D5FF]",
      buttonBgClass: "bg-[#6D28D9]",
      buttonText: "Build My MVP Team",
      image: "/assets/images/resources/squads_startup.png",
      BadgeIcon: RocketIcon,
      includes: [
        "Product Strategy",
        "UI/UX Design",
        "Full Stack Development",
        "QA Testing",
        "Weekly Reviews",
      ],
      idealFor: [
        { text: "MVPs", Icon: UserIcon },
        { text: "Startup founders", Icon: UserIcon },
        { text: "First product launch", Icon: ShieldCheckIcon },
      ],
    },
    {
      title: "Growth Team",
      desc: "For products gaining traction.",
      themeColor: "text-[#2563EB]",
      badgeBg: "bg-[#EFF6FF]",
      borderClass: "border-[#BFDBFE]",
      buttonBgClass: "bg-[#2563EB]",
      buttonText: "Scale My Product",
      image: "/assets/images/resources/squads_growth.png",
      BadgeIcon: FloatingTrendIcon,
      includes: [
        "Product Manager",
        "Dedicated Developers",
        "QA Automation",
        "Architecture Guidance",
        "Sprint Planning",
      ],
      idealFor: [
        { text: "Scaling startups", Icon: ChartIcon },
        { text: "Series A / B companies", Icon: ShieldCheckIcon },
        { text: "Growing products", Icon: StarIcon },
      ],
    },
    {
      title: "Enterprise Team",
      desc: "For large-scale products and transformation initiatives.",
      themeColor: "text-[#16A34A]",
      badgeBg: "bg-[#ECFDF5]",
      borderClass: "border-[#A7F3D0]",
      buttonBgClass: "bg-[#16A34A]",
      buttonText: "Build Enterprise Team",
      image: "/assets/images/resources/squads_enterprise.png",
      BadgeIcon: BuildingIcon,
      includes: [
        "Dedicated Squad",
        "Product Leadership",
        "Architecture Team",
        "QA & DevOps",
        "R&D Support",
      ],
      idealFor: [
        { text: "Enterprises", Icon: BuildingIcon },
        { text: "CTO Offices", Icon: TargetIcon },
        { text: "Innovation Teams", Icon: LightbulbIcon },
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white flex flex-col gap-12">
      {/* Header */}
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-4">
        <h4 className="text-[#0052FF] font-bold text-[12px] md:text-[14px] tracking-[0.15em] uppercase">
          Flexible Team Models For Every Stage
        </h4>
        <h2 
          className="text-[#0F172A] font-extrabold text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.02em]" 
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Teams Built For Every Stage Of Growth
        </h2>
        <p className="text-[#64748B] text-[15px] md:text-[17px] leading-[1.6] max-w-[650px] mx-auto">
          Whether you're validating an idea, scaling a product, or running enterprise initiatives,
          we have a dedicated squad ready in 1-2 weeks.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {teamCards.map((card, idx) => (
          <div key={idx} className={`border ${card.borderClass} rounded-[24px] bg-white overflow-hidden flex flex-col shadow-sm transition-all hover:shadow-md`}>
            
            {/* Top Section */}
            <div className={`relative px-8 pt-8 pb-4 bg-white flex-shrink-0 h-[260px]`}>
              
              {/* Right Image */}
              <div className="absolute right-0 bottom-0 w-[65%] h-[90%]">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-contain object-bottom-right" 
                  unoptimized 
                />
              </div>

              {/* Left Content */}
              <div className="w-[60%] relative z-10 flex flex-col gap-4">
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full w-max ${card.badgeBg} ${card.themeColor}`}>
                  {(() => {
                    const BadgeIcon = card.BadgeIcon;
                    return <BadgeIcon className="w-[18px] h-[18px]" />;
                  })()}
                  <span className="font-bold text-[14px]">{card.title}</span>
                </div>
                {/* Desc */}
                <p className="text-[#475569] text-[13.5px] leading-[1.5] pr-2 font-medium mt-1">
                  {card.desc}
                </p>
              </div>

            </div>

            {/* Divider */}
            <div className={`h-[1px] w-full ${card.borderClass}`} />

            {/* Bottom Section */}
            <div className="p-8 flex flex-col gap-8 flex-grow bg-white">
              
              <div className="grid grid-cols-2 gap-4">
                {/* Includes Column */}
                <div className="flex flex-col gap-4">
                  <h5 className={`font-bold text-[14px] ${card.themeColor}`}>Includes</h5>
                  <ul className="flex flex-col gap-3.5">
                    {card.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-[16px] h-[16px] mt-[1.5px] shrink-0 ${card.themeColor}`} />
                          <span className="text-[13px] text-[#334155] font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Column */}
                <div className="flex flex-col gap-4 pl-2">
                  <h5 className={`font-bold text-[14px] ${card.themeColor}`}>Ideal For</h5>
                  <ul className="flex flex-col gap-3.5">
                    {card.idealFor.map((item, i) => {
                      const IdealForIcon = item.Icon;
                      return (
                        <li key={i} className="flex items-start gap-2.5">
                            <IdealForIcon className={`w-[16px] h-[16px] mt-[1.5px] shrink-0 ${card.themeColor}`} />
                            <span className="text-[13px] text-[#334155] font-medium leading-tight">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <button className={`mt-auto w-full py-[14px] rounded-[14px] text-white font-semibold text-[14.5px] flex items-center justify-center gap-2 ${card.buttonBgClass} shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-transform hover:opacity-90 cursor-pointer`}>
                {card.buttonText}
                <ArrowRightIcon className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
