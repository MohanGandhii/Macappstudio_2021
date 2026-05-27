"use client";

import HeroSection from "./_components/01_HeroSection";
import DigitalServicesSection from "./_components/02_DigitalServicesSection";
import DigitizeSection from "./_components/03_DigitizeSection";
import WhyChooseUsSection from "./_components/04_WhyChooseUsSection";
import HowWeHelpSection from "./_components/05_HowWeHelpSection";
import CaseStudiesCarousel from "./_components/06_CaseStudiesCarousel";
import DevProcessSection from "./_components/07_DevProcessSection";
import ToolsSection from "./_components/08_ToolsSection";
import RapidFrameworkSection from "./_components/09_RapidFrameworkSection";
import AppDeliverySection from "./_components/10_AppDeliverySection";

export default function AppDevelopmentPage() {
  return (
    <div className="bg-white">
      <HeroSection />

      <DigitalServicesSection />

      {/* Devices Section */}
      <DigitizeSection />

      <WhyChooseUsSection />

      <HowWeHelpSection />

      <CaseStudiesCarousel />

      <DevProcessSection />

      <ToolsSection />

      <RapidFrameworkSection />

      <AppDeliverySection />
      
    </div>
  );
}
