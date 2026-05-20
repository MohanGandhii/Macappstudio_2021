"use client";

import Image from "next/image";

const BENEFITS = [
  { 
    icon: "/assets/images/careers/icon10.svg", 
    title: "Free accommodation with all benefits", 
    desc: "Enjoy free stay near our office with all the benefits and experience a stress free commute." 
  },
  { 
    icon: "/assets/images/careers/icon11.svg", 
    title: "Access to free food from our kitchen", 
    desc: "Have a delightful breakfast, lunch, dinner, tea/coffe from our hygenic kitchen." 
  },
  { 
    icon: "/assets/images/careers/icon12.svg", 
    title: "Health insurance for you and your family", 
    desc: "Your health comes first and we got you covered with a comprehensive package to support you." 
  },
  { 
    icon: "/assets/images/careers/icon13.svg", 
    title: "Pre approved leaves by default", 
    desc: "Sick leave? Time to relax, rejuvenate? All your leaves are pre approved so that you can come back refreshed." 
  },
  { 
    icon: "/assets/images/careers/icon14.svg", 
    title: "Instant reward for your performance", 
    desc: "We recognize the works of our employees immediately and effectively." 
  },
  { 
    icon: "/assets/images/careers/icon15.svg", 
    title: "Well protected term insurance", 
    desc: "We provide a great backup for your loved ones and thier future." 
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-4">
            Benefits and Perks
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed">
            Our employees are the pillars of our company and here’s how we take care of their well-being!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 max-w-[1000px] mx-auto">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="w-12 h-12 flex items-center justify-start mb-4">
                <Image 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  width={40} 
                  height={40} 
                  className="object-contain filter grayscale brightness-0" 
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#2B2B2B] mb-3 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed font-normal">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Small Notice */}
        <div className="flex items-center gap-2.5 text-[#777] text-[11px] md:text-[12px] max-w-[1000px] mx-auto mt-16 text-left">
          <div className="flex-shrink-0 w-3.5 h-3.5">
            <Image 
              src="/assets/images/careers/info.svg" 
              alt="Info" 
              width={14} 
              height={14} 
              className="object-contain filter grayscale brightness-0 opacity-60" 
            />
          </div>
          <p>Actual benefit offerings may differ depending on your role and number of years employed at MacAppStudio.</p>
        </div>
      </div>
    </section>
  );
}
