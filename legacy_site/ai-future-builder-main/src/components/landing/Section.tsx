import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  muted?: boolean;
}

export const Section = ({ id, className, children, muted }: SectionProps) => (
  <section
    id={id}
    className={cn(
      "py-10 md:py-14",
      muted && "bg-secondary",
      className
    )}
  >
    <div className="container mx-auto px-4 md:px-8">{children}</div>
  </section>
);

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) => (
  <div className={cn("mb-8 max-w-3xl", align === "center" && "mx-auto text-center")}>
    {eyebrow && (
      <span className="mb-4 inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
  </div>
);
