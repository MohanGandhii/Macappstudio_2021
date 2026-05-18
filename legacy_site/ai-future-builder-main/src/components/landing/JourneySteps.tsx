import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const steps = ["Manual", "Digitization", "Automation", "AI-Driven Intelligence"];

const JourneySteps = () => {
  return (
    <Section id="journey-steps" muted>
      <SectionHeader eyebrow="The path forward" title="AI Transformation Journey" />
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-3 md:flex-row md:items-center">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div key={step} className="flex flex-1 items-center gap-3">
              <div
                className={`flex flex-1 items-center justify-center rounded-2xl border px-6 py-6 text-center transition-smooth ${
                  isLast
                    ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border-border bg-card shadow-soft"
                }`}
              >
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${isLast ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    Step {i + 1}
                  </p>
                  <p className="mt-1 text-base font-bold">{step}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-muted-foreground md:block" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default JourneySteps;
