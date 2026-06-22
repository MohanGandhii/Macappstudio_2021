"use client";

import Image from "next/image";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { useModal } from "@/context/ModalContext";

const features = [
  {
    title: (
      <>
        Start in
        <br />
        <span className="whitespace-nowrap">1–2 Weeks</span>
      </>
    ),
    icon: "🚀",
    bg: "bg-[#F3EAFF]",
  },
  {
    title: (
      <>
        Weekly
        <br />
        <span className="whitespace-nowrap">Progress Updates</span>
      </>
    ),
    icon: "📊",
    bg: "bg-[#EAF2FF]",
  },
  {
    title: (
      <>
        Full Product
        <br />
        <span className="whitespace-nowrap">Ownership</span>
      </>
    ),
    icon: "🛡️",
    bg: "bg-[#E8F7ED]",
  },
  {
    title: (
      <>
        Transparent
        <br />
        <span className="whitespace-nowrap">Communication</span>
      </>
    ),
    icon: "💬",
    bg: "bg-[#FFF6D8]",
  },
  {
    title: (
      <>
        Flexible
        <br />
        <span className="whitespace-nowrap">Team Scaling</span>
      </>
    ),
    icon: "👥",
    bg: "bg-[#F3EAFF]",
  },
];


export default function ExecutionPartnerSection() {
  const { openProposalModal } = useModal();
  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8">
      <div className="max-w-[1380px] mx-auto border border-[#ECECF3] rounded-[24px] bg-white p-6 md:p-8 lg:p-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-extrabold text-[#0F172A] leading-[1.15] text-[32px] md:text-[44px] lg:text-[54px]">
            You focus on the vision.
            <br className="hidden sm:block" />

            <span className="relative inline-block text-[#2F63F5] mt-2 sm:mt-0">
              We handle the execution.

              <svg
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80%] sm:w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M5 8C70 3 230 3 295 8"
                  stroke="#2F63F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>
        {/* Features */}
        <div className="mt-12 border border-[#ECECF3] rounded-[20px] overflow-hidden bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 xl:px-6 py-6 ${index !== features.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-[#ECECF3]"
                    : ""
                  }`}
              >
                <div
                  className={`w-[58px] h-[58px] rounded-full flex items-center justify-center text-[24px] shrink-0 ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div className="text-[#111827] font-semibold text-[15px] xl:text-[17px] leading-[1.25]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="w-full bg-[#F6F8FD] rounded-[24px] flex flex-col md:flex-row items-stretch justify-between mt-8 relative overflow-hidden border border-[#ECECF3] shadow-sm">
          
          {/* Left Illustration */}
          <div className="relative w-full md:w-[280px] lg:w-[340px] xl:w-[420px] min-h-[160px] md:min-h-[180px] shrink-0 border-b md:border-b-0 md:border-r border-[#ECECF3]">
            <Image
              src="/assets/images/resources/4/IMG_20260611_102620.png"
              alt="Team High Five"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </div>

          {/* Middle Content & Buttons Wrapper */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between p-6 md:p-6 lg:p-8 gap-6 md:gap-4 lg:gap-8">
            {/* Middle Content */}
            <div className="flex-1 text-center md:text-left z-10">
              <h3 className="text-[#0F172A] font-extrabold text-[17px] md:text-[19px] xl:text-[21px] leading-tight mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                From CTO pressure to predictable product delivery.
              </h3>
              <p className="text-[#64748B] text-[13px] md:text-[14px] leading-relaxed max-w-[500px] mx-auto md:mx-0 font-medium">
                That's why startups, scaleups and enterprises trust
                <br className="hidden xl:block" /> MacAppStudio as their execution partner.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col gap-2.5 w-full md:w-[220px] lg:w-[260px] shrink-0 z-10">
              <button onClick={openProposalModal} className="w-full h-[46px] rounded-[14px] bg-[#2F63F5] hover:bg-[#2552CC] transition-colors text-white font-semibold text-[13px] lg:text-[14px] flex items-center justify-center gap-2.5 shadow-sm">
                <FiCalendar className="w-[18px] h-[18px]" />
                Book Free Discovery Call
              </button>

              <button className="invisible pointer-events-none w-full h-[46px] rounded-[14px] bg-white border border-[#ECECF3] hover:border-gray-300 hover:bg-gray-50 transition-colors text-[#2F63F5] font-semibold text-[13px] lg:text-[14px] flex items-center justify-center gap-2.5 shadow-sm">
                <FiUsers className="w-[18px] h-[18px]" />
                Build My Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
