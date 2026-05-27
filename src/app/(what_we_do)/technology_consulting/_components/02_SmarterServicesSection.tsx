import Image from "next/image";

const SMARTER_SERVICES = [
  { title: "Digital Transformation", icon: "/assets/images/technology_Consulting/service_icon1.svg" },
  { title: "Customer Insight", icon: "/assets/images/technology_Consulting/service_icon2.svg" },
  { title: "Marketing and Sales", icon: "/assets/images/technology_Consulting/service_icon3.svg" },
  { title: "IT Consulting", icon: "/assets/images/technology_Consulting/service_icon4.svg" },
];

export default function SmarterServicesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-[#2B2B2B] mb-6 tracking-tight leading-snug">
            Smarter services to balance today's needs <br className="hidden md:block" /> with tomorrow's opportunities
          </h2>
          <p className="text-[15px] lg:text-[16px] text-gray-600 font-normal">
            Our world class consultants guide our customers to solve complex business challenges by providing novel strategic objectives.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {SMARTER_SERVICES.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="h-[72px] mb-6 flex items-center justify-center">
                <Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain" />
              </div>
              <h3 className="text-[15px] font-medium text-[#444]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
