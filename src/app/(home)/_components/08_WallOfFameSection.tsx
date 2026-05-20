"use client";

import Image from "next/image";

const ROW1_LOGOS = [1, 2, 3, 4, 5, 6, 7];
const ROW2_LOGOS = [4, 5, 6, 7, 1, 2, 3];

export default function WallOfFameSection() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="done_project_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-start text-left mb-10">
          <div className="mb-4">
            <Image
              src="/assets/images/index/wall_fame_icon.svg"
              alt="Wall of Fame"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Wall of Fame</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Here is a list of <span className="font-bold text-gray-900">15+ projects</span> which inspired us and touched million lives
          </p>
        </div>

        {/* Logos Area */}
        <div className="relative w-full overflow-hidden bg-[#eef7ec] py-16">
          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="flex animate-marquee whitespace-nowrap gap-6 pl-6">
              {ROW1_LOGOS.map((num, idx) => (
                <div key={`r1-${idx}`} className="flex-shrink-0 bg-white border-[4px] border-[#222] shadow-lg flex items-center justify-center w-[224px] h-[128px]">
                  <Image
                    src={`/assets/images/index/wall_fame_logo${num}.png`}
                    alt={`Project ${num}`}
                    width={144}
                    height={64}
                    className="max-h-full w-auto object-contain px-4 brightness-0"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 pl-20">
              {[...ROW2_LOGOS, ...ROW2_LOGOS].map((num, idx) => (
                <div key={`r2-${idx}`} className="flex-shrink-0 bg-white border-[4px] border-[#222] shadow-lg flex items-center justify-center w-[224px] h-[128px]">
                  <Image
                    src={`/assets/images/index/wall_fame_logo${num}.png`}
                    alt={`Project ${num}`}
                    width={144}
                    height={64}
                    className="max-h-full w-auto object-contain px-4 brightness-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
