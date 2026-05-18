"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const QUOTES = [
  <>We have digitally transformed over <span className="font-black text-gray-800">12 Enterprises</span> in operation for over a decade</>,
  <>We are the <span className="font-black text-gray-800">World&apos;s</span> Most Valuable Developers awarded by Intel</>,
  <>We are the <span className="font-black text-gray-800">Top Innovators</span> in the world for 2016 and 2017 awarded by Intel</>,
  <>We have helped over <span className="font-black text-gray-800">14 multi-million</span> dollar startups in the last two years</>,
];

export default function QuotesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative shadow-[inset_0_10px_30px_-15px_rgba(0,0,0,0.05),inset_0_-10px_30px_-15px_rgba(0,0,0,0.05)]">
      {/* Top fading line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Bottom fading line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl relative z-10">
        <div className="min-h-[140px] md:min-h-[160px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-medium text-gray-600 leading-tight absolute w-full tracking-tight"
            >
              {QUOTES[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
