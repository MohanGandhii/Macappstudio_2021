"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlay, FiChevronLeft, FiChevronRight, FiMail } from "react-icons/fi";
import clsx from "clsx";
import HeroSection from "./_components/00_HeroSection";
import LifeSection from "./_components/01_LifeSection";
import WhyChooseUsSection from "./_components/02_WhyChooseUsSection";
import ValuesSection from "./_components/03_ValuesSection";
import BenefitsSection from "./_components/04_BenefitsSection";
import StoriesSection from "./_components/05_StoriesSection";





export default function CareersPage() {
  const [videoModal, setVideoModal] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <HeroSection onPlayVideo={setVideoModal} />

      {/* Life at MacAppStudio */}
      <LifeSection />

      {/* Why MacAppStudio */}
      <WhyChooseUsSection />

      {/* Values */}
      <ValuesSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Stories */}
      <StoriesSection onPlayVideo={setVideoModal} />


      {/* Video Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setVideoModal(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur transition-colors"
            >
              <FiX size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9 pt-[56.25%] relative">
              <iframe 
                src={`https://www.youtube.com/embed/${videoModal}?autoplay=1`} 
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
