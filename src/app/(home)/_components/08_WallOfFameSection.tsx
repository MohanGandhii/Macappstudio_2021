"use client";

import Image from "next/image";

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
            Here is a list of <span className="font-bold text-gray-900">15+ projects</span> which inspired us and touched millions of lives
          </p>
        </div>

        {/* Logos Area */}
        <div className="relative w-full overflow-hidden bg-[#EEF7EC] py-16 done_project_list_box rounded-[28px] md:rounded-[40px] border border-[#d4ebd2] shadow-sm">
          <div className="slider">
            <div className="slider-row"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          width: 100%;
          overflow: hidden;
        }
        .slider-row {
          width: 100%;
          height: 468px;
          background-image: url('/assets/images/index/wall_fame_logo.png');
          background-size: 2400px 468px;
          background-repeat: repeat-x;
          animation: slide 40s linear infinite;
        }
        @keyframes slide {
          from {
            background-position-x: 0;
          }
          to {
            background-position-x: -2400px;
          }
        }
        @media (max-width: 420px) {
          .slider-row {
            height: 400px;
            background-size: 2400px 400px;
          }
        }
      `}</style>
    </section>
  );
}

