import { Metadata } from "next";
import HeroSection from "./_components/01_HeroSection";
import InventingSection from "./_components/02_InventingSection";
import FormulaSection from "./_components/03_FormulaSection";
import InnovationPartnerSection from "./_components/04_InnovationPartnerSection";
import WhyChooseUsSection from "./_components/05_WhyChooseUsSection";
import SolutionsCarouselSection from "./_components/06_SolutionsCarouselSection";

export const metadata: Metadata = {
  title: "Research and Development",
  description: "Innovating and developing next-generation technology solutions. We specialize in software research and development.",
};

export default function RDPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <InventingSection />
      <FormulaSection />
      <InnovationPartnerSection />
      <WhyChooseUsSection />
      <SolutionsCarouselSection />
    </div>
  );
}
