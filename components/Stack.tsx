import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    title: "Shopify",
    items: [
      "Liquid",
      "Online Store 2.0",
      "Section & block schemas",
      "Metafields",
      "Metaobjects",
      "Plus Scripts",
      "Checkout extensibility",
      "Admin GraphQL API",
      "Storefront API",
      "Shopify CLI",
      "Cart & checkout logic",
      "Payment gateways",
    ],
  },
  {
    title: "Front end",
    items: [
      "HTML",
      "CSS / SCSS",
      "JavaScript (ES6+)",
      "Web Components",
      "jQuery",
      "React",
      "Next.js",
      "Tailwind",
      "Responsive & cross-browser",
    ],
  },
  {
    title: "Back end & CMS",
    items: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "Node.js",
      "REST APIs",
      "SuiteCRM / SugarCRM",
    ],
  },
  {
    title: "Tooling",
    items: [
      "Git & GitHub",
      "Figma / XD handoff",
      "Lighthouse",
      "BrowserStack",
      "GA4 ecommerce",
    ],
  },
];

const LEARNING = ["Hydrogen & Oxygen", "Shopify Functions", "Theme app extensions"];

/* The big scroll-linked rows: the names I'd want a client to recognise. */
const ROWS = [
  ["Shopify Plus", "Liquid", "WordPress", "Next.js", "GraphQL", "PHP"],
  ["React", "WooCommerce", "Tailwind", "Metafields", "JavaScript", "Figma"],
];

function BigRow({ words, from, to }: { words: string[]; from: string; to: string }) {
  return (
    <div
      className="scroll-x flex w-max items-center gap-6 whitespace-nowrap sm:gap-10"
      style={{ "--from": from, "--to": to } as React.CSSProperties}
      aria-hidden
    >
      {[...words, ...words].map((w, i) => (
        <span key={i} className="flex items-center gap-6 sm:gap-10">
          <span
            className={`font-display text-[3.2rem] font-semibold leading-none tracking-[-0.04em] sm:text-[5.5rem] ${
              i % 2 ? "text-outline" : "text-ink"
            }`}
          >
            {w}
          </span>
          <span className="font-display text-[2rem] text-brand sm:text-[3rem]">/</span>
        </span>
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="overflow-hidden border-b border-line bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Tools of the trade"
          lead="Shopify is where I spend most weeks; the rest I use every month across WordPress and custom builds."
        />
      </div>

      <div className="mt-14 space-y-3 sm:space-y-5">
        <BigRow words={ROWS[0]} from="0%" to="-30%" />
        <BigRow words={ROWS[1]} from="-30%" to="0%" />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-x-10 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group, gi) => (
          <div key={group.title} className="focus-scroll">
            <h3 className="flex items-baseline justify-between border-b-2 border-ink pb-2.5 font-display text-[18px] font-semibold tracking-tight">
              {group.title}
              <span className="text-[13px] font-normal text-ink-3">{String(group.items.length).padStart(2, "0")}</span>
            </h3>
            <ul>
              {group.items.map((item, i) => (
                <Reveal
                  key={item}
                  as="li"
                  delay={gi * 60 + i * 35}
                  className="group flex items-center justify-between border-b border-line py-2.5 text-[14.5px] text-ink-2"
                >
                  <span className="transition-[color,transform] duration-300 group-hover:translate-x-1.5 group-hover:text-ink">
                    {item}
                  </span>
                  <span className="h-1.5 w-1.5 scale-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-100" aria-hidden />
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-6xl px-6">
        <p className="text-[14px] leading-relaxed text-ink-3">
          <span className="font-medium text-ink-2">Working knowledge, not expert:</span>{" "}
          {LEARNING.join(", ")}. I&apos;ll say so up front rather than learn them on your budget.
        </p>
      </Reveal>
    </section>
  );
}
