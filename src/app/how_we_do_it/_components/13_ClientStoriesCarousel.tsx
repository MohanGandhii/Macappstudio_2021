import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const STORIES_VIDEOS = [
  { poster: "/assets/images/how_we_do_it/storiesposter6.jpg", videoId: "I2Owf0RvSKk" },
  { poster: "/assets/images/how_we_do_it/storiesposter7.jpg", videoId: "I2Owf0RvSKk" },
  { poster: "/assets/images/how_we_do_it/storiesposter6.jpg", videoId: "I2Owf0RvSKk" },
];

export default function ClientStoriesCarousel({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const nextStory = () => setActiveStoryIdx(p => (p + 1) % STORIES_VIDEOS.length);
  const prevStory = () => setActiveStoryIdx(p => (p - 1 + STORIES_VIDEOS.length) % STORIES_VIDEOS.length);

  useEffect(() => {
    const timer = setInterval(nextStory, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 lg:py-16 bg-[#f1f5e8]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          <div className="w-full lg:w-[45%] lg:pt-2">
            <h2 
              className="text-[34px] md:text-[44px] lg:text-[48px] font-bold text-[#111] mb-5 tracking-[-0.01em] leading-[1.1] lg:whitespace-nowrap"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Still have questions ?
            </h2>
            <p className="text-[14px] lg:text-[15.5px] text-[#555] leading-[1.65] font-normal max-w-[540px]" style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
              As a new customer it’s quite normal to be confused and overwhelmed. Hear from our clients directly about the experience and their journey with MacAppStudio.
            </p>
          </div>

          <div className="w-full lg:w-[55%]">
            <div className="flex flex-col items-center">
              <div 
                className="relative rounded-[8px] overflow-hidden group cursor-pointer aspect-video w-full shadow-sm"
                onClick={() => setVideoModal(STORIES_VIDEOS[activeStoryIdx].videoId)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStoryIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={STORIES_VIDEOS[activeStoryIdx].poster} 
                      alt="Client Story" 
                      fill
                      className="object-cover" 
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center z-10"
                  >
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button 
                  onClick={prevStory} 
                  className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center hover:bg-white transition-all text-black/60"
                >
                  <FiChevronLeft size={18} />
                </button>
                
                <div className="w-16 lg:w-20 h-[2px] bg-[#dce4cb] relative overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute inset-0 bg-[#333] origin-left"
                    initial={false}
                    animate={{ scaleX: (activeStoryIdx + 1) / STORIES_VIDEOS.length }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                <button 
                  onClick={nextStory} 
                  className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center hover:bg-white transition-all text-black/60"
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
