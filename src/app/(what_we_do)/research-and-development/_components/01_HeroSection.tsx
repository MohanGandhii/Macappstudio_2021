"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#F6F6F2]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 z-10 text-center lg:text-left lg:pr-10">
            <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#2B2B2B] leading-[1.2] mb-8 tracking-tight">
              Creating the next big thing and exploring new horizons through experimentation.
            </h1>
            <GetProposalButton className="btn bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors rounded-none w-[280px] md:w-[300px] h-[60px] flex items-center justify-center mx-auto lg:mx-0" />
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full flex justify-center lg:justify-end">
              <Image
                src="/assets/images/R-D/banner_rigth_image.png"
                alt="R&D Hero"
                width={500}
                height={400}
                className="w-[75%] lg:w-[80%] max-w-[450px] h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
