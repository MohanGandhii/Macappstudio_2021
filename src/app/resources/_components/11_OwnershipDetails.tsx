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
    <section className="w-full bg-white px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1380px]">
        {/* ── 4 Ownership Cards Grid ── */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[32px] border border-[#ECECF3] bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.012)] transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] md:p-9"
            >
              {/* Card Header (Icon + Title/Description column) */}
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <div className="flex flex-col">
                  <h4
                    className="text-[19px] font-extrabold leading-snug tracking-tight text-[#0F172A] md:text-[20px]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {card.title}
                  </h4>
                  <p className="mt-2 text-[14px] font-semibold leading-[1.65] text-slate-500 md:text-[15px]">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Illustration */}
              <div className="relative mt-8 h-[200px] w-full select-none overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}