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
      {/* Circle - completely static, thin light grey border */}
      <div className="w-[76px] h-[76px] bg-white border border-[#b5b5b5] rounded-full flex items-center justify-center mb-3">
        <Image 
          src={step.icon} 
          alt={step.title} 
          width={36} 
          height={36} 
          className="object-contain" 
        />
      </div>
      {/* Text label */}
      <span 
        className="text-[13px] font-normal text-[#333] leading-snug max-w-[110px] select-none"
        style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
      >
        {step.title}
      </span>
    </div>
  );
}

function BoxStep({ step }: { step: { title: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full px-2 py-4 select-none">
      {/* Icon */}
      <div className="h-[48px] flex items-center justify-center mb-2">
        <Image 
          src={step.icon} 
          alt={step.title} 
          width={44} 
          height={44} 
          className="object-contain" 
        />
      </div>
      {/* Text label */}
      <span 
        className="text-[13px] font-normal text-[#333] leading-snug max-w-[120px]"
        style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
      >
        {step.title}
      </span>
    </div>
  );
}

export default function DeliveryFlowchartSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-y border-gray-100 flex justify-center">
      {/* Container with horizontal scroll on smaller screens */}
      <div className="w-full max-w-[1200px] overflow-x-auto px-4 lg:px-8 hide-scrollbar">
        {/* Background box in the middle only, leaving white space on the sides */}
        <div className="bg-[#f9f9f9] rounded-[24px] p-10 min-w-[1140px] flex justify-center">
          {/* Flowchart container with fixed width to guarantee layouts and connections */}
          <div className="w-[1100px] h-[450px] relative my-2">
            
            {/* Connector Paths (Dashed lines with arrows) */}
            <svg 
              className="absolute inset-0 pointer-events-none" 
              width="1100" 
              height="450" 
              viewBox="0 0 1100 450" 
              fill="none"
            >
              {/* Row 1 horizontal dashed arrows - centered arrowheads */}
              {/* Arrow 1: Col 0 -> Col 1 */}
              <path d="M 188 38 L 312 38" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 247 34 L 253 38 L 247 42" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Arrow 2: Col 1 -> Col 2 */}
              <path d="M 388 38 L 512 38" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 447 34 L 453 38 L 447 42" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Arrow 3: Col 2 -> Col 3 */}
              <path d="M 588 38 L 712 38" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 647 34 L 653 38 L 647 42" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Arrow 4: Col 3 -> Col 4 */}
              <path d="M 788 38 L 912 38" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 847 34 L 853 38 L 847 42" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Right Loop connector from Design (Col 4) in Row 1 down to solid box in Row 2 */}
              <path d="M 988 38 L 1080 38 L 1080 232.5 L 1050 232.5" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
              {/* Arrow pointing left into the box */}
              <path d="M 1056 228.5 L 1050 232.5 L 1056 236.5" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Left Loop connector from Row 2 Box to FR Testing (Col 0) in Row 3 */}
              <path d="M 50 232.5 L 20 232.5 L 20 368 L 112 368" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
              {/* Arrow pointing right into FR Testing */}
              <path d="M 106 364 L 112 368 L 106 372" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Row 3 horizontal dashed arrows - centered arrowheads */}
              {/* Arrow 1: Col 0 -> Col 1 */}
              <path d="M 188 368 L 312 368" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 247 364 L 253 368 L 247 372" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Arrow 2: Col 1 -> Col 2 */}
              <path d="M 388 368 L 512 368" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 447 364 L 453 368 L 447 372" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Arrow 3: Col 2 -> Col 3 */}
              <path d="M 588 368 L 712 368" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 647 364 L 653 368 L 647 372" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Arrow 4: Col 3 -> Col 4 */}
              <path d="M 788 368 L 912 368" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 847 364 L 853 368 L 847 372" stroke="#b5b5b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Row 1 (Circles) */}
            <div className="absolute top-0 left-[50px] w-[1000px] flex justify-between">
              {ROW1.map((step, idx) => (
                <div key={idx} className="w-[200px] flex justify-center">
                  <CircleStep step={step} />
                </div>
              ))}
            </div>

            {/* Row 2 (Solid Box) - sharp corners, thin border, centered thin separators */}
            <div className="absolute top-[170px] left-[50px] w-[1000px] h-[125px] flex items-center justify-between border border-[#b5b5b5] bg-white rounded-none">
              {ROW2.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 flex justify-center items-center h-full">
                    <BoxStep step={step} />
                  </div>
                  {idx < ROW2.length - 1 && (
                    <div className="w-[1px] h-[75px] bg-[#b5b5b5] shrink-0" />
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

