import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, Zap } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-[500px] w-[500px] rounded-full bg-[hsl(var(--accent-orange))]/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-[hsl(var(--accent-violet))]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-[hsl(var(--accent-blue))]/10 blur-[120px]" />

      <div className="container relative mx-auto px-4 pb-12 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="h-3 w-3 text-[hsl(var(--accent-orange))]" />
            AI Transformation for Businesses
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Is Your Company<br />
            <span className="text-gradient-brand">AI-Ready?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We don't just talk AI — we build, deploy, and scale real AI systems that solve business problems.{" "}
            <span className="font-semibold text-foreground">Human + AI = Powerful.</span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group h-12 rounded-full px-7 text-base shadow-glow">
              Get Proposal in 48 Hrs
              <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full border-2 bg-card/80 px-7 text-base backdrop-blur">
              <MessageSquare className="mr-1 h-4 w-4" />
              Talk to AI Team
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-success" /> Engineering-first</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[hsl(var(--accent-amber))]" /> 48-hour proposal</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent-violet))]" /> Built since 2011</span>
          </div>
        </div>

        {/* Hero image — full bleed below */}
        <div className="relative mx-auto mt-12 max-w-6xl animate-scale-in">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-[0.10] blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-card shadow-premium ring-1 ring-border">
            <img
              src={heroImage}
              alt="Corporate team collaborating with AI"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
            {/* Stats overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent p-6 md:p-8">
              <div className="grid grid-cols-3 gap-4 text-background">
                <div>
                  <p className="text-2xl font-semibold sm:text-3xl">13+</p>
                  <p className="text-xs opacity-80 sm:text-sm">Years building</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold sm:text-3xl">200+</p>
                  <p className="text-xs opacity-80 sm:text-sm">AI systems deployed</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold sm:text-3xl">48hr</p>
                  <p className="text-xs opacity-80 sm:text-sm">Proposal delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
