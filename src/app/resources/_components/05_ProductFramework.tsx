import Image from "next/image";
import {
  Lightbulb,
  ClipboardList,
  PenTool,
  Settings,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Discover",
    subtitle: "Understand vision,\nusers and goals.",
    icon: <Lightbulb className="w-7 h-7 text-[#F59E0B]" strokeWidth={2} />,
    bg: "bg-[#FFF8E7]",
    border: "border-[#FDE7B0]",
    titleColor: "text-[#2563EB]",
    image: "/assets/images/resources/ProductFramework/image 1881.png",
  },
  {
    number: "2",
    title: "Plan",
    subtitle: "Product strategy,\narchitecture and roadmap.",
    icon: <ClipboardList className="w-7 h-7 text-[#2563EB]" strokeWidth={2} />,
    bg: "bg-[#EEF4FF]",
    border: "border-[#DCE7FF]",
    titleColor: "text-[#2563EB]",
    image: "/assets/images/resources/ProductFramework/image 1882.png",
  },
  {
    number: "3",
    title: "Design",
    subtitle: "UX research, wireframes\nand prototypes.",
    icon: <PenTool className="w-7 h-7 text-[#EC4899]" strokeWidth={2} />,
    bg: "bg-[#FFF0FA]",
    border: "border-[#FFD8F2]",
    titleColor: "text-[#EC4899]",
    image: "/assets/images/resources/ProductFramework/image 1883.png",
  },
  {
    number: "4",
    title: "Build",
    subtitle: "Agile development with\ncomplete visibility.",
    icon: <Settings className="w-7 h-7 text-[#22C55E]" strokeWidth={2} />,
    bg: "bg-[#EDFFF5]",
    border: "border-[#D4FCE6]",
    titleColor: "text-[#22C55E]",
    image: "/assets/images/resources/ProductFramework/image 1884.png",
  },
  {
    number: "5",
    title: "Launch",
    subtitle: "Ship high-quality\nproducts confidently.",
    icon: <Rocket className="w-7 h-7 text-[#F97316]" strokeWidth={2} />,
    bg: "bg-[#FFF5EC]",
    border: "border-[#FFE4CC]",
    titleColor: "text-[#F97316]",
    image: "/assets/images/resources/ProductFramework/image 1885.png",
  },
  {
    number: "6",
    title: "Scale",
    subtitle: "Grow users, features\nand revenue.",
    icon: <TrendingUp className="w-7 h-7 text-[#6366F1]" strokeWidth={2} />,
    bg: "bg-[#F2F4FF]",
    border: "border-[#E0E4FF]",
    titleColor: "text-[#6366F1]",
    image: "/assets/images/resources/ProductFramework/image 1886.png",
  },
];

export default function ProductFrameworkSection() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-[1380px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6F2FF] border border-[#E8DEFF] px-5 py-2 text-[13px] font-semibold text-[#6D5EF8]">
            ✨ Our Proven Product Framework
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h2 className="font-extrabold text-[#091133] text-[42px] md:text-[60px] xl:text-[72px] leading-[1] tracking-[-0.04em]">
            We Transform Ideas
            <br />
            <span className="text-[#2563EB]">
              Into Successful Products
            </span>
          </h2>

          <p className="mt-6 max-w-[850px] mx-auto text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed">
            Whether you're a founder with an idea, a CTO with a roadmap,
            or an enterprise launching innovation—we follow a proven process
            that reduces risk and accelerates outcomes.
          </p>
        </div>

        {/* Framework Container */}
        <div className="relative mt-20">
          <div className="relative bg-white border border-[#E8EAF6] rounded-[32px] overflow-visible shadow-sm">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-[62px] left-[8.3%] right-[8.3%] h-[6px] rounded-full bg-gradient-to-r from-[#ECE7FF] via-[#DCD2FF] to-[#ECE7FF] shadow-[0_0_15px_rgba(99,102,241,0.18)] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 relative z-10">
              {steps.map((step, index) => {
                // Determine responsive border classes dynamically
                let borderClasses = "border-[#E8EAF6] ";
                
                // Mobile (1 column): bottom border on all except the last card (index 5)
                if (index < 5) {
                  borderClasses += "border-b ";
                }
                
                // Tablet (md: 2 columns): 
                // Right border on even cards (0, 2, 4)
                if (index % 2 === 0) {
                  borderClasses += "md:border-r ";
                } else {
                  borderClasses += "md:border-r-0 ";
                }
                // Bottom border on first 4 cards (rows 1 & 2)
                if (index < 4) {
                  borderClasses += "md:border-b ";
                } else {
                  borderClasses += "md:border-b-0 ";
                }
                
                // Desktop (lg: 6 columns): 
                // Right border on all except the last one (index 5), no bottom borders
                if (index < 5) {
                  borderClasses += "lg:border-r lg:border-b-0 ";
                } else {
                  borderClasses += "lg:border-r-0 lg:border-b-0 ";
                }

                return (
                  <div
                    key={index}
                    className={`relative px-5 pt-10 pb-0 flex flex-col items-center text-center min-h-[420px] md:min-h-[445px] lg:min-h-[400px] ${borderClasses}`}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-9 h-9 rounded-full bg-[#5B4FF8] text-white font-bold text-sm flex items-center justify-center border-[3px] border-white shadow-lg">
                      {step.number}
                    </div>

                    {/* Connector Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute right-0 top-[62px] translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-8 h-8 rounded-full bg-white border border-[#E7EAF3] flex items-center justify-center shadow-sm">
                          <svg
                            className="w-4 h-4 text-[#B5B9C6]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Icon Circle */}
                    <div
                      className={`w-[72px] h-[72px] rounded-full border shadow-md flex items-center justify-center mb-6 ${step.bg} ${step.border}`}
                    >
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold text-[18px] md:text-[20px] mb-2 ${step.titleColor}`}
                    >
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-[#64748B] text-[14px] leading-[1.6] whitespace-pre-line max-w-[180px]">
                      {step.subtitle}
                    </p>

                    {/* Illustration */}
                    <div className="mt-auto w-full relative h-[190px] md:h-[210px] lg:h-[175px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        priority
                        unoptimized
                        className="object-contain object-bottom"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}