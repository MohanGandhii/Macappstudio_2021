"use client";

import HeroSection from "./_components/01_HeroSection";
import AppsGrid from "./_components/02_AppsGrid";

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 01 */} <HeroSection />
      {/* 02 */} <AppsGrid />
    </div>
  );
}
