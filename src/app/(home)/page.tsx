"use client";

import HeroSection from "./_components/01_HeroSection";
import PlatformSection from "./_components/02_PlatformSection";
import QuotesSection from "./_components/03_QuotesSection";
import ExpertiseSection from "./_components/04_ExpertiseSection";
import RecentWorksSection from "@/components/shared/RecentWorksSection";
import InnovationsSection from "./_components/05_InnovationsSection";
import AwardsSection from "./_components/06_AwardsSection";
import PartnersSection from "./_components/07_PartnersSection";
import WallOfFameSection from "./_components/08_WallOfFameSection";
import TestimonialsSection from "./_components/09_TestimonialsSection";
import GetProposalButton from "@/components/ui/GetProposalButton";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Platform Banner - Light Blue */}
      <PlatformSection />
      
      {/* Quotes Section */}
      <QuotesSection />
      
      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Recent Great Works (Carousel) */}
      <RecentWorksSection />

      {/* Powering Innovations (Tabs) */}
      <InnovationsSection />
      
      {/* Footer-like content sequence */}
      <AwardsSection />
      <PartnersSection />
      <WallOfFameSection />
      <TestimonialsSection />
    </>
  );
}
