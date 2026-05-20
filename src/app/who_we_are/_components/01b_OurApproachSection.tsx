import Image from "next/image";

export default function OurApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-[55%]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#2B2B2B] mb-6 tracking-tight">
              Our Approach
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.8] font-normal pr-0 lg:pr-8">
              Our aim is simple and that is to create apps that touch people's life. 
              Being a customer centric company we try to keep everything simple and 
              transparent. We apply strategic thinking, design insight and practicality 
              to each of our projects with the goal of delivering success from both 
              design and implementation.
            </p>
          </div>
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <Image 
              src="/assets/images/who_we_are/approach.png" 
              alt="Approach" 
              width={500} 
              height={500} 
              className="w-full max-w-[450px] h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
