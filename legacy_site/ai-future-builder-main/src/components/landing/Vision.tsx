import { Brain, User } from "lucide-react";
import { Section } from "./Section";

const Vision = () => {
  return (
    <Section id="vision" muted>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft">
            <User className="h-6 w-6 text-primary" strokeWidth={1.8} />
          </div>
          <div className="h-px w-8 bg-gradient-primary" />
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
            <Brain className="h-6 w-6 text-primary-foreground" strokeWidth={1.8} />
          </div>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Vision</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          "AI doesn't replace humans.<br />It <span className="text-gradient-primary">amplifies</span> them."
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The real power lies in Human + AI collaboration — where intelligence meets experience and automation meets decision-making.
        </p>
      </div>
    </Section>
  );
};

export default Vision;
