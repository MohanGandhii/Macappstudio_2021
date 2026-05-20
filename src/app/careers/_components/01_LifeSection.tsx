"use client";

import Image from "next/image";

const LIFE_IMAGES = Array.from({ length: 14 }).map(
  (_, i) => `/assets/images/careers/life_macapp_img${i + 1}.jpg`
);

export default function LifeSection() {
  const row1 = LIFE_IMAGES.slice(0, 7);
  const row2 = LIFE_IMAGES.slice(7, 14);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-4">
            Life at MacAppStudio
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed">
            Get a little sneak peek into the daily lives of how we enjoy our work and the company of others
          </p>
        </div>
      </div>
      
      {/* Infinite Auto-scrolling Gallery (Two Rows) */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Row 1: Scrolls Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap gap-6 w-max">
            {[...row1, ...row1].map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-64 h-48 md:w-80 md:h-56 rounded-[16px] overflow-hidden shadow-sm transition-all hover:shadow-md"
              >
                <Image 
                  src={img} 
                  alt="Life at MacAppStudio" 
                  width={320} 
                  height={224} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-right whitespace-nowrap gap-6 w-max">
            {[...row2, ...row2].map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-64 h-48 md:w-80 md:h-56 rounded-[16px] overflow-hidden shadow-sm transition-all hover:shadow-md"
              >
                <Image 
                  src={img} 
                  alt="Life at MacAppStudio" 
                  width={320} 
                  height={224} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroller Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
