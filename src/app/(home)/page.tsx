"use client";

import HeroSection from "./_components/01_HeroSection";
import PlatformSection from "./_components/02_PlatformSection";
import QuotesSection from "./_components/03_QuotesSection";
import ExpertiseSection from "./_components/04_ExpertiseSection";
import RecentWorksSection from "@/components/05_Shared/RecentWorksSection";
import InnovationsSection from "./_components/05_InnovationsSection";
import AchievementsSection from "./_components/AchievementsSection";
import AwardsSection from "./_components/06_AwardsSection";
import PartnersSection from "./_components/07_PartnersSection";
import WallOfFameSection from "./_components/08_WallOfFameSection";
import TestimonialsSection from "./_components/09_TestimonialsSection";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

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
      
      {/* 15 Years Achievements */}
      <AchievementsSection />
      
      {/* Footer-like content sequence */}
      <AwardsSection />
      <PartnersSection />
      <WallOfFameSection />
      <TestimonialsSection />
    </>
  );
}
