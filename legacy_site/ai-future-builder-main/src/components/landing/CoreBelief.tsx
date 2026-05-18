import { Section } from "./Section";

const CoreBelief = () => {
  return (
    <Section id="belief" muted>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Core Belief</span>
        <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
          Human + AI is <span className="text-gradient-primary">Powerful</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We combine human decision-making, AI intelligence, and strong engineering execution.
        </p>
      </div>
    </Section>
  );
};

export default CoreBelief;
