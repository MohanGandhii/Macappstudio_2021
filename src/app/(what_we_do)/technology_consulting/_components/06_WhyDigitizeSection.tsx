export default function WhyDigitizeSection() {
  return (
    <section className="py-16 md:py-20 bg-[#E8F5E9]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-[28px] md:text-[34px] font-black text-center text-[#2B2B2B] leading-[38px] mb-12 tracking-tight">
          Why Digitize?
        </h2>

        <div className="flex flex-col md:flex-row items-stretch justify-center max-w-5xl mx-auto gap-8 md:gap-0">
          {/* Left Column */}
          <div className="flex-1 text-left px-6 md:px-12 md:pl-[100px] flex flex-col justify-start">
            <h3 className="text-[72px] md:text-[80px] font-light text-[#2B2B2B] leading-none mb-4">
              96%
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[26px] max-w-[380px]">
              of leaders say the pandemic will speed their digital transformation by an average of 5.3 years
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 text-left px-6 md:px-12 md:pl-[100px] flex flex-col justify-start border-t border-gray-300 md:border-t-0 md:border-l border-[#c9c9c9]">
            <h3 className="text-[72px] md:text-[80px] font-light text-[#2B2B2B] leading-none mb-4">
              70%
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[26px] max-w-[380px]">
              of organizations will use digital adoption solutions across the entire technology stack to overcome still insufficient application user experiences by 2025
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
