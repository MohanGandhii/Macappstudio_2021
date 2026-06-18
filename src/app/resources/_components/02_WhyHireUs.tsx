"use client";

import React from "react";

export default function WhyHireUs() {
  const items = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
      text: (
        <span className="whitespace-nowrap">
          Move Faster<br />
          than internal<br />
          teams
        </span>
      ),
      bgColor: "bg-[#F3EAFF]",
      textColor: "text-[#6D28D9]",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>,
      text: (
        <span className="whitespace-nowrap">
          Specialized<br />
          expertise on<br />
          demand
        </span>
      ),
      bgColor: "bg-[#F3EAFF]",
      textColor: "text-[#6D28D9]",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.86-8.24A1 1 0 0 1 14 3h3a1 1 0 0 1 1 1v3a1 1 0 0 1-.26.68A22 22 0 0 1 15 12z"/><path d="m13 8 3 3"/></svg>,
      text: (
        <span className="whitespace-nowrap">
          R&D /<br />
          Innovation<br />
          partner
        </span>
      ),
      bgColor: "bg-[#F0F5FF]",
      textColor: "text-[#1D4ED8]",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polygon points="12 15 14.5 16.5 13.8 13.5 16 11.5 13 11 12 8.5 11 11 8 11.5 10.2 13.5 9.5 16.5"/></svg>,
      text: (
        <span className="whitespace-nowrap">
          Dedicated<br />
          squads for critical<br />
          initiatives
        </span>
      ),
      bgColor: "bg-[#EAF7F0]",
      textColor: "text-[#047857]",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
      text: (
        <span className="whitespace-nowrap">
          Reduce risk &<br />
          deliver with<br />
          confidence
        </span>
      ),
      bgColor: "bg-[#EAF7F0]",
      textColor: "text-[#047857]",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 px-4 md:px-8 w-full">
      <div className="max-w-[1380px] mx-auto w-full">
        
        {/* Bordered card container */}
        <div className="w-full bg-[#FAFAFD] border border-[#ECECF3] rounded-[24px] p-6 md:p-8 flex flex-col xl:flex-row items-stretch gap-6 xl:gap-0 mx-auto">
          
          {/* Left Title Column */}
          <div className="w-full xl:w-[22%] flex flex-col justify-center text-left xl:pr-6 shrink-0">
            <h3 
              className="text-[17px] md:text-[19px] lg:text-[21px] font-extrabold text-[#0F172A] leading-[1.25] mb-2.5"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              <span className="whitespace-nowrap">
                Why Do Even Large<br />
                Companies Hire Us?
              </span>
            </h3>
            <p className="text-[12px] md:text-[13px] text-[#475569] leading-[1.6] font-medium">
              <span className="whitespace-nowrap">
                Because building products isn&apos;t just a<br />
                developer problem. It&apos;s an execution,<br />
                speed, innovation and focus problem.
              </span>
            </p>
          </div>

          {/* Right Metrics Flex Column with vertical lines */}
          <div className="w-full xl:w-auto flex-1 xl:border-l xl:border-gray-200/50 xl:pl-6 flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap gap-6 xl:gap-0 xl:divide-x divide-gray-200/50 items-start sm:items-center justify-between">
            {/* Metric Items */}
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3 md:gap-4 text-left w-full sm:w-[45%] xl:w-auto ${idx > 0 ? "xl:pl-6 xl:ml-2" : ""}`}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center shrink-0 ${item.bgColor} ${item.textColor}`}>
                  {item.icon}
                </div>

                {/* Text */}
                <span className="text-[12px] md:text-[13px] font-extrabold text-[#1E293B] leading-[1.3]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
