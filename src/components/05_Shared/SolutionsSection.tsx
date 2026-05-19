import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const SOLUTIONS = [
  { title: "Health Care", icon: "/assets/images/index/solutions_icon1.svg" },
  { title: "E-commerce", icon: "/assets/images/index/solutions_icon2.svg" },
  { title: "Real Estate", icon: "/assets/images/index/solutions_icon3.svg" },
  { title: "Education", icon: "/assets/images/index/solutions_icon4.svg" },
  { title: "Logistics", icon: "/assets/images/index/solutions_icon5.svg" },
  { title: "Social Media", icon: "/assets/images/index/solutions_icon6.svg" },
  { title: "Fintech", icon: "/assets/images/index/solutions_icon7.svg" },
  { title: "Entertainment", icon: "/assets/images/index/solutions_icon8.svg" },
];

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-white" id="our_solutions_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">Our Solutions</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We provide custom software solutions for a wide range of industries, helping businesses of all sizes to digitally transform and grow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {SOLUTIONS.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-[40px] p-8 text-center border border-gray-100 hover:bg-blue-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200"
            >
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src={solution.icon} 
                  alt={solution.title} 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/oursolutions" 
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1 group"
          >
            <span>View all solutions</span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
