import Image from "next/image";
import BrowserFrame from "./BrowserFrame";
import Reveal from "./Reveal";
import Gallery from "./Gallery";
import { shotSrc } from "@/lib/sites";

const FEATURED = [
  {
    name: "INH Hair",
    slug: "inh-hair",
    url: "https://inhhair.com",
    domain: "inhhair.com",
    platform: "Shopify Plus",
    sector: "Hair extensions · DTC",
    period: "2023 — present",
    body: [
      "Led the product page rebrand across the catalogue. Rather than one cutover, I rebuilt the PDP as schema-driven sections so the new brand system could roll out template by template and be reverted per template if something looked wrong in production.",
      "Moved product, variant, and inventory reads onto the Admin and Storefront GraphQL APIs, integrated Rebuy for cart and post-purchase offers, and wrote Plus Scripts for tiered discount logic the native rules could not express.",
    ],
    tags: ["Shopify Plus", "Liquid", "GraphQL", "Scripts", "Rebuy"],
  },
  {
    name: "INH Professional",
    slug: "inh-professional",
    url: "https://inhprofessional.com",
    domain: "inhprofessional.com",
    platform: "Shopify Plus",
    sector: "Pro stylist channel",
    period: "2023 — present",
    body: [
      "The trade-facing sibling to INH Hair, running on the same theme codebase with a separate storefront, its own pricing rules, and gated access for verified stylists.",
      "Most of the work is keeping two stores on one theme without them quietly drifting apart — shared sections, per-store settings, and being disciplined about what gets forked and what stays common.",
    ],
    tags: ["Multi-store", "Gated catalogue", "Liquid", "Section groups"],
  },
  {
    name: "247 Pro Restoration",
    slug: "247-pro-restoration",
    url: "https://247prorestoration.com",
    domain: "247prorestoration.com",
    platform: "WordPress",
    sector: "Emergency property restoration · Los Angeles",
    period: "WordPress build",
    body: [
      "A lead-generation site for a 24/7 restoration company, where every page has one job: get someone with a flooded floor to call now.",
      "Service pages for each type of damage, the emergency number kept in reach on every screen, certifications and reviews up front for trust, and a plain-language walkthrough of what happens in the first hour.",
    ],
    tags: ["WordPress", "Custom theme", "Lead gen", "Local SEO"],
  },
  {
    name: "Modern Comfort Builders",
    slug: "modern-comfort-builders",
    url: "http://moderncomfortbuilders.com",
    domain: "moderncomfortbuilders.com",
    platform: "WordPress",
    sector: "Construction & remodeling",
    period: "WordPress build",
    body: [
      "A brand site for a design-build construction company, led by large project photography and a calm, editorial layout that matches the homes they build.",
      "Service pages for new builds, ADUs, and remodels, a step-by-step process section, and galleries the team can keep adding to without touching code.",
    ],
    tags: ["WordPress", "Brand site", "Galleries", "Editable blocks"],
  },
];

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      <path d="M3 9L9 3M9 3H4.2M9 3v4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-b border-line bg-paper px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand">Selected work</p>
          <h2 className="mt-2.5 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.9rem]">
            Stores and sites I&apos;ve shipped
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.65] text-ink-2">
            Four in detail, then everything else. Hover a screenshot to scroll
            the full page.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 sm:space-y-32">
          {FEATURED.map((p, i) => (
            <article
              key={p.slug}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={`min-w-0 ${i % 2 ? "lg:order-2" : ""}`}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group parallax-slow block"
                  aria-label={`Visit ${p.domain}`}
                >
                  <BrowserFrame url={p.domain}>
                    <div className="page-scroll relative h-(--frame-h) overflow-hidden [--frame-h:280px] sm:[--frame-h:400px]">
                      <Image
                        src={shotSrc(p.slug, true)}
                        alt={`${p.name} — full homepage`}
                        width={900}
                        height={3000}
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="w-full"
                      />
                    </div>
                  </BrowserFrame>
                </a>
              </Reveal>

              <Reveal delay={100} className={i % 2 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[12px] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                      p.platform === "WordPress"
                        ? "bg-wp/10 text-wp"
                        : "bg-brand-tint text-brand"
                    }`}
                  >
                    {p.platform}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.025em]">
                  {p.name}
                </h3>
                <p className="mt-1 text-[13.5px] text-ink-3">
                  {p.sector} · {p.period}
                </p>
                <div className="mt-5 space-y-3.5 text-[15px] leading-[1.7] text-ink-2">
                  {p.body.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-line bg-canvas px-2 py-0.5 font-mono text-[11.5px] text-ink-3">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                >
                  Visit {p.domain}
                  <Arrow />
                </a>
              </Reveal>
            </article>
          ))}
        </div>

        <Gallery />
      </div>
    </section>
  );
}
