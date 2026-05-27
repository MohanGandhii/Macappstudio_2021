"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TimelineItem {
  type: string;
  img?: string;
  content?: React.ReactNode;
  leftIcon?: string;
  leftText?: React.ReactNode;
  rightIcon?: string | null;
  rightText?: React.ReactNode;
  rightImgCustom?: boolean;
  rightSubText?: string;
  bgColor?: string;
  leftBgColor?: string;
  rightBgColor?: string;
  customLayout?: boolean;
}

interface TimelineData {
  year: string;
  items: TimelineItem[];
}

interface OdysseyTimelineProps {
  timelineData: TimelineData[];
  tabs: { id: string; label: string }[];
}

export default function OdysseyTimeline({ timelineData, tabs }: OdysseyTimelineProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTimeline = activeFilter === "all" 
    ? timelineData 
    : timelineData.filter(t => t.year === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-4">MacAppStudio Odyssey</h2>
          <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">
            Today MacAppStudio is a pioneer among the tech industry and it has the potential to unlock and explore new horizons. But it didn't happen overnight. Here's our story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={clsx(
                "text-[13px] md:text-[14px] transition-colors focus:outline-none",
                activeFilter === tab.id 
                  ? "font-bold text-[#2B2B2B]" 
                  : "font-normal text-[#666] hover:text-[#2B2B2B]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-[1000px] mx-auto">
          {filteredTimeline.map((data, idx) => (
            <div key={idx} className="flex w-full">
              <div className="w-[55px] md:w-[100px] flex-shrink-0 flex justify-end pr-3 md:pr-10 pt-[20px]">
                <span className="text-[16px] md:text-[20px] font-bold text-[#2B2B2B] leading-none">{data.year}</span>
              </div>
              
              <div className="flex-grow pl-4 md:pl-10 pb-12 md:pb-16 border-l border-[#DCDCDC] relative">
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-[24px] w-[8px] h-[8px] bg-[#2B2B2B] rounded-full z-10 shadow-[0_0_0_6px_white]" />
                
                <div className="space-y-6 pt-2 w-full">
                  {data.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {item.type === "ceo" ? (
                        <div 
                          className="w-full flex items-center min-h-[140px] px-5 md:px-8 py-6"
                          style={{ backgroundColor: item.bgColor || "#FAFAFA" }}
                        >
                          {item.customLayout ? (
                            <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-4 md:gap-8">
                              {item.img && (
                                <Image src={item.img} alt="" width={200} height={100} className="w-auto h-[60px] md:h-[80px] object-contain flex-shrink-0" />
                              )}
                              <div className="text-center md:text-left flex-grow">
                                {item.content}
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
                              {item.img && (
                                <div className="w-full md:w-[35%] flex justify-center">
                                  <Image src={item.img} alt="" width={300} height={200} className="w-full max-w-[280px] h-auto object-contain" />
                                </div>
                              )}
                              <div className="w-full md:w-[65%] text-center md:text-left">
                                <p className="text-[13px] md:text-[14px] text-[#2B2B2B] leading-[1.6]">
                                  {item.content}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                          {item.leftText && (
                            <div 
                              className="flex flex-col justify-center items-start px-5 md:px-8 py-6 md:py-10 min-h-[160px] w-full"
                              style={{ backgroundColor: item.leftBgColor || "#FAFAFA" }}
                            >
                              {item.leftIcon && (
                                <Image src={item.leftIcon} alt="" width={60} height={60} className="w-[45px] md:w-[55px] h-auto object-contain mb-6" />
                              )}
                              <p className="text-[13px] md:text-[14px] text-[#2B2B2B] leading-[1.6]">
                                {item.leftText}
                              </p>
                            </div>
                          )}
                          {item.rightText && (
                            <div 
                              className="flex flex-col justify-center items-start px-5 md:px-8 py-6 md:py-10 min-h-[160px] w-full"
                              style={{ backgroundColor: item.rightBgColor || "#FAFAFA" }}
                            >
                              {item.rightIcon && !item.rightImgCustom && (
                                <Image src={item.rightIcon} alt="" width={60} height={60} className="w-[45px] md:w-[55px] h-auto object-contain mb-6" />
                              )}
                              {item.rightImgCustom ? (
                                <div className="w-full text-center md:text-left flex flex-col justify-center">
                                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                    <span className="text-[52px] md:text-[64px] font-black text-[#2B2B2B] leading-none">{item.rightText}</span>
                                    {item.rightIcon && <Image src={item.rightIcon} alt="" width={60} height={60} className="w-[40px] md:w-[50px] h-auto object-contain" />}
                                  </div>
                                  {item.rightSubText && (
                                    <p className="text-[13px] md:text-[14px] text-[#2B2B2B] mt-2">{item.rightSubText}</p>
                                  )}
                                </div>
                              ) : (
                                <p className="text-[13px] md:text-[14px] text-[#2B2B2B] leading-[1.6]">
                                  {item.rightText}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
