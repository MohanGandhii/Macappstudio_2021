import { Headphones, Target, Cog, LayoutDashboard, ClipboardList } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const cases = [
  { icon: Headphones, title: "AI Customer Support", desc: "24/7 WhatsApp bots that resolve 80% of queries", color: "hsl(var(--accent-orange))", soft: "hsl(var(--accent-orange-soft))" },
  { icon: Target, title: "Sales Intelligence", desc: "Smart lead scoring & pipeline insights", color: "hsl(var(--accent-rose))", soft: "hsl(var(--accent-rose-soft))" },
  { icon: Cog, title: "Internal Task Automation", desc: "Reclaim hours of repetitive ops every day", color: "hsl(var(--accent-teal))", soft: "hsl(var(--accent-teal-soft))" },
  { icon: LayoutDashboard, title: "CXO Dashboards", desc: "Real-time KPIs from every system in one view", color: "hsl(var(--accent-violet))", soft: "hsl(var(--accent-violet-soft))" },
  { icon: ClipboardList, title: "Operations Management", desc: "End-to-end workflow visibility & control", color: "hsl(var(--accent-amber))", soft: "hsl(var(--accent-amber-soft))" },
];

const UseCases = () => {
  return (
    <Section id="use-cases">
      <SectionHeader eyebrow="In production" title="Real Business Use Cases" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.title}
            className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-smooth group-hover:scale-110"
              style={{ background: c.soft, color: c.color }}
            >
              <c.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default UseCases;
