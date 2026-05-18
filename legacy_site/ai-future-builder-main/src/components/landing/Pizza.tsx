import { Section, SectionHeader } from "./Section";
import baseImg from "@/assets/pizza-base.jpg";
import toppingsImg from "@/assets/pizza-toppings.jpg";
import customizeImg from "@/assets/pizza-customize.jpg";
import launchImg from "@/assets/pizza-launch.jpg";

const cards = [
  {
    image: baseImg,
    accent: "hsl(var(--accent-rose))",
    accentSoft: "hsl(var(--accent-rose-soft))",
    title: "Choose Your Base",
    items: ["AI Chatbot", "Automation System", "Internal AI Tool", "Customer Platform"],
  },
  {
    image: toppingsImg,
    accent: "hsl(var(--accent-orange))",
    accentSoft: "hsl(var(--accent-orange-soft))",
    title: "Add Toppings",
    items: ["WhatsApp Integration", "CRM Sync", "Analytics Dashboard", "AI Agents", "Payment Automation"],
  },
  {
    image: customizeImg,
    accent: "hsl(var(--accent-teal))",
    accentSoft: "hsl(var(--accent-teal-soft))",
    title: "Customize",
    items: ["Your workflows", "Your data", "Industry-specific logic"],
  },
  {
    image: launchImg,
    accent: "hsl(var(--accent-violet))",
    accentSoft: "hsl(var(--accent-violet-soft))",
    title: "Launch",
    items: ["Build", "Test", "Deploy", "Ready for real users"],
  },
];

const Pizza = () => {
  return (
    <Section id="pizza">
      <SectionHeader
        eyebrow="The MacAppStudio Way"
        title="Build AI Like Ordering a Pizza"
        subtitle="Simple. Fast. Customizable."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{ background: card.accentSoft }}
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                width={768}
                height={576}
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
              <span
                className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-bold backdrop-blur"
                style={{ color: card.accent }}
              >
                0{i + 1}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <ul className="mt-4 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: card.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pizza;
