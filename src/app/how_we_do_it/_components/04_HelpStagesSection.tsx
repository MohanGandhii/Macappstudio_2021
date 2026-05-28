import Image from "next/image";

const HELP_STAGES = [
  {
    title: "Start",
    desc: "If you have an idea, we can help you get started and launch to the market in days.",
    icon: "/assets/images/how_we_do_it/start.svg"
  },
  {
    title: "Scale",
    desc: "If you have an existing small business, we can help you scale it across the globe.",
    icon: "/assets/images/how_we_do_it/scale.svg"
  },
  {
    title: "Streamline",
    desc: "If you are a big company, we can help you streamline the processes and growth in the long term.",
    icon: "/assets/images/how_we_do_it/streamilne.svg"
  },
];

export default function HelpStagesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 pb-16 sm:pb-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2
            className="text-[28px] sm:text-[36px] lg:text-[48px] leading-tight font-bold text-[#222] tracking-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            How we can help you?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-24">
          {HELP_STAGES.map((stage, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="mb-6 sm:mb-8 h-16 sm:h-20 flex items-center">
                <Image
                  src={stage.icon}
                  alt={stage.title}
                  width={64}
                  height={64}
                  className="mix-blend-multiply w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px]"
                />
              </div>
              <h3
                className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#222] mb-3 sm:mb-5 tracking-tight"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                {stage.title}
              </h3>
              <p
                className="text-[#333]"
                style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}
              >
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
