"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#EEF8F8]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#2B2B2B] leading-tight mb-6">
              Contact us
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              For general queries, sales and partnership please drop a mail anytime and we will reach you.
            </p>
            <a 
              href="mailto:contact@macappstudio.com"
              className="inline-block bg-black text-white px-12 py-4 text-[15px] font-bold hover:bg-gray-800 transition-colors text-center w-full max-w-[200px]"
            >
              Mail Us
            </a>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <Image
                src="/assets/images/contactus/banner_rigth_image.png"
                alt="Contact Us"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
