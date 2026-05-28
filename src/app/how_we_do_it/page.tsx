"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

// 01–14 sections in order
import HeroSection              from "./_components/01_HeroSection";
import PromisesSection          from "./_components/02_PromisesSection";
import QuoteSection             from "./_components/03_QuoteSection";
import HelpStagesSection        from "./_components/04_HelpStagesSection";
import StorySection             from "./_components/05_StorySection";
import ProcessSection           from "./_components/06_ProcessSection";
import DeliveryFlowchartSection from "./_components/07_DeliveryFlowchartSection";
import PricingSection           from "./_components/08_PricingSection";
import WorldClassSection        from "./_components/09_WorldClassSection";
import PaymentSection           from "./_components/10_PaymentSection";
import PaymentMilestonesSection from "./_components/11_PaymentMilestonesSection";
import ModelsSection            from "./_components/12_ModelsSection";
import ClientStoriesCarousel    from "./_components/13_ClientStoriesCarousel";


export default function HowWeDoItPage() {
  const [videoModal, setVideoModal] = useState<string | null>(null);

  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "'AvenirNext-Medium', sans-serif", fontSize: "18px", lineHeight: "30px" }}
    >
      {/* 01 */ } <HeroSection />
      {/* 02 */ } <PromisesSection />
      {/* 03 */ } <QuoteSection />
      {/* 04 */ } <HelpStagesSection />
      {/* 05 */ } <StorySection             setVideoModal={setVideoModal} />
      {/* 06 */ } <ProcessSection           setVideoModal={setVideoModal} />
      {/* 07 */ } <DeliveryFlowchartSection />
      {/* 08 */ } <PricingSection           setVideoModal={setVideoModal} />
      {/* 09 */ } <WorldClassSection />
      {/* 10 */ } <PaymentSection           setVideoModal={setVideoModal} />
      {/* 11 */ } <PaymentMilestonesSection />
      {/* 12 */ } <ModelsSection            setVideoModal={setVideoModal} />
      {/* 13 */ } <ClientStoriesCarousel    setVideoModal={setVideoModal} />


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
