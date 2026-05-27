"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TOOLS = [
  { title: "iOS App Development", img: "/assets/images/appdevelopment/toolimg1.svg" },
  { title: "Android App Development", img: "/assets/images/appdevelopment/toolimg2.svg" },
  { title: "Web App Development", img: "/assets/images/appdevelopment/toolimg3.svg" },
  { title: "Cloud", img: "/assets/images/appdevelopment/toolimg4.svg" },
  { title: "Design", img: "/assets/images/appdevelopment/toolimg5.svg" },
  { title: "Database", img: "/assets/images/appdevelopment/toolimg6.svg" },
  { title: "Virtual and Mixed Reality", img: "/assets/images/appdevelopment/toolimg7.svg" },
  { title: "Server Technologies", img: "/assets/images/appdevelopment/toolimg8.svg" },
  { title: "Testing", img: "/assets/images/appdevelopment/toolimg9.svg" },
];

export default function ToolsSection() {
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
            Tools and technologies we use
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal"
          >
            We have a love towards technology and we are obsessed with experimenting latest tools and trends
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOOLS.map((tool, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#fafafa] p-8 flex flex-col items-start border border-transparent hover:border-gray-200/60 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 group rounded-lg cursor-pointer"
            >
              <h3 className="text-[16px] lg:text-[18px] font-bold text-[#2B2B2B] mb-8 transition-colors duration-300 group-hover:text-black">
                {tool.title}
              </h3>
              <div className="w-full overflow-hidden flex justify-center items-center">
                <Image
                  src={tool.img}
                  alt={tool.title}
                  width={350}
                  height={200}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
