"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WORKS = [
  {
    id: "sarva",
    logo: "/assets/images/index/sarva_logo.svg",
    content: (
      <>
        <p className="text-[#4b5563] text-xl md:text-[22px] mb-2 font-medium tracking-tight">Yoga, Meditation, Sleep, Mindfulness</p>
        <p className="text-[#1a1e2e] font-black text-xl md:text-[22px] tracking-tight">Yoga for you, from India</p>
      </>
    ),
    image: "/assets/images/index/sarvaimg.png",
  },
  {
    id: "godmusic",
    logo: "/assets/images/index/godmusic1.svg",
    content: (
      <>
        <p className="text-[#4b5563] text-xl md:text-[22px] mb-2 font-medium tracking-tight">
          Trending in <span className="font-black text-[#1a1e2e]">Music Catagory</span>
        </p>
        <p className="text-[#4b5563] text-xl md:text-[22px] font-medium tracking-tight">at Google playstore</p>
      </>
    ),
    image: "/assets/images/index/gm.png",
  },
];

export default function RecentWorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % WORKS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + WORKS.length) % WORKS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-[#f8fbfe] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          
          {/* LEFT SIDE - Static Container */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left pt-4 lg:pt-6 min-h-[200px] lg:min-h-[400px] justify-between relative z-10">
            
            <div className="w-full">
              <h2 className="text-2xl md:text-[32px] font-black text-[#1a1e2e] mb-8 tracking-tight">
                Our Recent Great Works
              </h2>
              
              <div className="relative h-[140px] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={WORKS[currentIndex].logo}
                      alt="Logo"
                      width={180}
                      height={80}
                      className="h-14 md:h-[60px] w-auto object-contain mb-4"
                    />
                    
                    <div className="mt-2">
                      {WORKS[currentIndex].content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* STATIC ARROWS (Desktop only) */}
            <div className="hidden lg:flex items-center gap-5 mt-4 lg:mt-8">
              <button 
                onClick={prevSlide} 
                className="w-[38px] h-[38px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-[#1a1e2e]"
              >
                <FiChevronLeft size={18} />
              </button>
              
              <div className="w-28 h-[2px] flex bg-gray-200 relative rounded-full overflow-hidden">
                {WORKS.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-full w-1/2 transition-colors duration-500 ease-in-out ${currentIndex === i ? 'bg-[#1a1e2e]' : 'bg-transparent'}`} 
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide} 
                className="w-[38px] h-[38px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-[#1a1e2e]"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
          
          {/* RIGHT SIDE - Animating Image & Mobile Arrows */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <div className="w-full relative flex justify-end aspect-[1340/956] lg:aspect-auto lg:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute right-0 top-0 w-full flex justify-end"
                >
                  <Image
                    src={WORKS[currentIndex].image}
                    alt="Project Preview"
                    width={1000}
                    height={800}
                    className="w-full max-w-[800px] h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBILE ARROWS */}
            <div className="flex lg:hidden items-center gap-5 mt-6 w-full z-10 justify-start">
              <button 
                onClick={prevSlide} 
                className="w-[38px] h-[38px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-[#1a1e2e]"
              >
                <FiChevronLeft size={18} />
              </button>
              
              <div className="w-28 h-[2px] flex bg-gray-200 relative rounded-full overflow-hidden">
                {WORKS.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-full w-1/2 transition-colors duration-500 ease-in-out ${currentIndex === i ? 'bg-[#1a1e2e]' : 'bg-transparent'}`} 
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide} 
                className="w-[38px] h-[38px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-[#1a1e2e]"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
