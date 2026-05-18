"use client";

import Image from "next/image";

export default function PricingSection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-12 lg:py-20 border-y border-gray-100/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-[50%]">
            <h3 
              className="text-[24px] xs:text-[28px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Why our pricing is 10 times more costlier than other quotes?
            </h3>
            <div className="text-[14.5px] lg:text-[16px] text-[#444] leading-[1.6]">
              <p style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                There are several development companies in the market who charge very minimum amount whereas our minimum project quotation is 100,000 USD. We would like to humbly acknowledge that, this amount is not to secure MacAppStudio but to secure you. When you are developing an application in any domain, this means you are competing with the top players in that field who had already been there for years and had invested billions to support that infrastructure. In order to enter the market, sustain and compete with them we need the resource, technology, security, scalability and a minimum budget to support these. We are committed to provide great value to you and hence don’t compromise in quality, great user experience, security.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] mt-4 lg:mt-0">
            <div 
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("pBdEkzHqTd8")}
            >
              <Image 
                src="/assets/images/how_we_do_it/storiesposter03.jpg" 
                alt="Pricing" 
                width={1224} 
                height={706} 
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
