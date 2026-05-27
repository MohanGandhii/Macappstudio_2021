"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppDeliverySection() {
  return (
    <section className="py-12 lg:py-16 bg-[#EBF9F2] overflow-hidden" id="app_delivery_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-7/12 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2B2B2B] mb-4 tracking-tight">
              App Delivery every 15 days
            </h2>
            <p className="text-[18px] lg:text-[22px] text-[#2B2B2B] font-medium leading-snug">
              <span className="block">Have a flexible milestone payment</span>
              <span className="block">system and pay as you go.</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="w-full md:w-5/12 flex justify-center md:justify-end"
          >
            <Image
              src="/assets/images/appdevelopment/rocket@2x.png"
              alt="Rocket"
              width={300}
              height={300}
              className="w-full max-w-[280px] h-auto object-contain hover:translate-y-[-10px] transition-transform duration-500 ease-out cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
