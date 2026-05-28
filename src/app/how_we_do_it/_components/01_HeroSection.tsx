"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
          
          {/* LEFT SIDE */}
          <div className="max-w-[600px]">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                text-[36px]
                xs:text-[42px]
                sm:text-[48px]
                md:text-[56px]
                lg:text-[64px]
                xl:text-[70px]
                leading-[1.1]
                lg:leading-[1.05]
                tracking-[-1px]
                md:tracking-[-2px]
                lg:tracking-[-3px]
                font-bold
                text-[#222]
                mb-8
              "
            >
              <span className="md:whitespace-nowrap">Great! You are in</span>
              <br />
              <span className="md:whitespace-nowrap">the right place</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                text-[22px]
                leading-[1.55]
                text-[#3d3d3d]
                font-normal
                max-w-[620px]
              "
            >
              Welcome to the MacAppStudio family! We believe
              <br className="hidden md:inline" />{" "}
              in making people’s life better by providing world
              <br className="hidden md:inline" />{" "}
              class products.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/assets/images/how_we_do_it/banner_rigth_image1.png"
                alt="Hero"
                width={560}
                height={420}
                priority
                className="
                  w-full
                  max-w-[560px]
                  h-auto
                  object-contain
                "
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}