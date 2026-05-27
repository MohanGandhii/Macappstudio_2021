"use client";

import Image from "next/image";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-[#F6F6F2] min-h-[420px] flex items-center">

      {/* Right Edge Image with Gradient Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[38%] z-0 hidden md:block">
        {/* Gradient to blend the image into the background on the left */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F6F6F2] to-transparent z-10"></div>
        <Image
          src="/assets/images/technology_Consulting/01_hero/banner_rigth_image.jpg"
          alt="Tech Consulting Hero"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[62%] text-left lg:pl-16">
            <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-medium text-[#2B2B2B] leading-[1.1] lg:leading-[48px] mb-5 tracking-tight max-w-[780px]">
              <span className="block">Creating a change that matters,</span>
              <span className="block">by providing thoughtful solutions</span>
              <span className="block">through technology</span>
            </h1>
            <GetProposalButton className="bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors rounded-none w-[300px] h-[60px] flex items-center justify-center" />
          </div>

          {/* Mobile-only image display (fallback since absolute is hidden on mobile) */}
          <div className="w-full md:hidden mt-10 relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/assets/images/technology_Consulting/01_hero/banner_rigth_image.jpg"
              alt="Tech Consulting Hero"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
