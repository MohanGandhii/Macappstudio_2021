"use client"

import React from "react"
import Image from "next/image"

// ─── CARD ICONS ──────────────────────────────────────────────────────────────

const IpIcon = () => (
  <svg
    className="h-8 w-8 text-[#7C3AED]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" strokeWidth="2.5" />
    <circle cx="17" cy="17" r="4.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <text
      x="15.2"
      y="19.7"
      fontSize="8"
      fontWeight="800"
      fill="currentColor"
      stroke="none"
      fontFamily="Outfit, sans-serif"
    >
      c
    </text>
  </svg>
)

const CodeIcon = () => (
  <svg
    className="h-8 w-8 text-[#10B981]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const RoadmapIcon = () => (
  <svg
    className="h-8 w-8 text-[#F59E0B]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
    <path d="M9 3v15" />
    <path d="M15 6v15" />
    <path
      d="M12 4c-1.38 0-2.5 1.12-2.5 2.5 0 1.88 2.5 5 2.5 5s2.5-3.12 2.5-5c0-1.38-1.12-2.5-2.5-2.5z"
      fill="#F59E0B"
      stroke="none"
    />
    <circle cx="12" cy="6.5" r="0.8" fill="white" />
  </svg>
)

const InfrastructureIcon = () => (
  <svg
    className="h-8 w-8 text-[#0052FF]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 10h-.01M17 14h.01M16 10a5 5 0 0 0-9.58-2.03A5 5 0 0 0 7 18h11a4 4 0 0 0 0-8z" />
    <rect x="10" y="12.5" width="4" height="3" rx="0.8" fill="currentColor" stroke="none" />
    <path d="M11 12.5V11a1 1 0 0 1 2 0v1.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

export default function OwnershipDetails() {
  const cards = [
    {
      title: "You Own The IP",
      desc: "Full ownership of the intellectual property. It's 100% yours, always.",
      iconBg: "bg-[#F3EAFF]",
      icon: <IpIcon />,
      image: "/assets/images/resources/11/image 1883.png",
    },
    {
      title: "You Own The Code",
      desc: "Clean, well-structured code handed over to you with complete rights.",
      iconBg: "bg-[#EAFDF5]",
      icon: <CodeIcon />,
      image: "/assets/images/resources/11/image 1884 (3).png",
    },
    {
      title: "You Own The Roadmap",
      desc: "You decide what's next. We help you get there with the right technology.",
      iconBg: "bg-[#FFF6D8]/70",
      icon: <RoadmapIcon />,
      image: "/assets/images/resources/11/image 1885 (1).png",
    },
    {
      title: "You Own The Infrastructure",
      desc: "Your data, your servers, your environment—you stay in control.",
      iconBg: "bg-[#EAF2FF]",
      icon: <InfrastructureIcon />,
      image: "/assets/images/resources/11/image 1886 (1).png",
    },
  ]

  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8 bg-white">
      <div className="mx-auto w-full max-w-[1380px]">
        {/* ── 4 Ownership Cards Grid ── */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-[20px] border border-[#ECECF3] bg-white p-4 shadow-[0_4px_25px_rgba(0,0,0,0.012)] transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] md:p-5"
            >
              {/* Card Header (Icon + Title/Description column) */}
              <div className="flex items-start gap-3 md:gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] md:h-14 md:w-14 ${card.iconBg}`}
                >
                  <div className="flex items-center justify-center scale-90 md:scale-100">
                    {card.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4
                    className="text-[18px] font-extrabold leading-[1.2] tracking-tight text-[#0F172A] md:text-[20px]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {card.title}
                  </h4>
                  <p className="mt-1.5 text-[13px] font-medium leading-[1.45] tracking-tight text-slate-500 md:text-[13.5px]">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Illustration */}
              <div className="relative mt-4 h-[150px] w-full select-none md:mt-4 md:h-[140px] lg:h-[160px]">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom transition-all duration-500 group-hover:scale-110 group-hover:brightness-105 origin-bottom"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Partner Banner ── */}
        <div className="mt-8 w-full bg-[#FAFAFC] rounded-[24px] p-6 lg:p-8 flex flex-col xl:flex-row xl:items-center gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] border border-[#F0F0F5]">
          
          {/* Left Block */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="w-[60px] h-[60px] rounded-full bg-[#F5F3FF] flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="text-[18px] lg:text-[20px] font-extrabold text-[#0F172A] leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              We're Your Partner,<br />Not Your Vendor.
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden xl:block w-[1px] h-14 bg-gray-200 shrink-0"></div>
          
          {/* Right Blocks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <p className="text-[12.5px] font-semibold text-[#0F172A] leading-snug">
                We work with you,<br/>
                <span className="text-slate-500 font-medium">not for you.</span>
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <p className="text-[12.5px] font-semibold text-[#0F172A] leading-snug">
                Transparent process.<br/>
                <span className="text-slate-500 font-medium">No hidden surprises.</span>
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <p className="text-[12.5px] font-semibold text-[#0F172A] leading-snug">
                Clear communication.<br/>
                <span className="text-slate-500 font-medium">Always.</span>
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <p className="text-[12.5px] font-semibold text-[#0F172A] leading-snug">
                Long-term partnership<br/>
                <span className="text-slate-500 font-medium">focused on your success.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}