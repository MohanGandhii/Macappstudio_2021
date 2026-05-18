"use client";

import Image from "next/image";

export default function StorySection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-12 lg:py-20 border-y border-gray-100/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="mb-10 lg:mb-20">
          <h2 
            className="text-[28px] xs:text-[32px] md:text-[40px] lg:text-[46px] font-bold text-[#111] mb-4 lg:mb-5 tracking-[-0.5px] lg:tracking-[-1px] leading-[1.1]"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Get to know us better
          </h2>
          <p 
            className="text-[14.5px] lg:text-[16px] text-[#555] leading-[1.6] max-w-[900px]"
            style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
          >
            Trusting a company and investing your hard-earned money is a quite challenging and an overwhelming process.<br className="hidden xl:block" />
            In order to guide you in the process and make a better decision, we have explained each and every steps right from<br className="hidden xl:block" />
            How MacAppStudio is created to our process. We look forward to work together and create wonderful products together.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-[50%]">
            <h3 
              className="text-[24px] xs:text-[28px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Story of MacAppStudio
            </h3>
            <div className="text-[14.5px] lg:text-[16px] text-[#444] leading-[1.6]">
              <p className="mb-4 lg:mb-5" style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                The foundation of MacAppStudio is the friendship between George and Suresh. MacAppStudio is founded based on trust and that is the core of our company culture till today. Our intention is to create end to end applications which are simple to use and which would transform lives of millions.
              </p>
              <p style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                In the last 10 years, MacAppStudio has grown immensly in numbers, revenue and brand.We will continue to grow the same way as a family based on trust and relationship.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] mt-4 lg:mt-0">
            <div 
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("qXwzj6k2UWU")}
            >
              <Image 
                src="/assets/images/how_we_do_it/storiesposter01.jpg" 
                alt="Story" 
                width={1224} 
                height={706} 
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
