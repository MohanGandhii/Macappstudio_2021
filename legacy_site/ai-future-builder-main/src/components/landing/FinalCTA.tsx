import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Section } from "./Section";

const FinalCTA = () => {
  return (
    <Section id="cta">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-secondary p-10 text-center shadow-elegant md:p-16">
        <div className="absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Let's talk</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Let's Make Your Business <span className="text-gradient-primary">AI-Ready</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group h-12 rounded-full px-7 text-base shadow-glow">
              Get Proposal in 48 Hrs
              <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full border-2 bg-card px-7 text-base">
              <MessageSquare className="mr-1 h-4 w-4" />
              Talk to AI Team
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            No commitment • Built by real engineers
          </p>
        </div>
      </div>
    </Section>
  );
};

export default FinalCTA;
