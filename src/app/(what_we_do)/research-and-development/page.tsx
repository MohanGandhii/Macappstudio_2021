"use client";

import HeroSection from "./_components/01_HeroSection";
import InventingSection from "./_components/02_InventingSection";
import FormulaSection from "./_components/03_FormulaSection";
import InnovationPartnerSection from "./_components/04_InnovationPartnerSection";
import WhyChooseUsSection from "./_components/05_WhyChooseUsSection";
import SolutionsCarouselSection from "./_components/06_SolutionsCarouselSection";

export default function RDPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Inventing Section */}
      <InventingSection />

      {/* Formula Section */}
      <FormulaSection />

      {/* Innovation Partner */}
      <InnovationPartnerSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Solutions Carousel */}
      <SolutionsCarouselSection />


    </div>
  );
}
