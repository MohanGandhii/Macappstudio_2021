"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DigitizeSection() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight"
          >
            Let’s digitize your business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] lg:text-[20px] text-gray-700 font-normal"
          >
            We do apps for diverse platforms like Android, iOS, Web, Admin Dashboards, Chat Bots, POS
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/assets/images/appdevelopment/devices.png"
            alt="Devices"
            width={1400}
            height={700}
            className="w-full max-w-6xl h-auto object-contain hidden md:block"
          />
          <Image
            src="/assets/images/appdevelopment/devicesmob.png"
            alt="Devices Mobile"
            width={600}
            height={600}
            className="w-full h-auto object-contain block md:hidden"
          />
        </motion.div>
      </div>
    </section>
  );
}
