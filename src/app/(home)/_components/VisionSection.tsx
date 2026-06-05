export default function VisionSection() {
  return (
    <section className="py-6 md:py-8 bg-white overflow-hidden" id="vision_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="w-full bg-[#fbfbfb] p-8 md:p-12 min-h-[300px] md:min-h-[340px] flex flex-col justify-center">
            <h2 className="text-2xl md:text-[34px] md:leading-[41px] font-black text-[#1a1e2e] mb-5 tracking-tight">
              Apps For Start ups to <br className="hidden md:inline" />
              Fortune 10 Companies
            </h2>
            <p className="text-[15px] md:text-[18px] md:leading-[30px] text-gray-500 font-medium tracking-tight">
              We have worked with small ups who are just boot <br className="hidden md:inline" />
              strapping to <span className="text-gray-900 font-bold">Fortune 10 companies</span> with revenues of <br className="hidden md:inline" />
              over <span className="text-gray-900 font-bold">US$ 55 billion.</span> We have the agility needed for a <br className="hidden md:inline" />
              start up and the capacity needed for a corporation <br className="hidden md:inline" />
              and the technical expertise needed for both.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-[#fbfbfb] p-8 md:p-12 min-h-[300px] md:min-h-[340px] flex flex-col justify-center">
            <h2 className="text-2xl md:text-[34px] md:leading-[41px] font-black text-[#1a1e2e] mb-5 tracking-tight">
              The &apos;A-Team&apos; <br className="hidden md:inline" />
              For Your Vision
            </h2>
            <p className="text-[15px] md:text-[18px] md:leading-[30px] text-gray-500 font-medium tracking-tight">
              To make your dream come true, you should have the <br className="hidden md:inline" />
              <span className="text-gray-900 font-bold">best in class</span> team with exceptional skills to <br className="hidden md:inline" />
              accomplish it. we have an awesome set of small <br className="hidden md:inline" />
              teams with <span className="text-gray-900 font-bold">exceptionally skilled</span> people in the <br className="hidden md:inline" />
              following technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
