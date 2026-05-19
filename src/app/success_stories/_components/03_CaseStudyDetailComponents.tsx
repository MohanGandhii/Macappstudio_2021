import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PlatformItemProps {
  icon: string;
  label: string;
}

export function PlatformItem({ icon, label }: PlatformItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt={label} width={28} height={28} className="object-contain" />
      <span className="text-[18px] font-bold text-[#111]">{label}</span>
    </div>
  );
}

interface SplitSectionProps {
  title: string;
  content: string;
  bgColor: string;
}

export function SplitSection({ title, content, bgColor }: SplitSectionProps) {
  return (
    <section className={`py-24 border-b border-gray-100 ${bgColor}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">{title}</h2>
          </div>
          <div className="lg:w-2/3">
            <div 
              className="text-[18px] lg:text-[20px] text-[#444] leading-relaxed font-medium [&>p]:mb-6 [&>p:last-child]:mb-0 [&>b]:text-[#111] [&>b]:font-black [&>span]:font-black [&>span]:text-[#111]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface AppScreenCarouselProps {
  screens: string[];
}

export function AppScreenCarousel({ screens }: AppScreenCarouselProps) {
  // Start in the middle set (which represents screens index 0 in the cloned array)
  const [currentIndex, setCurrentIndex] = useState(screens.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  if (!screens || screens.length === 0) return null;

  // Triple the list to create a seamless infinite loop sliding track
  const virtualScreens = [...screens, ...screens, ...screens];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // If scrolled past the last item in the middle set
    if (currentIndex >= 2 * screens.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - screens.length);
    }
    // If scrolled past the first item in the middle set
    else if (currentIndex < screens.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + screens.length);
    }
  };

  // Re-enable transitions on the next animation frame after a silent reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Compute active index relative to the real items
  const activeRealIndex = (currentIndex - screens.length + screens.length) % screens.length;
  const progress = screens.length > 1 ? (activeRealIndex / (screens.length - 1)) * 100 : 0;

  return (
    <div className="w-full relative mt-12 overflow-visible px-2">
      {/* Premium responsive stylesheet for CSS variables */}
      <style dangerouslySetInnerHTML={{ __html: `
        .carousel-track {
          --card-width: 220px;
          --gap: 16px;
        }
        @media (min-width: 640px) {
          .carousel-track {
            --card-width: 260px;
            --gap: 24px;
          }
        }
        @media (min-width: 768px) {
          .carousel-track {
            --card-width: 320px;
            --gap: 40px;
          }
        }
        .carousel-window {
          width: 100%;
          max-width: calc(3 * var(--card-width) + 2 * var(--gap));
          margin: 0 auto;
          overflow: hidden;
          position: relative;
        }
      ` }} />

      {/* Center Wrapper Window showing EXACTLY 3 items */}
      <div className="carousel-window py-12">
        {/* Premium left/right soft gradient edge masks to fade adjacent items perfectly at the borders */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div 
          className="carousel-track flex items-center"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(50% - var(--card-width) / 2 - ${currentIndex} * (var(--card-width) + var(--gap))))`,
            transition: isTransitioning ? "transform 900ms cubic-bezier(0.25, 1, 0.35, 1)" : "none",
          } as React.CSSProperties}
        >
          {virtualScreens.map((screen: string, i: number) => {
            const isActive = i === currentIndex;
            const isLeft = i === currentIndex - 1;
            const isRight = i === currentIndex + 1;
            const isClickable = isLeft || isRight;

            return (
              <div 
                key={i}
                onClick={() => {
                  if (isLeft) handlePrev();
                  else if (isRight) handleNext();
                }}
                className={`flex-shrink-0 transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.35,1)] ${isClickable ? "cursor-pointer" : ""}`}
                style={{
                  width: "var(--card-width)",
                  marginRight: i === virtualScreens.length - 1 ? 0 : "var(--gap)",
                }}
              >
                <div 
                  className={`w-full relative transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.35,1)] ${
                    isActive 
                      ? "scale-[1.08] md:scale-[1.12] opacity-100 z-10 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.14)]" 
                      : "scale-[0.88] md:scale-[0.92] opacity-75 z-0 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
                  }`}
                >
                  <Image 
                    src={screen} 
                    alt={`App Screen ${i + 1}`} 
                    width={320} 
                    height={640} 
                    className="rounded-[36px] border border-gray-100 object-contain w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation & Progress Slider Bar */}
      <div className="flex items-center justify-center gap-6 mt-4">
        {/* Left Circle Button */}
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 active:scale-90 transition-all shadow-sm bg-white"
          aria-label="Previous screen"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Custom Progress Track Bar representing the active index */}
        <div className="w-36 h-[3px] bg-gray-200 rounded-full relative overflow-hidden">
          <div 
            className="absolute top-0 bottom-0 h-full bg-[#111] rounded-full transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.35,1)]"
            style={{ 
              width: "35%",
              left: `${progress * 0.65}%`
            }}
          />
        </div>

        {/* Right Circle Button */}
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 active:scale-90 transition-all shadow-sm bg-white"
          aria-label="Next screen"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
