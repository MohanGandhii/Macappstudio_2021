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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EXPERTISE_DATA.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group flex flex-col items-start text-left p-6 md:p-8 bg-[#f9f9f9] rounded-2xl border border-gray-100 transition-all duration-300 hover:bg-white hover:border-blue-100 hover:shadow-premium"
            >
              <div className="mb-6 p-3 bg-white rounded-xl border border-gray-50 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain"
                />
              </div>
              
              <h3 className="text-lg md:text-[20px] font-bold text-[#111827] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 mb-8 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center gap-1.5 text-blue-600 font-bold text-[13px] mt-auto">
                <span>Read more</span>
                <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
