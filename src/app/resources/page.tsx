"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Hero from "./_components/01_Hero";
import WhyHireUs from "./_components/02_WhyHireUs";
import ChallengesAndSquads from "./_components/03_ChallengesAndSquads";
import ExecutionPartnerSection from "./_components/04_ExecutionFocus";
import ProductFrameworkSection from "./_components/05_ProductFramework";

export default function ResourcesPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ── 1. HERO BANNERS / FIRST COMPONENT ── */}
      <Hero onPlayVideo={() => setIsVideoOpen(true)} />

      {/* ── 2. WHY HIRE US / SECOND COMPONENT ── */}
      <WhyHireUs />

      {/* ── 3. CHALLENGES & SQUADS / THIRD COMPONENT ── */}
      <ChallengesAndSquads />

      {/* ── 4. EXECUTION PARTNER / FOURTH COMPONENT ── */}
      <ExecutionPartnerSection />

      {/* ── 5. PROVEN PRODUCT FRAMEWORK / FIFTH COMPONENT ── */}
      <ProductFrameworkSection />

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur transition-colors"
              >
                <FiX size={24} />
              </button>
              <div className="aspect-w-16 aspect-h-9 pt-[56.25%] relative">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
