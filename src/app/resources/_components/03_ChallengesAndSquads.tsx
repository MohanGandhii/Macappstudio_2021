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
  "Dedicated team starts in 1-2\nweeks",
  "Senior specialists available\ninstantly",
  "Product strategy +\nexecution together",
  "R&D experts on demand",
  "Weekly progress visibility",
  "Scale up or down anytime",
];

export default function ChallengesAndSquads() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1380px] mx-auto relative bg-[#FAFAFC] border border-[#ECECF3] rounded-[32px] overflow-hidden px-8 lg:px-12 pt-8 pb-10">

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
        <div className="text-center mt-5">
          <h2 className="font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.03em] text-[36px] md:text-[52px] xl:text-[64px]">
            Building Products Shouldn't Feel Like
            <br />
            <span className="text-[#2563EB]">
              Fighting Fires
            </span>{" "}
            Every Day.
          </h2>

          <div className="mt-5 text-[#64748B] text-[16px] leading-8">
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
        <div className="relative mt-16 mb-10">

          {/* Dashed Connector */}
          <div className="hidden xl:block absolute top-[150px] left-[310px] right-[310px] border-t-[2px] border-dashed border-[#CBD5E1] z-0" />

          <div className="grid xl:grid-cols-[620px_80px_620px] gap-0 justify-center items-stretch relative z-10">

            {/* Left Card */}
            <div className="bg-[#FFF8F8] border border-[#F5D9D9] rounded-[32px] pt-8 pb-0 px-8 relative flex flex-col mx-auto w-full max-w-[620px] min-h-[300px]">

              <h3 className="text-center text-[#DC2626] font-bold text-[20px] mb-6 tracking-tight">
                The Challenges You Face
              </h3>

              <div className="flex flex-row items-end flex-1">
                {/* Image Fixed inside the box */}
                <div className="shrink-0 w-[270px] -ml-8 mb-0 relative z-10">
                  <Image
                    src="/assets/images/resources/challenges_and_squads/stressed_developer_v4.png"
                    alt="Challenges"
                    width={500}
                    height={500}
                    className="w-full h-auto object-bottom"
                    unoptimized
                    priority
                  />
                </div>

                {/* Text Content shifted right */}
                <div className="flex-grow pb-8 pl-[60px] relative z-20">
                  <ul className="space-y-[14px]">
                    {challenges.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.3] text-[#334155] font-medium">
                        <span className="w-[18px] h-[18px] rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] mt-[1px] shrink-0">
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
            <div className="flex flex-col items-center justify-center pt-4">
              <div className="w-[88px] h-[88px] rounded-full bg-white border border-[#E8EAF2] shadow-sm flex items-center justify-center relative z-10">
                <svg
                  className="w-8 h-8 text-[#2563EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <p className="text-[#2563EB] text-center font-semibold mt-4 leading-[1.4] text-[14px]">
                What if you<br />could skip all<br />of this?
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-[#F5FFF8] border border-[#D8F4E3] rounded-[32px] pt-8 pb-0 px-8 relative flex flex-col mx-auto w-full max-w-[620px] min-h-[300px]">

              <h3 className="text-center text-[#059669] font-bold text-[20px] mb-6 tracking-tight">
                Your Extended Product Team
              </h3>

              <div className="flex flex-row items-end flex-1">
                {/* Image Fixed inside the box */}
                <div className="shrink-0 w-[260px] -ml-8 mb-0 relative z-10">
                  <Image
                    src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png"
                    alt="Squads"
                    width={500}
                    height={500}
                    className="w-full h-auto object-bottom"
                    unoptimized
                    priority
                  />
                </div>

                {/* Text Content shifted right */}
                <div className="flex-grow pb-8 pl-[60px] relative z-20">
                  <ul className="space-y-[14px]">
                    {benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.3] text-[#334155] font-medium">
                        <span className="w-[18px] h-[18px] rounded-full bg-[#059669] text-white flex items-center justify-center text-[10px] mt-[1px] shrink-0">
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