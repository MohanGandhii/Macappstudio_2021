"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CASE_STUDIES } from "./02_AppsGrid";

export default function WhatToKnowMore({ currentSlug }: { currentSlug?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeft(scrollLeft > 10);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      // Run once on load/mount
      updateScrollButtons();
      
      // Also run when window resizes
      window.addEventListener("resize", updateScrollButtons);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      // Scroll by 1 card distance (card width + gap)
      // card width is w-[280px] on mobile, w-[360px] on md and up. Gap is 24px (gap-6).
      const cardWidth = window.innerWidth >= 768 ? 360 : 280;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
      containerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const ALLOWED_SLUGS = ["fasttrack", "howdy", "sarva", "speed", "propcierge", "ags"];

  // Filter CASE_STUDIES to only include the specified 6 cards, and exclude the current page's card
  const filteredStudies = CASE_STUDIES.filter((study) => {
    const linkSlug = study.link.split("/").pop()?.toLowerCase() || "";
    const isAllowed = ALLOWED_SLUGS.includes(linkSlug);
    if (!isAllowed) return false;

    if (currentSlug) {
      return linkSlug !== currentSlug.toLowerCase();
    }
    return true;
  });

  const displayedStudies = filteredStudies.slice(0, 6);

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-visible">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px] relative">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 
            className="text-[32px] md:text-[40px] font-black text-[#1a1a1a] mb-3 tracking-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            What to Know more?
          </h2>
          <p 
            className="text-[16px] md:text-[18px] text-[#555] font-medium max-w-[600px] mx-auto leading-relaxed"
            style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
          >
            Read the challenges we faced and how we helped our client achieve their goals
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2">
          {/* Left Arrow Button */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] items-center justify-center text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={28} />
            </button>
          )}

          {/* Scrollable Track */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-10 no-scrollbar scroll-smooth snap-x snap-mandatory"
            onScroll={updateScrollButtons}
          >
            {displayedStudies.map((study, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[360px] flex-shrink-0 relative bg-[#f4f6f9] rounded-xl overflow-hidden flex flex-col pt-8 px-8 h-[440px] group border border-gray-100 shadow-sm transition-all snap-start"
              >
                {/* Header Info */}
                <div className="mb-4">
                  <h3
                    className="text-[28px] font-bold text-[#111] mb-2 tracking-tight"
                    style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-[16px] text-[#555] leading-[1.4] max-w-[95%] font-medium"
                    style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                  >
                    {study.desc}
                  </p>
                </div>

                {/* Mockup Container */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none">
                  <div className="relative w-full h-[300px] flex items-end justify-center">
                    <Image
                      src={study.img}
                      alt={study.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain object-bottom drop-shadow-lg"
                      priority={index < 3}
                    />
                  </div>
                </div>

                {/* Read Case Study Button */}
                <Link
                  href={study.link}
                  className="absolute bottom-0 right-0 bg-[#545d7a] text-white flex items-center justify-center gap-3 px-6 py-4 rounded-tl-[24px] hover:bg-[#444c68] transition-all z-30 shadow-md"
                >
                  <span className="text-[16px] font-bold">Read Case Study</span>
                  <FiArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] items-center justify-center text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all"
              aria-label="Scroll right"
            >
              <FiChevronRight size={28} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
