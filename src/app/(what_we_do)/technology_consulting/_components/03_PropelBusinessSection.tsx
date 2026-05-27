import Image from "next/image";

const PROPEL_STAGES = [
  { title: "Deep Analysis", icon: "/assets/images/technology_Consulting/03_propel_business/propel_stage_icon1.svg" },
  { title: "Conceptualize Strategy", icon: "/assets/images/technology_Consulting/03_propel_business/propel_stage_icon2.svg" },
  { title: "Identify Execution Plan", icon: "/assets/images/technology_Consulting/03_propel_business/propel_stage_icon3.svg" },
  { title: "Setting Operation Constraints", icon: "/assets/images/technology_Consulting/03_propel_business/propel_stage_icon4.svg" },
  { title: "Implementation", icon: "/assets/images/technology_Consulting/03_propel_business/propel_stage_icon5.svg" },
  { title: "Feedback", icon: "/assets/images/technology_Consulting/03_propel_business/propel_stage_icon6.svg" },
];

export default function PropelBusinessSection() {
  return (
    <section className="pt-16 pb-0 bg-[#EFE5F5]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Header Box */}
        <div className="w-full md:w-[55%] text-left mb-10">
          <h2 className="text-[26px] md:text-[34px] font-black text-[#2B2B2B] leading-[1.2] lg:leading-[38px] mb-2 tracking-tight">
            Our approach to propel your business towards the next breakthrough
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.6] lg:leading-[30px]">
            Attain the outcomes that are most critical to help you run and transform your business through our unique set of process.
          </p>
        </div>

        {/* White Main Block */}
        <div className="bg-white rounded-t-[3px] py-10 pb-12 px-6 relative overflow-hidden">

          {/* Dashed Line behind the circles */}
          <div className="absolute top-[80px] left-[10%] right-[10%] border-t-2 border-dashed border-gray-400 z-0 hidden md:block"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-2">
            {PROPEL_STAGES.map((stage, index) => (
              <div key={index} className="flex-1 w-full text-center relative group">

                {/* Circular Icon Container */}
                <div className="w-[80px] h-[80px] rounded-full border border-gray-400 bg-white flex items-center justify-center mx-auto mb-4 relative z-10 transition-colors group-hover:border-black">
                  <Image
                    src={stage.icon}
                    alt={stage.title}
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>

                {/* Stage Title */}
                <p className="text-[15px] font-medium text-gray-800 leading-tight max-w-[140px] mx-auto">
                  {stage.title}
                </p>

                {/* Horizontal Arrow Chevron on Dashed Line */}
                {index < PROPEL_STAGES.length - 1 && (
                  <div className="absolute top-[30px] -right-2 translate-x-1/2 z-20 hidden md:flex items-center justify-center text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
