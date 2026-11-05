import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, React.ReactNode> = {
  bag: <path d="M5 8h14l-1 12H6L5 8zm4 0V6a3 3 0 016 0v2" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5" />,
  wp: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM4.5 9l4 11M9 8l4.5 12L17 9M8 8h3m3 0h3" />,
  code: <path d="M8 7l-5 5 5 5m8-10l5 5-5 5M14 4l-4 16" />,
  gauge: <path d="M4 17a8 8 0 1116 0M12 17l4-6M4 17h16" />,
  plug: <path d="M9 3v5m6-5v5M6 8h12v3a6 6 0 01-12 0V8zm6 9v4" />,
};

const SERVICES = [
  {
    icon: "bag",
    title: "Shopify stores",
    body: "Online Store 2.0 themes built from scratch or untangled from whatever the last agency left behind. Section and block schemas and metafield-backed content, so marketing can rebuild a landing page without opening a ticket.",
    tags: ["Liquid", "OS 2.0", "Metafields", "Figma to theme"],
  },
  {
    icon: "layers",
    title: "Shopify Plus",
    body: "Functions and Scripts for discount and shipping logic the standard rules can't express, checkout extensibility, custom cart behaviour, and several storefronts on one shared theme without them drifting apart.",
    tags: ["Functions", "Scripts", "Checkout UI", "Multi-store"],
  },
  {
    icon: "wp",
    title: "WordPress & WooCommerce",
    body: "Where I started, and still a big part of what I do. Custom themes and plugins, ACF and block-based page building, WooCommerce stores, and the business and service sites that need to rank and convert.",
    tags: ["PHP", "Custom themes", "ACF / blocks", "WooCommerce"],
  },
  {
    icon: "code",
    title: "Custom sites & web apps",
    body: "React and Next.js for when a CMS gets in the way — campaign landing pages, small internal tools, dashboards, and fast marketing sites like this one, deployed on Vercel.",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
  },
  {
    icon: "gauge",
    title: "Speed & technical SEO",
    body: "Most slow sites are slow for boring reasons: a dozen third-party scripts in the head, images at four times their display size, loops running over the whole catalogue. I find those and fix them.",
    tags: ["Core Web Vitals", "Image sizing", "App audits", "Redirects"],
  },
  {
    icon: "plug",
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 3) * 80}
              className="group relative overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {ICONS[service.icon]}
                </svg>
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.65] text-ink-2">{service.body}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-line bg-canvas px-2 py-0.5 font-mono text-[11.5px] text-ink-3">
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
