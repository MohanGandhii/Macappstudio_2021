import { Bot, TrendingUp, MessageCircle, Cpu, GitBranch, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  { icon: Bot, title: "AI Agents & Automation", color: "hsl(var(--accent-violet))", soft: "hsl(var(--accent-violet-soft))" },
  { icon: TrendingUp, title: "Predictive Analytics", color: "hsl(var(--accent-orange))", soft: "hsl(var(--accent-orange-soft))" },
  { icon: MessageCircle, title: "Chatbots & Assistants", color: "hsl(var(--accent-teal))", soft: "hsl(var(--accent-teal-soft))" },
  { icon: Cpu, title: "Machine Learning Models", color: "hsl(var(--accent-rose))", soft: "hsl(var(--accent-rose-soft))" },
  { icon: GitBranch, title: "Workflow Automation", color: "hsl(var(--accent-amber))", soft: "hsl(var(--accent-amber-soft))" },
  { icon: BarChart3, title: "BI Dashboards", color: "hsl(var(--accent-blue))", soft: "hsl(var(--accent-blue-soft))" },
];

const WhatWeDo = () => {
  return (
    <Section id="what-we-do" muted>
      <SectionHeader eyebrow="Capabilities" title="What We Do" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-smooth group-hover:scale-110"
              style={{ background: item.soft, color: item.color }}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="text-base font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatWeDo;
