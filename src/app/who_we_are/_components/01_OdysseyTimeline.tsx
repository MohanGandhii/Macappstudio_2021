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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">MacAppStudio Odyssey</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Today MacAppStudio is a pioneer among the tech industry and it has the potential to unlock and explore new horizons. But it didn&apos;t happen overnight. Here&apos;s our story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={clsx(
                "px-8 py-3 rounded-full font-bold transition-all shadow-lg border-2",
                activeFilter === tab.id 
                  ? "bg-blue-600 text-white border-blue-600 scale-110" 
                  : "bg-white text-gray-700 border-gray-100 hover:border-blue-200 hover:bg-gray-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {filteredTimeline.map((data, idx) => (
            <div key={idx} className="mb-24 relative">
              <div className="flex items-center gap-10 mb-12">
                <div className="bg-gray-900 text-white px-10 py-3 rounded-2xl font-black text-2xl inline-block shadow-2xl transform -rotate-2">
                  {data.year}
                </div>
                <div className="h-1 bg-gradient-to-r from-gray-900 to-transparent flex-grow rounded-full"></div>
              </div>

              <div className="space-y-12 pl-6 lg:pl-20 border-l-4 border-gray-100 ml-12 lg:ml-20">
                {data.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[30px] lg:-left-[84px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 border-8 border-white shadow-xl"></div>
                    
                    {item.type === "ceo" ? (
                      <div className="bg-white rounded-[40px] p-8 lg:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-gray-50 hover:shadow-blue-100 transition-all group">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <Image src={item.img!} alt="Timeline" width={400} height={400} className="relative z-10 rounded-3xl w-full max-w-[250px] h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <h3 className="text-2xl lg:text-3xl text-gray-800 leading-relaxed font-bold">
                            {item.content}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col lg:flex-row gap-8">
                        {item.leftText && (
                          <div className="flex-1 bg-white p-10 rounded-[40px] shadow-xl border border-gray-50 flex items-center gap-8 hover:shadow-2xl transition-all group">
                            {item.leftIcon && <Image src={item.leftIcon} alt="" width={80} height={80} className="object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />}
                            <p className="text-xl text-gray-700 font-bold leading-snug">{item.leftText}</p>
                          </div>
                        )}
                        {item.rightText && (
                          <div className="flex-1 bg-white p-10 rounded-[40px] shadow-xl border border-gray-50 flex items-center gap-8 hover:shadow-2xl transition-all group">
                            {item.rightIcon && (
                              <div className="flex-shrink-0">
                                {item.rightImgCustom ? (
                                  <div className="flex items-center gap-4">
                                    <span className="text-5xl font-black text-blue-600">{item.rightText}</span>
                                    <Image src={item.rightIcon} alt="" width={60} height={60} className="group-hover:rotate-12 transition-transform" />
                                  </div>
                                ) : (
                                  <Image src={item.rightIcon} alt="" width={80} height={80} className="object-contain group-hover:scale-110 transition-transform" />
                                )}
                              </div>
                            )}
                            {!item.rightImgCustom && <p className="text-xl text-gray-700 font-bold leading-snug">{item.rightText}</p>}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
