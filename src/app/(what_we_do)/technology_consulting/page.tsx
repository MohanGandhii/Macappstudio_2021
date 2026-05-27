import HeroSection from "./_components/01_HeroSection";
import SmarterServicesSection from "./_components/02_SmarterServicesSection";
import PropelBusinessSection from "./_components/03_PropelBusinessSection";
import IndustriesSection from "./_components/04_IndustriesSection";
import DigitalTransformationTabsSection from "./_components/05_DigitalTransformationTabsSection";
import WhyDigitizeSection from "./_components/06_WhyDigitizeSection";
import CustomerInsightSection from "./_components/07_ServiceDetailSections";
import MarketingSalesSection from "./_components/08_MarketingSalesSection";
import SpeedLearningBanner from "./_components/09_SpeedLearningBanner";
import ITConsultingSection from "./_components/10_ITConsultingSection";

export default function TechnologyConsultingPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <SmarterServicesSection />
      <PropelBusinessSection />
      <IndustriesSection />
      <DigitalTransformationTabsSection />
      <WhyDigitizeSection />
      <CustomerInsightSection />
      <MarketingSalesSection />
      <SpeedLearningBanner />
      <ITConsultingSection />
    </div>
  );
}
