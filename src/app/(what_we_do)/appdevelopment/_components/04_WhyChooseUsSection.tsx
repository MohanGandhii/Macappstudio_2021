"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WHY_CHOOSE_US = [
  {
    title: "Transparent Process",
    desc: "We involve you in each and every stages of the app development journey, so that you can take better decisions.",
    icon: "/assets/images/appdevelopment/transparent.svg",
  },
  {
    title: "Milestone Payments",
    desc: "Flexible milestone payment system enables you to pay at the time of each release, which we deliver every 15 days.",
    icon: "/assets/images/appdevelopment/milestone.svg",
  },
  {
    title: "Reliable Quality",
    desc: "We deliver 100% qualified products which passes several quality checks and rigorous testing.",
    icon: "/assets/images/appdevelopment/reliable.svg",
  },
  {
    title: "Built by experts",
    desc: "Your product will be crafted by experts who are veterans in their specific domain.",
    icon: "/assets/images/appdevelopment/built.svg",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight"
          >
            Why choose us ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] lg:text-[18px] text-gray-700 font-normal"
          >
            We are a bootstrapped company who understands the needs of our clients and help them grow
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start text-left group p-8 bg-white border border-gray-100 hover:border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 h-14 flex items-center justify-start transition-transform duration-300 group-hover:scale-110">
                <Image src={item.icon} alt={item.title} width={56} height={56} className="object-contain" />
              </div>
              <h3 className="text-[18px] lg:text-[20px] font-bold text-[#2B2B2B] mb-4 tracking-tight">{item.title}</h3>
              <p className="text-[15px] text-[#555] leading-[1.7] font-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
