import Image from "next/image";

const challenges = [
  "Hiring takes too long",
  "Specialized talent is hard to find",
  "Internal teams are overloaded",
  "Innovation gets pushed aside",
  "Product delivery becomes unpredictable",
  "Scaling creates management headaches",
];

const benefits = [
  "Dedicated team starts in 1-2 weeks",
  "Senior specialists available instantly",
  "Product strategy + execution together",
  "R&D experts on demand",
  "Weekly progress visibility",
  "Scale up or down anytime",
];

export default function ChallengesAndSquads() {
  return (
    <section className="w-full py-10 lg:py-12 px-2 md:px-4 lg:px-6">
      <div className="max-w-[1536px] mx-auto relative bg-[#FAFAFC] border border-[#ECECF3] rounded-[32px] overflow-hidden px-4 lg:px-6 xl:px-10 pt-8 pb-10">

        {/* Decorations */}
        <div className="absolute left-10 top-16 opacity-40 hidden lg:block">
          <svg width="160" height="90" viewBox="0 0 160 90" fill="none">
            <path
              d="M150 10C90 10 40 30 20 80"
              stroke="#D5D8F3"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        <div className="absolute left-24 top-12 hidden lg:block">
          ✈️
        </div>

        <div className="absolute right-20 top-12 text-5xl opacity-20 hidden lg:block">
          ☁️
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <div className="rounded-full bg-[#EEF2FF] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#4F46E5]">
            ✦ FOR FOUNDERS, CTOs & PRODUCT LEADERS
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-5 px-2">
          <h2 className="font-extrabold text-[#0F172A] leading-[1.1] tracking-tight text-[32px] md:text-[48px] xl:text-[60px]">
            Building Products Shouldn't Feel Like
            <br className="hidden sm:block" />
            <span className="text-[#2563EB]">
              Fighting Fires
            </span>{" "}
            Every Day.
          </h2>

          <div className="mt-5 text-[#64748B] text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
            <p>
              Roadmaps keep growing. Hiring takes months. Deadlines get tighter.
            </p>

            <p>
              Most companies don't struggle because of ideas.
            </p>

            <p className="font-semibold text-[#0F172A]">
              They struggle because execution is hard.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative mt-8 md:mt-10 mb-6 md:mb-8 w-full">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 xl:gap-8 justify-center items-center lg:items-stretch relative z-10 w-full">

            {/* Left Card */}
            <div className="bg-[#FFF8F8] border border-[#F5D9D9] rounded-[32px] overflow-hidden relative z-20 flex flex-col w-full max-w-[680px] lg:max-w-none mx-auto lg:flex-[1]">
              
              <h3 className="text-center text-[#DC2626] font-bold text-[22px] lg:text-[24px] pt-6 lg:pt-6 px-6 tracking-tight">
                The Challenges You Face
              </h3>

              <div className="flex flex-col lg:flex-row items-stretch flex-1 w-full mt-4 lg:mt-6">
                {/* Image */}
                <div className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center lg:justify-start pl-0 lg:pl-2 xl:pl-4">
                  <Image
                    src="/assets/images/resources/challenges_and_squads/stressed_developer_v4.png"
                    alt="Challenges"
                    width={800}
                    height={800}
                    className="w-full max-w-[380px] lg:max-w-[105%] h-auto object-contain object-center lg:scale-[1.05] transform origin-center"
                    unoptimized
                    priority
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center p-6 lg:p-0 lg:pr-6 lg:pb-6 lg:pl-2">
                  <ul className="space-y-3 lg:space-y-3 w-full">
                    {challenges.map((item) => (
                      <li key={item} className="flex items-start gap-3 md:gap-4 text-[15px] md:text-[16px] leading-snug text-[#334155] font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] mt-0.5 shrink-0">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Center Arrow */}
            <div className="flex flex-col items-center justify-center relative z-10 shrink-0 lg:w-[60px] xl:w-[100px] my-4 lg:my-0">
              <div className="relative w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] flex items-center justify-center">
                
                {/* Desktop Horizontal Lines */}
                <div className="hidden lg:block absolute top-1/2 right-1/2 w-[100px] xl:w-[150px] -translate-y-1/2 border-t-[2px] border-dashed border-[#FCA5A5] z-[-1] opacity-80" />
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-[100px] xl:w-[150px] -translate-y-1/2 border-t-[2px] border-dashed border-[#86EFAC] z-[-1] opacity-80" />
                
                {/* Mobile Vertical Lines */}
                <div className="lg:hidden absolute bottom-1/2 left-1/2 h-[150px] -translate-x-1/2 border-l-[2px] border-dashed border-[#FCA5A5] z-[-1] opacity-80" />
                <div className="lg:hidden absolute top-1/2 left-1/2 h-[150px] -translate-x-1/2 border-l-[2px] border-dashed border-[#86EFAC] z-[-1] opacity-80" />

                <div className="absolute inset-0 rounded-full border border-dashed border-[#D5D8F3] z-10 bg-[#FAFAFC]" />
                <div className="w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center relative z-20">
                  <svg
                    className="w-5 h-5 xl:w-6 xl:h-6 text-[#2563EB] transform lg:rotate-0 rotate-90 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <p className="text-[#2563EB] text-center font-bold mt-3 lg:mt-4 leading-[1.3] text-[15px] lg:text-[14px] xl:text-[15px] relative z-10 w-[140px] lg:absolute lg:top-[calc(50%+40px)] xl:top-[calc(50%+50px)] bg-[#FAFAFC] lg:bg-transparent px-2 py-1">
                What if you<br className="hidden lg:block"/> could skip all<br className="hidden lg:block"/> of this?
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[32px] overflow-hidden relative z-20 flex flex-col w-full max-w-[680px] lg:max-w-none mx-auto lg:flex-[1]">
              
              <h3 className="text-center text-[#059669] font-bold text-[22px] lg:text-[24px] pt-6 lg:pt-6 px-6 tracking-tight">
                Your Extended Product Team
              </h3>

              <div className="flex flex-col lg:flex-row items-stretch flex-1 w-full mt-4 lg:mt-6">
                {/* Image */}
                <div className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center lg:justify-start pl-0 lg:pl-2 xl:pl-4">
                  <Image
                    src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png"
                    alt="Squads"
                    width={800}
                    height={800}
                    className="w-full max-w-[380px] lg:max-w-[105%] h-auto object-contain object-center lg:scale-[1.05] transform origin-center"
                    unoptimized
                    priority
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center p-6 lg:p-0 lg:pr-6 lg:pb-6 lg:pl-2">
                  <ul className="space-y-3 lg:space-y-3 w-full">
                    {benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 md:gap-4 text-[15px] md:text-[16px] leading-snug text-[#334155] font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center text-[10px] mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}