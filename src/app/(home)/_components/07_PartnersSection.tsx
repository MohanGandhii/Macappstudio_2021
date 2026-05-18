"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SETS = [
  { id: 1, src: "/assets/images/index/partner_icon01.svg" },
  { id: 2, src: "/assets/images/index/partner_icon02.svg" },
];

export default function PartnersSection() {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden" id="mind_partner_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <h2 className="text-3xl md:text-[40px] font-black text-[#1a1e2e] mb-6 leading-tight tracking-tight">
              We work with great minds like you
            </h2>
            <p className="text-base md:text-[17px] text-gray-500 leading-relaxed mb-12 max-w-2xl font-medium">
              We are very selective about who we work or partner with. We have worked with small start ups and huge corporation but we only do work that excites us and with people who are as passionate as we are.
            </p>
            
            <div className="relative w-full max-w-[568px] h-[140px] md:h-[184px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSet}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-start"
                >
                  <Image
                    src={SETS[currentSet].src}
                    alt={`Partner set ${SETS[currentSet].id}`}
                    width={568}
                    height={184}
                    className="w-full h-auto object-contain brightness-0"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <Image
                src="/assets/images/index/mind_partner_images.png"
                alt="Working illustration"
                width={700}
                height={600}
                className="w-full h-auto object-contain relative z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
