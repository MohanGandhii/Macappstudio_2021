import Image from "next/image";

const HIGHLIGHTS = [
  { value: "2012", label: "Founded by George and Suresh" },
  { value: "80+", label: "Employees" },
  { value: "120+", label: "Trusted clients" },
  { value: "7", label: "Awards" },
];

const HIGHLIGHT_NOTES = [
  { text: "We are boot strapped and we are profitable.", icon: "/assets/images/who_we_are/bootstrap.svg" },
  { text: "We have the largest collection of pre-built frameworks in the world.", icon: "/assets/images/who_we_are/framework.svg" },
  { text: "We are now the most sought after software factory in the world.", icon: "/assets/images/who_we_are/star.svg" },
];

export default function HighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[900px]">
        <h2 className="text-[26px] md:text-[32px] font-bold text-[#2B2B2B] text-center mb-12 md:mb-16 tracking-tight">
          Our Highlights
        </h2>
        
        <div className="flex flex-wrap justify-between items-start gap-8 border-b border-[#E1E1E1] pb-10 mb-10">
          {HIGHLIGHTS.map((item, index) => (
            <div key={index} className="text-center md:text-center flex-1 min-w-[120px]">
              <h3 className="text-[36px] md:text-[46px] font-bold text-[#2B2B2B] mb-1 leading-none">{item.value}</h3>
              <p className="text-[13px] md:text-[14px] text-[#2B2B2B] font-medium leading-tight">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl mx-auto pl-0 md:pl-10">
          {HIGHLIGHT_NOTES.map((note, index) => (
            <div key={index} className="flex items-start md:items-center gap-5 md:gap-6">
              <div className="w-[30px] flex-shrink-0 flex justify-center mt-1 md:mt-0">
                <Image src={note.icon} alt="" width={30} height={30} className="w-[28px] h-[28px] object-contain" />
              </div>
              <p className="text-[#2B2B2B] text-[18px] md:text-[22px] font-medium leading-[1.4] tracking-tight">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
