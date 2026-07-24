import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Theme architecture",
    body: "Online Store 2.0 themes built from scratch or untangled from whatever the last agency left behind. Section groups, block schemas, and metafield-backed content so the marketing team can rebuild a landing page without opening a ticket.",
    tags: ["Liquid", "OS 2.0", "Section groups", "Metafields"],
  },
  {
    title: "Shopify Plus",
    body: "Scripts and Functions for discount and shipping logic that the standard rules engine cannot express, plus checkout extensibility, custom cart behaviour, and keeping several storefronts on one shared theme without them drifting apart.",
    tags: ["Functions", "Scripts", "Checkout UI", "Multi-store"],
  },
  {
    title: "Storefront performance",
    body: "Most slow Shopify stores are slow for boring reasons: a dozen app scripts loading in the head, images served at four times their display size, and Liquid loops running against the full collection. I go find those.",
    tags: ["Core Web Vitals", "Image sizing", "App audits", "Lazy loading"],
  },
  {
    title: "APIs and integrations",
    body: "Admin and Storefront GraphQL for product, order, and inventory work, plus wiring third-party platforms — Rebuy, subscriptions, reviews, ERP and 3PL feeds — so they behave like part of the theme instead of a bolted-on widget.",
    tags: ["GraphQL", "Admin API", "Rebuy", "Webhooks"],
  },
  {
    title: "Rebrands and migrations",
    body: "Product page rebrands across a live catalogue, design handoffs out of Figma, XD, or flat PSDs, and WooCommerce stores moved onto Shopify with URLs and SEO equity intact.",
    tags: ["PDP rebrand", "Figma to Liquid", "Woo to Shopify", "Redirects"],
  },
  {
    title: "WordPress and WooCommerce",
    body: "Where I started, and still useful. Custom themes and plugins, PHP work, speed passes on bloated builds, and the marketing sites that tend to sit alongside a Shopify storefront.",
    tags: ["PHP", "WooCommerce", "Custom themes", "ACF"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Services"
          title="What I actually do"
          lead="Nearly all of my work falls into one of these. If yours does not, ask anyway — I would rather tell you it is out of scope than take it on badly."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 2) * 70}
              className="bg-paper p-6 sm:p-7"
            >
              <h3 className="text-[16px] font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.65] text-ink-2">
                {service.body}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[11.5px] text-ink-3"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
