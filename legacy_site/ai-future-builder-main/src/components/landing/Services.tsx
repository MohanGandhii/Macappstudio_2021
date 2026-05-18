import { Compass, Code2, Workflow, GitMerge } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const services = [
  {
    icon: Compass,
    color: "hsl(var(--accent-orange))",
    soft: "hsl(var(--accent-orange-soft))",
    title: "AI Strategy & Readiness",
    points: ["AI maturity audit", "Use case discovery", "Roadmap & ROI modeling"],
  },
  {
    icon: Code2,
    color: "hsl(var(--accent-violet))",
    soft: "hsl(var(--accent-violet-soft))",
    title: "AI Development",
    points: ["Custom LLM applications", "Vision & NLP systems", "Production-grade ML models"],
  },
  {
    icon: Workflow,
    color: "hsl(var(--accent-teal))",
    soft: "hsl(var(--accent-teal-soft))",
    title: "Automation Systems",
    points: ["End-to-end workflow automation", "Document & email automation", "RPA + AI hybrids"],
  },
  {
    icon: GitMerge,
    color: "hsl(var(--accent-rose))",
    soft: "hsl(var(--accent-rose-soft))",
    title: "AI Integration",
    points: ["CRM, ERP, WhatsApp & APIs", "Existing stack augmentation", "Secure data pipelines"],
  },
];

const Services = () => {
  return (
    <Section id="services" muted>
      <SectionHeader
        eyebrow="What we deliver"
        title="AI Transformation Services"
        subtitle="We help companies move from manual → automated → intelligent"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <div className="flex items-start gap-5">
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-smooth group-hover:scale-110"
                style={{ background: s.soft, color: s.color }}
              >
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <ul className="mt-3 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: s.color }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
