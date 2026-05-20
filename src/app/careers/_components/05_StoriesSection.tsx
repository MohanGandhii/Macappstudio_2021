"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

const STORIES_VIDEOS = [
  { poster: "/assets/images/careers/storiesposter1.jpeg", videoId: "mwhdgjuz5SY" },
  { poster: "/assets/images/careers/storiesposter2.jpg", videoId: "vRmBhkY_D3I" },
  { poster: "/assets/images/careers/storiesposter3.jpg", videoId: "cMki7QIqv3Q" },
  { poster: "/assets/images/careers/storiesposter4.jpg", videoId: "Lb2C_twoKxc" },
  { poster: "/assets/images/careers/storiesposter5.jpg", videoId: "_koA--9w0Xo" },
  { poster: "/assets/images/careers/storiesposter6.jpg", videoId: "3bQTENEW2XQ" },
];

interface StoriesSectionProps {
  onPlayVideo: (videoId: string) => void;
}

export default function StoriesSection({ onPlayVideo }: StoriesSectionProps) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const nextStory = () => setActiveStoryIdx((p) => (p + 1) % STORIES_VIDEOS.length);
  const prevStory = () => setActiveStoryIdx((p) => (p - 1 + STORIES_VIDEOS.length) % STORIES_VIDEOS.length);

  return (
    <section className="py-24 bg-[#F6F9FD]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Content Description */}
          <div className="w-full lg:w-5/12 text-left">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#2B2B2B] mb-6">
              Listen to their stories
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed">
              At MacAppStudio we believe powerful stories can reshape the world. We are humbled to share some of our employee stories which we will cherish forever.
            </p>
          </div>

          {/* Right: Slide/Video Presentation */}
          <div className="w-full lg:w-7/12 flex flex-col items-center">
            <div className="w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-video bg-black"
                  onClick={() => onPlayVideo(STORIES_VIDEOS[activeStoryIdx].videoId)}
                >
                  <Image 
                    src={STORIES_VIDEOS[activeStoryIdx].poster} 
                    alt="Employee Story" 
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                  />
                  {/* Minimal Play Icon Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 text-white rounded-full flex items-center justify-center pl-1 transform group-hover:scale-110 transition-all duration-300">
                      <FiPlay size={24} className="fill-white" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Premium Progress Controller underneath the video */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevStory} 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Previous story"
              >
                <FiChevronLeft size={20} />
              </button>
              <div className="w-24 h-[2px] bg-gray-300 relative rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 h-full bg-black transition-all duration-300 rounded-full" 
                  style={{ 
                    left: `${(activeStoryIdx / (STORIES_VIDEOS.length - 1)) * 80}%`,
                    width: "20%" 
                  }}
                />
              </div>
              <button 
                onClick={nextStory} 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Next story"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
