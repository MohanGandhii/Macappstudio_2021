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
    <section className="w-full py-10 px-4">
      <div className="max-w-[1380px] mx-auto border border-[#ECECF3] rounded-[24px] bg-white p-8 lg:p-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-extrabold text-[#0F172A] leading-[1.15] text-[34px] md:text-[48px] lg:text-[54px]">
            You focus on the vision.
            <br />

            <span className="relative inline-block text-[#2F63F5]">
              We handle the execution.

              <svg
                className="absolute left-1/2 -translate-x-1/2 -bottom-2"
                width="300"
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
          <div className="grid grid-cols-1 md:grid-cols-5">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 xl:px-6 py-6 ${
                  index !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#ECECF3]"
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
        <div className="mt-4 relative bg-[#F5F0FF] rounded-[22px] px-8 lg:px-0 py-4 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Illustration */}
            <div className="hidden lg:flex w-[360px] justify-start items-end self-stretch">
              <div className="relative w-[330px] h-[145px]">
                <Image
                  src="/assets/images/team-highfive.png"
                  alt="Team"
                  fill
                  priority
                  className="object-contain object-left-bottom"
                />
              </div>
            </div>

            {/* Mobile Illustration */}
            <div className="relative w-full h-[180px] lg:hidden mb-4">
              <Image
                src="/assets/images/team-highfive.png"
                alt="Team"
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1 px-0 lg:px-2">
              <h3 className="text-[#0F172A] font-bold text-[22px] lg:text-[24px] leading-tight">
                From CTO pressure to predictable product delivery.
              </h3>

              <p className="mt-3 text-[#64748B] text-[15px] leading-[2] max-w-[480px]">
                That's why startups, scaleups and enterprises trust
                <br />
                MacAppStudio as their execution partner.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-5 lg:mt-0 lg:mr-8 flex flex-col gap-3 w-full sm:w-[250px] shrink-0">
              <button className="h-[50px] rounded-[10px] bg-[#2F63F5] text-white font-semibold text-[15px] flex items-center justify-center gap-2">
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

              <button className="h-[50px] rounded-[10px] border-2 border-[#2F63F5] bg-white text-[#2F63F5] font-semibold text-[15px] flex items-center justify-center gap-2">
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
