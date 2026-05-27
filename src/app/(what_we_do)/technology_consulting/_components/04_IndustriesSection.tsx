import Image from "next/image";

const INDUSTRIES = [
  { name: "Agriculture", icon: "/assets/images/technology_Consulting/industries_solution_icon1.svg" },
  { name: "Aerospacd and Defence", icon: "/assets/images/technology_Consulting/industries_solution_icon2.svg" },
  { name: "Chemicals", icon: "/assets/images/technology_Consulting/industries_solution_icon3.svg" },
  { name: "Consumer Products", icon: "/assets/images/technology_Consulting/industries_solution_icon4.svg" },
  { name: "Construction", icon: "/assets/images/technology_Consulting/industries_solution_icon5.svg" },
  { name: "Education", icon: "/assets/images/technology_Consulting/industries_solution_icon6.svg" },
  { name: "Finacial Institutions", icon: "/assets/images/technology_Consulting/industries_solution_icon7.svg" },
  { name: "Helthcare Service", icon: "/assets/images/technology_Consulting/industries_solution_icon8.svg" },
  { name: "Insurance", icon: "/assets/images/technology_Consulting/industries_solution_icon9.svg" },
  { name: "Oil and Gas", icon: "/assets/images/technology_Consulting/industries_solution_icon10.svg" },
  { name: "Public and Social Sector", icon: "/assets/images/technology_Consulting/industries_solution_icon11.svg" },
  { name: "Pharmaceuticals and Medical Products", icon: "/assets/images/technology_Consulting/industries_solution_icon12.svg" },
  { name: "Real Estate", icon: "/assets/images/technology_Consulting/industries_solution_icon13.svg" },
  { name: "Retail", icon: "/assets/images/technology_Consulting/industries_solution_icon14.svg" },
  { name: "Social Networking", icon: "/assets/images/technology_Consulting/industries_solution_icon15.svg" },
  { name: "Safty and Research", icon: "/assets/images/technology_Consulting/industries_solution_icon16.svg" },
  { name: "Sports", icon: "/assets/images/technology_Consulting/industries_solution_icon17.svg" },
  { name: "Travel and Tourism", icon: "/assets/images/technology_Consulting/industries_solution_icon18.svg" },
  { name: "Technology, Media and Telecommunication", icon: "/assets/images/technology_Consulting/industries_solution_icon19.svg" },
  { name: "Transportation and Logistics", icon: "/assets/images/technology_Consulting/industries_solution_icon20.svg" },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-[28px] md:text-[34px] font-black text-center text-[#2B2B2B] leading-[38px] mb-12 tracking-tight">
          Industries we provide solutions for
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden">
          {INDUSTRIES.map((ind, index) => (
            <div
              key={index}
              className={`
                flex flex-col text-left justify-start p-6 pt-5 pl-6 min-h-[140px] border-[#e6e6e6] transition-all
                ${(index + 1) % 5 === 0 ? "lg:border-r-0" : "lg:border-r"}
                ${index >= 15 ? "lg:border-b-0" : "lg:border-b"}
                ${(index + 1) % 3 === 0 ? "md:border-r-0" : "md:border-r"}
                ${index >= 18 ? "md:border-b-0" : "md:border-b"}
                ${(index + 1) % 2 === 0 ? "max-md:border-r-0" : "max-md:border-r"}
                ${index >= 18 ? "max-md:border-b-0" : "max-md:border-b"}
              `}
            >
              <Image
                src={ind.icon}
                alt={ind.name}
                width={50}
                height={50}
                className="mb-4 object-contain"
              />
              <p className="text-[16px] font-medium text-gray-800 leading-snug mt-1">
                {ind.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
