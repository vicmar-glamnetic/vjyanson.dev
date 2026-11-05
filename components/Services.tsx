import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Shopify stores",
    body: "Online Store 2.0 themes built from scratch or untangled from whatever the last agency left behind. Section and block schemas and metafield-backed content, so marketing can rebuild a landing page without opening a ticket.",
    tags: ["Liquid", "OS 2.0", "Metafields", "Figma to theme"],
  },
  {
    title: "Shopify Plus",
    body: "Functions and Scripts for discount and shipping logic the standard rules can't express, checkout extensibility, custom cart behaviour, and several storefronts on one shared theme without them drifting apart.",
    tags: ["Functions", "Scripts", "Checkout UI", "Multi-store"],
  },
  {
    title: "WordPress & WooCommerce",
    body: "Where I started, and still a big part of what I do. Custom themes and plugins, ACF and block-based page building, WooCommerce stores, and the business and service sites that need to rank and convert.",
    tags: ["PHP", "Custom themes", "ACF / blocks", "WooCommerce"],
  },
  {
    title: "Custom sites & web apps",
    body: "React and Next.js for when a CMS gets in the way — campaign landing pages, small internal tools, dashboards, and fast marketing sites like this one, deployed on Vercel.",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
  },
  {
    title: "Speed & technical SEO",
    body: "Most slow sites are slow for boring reasons: a dozen third-party scripts in the head, images at four times their display size, loops running over the whole catalogue. I find those and fix them.",
    tags: ["Core Web Vitals", "Image sizing", "App audits", "Redirects"],
  },
  {
    title: "APIs, integrations & migrations",
    body: "GraphQL and REST work, wiring in Rebuy, subscriptions, reviews, ERP and 3PL feeds, and moving WooCommerce or custom stores onto Shopify with URLs and SEO equity intact.",
    tags: ["GraphQL", "Webhooks", "Rebuy", "Woo → Shopify"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Shopify specialist, full-stack about the rest"
          lead="Nearly all of my work falls into one of these. If yours does not, ask anyway — I'd rather tell you it's out of scope than take it on badly."
        />

        <div className="mt-12 grid border-t border-line-strong sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 3) * 80}
              className="group relative border-b border-line py-8 sm:pr-10"
            >
              <span className="absolute -bottom-px left-0 h-[2px] w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
              <h3 className="font-display text-[20px] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {service.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-2">{service.body}</p>
              <p className="mt-4 font-mono text-[12px] text-ink-3">{service.tags.join(" · ")}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
