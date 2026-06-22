import Image from "next/image";

const challenges = [
  "Hiring takes too long",
  "Specialized talent\nis hard to find",
  "Internal teams are\noverloaded",
  "Innovation gets pushed aside",
  "Product delivery becomes\nunpredictable",
  "Scaling creates management\nheadaches",
];

const benefits = [
  "Dedicated team starts in 1-2 weeks",
  "Senior specialists available instantly",
  "Product strategy +\nexecution together",
  "R&D experts on demand",
  "Weekly progress visibility",
  "Scale up or down anytime",
];

export default function ChallengesAndSquads() {
  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8">
      <div className="max-w-[1380px] mx-auto relative bg-[#FAFAFC] border border-[#ECECF3] rounded-[32px] overflow-hidden px-6 lg:px-12 pt-8 pb-10">

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
        <div className="relative mt-12 md:mt-16 mb-6 md:mb-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_160px_1fr] gap-10 xl:gap-0 justify-center items-center xl:items-stretch relative z-10 w-full">

            {/* Left Card */}
            <div className="bg-[#FFF8F8] border border-[#F5D9D9] rounded-[32px] pt-5 pb-5 px-5 xl:px-8 relative z-20 flex flex-col w-full max-w-[680px] mx-auto">
              <h3 className="text-center text-[#DC2626] font-bold text-[18px] xl:text-[20px] mb-3 xl:mb-4 tracking-tight">
                The Challenges You Face
              </h3>

              <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[180px_1fr] xl:grid-cols-[240px_1fr] items-center gap-3 xl:gap-5 flex-1 w-full mt-1">
                {/* Image */}
                <div className="flex justify-center items-end h-full w-full">
                  <Image
                    src="/assets/images/resources/challenges_and_squads/stressed_developer_v4.png"
                    alt="Challenges"
                    width={800}
                    height={800}
                    className="w-full max-w-[240px] h-auto object-contain object-bottom"
                    unoptimized
                    priority
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center h-full w-full">
                  <ul className="space-y-[4px] xl:space-y-[6px]">
                    {challenges.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 xl:gap-3 text-[12.5px] xl:text-[13.5px] leading-[1.15] text-[#334155] font-medium">
                        <span className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px] rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[9px] xl:text-[10px] mt-[1px] shrink-0">
                          ✕
                        </span>
                        <span className="whitespace-pre-line">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Center Arrow */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <div className="relative w-[114px] h-[114px] flex items-center justify-center">
                <div className="hidden xl:block absolute top-1/2 right-full w-[100px] -translate-y-1/2 border-t-[2px] border-dashed border-[#FCA5A5] z-0 opacity-80" />
                <div className="hidden xl:block absolute top-1/2 left-full w-[100px] -translate-y-1/2 border-t-[2px] border-dashed border-[#86EFAC] z-0 opacity-80" />
                <div className="absolute inset-0 rounded-full border border-dashed border-[#D5D8F3] z-10" />
                <div className="w-[88px] h-[88px] rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center relative z-20">
                  <svg
                    className="w-8 h-8 text-[#2563EB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <p className="text-[#2563EB] text-center font-semibold mt-4 leading-[1.4] text-[15px] relative z-10">
                What if you<br />could skip all<br />of this?
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[32px] pt-5 pb-5 px-5 xl:px-8 relative z-20 flex flex-col w-full max-w-[680px] mx-auto">
              <h3 className="text-center text-[#059669] font-bold text-[18px] xl:text-[20px] mb-3 xl:mb-4 tracking-tight">
                Your Extended Product Team
              </h3>

              <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[180px_1fr] xl:grid-cols-[240px_1fr] items-center gap-3 xl:gap-5 flex-1 w-full mt-1">
                {/* Image */}
                <div className="flex justify-center items-end h-full w-full">
                  <Image
                    src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png"
                    alt="Squads"
                    width={800}
                    height={800}
                    className="w-full max-w-[240px] h-auto object-contain object-bottom"
                    unoptimized
                    priority
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center h-full w-full">
                  <ul className="space-y-[4px] xl:space-y-[6px]">
                    {benefits.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 xl:gap-3 text-[12.5px] xl:text-[13.5px] leading-[1.15] text-[#334155] font-medium">
                        <span className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px] rounded-full bg-[#059669] text-white flex items-center justify-center text-[9px] xl:text-[10px] mt-[1px] shrink-0">
                          ✓
                        </span>
                        <span className="whitespace-pre-line">{item}</span>
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