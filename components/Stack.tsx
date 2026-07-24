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

export default function Stack() {
  return (
    <section id="stack" className="border-b border-line bg-canvas px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Stack"
          title="What I work in"
          lead="The top group is where I spend most weeks. The rest I reach for as the job needs it."
        />

        <div className="mt-12 space-y-px overflow-hidden rounded-lg border border-line bg-line">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              delay={Math.min(i, 3) * 60}
              className="grid gap-x-10 gap-y-3 bg-paper px-6 py-6 sm:grid-cols-[8.5rem_1fr] sm:px-7"
            >
              <h3 className="text-[14.5px] font-semibold tracking-tight">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[11.5px] text-ink-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-5 text-[13.5px] leading-relaxed text-ink-3">
            <span className="font-medium text-ink-2">
              Working knowledge, not expert:
            </span>{" "}
            {LEARNING.join(", ")}. I&apos;ll say so up front rather than learn
            them on your budget.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
