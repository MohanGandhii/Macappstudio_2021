"use client";

import Image from "next/image";

const VALUES = [
  { 
    icon: "/assets/images/careers/icon1.svg", 
    title: "The customer first approach", 
    desc: "We only win when our customers succeed. We work tirelessly to solve their problem and maximize their efficiency." 
  },
  { 
    icon: "/assets/images/careers/icon2.svg", 
    title: "Act with ownership", 
    desc: "We are accountable for the company’s and the customer’s growth. Being responsible at work is crucial." 
  },
  { 
    icon: "/assets/images/careers/icon3.svg", 
    title: "Doing best in what we do", 
    desc: "May it be any work, focus on the work and create an impact. Be the best in your field." 
  },
  { 
    icon: "/assets/images/careers/icon4.svg", 
    title: "No resume policy", 
    desc: "A printed paper can’t tell us the potential of a person. We see people as humans with emotions." 
  },
  { 
    icon: "/assets/images/careers/icon5.svg", 
    title: "Value idea over hierarchy", 
    desc: "We welcome great ideas which has a great potential, from anyone regarless their roles and hierarchy." 
  },
  { 
    icon: "/assets/images/careers/icon6.svg", 
    title: "Respect for individual", 
    desc: "Treat everyone equal from the CEO to the house keeping and respect their differences and capacity." 
  },
  { 
    icon: "/assets/images/careers/icon7.svg", 
    title: "Room for experimentation", 
    desc: "We grow by experimenting new things and failing fast. Failure makes us smarter and we get back stronger." 
  },
  { 
    icon: "/assets/images/careers/icon8.svg", 
    title: "Being honest to oneself", 
    desc: "Honesty is the mother of all virtues. We respect and encourage people who are honest in their work." 
  },
  { 
    icon: "/assets/images/careers/icon9.svg", 
    title: "Pushing the limit", 
    desc: "We encourage and motivate people to take risks and set the bar high. This is how we can grow together." 
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-4">
            The Values we stand for
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed">
            MacAppStudio is built on a strong foundation of culture which is fundamental to our client success and essential in how we work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 max-w-[1000px] mx-auto">
          {VALUES.map((value, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="w-12 h-12 flex items-center justify-start mb-4">
                <Image 
                  src={value.icon} 
                  alt={value.title} 
                  width={40} 
                  height={40} 
                  className="object-contain filter grayscale brightness-0" 
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#2B2B2B] mb-3 leading-tight">
                {value.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed font-normal">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
