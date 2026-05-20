"use client";

import Image from "next/image";
import clsx from "clsx";

const OFFICES = [
  {
    country: "India",
    address: [
      "MacAppStudio Private Limited,",
      "#32, 8th Cross Street, Ram Nagar South,",
      "Madipakkam, Chennai - 600091"
    ],
    icon: "/assets/images/contactus/location_icon1.svg"
  },
  {
    country: "Singapore",
    address: [
      "MacAppStudio pte Limited,",
      "30 Cecil Street, #19-08 Prudential Tower,",
      "Singapore (049712)"
    ],
    icon: "/assets/images/contactus/location_icon2.svg"
  },
  {
    country: "USA",
    address: [
      "MacAppStudio Inc,",
      "2035 Sunset Lake Road, Suit B-2,",
      "Newark, Delaware - 19702"
    ],
    icon: "/assets/images/contactus/location_icon3.svg"
  }
];

export default function OfficesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-4">
            Our offices around the world
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#444]">
            Have an idea? Let's grap a coffe and make a revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 max-w-[1100px] mx-auto">
          {OFFICES.map((office, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "flex flex-col items-start px-6 md:px-8 lg:px-12",
                idx !== OFFICES.length - 1 ? "md:border-r md:border-[#E1E1E1]" : ""
              )}
            >
              <div className="w-16 h-16 flex items-start justify-start">
                <Image 
                  src={office.icon} 
                  alt={office.country} 
                  width={60} 
                  height={60} 
                  className="object-contain filter grayscale brightness-0" 
                />
              </div>
              <h3 className="text-[22px] font-bold text-[#2B2B2B] mt-5 mb-3 leading-none">{office.country}</h3>
              <div className="text-[14px] text-[#555] leading-relaxed space-y-1 font-normal">
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
