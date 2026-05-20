"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BANNER_IMAGES = [
  "/assets/images/who_we_are/banner_rigth_image1.png",
  "/assets/images/who_we_are/banner_rigth_image2.png",
  "/assets/images/who_we_are/banner_rigth_image3.png",
  "/assets/images/who_we_are/banner_rigth_image4.png",
];

export default function HeroSection() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F7F6FA]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 z-10 text-left">
            <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#2B2B2B] leading-[1.2] mb-6 tracking-tight pr-0 lg:pr-10">
              Our mission is to make our clients succeed and sustain
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.7] max-w-[95%] font-normal pr-0 lg:pr-10">
              At MacAppStudio, we are not only committed to provide
              novel solutions but also to make our client sustain and be
              among the elite in their domain.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center lg:justify-end"
              >
                <Image
                  src={BANNER_IMAGES[activeImg]}
                  alt="Who we are banner"
                  width={600}
                  height={500}
                  className="w-full max-w-[550px] h-auto object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
