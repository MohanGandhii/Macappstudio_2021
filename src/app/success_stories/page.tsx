import { Metadata } from "next";
import HeroSection from "./_components/01_HeroSection";
import AppsGrid from "./_components/02_AppsGrid";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Explore our collection of success stories. See how we help companies achieve digital transformation and build world-class products.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 01 */} <HeroSection />
      {/* 02 */} <AppsGrid />
    </div>
  );
}
