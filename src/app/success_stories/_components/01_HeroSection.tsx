import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

const BANNER_IMAGES = [
  "/assets/images/success_stories/banner_rigth_image1.png",
  "/assets/images/success_stories/banner_rigth_image2.png",
  "/assets/images/success_stories/banner_rigth_image3.png",
  "/assets/images/success_stories/banner_rigth_image4.png",
];

export default function HeroSection() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-10 pb-12 lg:pt-16 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] z-10 text-left">
            <h1 
              className="text-[44px] md:text-[56px] lg:text-[62px] font-black text-[#222] leading-[1] mb-6 tracking-tight"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Case Studies
            </h1>
            <p 
              className="text-[17px] md:text-[19px] text-[#444] leading-[1.6] max-w-[600px] font-medium mb-8 tracking-normal"
              style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
            >
              We have helped our clients realize their dreams of creating a great technology platform, go live to market, generate great revenues, acquire thousands of users and get million-dollar valuations. We can do the same for you. The journey of a thousand miles starts with a single step.
            </p>
            <div className="inline-block">
              <GetProposalButton className="bg-black text-white px-16 py-5 text-[22px] font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg min-w-[300px]" />
            </div>
          </div>

          {/* Image Content with Slider */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end pr-4">
            <div className="relative w-full max-w-[480px] aspect-[1/1] flex items-center justify-center">
              
              <div className="relative z-10 w-full h-full flex items-center justify-end">
                <div className="w-full h-full relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImg}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={BANNER_IMAGES[activeImg]}
                        alt={`Case Study ${activeImg + 1}`}
                        width={420}
                        height={840}
                        className="w-full h-auto object-contain drop-shadow-[0_45px_55px_rgba(0,0,0,0.12)]"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
