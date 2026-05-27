"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

const DIGITAL_SERVICES = [
  { name: "iOS App Development", icon: "/assets/images/appdevelopment/ios.svg" },
  { name: "Android App Development", icon: "/assets/images/appdevelopment/android.svg" },
  { name: "Web App Development", icon: "/assets/images/appdevelopment/web.svg" },
  { name: "Blockchain", icon: "/assets/images/appdevelopment/blockchain.svg" },
  { name: "Internet of Things (IOT)", icon: "/assets/images/appdevelopment/iot.svg" },
  { name: "Artificial Intelligence", icon: "/assets/images/appdevelopment/ai.svg" },
  { name: "Machine Learning", icon: "/assets/images/appdevelopment/ml.svg" },
  { name: "Chatbots", icon: "/assets/images/appdevelopment/chat.svg" },
  { name: "Augmented Reality/Virtual Reality", icon: "/assets/images/appdevelopment/ar.svg" },
];

export default function DigitalServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight"
          >
            Digital services we provide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] lg:text-[18px] text-gray-600 font-normal"
          >
            We deliver robust and secure applications which are scalable and reliable
          </motion.p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {DIGITAL_SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={clsx(
                "flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 text-center",
                "border-gray-200 transition-all duration-300 hover:bg-gray-50/50 group cursor-pointer",
                // Responsive borders logic for 2-col mobile vs 3-col desktop
                index % 2 === 0 ? "border-r" : "border-r-0",
                index % 3 === 2 ? "lg:border-r-0" : "lg:border-r",
                index < 8 ? "border-b" : "border-b-0",
                index < 6 ? "lg:border-b" : "lg:border-b-0"
              )}
            >
              <div className="h-16 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={64}
                  height={64}
                  className="max-h-full object-contain"
                />
              </div>
              <p className="font-medium text-[#444] text-[15px] transition-colors duration-300 group-hover:text-black">
                {service.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
