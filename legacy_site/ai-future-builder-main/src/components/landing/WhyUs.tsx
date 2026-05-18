import { Check, X } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const failed = [
  "Over-promised automation",
  "Lack of deep engineering",
  "Black-box delivery",
  "Limited customization",
];

const approach = [
  "Engineering-first mindset",
  "Transparent development",
  "Custom-built solutions",
  "Scalable architecture",
  "Real AI, not just wrappers",
];

const WhyUs = () => {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why MacAppStudio"
        title="Built different. By engineers."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-destructive/20 bg-card p-8 shadow-soft">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <X className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold">What Failed Elsewhere</h3>
          </div>
          <ul className="space-y-3">
            {failed.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl bg-destructive/5 px-4 py-3 text-sm">
                <X className="h-4 w-4 flex-shrink-0 text-destructive" strokeWidth={2.5} />
                <span className="text-foreground/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-success/30 bg-card p-8 shadow-elegant">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success text-success-foreground shadow-glow">
              <Check className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold">MacAppStudio Approach</h3>
          </div>
          <ul className="space-y-3">
            {approach.map((a) => (
              <li key={a} className="flex items-center gap-3 rounded-xl bg-success-soft px-4 py-3 text-sm">
                <Check className="h-4 w-4 flex-shrink-0 text-success" strokeWidth={2.5} />
                <span className="font-medium text-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-semibold leading-relaxed text-foreground">
        We don't sell AI as a shortcut.<br />
        <span className="text-gradient-brand">We build AI as a business advantage.</span>
      </p>
    </Section>
  );
};

export default WhyUs;
