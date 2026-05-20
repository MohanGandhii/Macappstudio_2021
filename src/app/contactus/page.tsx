"use client";

import HeroSection from "./_components/00_HeroSection";
import OfficesSection from "./_components/01_OfficesSection";

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner Section */}
      <HeroSection />

      {/* Offices Section */}
      <OfficesSection />
    </div>
  );
}
