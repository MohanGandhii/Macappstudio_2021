import Image from "next/image";

const AWARDS = [
  { img: "/assets/images/index/award01.png", label: "Intel Worldwide Top Innovator 2016" },
  { img: "/assets/images/index/award02.png", label: "Intel BlackBelt for App Development" },
  { img: "/assets/images/index/award03.png", label: "Most Valuable Developers Award" },
  { img: "/assets/images/index/award01.png", label: "Intel Worldwide Top Innovator 2017" },
  { img: "/assets/images/index/award04.png", label: "Winner of Intel Best App to Stay in Sync Contest" },
  { img: "/assets/images/index/award05.png", label: "Winner of the Intel Best App to Stay Informed Content" },
  { img: "/assets/images/index/award06.png", label: "Winner of Intel Dixons Home Innovation Challenge" },
];

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="our_awards_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-left mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[44px] font-black text-[#1a1e2e] mb-2 tracking-tight">Our Awards</h2>
          <p className="text-base md:text-xl text-gray-500 font-medium">
            MacAppStudio has been recognize by Intel
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {AWARDS.slice(0, 4).map((award, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-8 w-full max-w-[180px]">
                <Image
                  src={award.img}
                  alt={award.label}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-[13px] md:text-[15px] font-bold text-gray-600 leading-tight tracking-tight max-w-[160px]">
                {award.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
