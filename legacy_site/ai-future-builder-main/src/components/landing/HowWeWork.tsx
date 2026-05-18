import { Search, PenTool, Hammer, Zap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const steps = [
  { icon: Search, title: "Understand Business Problem", desc: "Deep discovery sessions to map real pain points and outcomes.", color: "hsl(var(--accent-orange))", soft: "hsl(var(--accent-orange-soft))" },
  { icon: PenTool, title: "Design AI Architecture", desc: "Right-fit models, data flows, and integration blueprint.", color: "hsl(var(--accent-violet))", soft: "hsl(var(--accent-violet-soft))" },
  { icon: Hammer, title: "Build & Train Systems", desc: "Production-grade engineering, custom training & evaluation.", color: "hsl(var(--accent-teal))", soft: "hsl(var(--accent-teal-soft))" },
  { icon: Zap, title: "Deploy & Optimize", desc: "Ship safely, monitor continuously, improve weekly.", color: "hsl(var(--accent-amber))", soft: "hsl(var(--accent-amber-soft))" },
];

const HowWeWork = () => {
  return (
    <Section id="how">
      <SectionHeader eyebrow="Our process" title="How We Work" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -top-4 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
              {i + 1}
            </div>
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: step.soft, color: step.color }}
            >
              <step.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowWeWork;
