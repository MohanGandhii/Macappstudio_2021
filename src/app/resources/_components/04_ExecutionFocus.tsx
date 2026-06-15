import Image from "next/image";

const features = [
  {
    title: (
      <>
        Start in
        <br />
        <span className="whitespace-nowrap">1–2 Weeks</span>
      </>
    ),
    icon: "🚀",
    bg: "bg-[#F3EAFF]",
  },
  {
    title: (
      <>
        Weekly
        <br />
        <span className="whitespace-nowrap">Progress Updates</span>
      </>
    ),
    icon: "📊",
    bg: "bg-[#EAF2FF]",
  },
  {
    title: (
      <>
        Full Product
        <br />
        <span className="whitespace-nowrap">Ownership</span>
      </>
    ),
    icon: "🛡️",
    bg: "bg-[#E8F7ED]",
  },
  {
    title: (
      <>
        Transparent
        <br />
        <span className="whitespace-nowrap">Communication</span>
      </>
    ),
    icon: "💬",
    bg: "bg-[#FFF6D8]",
  },
  {
    title: (
      <>
        Flexible
        <br />
        <span className="whitespace-nowrap">Team Scaling</span>
      </>
    ),
    icon: "👥",
    bg: "bg-[#F3EAFF]",
  },
];


export default function ExecutionPartnerSection() {
  return (
    <section className="w-full py-12 lg:py-16 px-4 md:px-8">
      <div className="max-w-[1380px] mx-auto border border-[#ECECF3] rounded-[24px] bg-white p-6 md:p-8 lg:p-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-extrabold text-[#0F172A] leading-[1.15] text-[32px] md:text-[44px] lg:text-[54px]">
            You focus on the vision.
            <br className="hidden sm:block" />

            <span className="relative inline-block text-[#2F63F5] mt-2 sm:mt-0">
              We handle the execution.

              <svg
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80%] sm:w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M5 8C70 3 230 3 295 8"
                  stroke="#2F63F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>
        {/* Features */}
        <div className="mt-12 border border-[#ECECF3] rounded-[20px] overflow-hidden bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 xl:px-6 py-6 ${
                  index !== features.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-[#ECECF3]"
                    : ""
                }`}
              >
                <div
                  className={`w-[58px] h-[58px] rounded-full flex items-center justify-center text-[24px] shrink-0 ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div className="text-[#111827] font-semibold text-[15px] xl:text-[17px] leading-[1.25]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-6 md:mt-8 relative bg-[#F5F0FF] rounded-[22px] px-6 lg:px-4 xl:px-8 py-6 md:py-8 lg:py-6 overflow-hidden">
          {/* Desktop Background Illustration */}
          <div className="hidden lg:block absolute left-[-40px] xl:left-[-30px] top-1/2 -translate-y-1/2 w-[280px] xl:w-[380px] h-[280px] xl:h-[380px] pointer-events-none">
            <Image
              src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png"
              alt="Team"
              fill
              priority
              className="object-contain object-left"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            {/* Mobile Illustration */}
            <div className="relative w-full h-[220px] lg:hidden mb-2">
              <Image
                src="/assets/images/resources/challenges_and_squads/team_collaboration_v3.png"
                alt="Team"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Spacer for Desktop Illustration */}
            <div className="hidden lg:block w-[250px] xl:w-[340px] shrink-0"></div>

            {/* Content */}
            <div className="flex-1 px-0 min-w-0 text-center lg:text-left">
              <h3 className="text-[#0F172A] font-bold text-[18px] md:text-[22px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] leading-tight xl:whitespace-nowrap">
                From CTO pressure to predictable product delivery.
              </h3>

              <p className="mt-2 text-[#64748B] text-[14px] md:text-[16px] lg:text-[13px] xl:text-[15px] leading-[1.8] max-w-[480px] mx-auto lg:mx-0">
                That's why startups, scaleups and enterprises trust
                <br className="hidden sm:block" />
                MacAppStudio as their execution partner.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-[250px] shrink-0 lg:ml-4 xl:ml-8">
              <button className="flex-1 h-[50px] rounded-[10px] bg-[#2F63F5] text-white font-semibold text-[15px] flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                Book Free Discovery Call
              </button>

              <button className="flex-1 h-[50px] rounded-[10px] border-2 border-[#2F63F5] bg-white text-[#2F63F5] font-semibold text-[15px] flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

                Build My Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
