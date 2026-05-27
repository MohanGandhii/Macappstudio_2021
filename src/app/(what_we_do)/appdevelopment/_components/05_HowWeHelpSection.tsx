"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HOW_WE_HELP = [
  { text: "Validate your vision and provide a clear roadmap", icon: "/assets/images/appdevelopment/1.svg" },
  { text: "Innovate solutions for complex problems", icon: "/assets/images/appdevelopment/2.svg" },
  { text: "Deliver products at 10x speed and maximize efficiency", icon: "/assets/images/appdevelopment/3.svg" },
  { text: "Adapt to latest technologies and provide a future proof product", icon: "/assets/images/appdevelopment/4.svg" },
  { text: "Ensure product scalability, security and modularity", icon: "/assets/images/appdevelopment/5.svg" },
  { text: "World class support during and after project completion", icon: "/assets/images/appdevelopment/6.svg" },
];

export default function HowWeHelpSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight"
          >
            How we can help you ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal"
          >
            With our amazing in-house talents, we deliver insightful solutions and<br className="hidden lg:block"/> you can witness a seamless transition of your business into the digital era.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <Image
              src="/assets/images/appdevelopment/question@2x.jpg"
              alt="Help"
              width={600}
              height={600}
              className="w-full max-w-[500px] mx-auto h-auto object-contain"
            />
          </motion.div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-center">
            {HOW_WE_HELP.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-start transition-transform duration-300 group-hover:scale-110">
                  <Image src={item.icon} alt="icon" width={24} height={24} className="object-contain" />
                </div>
                <p className="text-[15px] lg:text-[16px] text-[#333] font-normal leading-relaxed transition-colors duration-300 group-hover:text-black">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
