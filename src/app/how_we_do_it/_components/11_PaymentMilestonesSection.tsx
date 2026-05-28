import React from "react";
import Image from "next/image";

const PAYMENT_MILESTONES = [
  { title: "Project Kickoff",        icon: "/assets/images/how_we_do_it/small_icon1.svg" },
  { title: "PRD and Design Sign Off", icon: "/assets/images/how_we_do_it/small_icon5.svg" },
  { title: "Release 1",              icon: "/assets/images/how_we_do_it/small_icon13.svg" },
  { title: "Release 2",              icon: "/assets/images/how_we_do_it/small_icon13.svg" },
  { title: "Live",                   icon: "/assets/images/how_we_do_it/small_icon3.svg" },
];

const AMOUNTS = ["20% payment", "20% payment", "20% payment", "20% payment", "20% payment"];

export default function PaymentMilestonesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-100 flex flex-col items-center">
      {/* Heading Text */}
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <p
          className="text-[#333] max-w-[700px] mx-auto"
          style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}
        >
          get a great value and a world-class product which worth the amount you pay for.
        </p>
      </div>

      {/* Container with horizontal scroll on smaller screens */}
      <div className="w-full max-w-[1200px] overflow-x-auto px-4 sm:px-6 lg:px-8 hide-scrollbar">
        <div className="min-w-[1040px] flex justify-center py-2">
          <div className="w-[1000px] h-[160px] relative">

            {/* Connector Paths */}
            <svg
              className="absolute top-0 left-0 pointer-events-none"
              width="1000"
              height="76"
              viewBox="0 0 1000 76"
              fill="none"
            >
              <path d="M 138 38 L 254 38" stroke="#333333" strokeWidth="1.3" strokeDasharray="3 3" />
              <path d="M 254 33 L 262 38 L 254 43" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 338 38 L 454 38" stroke="#333333" strokeWidth="1.3" strokeDasharray="3 3" />
              <path d="M 454 33 L 462 38 L 454 43" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 538 38 L 654 38" stroke="#333333" strokeWidth="1.3" strokeDasharray="3 3" />
              <path d="M 654 33 L 662 38 L 654 43" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 738 38 L 854 38" stroke="#333333" strokeWidth="1.3" strokeDasharray="3 3" />
              <path d="M 854 33 L 862 38 L 854 43" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Milestone Items */}
            <div className="absolute top-0 left-0 w-[1000px] flex justify-between">
              {PAYMENT_MILESTONES.map((milestone, idx) => (
                <div key={idx} className="w-[200px] flex flex-col items-center text-center select-none">
                  <div className="w-[76px] h-[76px] bg-white border border-[#333333] rounded-full flex items-center justify-center mb-3">
                    <Image
                      src={milestone.icon}
                      alt={milestone.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <span
                    className="text-[15px] lg:text-[16px] font-bold text-[#222] leading-snug mb-1 max-w-[180px]"
                    style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                  >
                    {milestone.title}
                  </span>
                  <span
                    style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "13px", lineHeight: "20px" }}
                    className="text-[#666]"
                  >
                    {AMOUNTS[idx]}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
