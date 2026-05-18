import { Gauge, Brain, BarChart4 } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  { icon: Gauge, title: "Faster Development", desc: "Battle-tested frameworks ship AI products in weeks, not quarters.", color: "hsl(var(--accent-orange))", soft: "hsl(var(--accent-orange-soft))" },
  { icon: Brain, title: "Smarter Automation", desc: "AI agents that learn, adapt and integrate with your existing stack.", color: "hsl(var(--accent-violet))", soft: "hsl(var(--accent-violet-soft))" },
  { icon: BarChart4, title: "Better Decision Systems", desc: "Real-time intelligence pipelines built for executives, not dashboards.", color: "hsl(var(--accent-teal))", soft: "hsl(var(--accent-teal-soft))" },
];

const Edge = () => {
  return (
    <Section id="edge">
      <SectionHeader eyebrow="Our edge" title="The MacAppStudio Edge" />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
            <div
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: item.soft, color: item.color }}
            >
              <item.icon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Edge;
