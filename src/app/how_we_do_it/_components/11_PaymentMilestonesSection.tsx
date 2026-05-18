import Image from "next/image";

const PAYMENT_MILESTONES = [
  { title: "Project Kickoff",        icon: "/assets/images/how_we_do_it/small_icon1.svg" },
  { title: "PRD and Design Sign Off", icon: "/assets/images/how_we_do_it/small_icon5.svg" },
  { title: "Release 1",              icon: "/assets/images/how_we_do_it/small_icon13.svg" },
  { title: "Release 2",              icon: "/assets/images/how_we_do_it/small_icon13.svg" },
  { title: "Live",                   icon: "/assets/images/how_we_do_it/small_icon3.svg" },
];


// Payment amounts (20% each)
const AMOUNTS = ["20% payment", "20% payment", "20% payment", "20% payment", "20% payment"];

export default function PaymentMilestonesSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 lg:py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] overflow-x-auto">
        <div className="flex items-start justify-center gap-0 min-w-[540px]">
          {PAYMENT_MILESTONES.map((milestone, i) => (
            <div key={i} className="flex items-start">
              {/* Milestone item */}
              <div className="flex flex-col items-center text-center min-w-[90px] max-w-[120px]">
                <div className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] bg-white border border-[#ddd] rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <Image src={milestone.icon} alt={milestone.title} width={28} height={28} className="opacity-75" />
                </div>
                <span
                  className="text-[13px] lg:text-[14px] font-semibold text-[#222] leading-tight mb-1"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  {milestone.title}
                </span>
                <span
                  className="text-[11px] lg:text-[12px] text-[#888]"
                  style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                >
                  {AMOUNTS[i]}
                </span>
              </div>

              {/* Arrow between items */}
              {i < PAYMENT_MILESTONES.length - 1 && (
                <div className="flex items-center self-start mt-[28px] px-1 text-[#aaa]">
                  <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                    <line x1="0" y1="6" x2="22" y2="6" stroke="#aaa" strokeWidth="1.5" strokeDasharray="4 2" />
                    <polyline points="18,2 24,6 18,10" fill="none" stroke="#aaa" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
