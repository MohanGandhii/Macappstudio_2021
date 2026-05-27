import Image from "next/image";

const AWARDS = [
  { img: "/assets/images/index/award01.png", label: "Intel Worldwide Top Innovator 2017" },
  { img: "/assets/images/index/award04.png", label: "Winner of Intel Best App to Stay in Sync Contest" },
  { img: "/assets/images/index/award05.png", label: "Winner of the Intel Best App to Stay Informed Contest" },
  { img: "/assets/images/index/award06.png", label: "Winner of Intel Dixons Home Innovation Challenge" },
];

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]" id="our_awards_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-left mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[44px] font-black text-gray-900 mb-2 tracking-tight">Our Awards</h2>
          <p className="text-base md:text-xl text-gray-600 font-semibold">
            MacAppStudio has been recognized by Intel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {AWARDS.map((award, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 h-[180px] w-full flex items-center justify-center">
                <Image
                  src={award.img}
                  alt={award.label}
                  width={200}
                  height={200}
                  className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                  unoptimized
                />
              </div>
              <p className="text-[14px] md:text-[15px] font-semibold text-[#333] leading-snug tracking-tight max-w-[200px]">
                {award.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
