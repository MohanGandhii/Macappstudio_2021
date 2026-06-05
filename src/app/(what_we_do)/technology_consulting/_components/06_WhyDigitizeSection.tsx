export default function WhyDigitizeSection() {
  return (
    <section className="py-[60px] bg-[#E7F5E7]" id="degitize_section">
      <div className="w-full mx-auto px-4 lg:px-8 max-w-[1170px]">
        <h2 
          className="text-[34px] leading-[38px] font-black text-center text-[#2B2B2B] mb-[50px]"
          style={{ fontFamily: "CircularStd-Black, sans-serif" }}
        >
          Why Digitize?
        </h2>

        <div className="flex flex-col md:flex-row items-stretch justify-center w-full mx-auto gap-8 md:gap-0">
          {/* Left Column */}
          <div className="flex-1 text-left pl-4 md:pl-[40px] xl:pl-[60px] pr-0 flex flex-col justify-start">
            <h3 
              className="text-[68px] leading-[70px] font-medium text-[#2B2B2B] m-0"
              style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
            >
              96%
            </h3>
            <p 
              className="text-[18px] leading-[28px] text-[#2B2B2B] mt-2 max-w-[480px]"
              style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
            >
              of leaders say the pandemic will speed their digital <br className="hidden md:inline" /> transformation by an average of 5.3 years
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 text-left pl-4 md:pl-[40px] xl:pl-[60px] pr-0 flex flex-col justify-start border-t border-[#B2C4B2] md:border-t-0 md:border-l border-[#B2C4B2]">
            <h3 
              className="text-[68px] leading-[70px] font-medium text-[#2B2B2B] m-0"
              style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
            >
              70%
            </h3>
            <p 
              className="text-[18px] leading-[28px] text-[#2B2B2B] mt-2 max-w-[480px]"
              style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
            >
              of organizations will use digital adoption solutions <br className="hidden md:inline" /> across the entire technology stack to overcome <br className="hidden md:inline" /> still insufficient application user experiences by 2025
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
