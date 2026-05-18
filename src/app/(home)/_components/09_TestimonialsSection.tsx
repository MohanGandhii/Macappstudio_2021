"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TESTIMONIALS = [
  {
    name: "Dr.K.Vinayak Senthil",
    role: "Founder, Speed Medical Institute",
    image: "/assets/images/index/clients_img1.png",
    text: "MacAppStudio has built a world class platform that has enabled us to scale our business to the next level. They delivered it ahead of time, the design and quality of the app was top notch. A lot of end users have come back to us complimenting the app and its ease of usage.",
  },
  {
    name: "Client Name 2",
    role: "CEO, Company 2",
    image: "/assets/images/index/clients_img2.png",
    text: "We believe in trust and long term relationships and engage with customers like partners and not as vendors. We succeed only if our customers and their businesses succeed.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden" id="clients_say_aboutus_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">What our Clients say?</h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            We succeed only if our customers and their businesses succeed.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 bg-gray-50 p-6 sm:p-10 lg:p-20 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-blue-600 rounded-[32px] rotate-6 scale-95 opacity-10"></div>
                <Image
                  src={TESTIMONIALS[index].image}
                  alt={TESTIMONIALS[index].name}
                  width={300}
                  height={300}
                  className="rounded-[32px] object-cover shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl z-20">
                  <span className="text-3xl font-black text-white">“</span>
                </div>
              </div>
              
              <div className="flex-grow text-center lg:text-left">
                <p className="text-lg lg:text-3xl font-bold leading-relaxed mb-6 lg:mb-10 text-gray-900 tracking-tight italic">
                  &quot;{TESTIMONIALS[index].text}&quot;
                </p>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">{TESTIMONIALS[index].name}</h4>
                  <p className="text-blue-600 font-bold text-lg uppercase tracking-wider">{TESTIMONIALS[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-12 gap-6">
            <button 
              onClick={prev} 
              className="w-16 h-16 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white rounded-2xl transition-all duration-300 border border-gray-100 shadow-lg active:scale-90"
            >
              <FiChevronLeft size={32} />
            </button>
            <button 
              onClick={next} 
              className="w-16 h-16 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white rounded-2xl transition-all duration-300 border border-gray-100 shadow-lg active:scale-90"
            >
              <FiChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
