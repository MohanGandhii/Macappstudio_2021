"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-8 lg:pt-[100px] lg:pb-8 overflow-hidden bg-[#f4e6f4]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 z-10 text-left">
            <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-black text-[#2B2B2B] leading-[1.2] mb-8 tracking-tight max-w-[550px]">
              Build compelling <br className="lg:hidden" />
              applications tailored to <br className="lg:hidden" />
              suit your business needs
            </h1>
            {/* Desktop Button */}
            <GetProposalButton className="hidden lg:inline-block bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors" />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/assets/images/appdevelopment/heroimg.png"
                alt="App Development Hero"
                width={450}
                height={380}
                className="w-full max-w-[400px] h-auto object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </div>
          {/* Mobile Button - Full Width, at the bottom of the section */}
          <div className="w-full lg:hidden mt-6">
            <GetProposalButton className="w-full bg-black text-white py-5 text-[18px] font-bold hover:bg-gray-900 transition-colors text-center block rounded-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
