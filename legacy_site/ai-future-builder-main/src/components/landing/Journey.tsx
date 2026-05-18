import { Award, Trophy, Sparkles } from "lucide-react";
import { Section } from "./Section";

const milestones = [
  { year: "2011", label: "First lines of code" },
  { year: "2015", label: "Intel recognition" },
  { year: "2019", label: "Enterprise scale" },
  { year: "2024", label: "AI-first systems" },
];

const Journey = () => {
  return (
    <Section id="journey">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--accent-amber-soft))] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent-amber))]">
            <Sparkles className="h-3 w-3" /> Since 2011
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Our Journey</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From writing our first lines of code in 2011 to building intelligent systems today, our journey has always been driven by one belief —{" "}
            <span className="font-semibold text-foreground">great engineering execution builds great companies.</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                  {i + 1}
                </div>
                <p className="mt-3 text-2xl font-bold tracking-tight">{m.year}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition badges */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth hover:shadow-elegant">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--accent-amber-soft))] text-[hsl(var(--accent-amber))]">
              <Trophy className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Intel (USA)</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">World's Most Valuable Developers</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth hover:shadow-elegant">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--accent-violet-soft))] text-[hsl(var(--accent-violet))]">
              <Award className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Intel</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">Black Belt Program</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Journey;
