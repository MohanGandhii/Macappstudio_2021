"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

const SCROLL_TEXTS = [
  "digitally transform",
  "confidently scale",
  "create a change",
];

const SCROLL_TEXTS_2 = ["to next level", "globally", "needs"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SCROLL_TEXTS.length);
    }, 4000);
    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[500px]">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 z-10 text-left order-1 lg:ml-8 xl:ml-12">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-black text-gray-900 leading-[1.15] tracking-tight mb-12">
              <div className="mb-2 lg:mb-4 whitespace-nowrap">
                <span>Let's{" "}</span>
                <span className="relative inline-flex overflow-hidden align-bottom h-[1.2em]">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="whitespace-nowrap"
                    >
                      {SCROLL_TEXTS[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              <div className="mb-8 lg:mb-16 whitespace-nowrap">
                <span>your organization{" "}</span>
                <span className="relative inline-flex overflow-hidden align-bottom h-[1.2em]">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={index + "-2"}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                      className="whitespace-nowrap"
                    >
                      {SCROLL_TEXTS_2[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>
            
            {/* Desktop Button */}
            <GetProposalButton className="hidden lg:inline-block bg-black text-white px-12 py-5 text-2xl font-bold hover:bg-gray-800 transition-all shadow-2xl active:scale-95" />
          </div>

          {/* Right Content - Static Image */}
          <div className="w-full lg:w-4/12 relative order-2 min-h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/assets/images/index/banner_rigth_image.png"
                alt="Banner Graphic"
                width={600}
                height={500}
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="w-full lg:hidden order-3 mt-12">
            <GetProposalButton className="w-full bg-black text-white py-6 text-2xl font-bold active:scale-95 transition-transform shadow-2xl" />
          </div>
        </div>
      </div>
      
      {/* Product Rating Section */}
      <div className="container mx-auto px-4 lg:px-8 mt-24 border-t border-gray-100 pt-20">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="transition-all duration-500 hover:scale-110">
              <Image
                src={`/assets/images/index/product_logo${num}.svg`}
                alt={`Product Logo ${num}`}
                width={160}
                height={60}
                className="h-10 md:h-14 w-auto object-contain brightness-0 opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
