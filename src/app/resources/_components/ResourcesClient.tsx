"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Hero from "./01_Hero";
import WhyHireUs from "./02_WhyHireUs";
import ChallengesAndSquads from "./03_ChallengesAndSquads";
import ExecutionPartnerSection from "./04_ExecutionFocus";
import ProductFrameworkSection from "./05_ProductFramework";
import GrowthPartnerSection from "./06_GrowthPartner";
import InnovationAndRDLabs from "./07_InnovationAndRDLabs";
import FlexibleTeamModels from "./08_FlexibleTeamModels";
import NumbersAndCTA from "./09_NumbersAndCTA";
import OwnershipControl from "./10_OwnershipControl";
import OwnershipDetails from "./11_OwnershipDetails";
import SuccessStories from "./12_SuccessStories";
import FooterCTAStack from "./13_FooterCTAStack";

export default function ResourcesClient() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsVideoOpen(true);
    window.addEventListener("openVideoModal", handleOpenModal);
    return () => {
      window.removeEventListener("openVideoModal", handleOpenModal);
    };
  }, []);

  console.log("ResourcesClient is rendering Component 8 now.");

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

      {/* ── 6. GROWTH PARTNER & JOURNEY / SIXTH COMPONENT ── */}
      <GrowthPartnerSection />

      {/* ── 7. INNOVATION & R&D LABS / SEVENTH COMPONENT ── */}
      <InnovationAndRDLabs />

      {/* ── 8. FLEXIBLE TEAM MODELS / EIGHTH COMPONENT ── */}
      <FlexibleTeamModels />

      {/* ── 9. NUMBERS & CTA BANNER / NINTH COMPONENT ── */}
      <NumbersAndCTA />

      {/* ── 10. OWNERSHIP & CONTROL / TENTH COMPONENT ── */}
      <OwnershipControl />

      {/* ── 11. OWNERSHIP DETAILS / ELEVENTH COMPONENT ── */}
      <OwnershipDetails />

      {/* ── 12. SUCCESS STORIES / TWELFTH COMPONENT ── */}
      <SuccessStories />

      {/* ── 13. FOOTER CTA STACK / THIRTEENTH COMPONENT ── */}
      <FooterCTAStack />

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
                  src="https://www.youtube.com/embed/hlmX6oikVyM?autoplay=1"
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
