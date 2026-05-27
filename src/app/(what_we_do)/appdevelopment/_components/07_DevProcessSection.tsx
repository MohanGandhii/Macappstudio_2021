"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DEV_PROCESS = [
  { text: "Requirements Analysis", icon: "/assets/images/appdevelopment/D1.svg" },
  { text: "Design", icon: "/assets/images/appdevelopment/D2.svg" },
  { text: "Architecture", icon: "/assets/images/appdevelopment/d3.svg" },
  { text: "Development", icon: "/assets/images/appdevelopment/D4.svg" },
  { text: "Build and Release", icon: "/assets/images/appdevelopment/D5.svg" },
  { text: "Quality Assurance", icon: "/assets/images/appdevelopment/D6.svg" },
  { text: "Submission to App Stores", icon: "/assets/images/appdevelopment/d7.svg" },
  { text: "Go Live", icon: "/assets/images/appdevelopment/D8.svg" },
  { text: "Settling Period in Market (3 months)", icon: "/assets/images/appdevelopment/d9.svg" },
  { text: "Post Launch Maintenance", icon: "/assets/images/appdevelopment/D10.svg" },
  { text: "Optimization and Enhancements", icon: "/assets/images/appdevelopment/d11.svg" },
];

export default function DevProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight"
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal"
          >
            We ensure our clients experience a transparent and seamless process throughout the development journey
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEV_PROCESS.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-start bg-white p-8 border border-gray-200 rounded-sm transition-all duration-300 hover:border-gray-300 hover:shadow-sm group cursor-pointer"
            >
              <div className="h-10 mb-8 flex items-center justify-start transition-transform duration-300 group-hover:scale-110">
                <Image src={step.icon} alt={step.text} width={36} height={36} className="object-contain" />
              </div>
              <p className="font-bold text-[#2B2B2B] leading-relaxed text-[15px] transition-colors duration-300 group-hover:text-black">
                {index + 1}. {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
