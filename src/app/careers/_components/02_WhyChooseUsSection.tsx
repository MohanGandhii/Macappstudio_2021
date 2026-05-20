"use client";

import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="w-full lg:w-7/12 text-left">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-3">
              Why MacAppStudio ?
            </h2>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#2B2B2B] leading-tight mb-8">
              Because you get a lifetime opportunity to work with amazing people and make meaningful products.
            </h3>
            <div className="text-[14px] md:text-[15px] text-[#555] leading-relaxed space-y-6">
              <p>
                We are a pack of humble people who are thinkers and doers. We work relentlessly towards a shared mission, which is to create awesome products and provide great experiences to people in new ways. Each and every employee in MacAppStudio is an innovator and we motivate them to take responsibilities and ownership in whatever work they do. That’s how we create the kinds of products and experiences that few ever imagine.
              </p>
              <p>
                You won’t just be crafting new products, you’ll work alongside exceptional people who insist on doing their best work to get there. We build together and grow together by experimenting, and there is no better classroom than real-world experience. Join us and help us transform the world.
              </p>
            </div>
          </div>

          {/* Illustration Content */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <Image 
                src="/assets/images/careers/why_macapp.png" 
                alt="Why MacAppStudio" 
                width={500} 
                height={400} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
