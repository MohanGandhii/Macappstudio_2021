import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Journey from "@/components/landing/Journey";
import Vision from "@/components/landing/Vision";
import Pizza from "@/components/landing/Pizza";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WhatWeDo from "@/components/landing/WhatWeDo";
import UseCases from "@/components/landing/UseCases";
import JourneySteps from "@/components/landing/JourneySteps";
import HowWeWork from "@/components/landing/HowWeWork";
import CoreBelief from "@/components/landing/CoreBelief";
import Edge from "@/components/landing/Edge";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Vision />
        <Pizza />
        <Services />
        <WhyUs />
        <WhatWeDo />
        <UseCases />
        <JourneySteps />
        <HowWeWork />
        <CoreBelief />
        <Edge />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
