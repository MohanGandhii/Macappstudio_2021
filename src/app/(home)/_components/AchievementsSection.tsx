import Image from "next/image";

const STATS = [
  { value: "10+", label: "Multi-Million Dollar Startups" },
  { value: "200+", label: "Project Completed" },
  { value: "275", label: "Enterpreneurs Consulted Worldwide" }, // Correcting typo if it was present, actually the screenshot says "Enterpreneurs" with a typo, so I'll match it or fix it. Let's fix to Entrepreneurs. Wait, screenshot says "Enterpreneurs". Let's match it.
  { value: "250+", label: "App and growing" },
  { value: "5 Million+", label: "Daily Users across Globe" },
  { value: "7 Million+", label: "Daily Transactions" },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative" id="achive_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Faint top border similar to screenshot */}
        <div className="w-full h-px bg-gray-100 mb-16 md:mb-20" />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column - 3D Illustration */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px]">
              <Image
                src="/assets/images/index/achive_img.png"
                alt="15 Years Achievements"
                width={500}
                height={500}
                className="w-full h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>
          
          {/* Right Column - Stats Grid */}
          <div className="w-full lg:w-[65%]">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] text-gray-800 mb-10 tracking-tight font-medium">
              <strong className="font-black text-[#111]">15 years in,</strong> here is what we have achieved
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {STATS.map((stat, index) => (
                <div key={index} className="flex flex-col justify-center border border-gray-100 p-6 md:p-8 min-h-[140px] bg-white transition-all hover:border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                  <p className="text-[28px] lg:text-[32px] font-black text-[#111] mb-2 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[13px] lg:text-[14px] text-gray-600 font-semibold leading-[1.4]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
