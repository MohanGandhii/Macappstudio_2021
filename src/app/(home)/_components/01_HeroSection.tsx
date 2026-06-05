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
    <section className="relative pt-6 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 z-10 text-left order-1">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-6">
              <div className="mb-2 lg:mb-4 whitespace-nowrap">
                <span>Let's{" "}</span>
                <span className="relative inline-flex overflow-hidden align-baseline h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="whitespace-nowrap"
                    >
                      {SCROLL_TEXTS[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              <div className="whitespace-nowrap">
                <span>your organization{" "}</span>
                <span className="relative inline-flex overflow-hidden align-baseline h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index + "-2"}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="whitespace-nowrap"
                    >
                      {SCROLL_TEXTS_2[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>

            {/* Desktop Button */}
            <GetProposalButton className="hidden lg:inline-block bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-800 transition-all shadow-md active:scale-95" />
          </div>

          {/* Right Content - Static Image */}
          <div className="w-full lg:w-5/12 relative order-2 flex items-center justify-center">
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
          <div className="w-full lg:hidden order-3 mt-8">
            <GetProposalButton className="w-full bg-black text-white py-4 text-lg font-bold active:scale-95 transition-transform shadow-lg" />
          </div>
        </div>
      </div>

      {/* Product Rating Section */}
      <div className="w-full bg-[#fafafa]/85 border-y border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mt-12 py-8">
        <div className="container mx-auto px-4 lg:px-8">
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
      </div>
    </section>
  );
}
