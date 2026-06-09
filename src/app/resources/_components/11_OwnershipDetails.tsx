"use client";

import React from "react";
import Image from "next/image";

// ─── CARD ICONS ──────────────────────────────────────────────────────────────

const IpIcon = () => (
  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11.5" r="3.5" strokeWidth="2" />
    <path d="M13 11a1.5 1.5 0 1 0 0 .7" strokeWidth="2" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const RoadmapIcon = () => (
  <svg className="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
    <path d="M9 3v15" />
    <path d="M15 6v15" />
    <circle cx="12" cy="10" r="2.2" fill="currentColor" />
  </svg>
);

const InfrastructureIcon = () => (
  <svg className="w-6 h-6 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-.01M17 14h.01M16 10a5 5 0 0 0-9.58-2.03A5 5 0 0 0 7 18h11a4 4 0 0 0 0-8z" />
    <rect x="11.5" y="13.5" width="3" height="3.5" rx="0.5" fill="none" strokeWidth="2" />
  </svg>
);

// ─── BANNER ICONS ────────────────────────────────────────────────────────────

const ShieldPartnerIcon = () => (
  <svg className="w-6 h-6 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M9 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-4 h-4 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-4 h-4 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="8" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="10" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-4 h-4 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function OwnershipDetails() {
  const cards = [
    {
      title: "You Own The IP",
      desc: "Full ownership of the intellectual property. It's 100% yours, always.",
      iconBg: "bg-[#F3EAFF]",
      icon: <IpIcon />,
      image: "/assets/images/resources/own_ip.png",
    },
    {
      title: "You Own The Code",
      desc: "Clean, well-structured code handed over to you with complete rights.",
      iconBg: "bg-[#EAFDF5]",
      icon: <CodeIcon />,
      image: "/assets/images/resources/own_code.png",
    },
    {
      title: "You Own The Roadmap",
      desc: "You decide what's next. We help you get there with the right technology.",
      iconBg: "bg-[#FFF6D8]/70",
      icon: <RoadmapIcon />,
      image: "/assets/images/resources/own_roadmap.png",
    },
    {
      title: "You Own The Infrastructure",
      desc: "Your data, your servers, your environment—you stay in control.",
      iconBg: "bg-[#EAF2FF]",
      icon: <InfrastructureIcon />,
      image: "/assets/images/resources/own_infrastructure.png",
    },
  ];

  const bannerItems = [
    {
      text: (
        <>
          We work with you,<br />not for you.
        </>
      ),
      icon: <UsersIcon />,
    },
    {
      text: (
        <>
          Transparent process.<br />No hidden surprises.
        </>
      ),
      icon: <LockIcon />,
    },
    {
      text: (
        <>
          Clear communication.<br />Always.
        </>
      ),
      icon: <ChatIcon />,
    },
    {
      text: (
        <>
          Long-term partnership<br />focused on your success.
        </>
      ),
      icon: <ShieldCheckIcon />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 bg-white flex flex-col gap-10">
      <div className="max-w-[1380px] mx-auto w-full flex flex-col gap-10">
        
        {/* ── 4 Ownership Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="border border-[#ECECF3] rounded-[24px] bg-white p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] transition-all"
            >
              {/* Card Header (Icon & Title/Description) */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 
                    className="text-[#0F172A] font-extrabold text-[15px] md:text-[16px] tracking-tight leading-snug"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-[12.5px] md:text-[13px] leading-[1.5] font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Illustration */}
              <div className="relative w-full h-[155px] mt-6 select-none bg-[#F9FBFC]/50 rounded-2xl overflow-hidden border border-slate-100/40 p-2">
                <Image 
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom"
                  unoptimized
                />
              </div>

            </div>
          ))}
        </div>

        {/* ── Bottom Partnership Banner ── */}
        <div className="w-full bg-[#F8FAFC]/90 border border-[#E8ECF5] rounded-[24px] p-6 lg:py-5 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
          
          {/* Left Heading Block */}
          <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-full bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
              <ShieldPartnerIcon />
            </div>
            <h3 
              className="text-[#0F172A] font-extrabold text-[17px] md:text-[19px] tracking-tight whitespace-nowrap"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              We're Your Partner, Not Your Vendor.
            </h3>
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block w-[1px] h-[36px] bg-slate-200/80" />

          {/* Right Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5 w-full lg:w-auto flex-grow justify-items-stretch">
            {bannerItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 w-full justify-start sm:justify-center xl:justify-start"
              >
                <div className="w-8.5 h-8.5 rounded-full bg-[#EBF5FF] text-[#0052FF] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-[#334155] text-[12.5px] md:text-[13px] font-bold leading-snug tracking-wide">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
