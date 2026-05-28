"use client";

import React from "react";
import Image from "next/image";

const DELIVERY_STEPS = [
  { title: "Customer Enquiry",        icon: "/assets/images/how_we_do_it/small_icon1.svg" },
  { title: "Proposal",                icon: "/assets/images/how_we_do_it/small_icon2.svg" },
  { title: "Project Kickoff",         icon: "/assets/images/how_we_do_it/small_icon3.svg" },
  { title: "Requirement Analysis",    icon: "/assets/images/how_we_do_it/small_icon4.svg" },
  { title: "Design",                  icon: "/assets/images/how_we_do_it/small_icon5.svg" },
  { title: "Database Development",    icon: "/assets/images/how_we_do_it/small_icon6.svg" },
  { title: "Back end Web Development",icon: "/assets/images/how_we_do_it/small_icon7.svg" },
  { title: "Front end Web Development",icon: "/assets/images/how_we_do_it/small_icon8.svg" },
  { title: "Android App Development", icon: "/assets/images/how_we_do_it/small_icon9.svg" },
  { title: "iOS App Development",     icon: "/assets/images/how_we_do_it/small_icon10.svg" },
  { title: "FR Testing",              icon: "/assets/images/how_we_do_it/small_icon11.svg" },
  { title: "NFR Testing",             icon: "/assets/images/how_we_do_it/small_icon12.svg" },
  { title: "Build & Release",         icon: "/assets/images/how_we_do_it/small_icon13.svg" },
  { title: "Development Closure",     icon: "/assets/images/how_we_do_it/small_icon14.svg" },
  { title: "Support",                 icon: "/assets/images/how_we_do_it/small_icon15.svg" },
];

const ROW1 = DELIVERY_STEPS.slice(0, 5);
const ROW2 = DELIVERY_STEPS.slice(5, 10);
const ROW3 = DELIVERY_STEPS.slice(10, 15);

function CircleStep({ step }: { step: { title: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center text-center w-full">
      <div className="w-[76px] h-[76px] bg-white border border-[#222] rounded-full flex items-center justify-center mb-3">
        <Image 
          src={step.icon} 
          alt={step.title} 
          width={36} 
          height={36} 
          className="object-contain brightness-0 opacity-100" 
        />
      </div>
      <span 
        className="text-[13px] font-bold text-[#111] leading-snug max-w-[110px] select-none"
        style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
      >
        {step.title}
      </span>
    </div>
  );
}

function BoxStep({ step }: { step: { title: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full px-2 py-4 select-none">
      <div className="h-[48px] flex items-center justify-center mb-2">
        <Image 
          src={step.icon} 
          alt={step.title} 
          width={44} 
          height={44} 
          className="object-contain brightness-0 opacity-100" 
        />
      </div>
      <span 
        className="text-[13px] font-bold text-[#111] leading-snug max-w-[120px]"
        style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
      >
        {step.title}
      </span>
    </div>
  );
}

function MobileCircleStep({ step }: { step: { title: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] bg-white border border-[#222] rounded-full flex items-center justify-center mb-1.5 shrink-0 relative z-10">
        <Image 
          src={step.icon} 
          alt={step.title} 
          width={22} 
          height={22} 
          className="object-contain sm:w-6 sm:h-6 brightness-0 opacity-100" 
        />
      </div>
      <span 
        className="text-[8.5px] sm:text-[10px] font-bold text-[#111] leading-tight max-w-[55px] sm:max-w-[70px] select-none text-center"
        style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
      >
        {step.title}
      </span>
    </div>
  );
}

function MobileBoxStep({ step }: { step: { title: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full px-1.5 py-2 select-none">
      <div className="h-[36px] sm:h-[44px] flex items-center justify-center mb-1">
        <Image 
          src={step.icon} 
          alt={step.title} 
          width={32} 
          height={32} 
          className="object-contain sm:w-[38px] sm:h-[38px] brightness-0 opacity-100" 
        />
      </div>
      <span 
        className="text-[9.5px] sm:text-[11px] font-bold text-[#111] leading-snug max-w-[90px] sm:max-w-[110px] text-center"
        style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
      >
        {step.title}
      </span>
    </div>
  );
}

function MobileDashedArrow() {
  return (
    <div className="flex-1 h-[44px] sm:h-[56px] flex items-center relative min-w-[8px] z-0">
      <div className="w-full border-t-2 border-dashed border-[#222]" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-y-[4px] border-l-[#222] border-y-transparent" />
    </div>
  );
}

export default function DeliveryFlowchartSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 flex flex-col items-center">
      
      {/* Mobile/Tablet Flowchart Layout - visible below lg */}
      <div className="lg:hidden w-[calc(100%-32px)] max-w-[500px] mx-auto relative flex flex-col gap-y-8 sm:gap-y-12 py-4 select-none z-0">
        
        {/* Loop 1: Row 1 Design (right) to Row 2 Box (right) - sharp 90 degree corners, z-0 to render above beige background */}
        <div className="absolute top-[22px] sm:top-[28px] right-[4%] w-[8%] h-[125px] sm:h-[155px] border-t-2 border-r-2 border-b-2 border-dashed border-[#222] pointer-events-none z-0">
          <div className="absolute left-0 bottom-0 -translate-x-[4px] translate-y-1/2 w-0 h-0 border-r-[6px] border-y-[4px] border-r-[#222] border-y-transparent" />
        </div>

        {/* Loop 2: Row 2 Box (left) to Row 3 FR Testing (left) - sharp 90 degree corners, z-0 to render above beige background */}
        <div className="absolute bottom-[22px] sm:bottom-[28px] left-[4%] w-[8%] h-[125px] sm:h-[155px] border-b-2 border-l-2 border-t-2 border-dashed border-[#222] pointer-events-none z-0">
          <div className="absolute right-0 bottom-0 translate-x-[4px] translate-y-1/2 w-0 h-0 border-l-[6px] border-y-[4px] border-l-[#222] border-y-transparent" />
        </div>

        {/* ROW 1: 5 Circles with Dashed Arrows */}
        <div className="flex items-start justify-between w-full px-[8%] relative bg-transparent z-10">
          <MobileCircleStep step={ROW1[0]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW1[1]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW1[2]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW1[3]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW1[4]} />
        </div>

        {/* ROW 2: Solid Box with 3/2 split layout */}
        <div className="w-[84%] mx-auto bg-white border border-[#222] flex flex-col rounded-none z-10 relative">
          {/* Sub-row 1: 3 columns (Database, Back end, Front end) */}
          <div className="flex w-full border-b border-[#222] h-[100px] sm:h-[120px]">
            <div className="flex-1 flex justify-center items-center h-full border-r border-[#222]">
              <MobileBoxStep step={ROW2[0]} />
            </div>
            <div className="flex-1 flex justify-center items-center h-full border-r border-[#222]">
              <MobileBoxStep step={ROW2[1]} />
            </div>
            <div className="flex-1 flex justify-center items-center h-full">
              <MobileBoxStep step={ROW2[2]} />
            </div>
          </div>
          {/* Sub-row 2: 2 columns (Android, iOS) */}
          <div className="flex w-full h-[100px] sm:h-[120px]">
            <div className="flex-1 flex justify-center items-center h-full border-r border-[#222]">
              <MobileBoxStep step={ROW2[3]} />
            </div>
            <div className="flex-1 flex justify-center items-center h-full">
              <MobileBoxStep step={ROW2[4]} />
            </div>
          </div>
        </div>

        {/* ROW 3: 5 Circles with Dashed Arrows */}
        <div className="flex items-start justify-between w-full px-[8%] relative bg-transparent z-10">
          <MobileCircleStep step={ROW3[0]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW3[1]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW3[2]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW3[3]} />
          <MobileDashedArrow />
          <MobileCircleStep step={ROW3[4]} />
        </div>

      </div>

      {/* Desktop/Tablet Flowchart Layout - hidden below lg */}
      <div className="hidden lg:block w-full max-w-[1200px] px-4 lg:px-8">
        <div className="flex justify-center py-6">
          <div className="w-[1100px] h-[450px] relative my-2">
            
            {/* Connector Paths (Dashed lines with arrows in high contrast dark color) */}
            <svg 
              className="absolute inset-0 pointer-events-none" 
              width="1100" 
              height="450" 
              viewBox="0 0 1100 450" 
              fill="none"
            >
              {/* Row 1 horizontal dashed arrows */}
              <path d="M 188 38 L 312 38" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 247 34 L 253 38 L 247 42" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M 388 38 L 512 38" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 447 34 L 453 38 L 447 42" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M 588 38 L 712 38" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 647 34 L 653 38 L 647 42" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M 788 38 L 912 38" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 847 34 L 853 38 L 847 42" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Right Loop connector */}
              <path d="M 988 38 L 1080 38 L 1080 232.5 L 1050 232.5" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 1056 228.5 L 1050 232.5 L 1056 236.5" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Left Loop connector */}
              <path d="M 50 232.5 L 20 232.5 L 20 368 L 112 368" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 106 364 L 112 368 L 106 372" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Row 3 horizontal dashed arrows */}
              <path d="M 188 368 L 312 368" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 247 364 L 253 368 L 247 372" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M 388 368 L 512 368" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 447 364 L 453 368 L 447 372" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M 588 368 L 712 368" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 647 364 L 653 368 L 647 372" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M 788 368 L 912 368" stroke="#222" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 847 364 L 853 368 L 847 372" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Row 1 (Circles) */}
            <div className="absolute top-0 left-[50px] w-[1000px] flex justify-between">
              {ROW1.map((step, idx) => (
                <div key={idx} className="w-[200px] flex justify-center">
                  <CircleStep step={step} />
                </div>
              ))}
            </div>

            {/* Row 2 (Solid Box) - sharp corners, high contrast borders, centered separators */}
            <div className="absolute top-[170px] left-[50px] w-[1000px] h-[125px] flex items-center justify-between border border-[#222] bg-white rounded-none">
              {ROW2.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 flex justify-center items-center h-full">
                    <BoxStep step={step} />
                  </div>
                  {idx < ROW2.length - 1 && (
                    <div className="w-[1px] h-[75px] bg-[#222] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Row 3 (Circles) */}
            <div className="absolute top-[330px] left-[50px] w-[1000px] flex justify-between">
              {ROW3.map((step, idx) => (
                <div key={idx} className="w-[200px] flex justify-center">
                  <CircleStep step={step} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
