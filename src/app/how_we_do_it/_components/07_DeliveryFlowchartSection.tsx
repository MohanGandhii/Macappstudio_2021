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


// Row 1: Customer Enquiry → Proposal → Project Kickoff → Requirement Analysis → Design (5 items)
// Row 2: Database Dev, Back end Web Dev, Front end Web Dev, Android App Dev, iOS App Dev (5 items in dashed box)
// Row 3: FR Testing → NFR Testing → Build & Release → Development Closure → Support (5 items)
const ROW1 = DELIVERY_STEPS.slice(0, 5);
const ROW2 = DELIVERY_STEPS.slice(5, 10);
const ROW3 = DELIVERY_STEPS.slice(10, 15);

function FlowItem({ step }: { step: { title: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center text-center min-w-[80px] max-w-[110px]">
      <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] bg-white border border-[#e0e0e0] rounded-full flex items-center justify-center mb-2 shadow-sm">
        <Image src={step.icon} alt={step.title} width={28} height={28} className="opacity-80" />
      </div>
      <span className="text-[11px] lg:text-[12px] text-[#333] leading-tight" style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
        {step.title}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center px-1 text-[#aaa] self-start mt-[22px]">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
        <line x1="0" y1="6" x2="18" y2="6" stroke="#aaa" strokeWidth="1.5" strokeDasharray="4 2" />
        <polyline points="14,2 20,6 14,10" fill="none" stroke="#aaa" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function DeliveryFlowchartSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 lg:py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] overflow-x-auto">

        {/* Row 1 */}
        <div className="flex items-start justify-center gap-0 min-w-[600px] mb-2">
          {ROW1.map((step, i) => (
            <div key={i} className="flex items-start">
              <FlowItem step={step} />
              {i < ROW1.length - 1 && <Arrow />}
            </div>
          ))}
          {/* Right dashed connector going down into the box */}
          <div className="flex items-start self-start mt-[22px] px-1">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <line x1="0" y1="6" x2="18" y2="6" stroke="#aaa" strokeWidth="1.5" strokeDasharray="4 2" />
              <polyline points="14,2 20,6 14,10" fill="none" stroke="#aaa" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Row 2 — dashed border box */}
        <div className="flex justify-center mb-2">
          <div className="border border-dashed border-[#bbb] rounded px-6 py-4">
            <div className="flex items-start gap-0 min-w-[500px]">
              {ROW2.map((step, i) => (
                <div key={i} className="flex items-start">
                  <FlowItem step={step} />
                  {i < ROW2.length - 1 && <Arrow />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-start justify-center gap-0 min-w-[600px]">
          {/* Left dashed connector from box */}
          <div className="flex items-start self-start mt-[22px] px-1">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <line x1="0" y1="6" x2="18" y2="6" stroke="#aaa" strokeWidth="1.5" strokeDasharray="4 2" />
              <polyline points="14,2 20,6 14,10" fill="none" stroke="#aaa" strokeWidth="1.5" />
            </svg>
          </div>
          {ROW3.map((step, i) => (
            <div key={i} className="flex items-start">
              <FlowItem step={step} />
              {i < ROW3.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
