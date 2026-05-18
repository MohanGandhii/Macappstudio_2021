import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const EXPERTISE_DATA = [
  {
    title: "App Development",
    description: "Build a secure, futureproof application through latest technologies and enhance your user experience",
    icon: "/assets/images/index/expertise_icon1.svg",
    link: "/appdevelopment",
  },
  {
    title: "Technology Consulting",
    description: "Explore new opportunities, get insights and overcome your barriers by consulting with our experts",
    icon: "/assets/images/index/expertise_icon2.svg",
    link: "/technology_consulting",
  },
  {
    title: "Research and Development",
    description: "Analyze, solve complex challenges and develop solutions which creates a revolution",
    icon: "/assets/images/index/expertise_icon3.svg",
    link: "/R_D",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-10 md:py-12 lg:py-14 bg-white" id="expertise_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-6 md:mb-8">
          <h2 className="text-xl md:text-[28px] font-extrabold text-[#111827] mb-1 tracking-tight">Our Expertise</h2>
          <p className="text-xs md:text-sm text-gray-500">
            Right from app development to scaling your organization, we have all the capabilites you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {EXPERTISE_DATA.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group flex flex-col items-start text-left p-5 md:p-6 bg-[#f9f9f9] transition-colors hover:bg-gray-100"
            >
              <div className="mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              <h3 className="text-lg md:text-[19px] font-bold text-[#111827] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 mb-8 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center gap-1.5 text-[#111827] font-bold text-[13px] mt-auto">
                <span>Read more</span>
                <FiArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
