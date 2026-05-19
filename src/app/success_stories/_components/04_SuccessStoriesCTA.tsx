"use client";

import Image from "next/image";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";
import { motion } from "framer-motion";

export default function SuccessStoriesCTA() {
  return (
    <section className="py-24 bg-[#fce7f3] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 text-left">
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-black text-gray-900 leading-[1.1] mb-10 tracking-tight">
              Build compelling applications <br className="hidden md:block" /> 
              tailored to suit your business <br className="hidden md:block" /> needs
            </h2>
            <GetProposalButton className="bg-black text-white px-10 py-4 text-xl font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95" />
          </div>

          {/* Right Image - 3D Illustration */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[550px]"
            >
              <Image
                src="/assets/images/appdevelopment/heroimg.png"
                alt="App Development Illustration"
                width={600}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
