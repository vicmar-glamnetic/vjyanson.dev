import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURED = [
  {
    name: "INH Hair",
    url: "https://inhhair.com",
    domain: "inhhair.com",
    sector: "Hair extensions · DTC",
    period: "2023 — present",
    role: "Senior Shopify Developer",
    body: [
      "Led the product page rebrand across the catalogue. Rather than one cutover, I rebuilt the PDP as schema-driven sections so the new brand system could roll out template by template and be reverted per template if something looked wrong in production.",
      "Built out the Liquid templates behind it and moved product, variant, and inventory reads onto the Admin and Storefront GraphQL APIs. Integrated Rebuy for cart and post-purchase offers, wrote Plus Scripts for the tiered discount logic the native rules could not express, and configured the payment gateways.",
    ],
    tags: ["Shopify Plus", "Liquid", "GraphQL", "Scripts", "Rebuy", "SCSS"],
  },
  {
    name: "INH Professional",
    url: "https://inhprofessional.com",
    domain: "inhprofessional.com",
    sector: "Pro stylist channel",
    period: "2023 — present",
    role: "Senior Shopify Developer",
    body: [
      "The trade-facing sibling to INH Hair, running on the same theme codebase with a separate storefront, its own pricing rules, and gated access for verified stylists.",
      "Most of the work here is keeping two stores on one theme without them quietly drifting apart — shared sections, per-store settings, and being disciplined about what gets forked and what stays common.",
    ],
    tags: ["Shopify Plus", "Liquid", "Multi-store", "Gated catalogue"],
  },
];

const SHOPIFY = [
  { name: "INH Hair", url: "https://inhhair.com" },
  { name: "INH Professional", url: "https://inhprofessional.com" },
  { name: "Glamnetic", url: "https://glamnetic.com" },
  { name: "PureCare", url: "https://www.purecare.com" },
  { name: "Goody's Powder", url: "https://www.goodyspowder.com" },
  { name: "Eskute", url: "https://eskute.de" },
  { name: "Atlantic Naturals", url: "https://atlanticnaturals.com" },
  { name: "Critter Concepts", url: "https://critterconcepts.com" },
  { name: "DCB Worldwide", url: "https://dcbworldwide.com" },
  { name: "Moken Vision", url: "https://mokenvision.myshopify.com" },
  { name: "My Work Supply", url: "https://myworksupply.com" },
  { name: "Amarala", url: "https://amarala.co" },
  { name: "Jessica Rich", url: "https://jessicarich.com" },
  { name: "Macklowe Gallery", url: "https://www.macklowegallery.com" },
  { name: "Vanity Makeup", url: "https://vanitymakeup.com" },
  { name: "Homecraft Textiles", url: "https://www.homecrafttextiles.com.au" },
  { name: "Swallows N Daggers", url: "https://swallowsndaggers.com" },
  { name: "Invatech Italia", url: "https://invatechitalia.com" },
  { name: "Peace Love Hormones", url: "https://www.peacelovehormones.com" },
  { name: "Carte Lash", url: "https://cartellash.ca" },
  { name: "Schroder USA", url: "https://schroderusa.com" },
  { name: "McCrystal Creations", url: "https://mccrystalcreations.com" },
  { name: "Urban Depot", url: "https://urbandepot.com.au" },
];

const WORDPRESS = [
  { name: "Bidi Vapor", url: "https://bidivapor.com" },
  { name: "Kaival Labs", url: "https://kaivallabs.com" },
  { name: "McKay Drilling", url: "https://mckaydrilling.com.au" },
  { name: "247 Pro Restoration", url: "https://247prorestoration.com" },
  { name: "Glowing Rooms", url: "https://www.glowingrooms.com.au" },
  { name: "Vital Vet", url: "http://vitalvet.com.au" },
  { name: "QRX Digital", url: "https://qrxdigital.com" },
];

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className="shrink-0 text-ink-3 transition-colors group-hover:text-brand"
    >
      <path
        d="M3 9L9 3M9 3H4.2M9 3v4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SiteList({
  heading,
  note,
  sites,
}: {
  heading: string;
  note: string;
  sites: { name: string; url: string }[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-line-strong pb-2">
        <h4 className="text-[14.5px] font-semibold tracking-tight">
          {heading}
          <span className="ml-2 font-mono text-[12px] font-normal text-ink-3">
            {sites.length}
          </span>
        </h4>
        <span className="text-[12.5px] text-ink-3">{note}</span>
      </div>

      <ul className="mt-1 grid sm:grid-cols-2 sm:gap-x-8">
        {sites.map((site) => (
          <li key={site.url} className="border-b border-line">
            <a
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 py-2.5 text-[14px]"
            >
              <span className="transition-colors group-hover:text-brand">
                {site.name}
              </span>
              <ArrowIcon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-b border-line bg-canvas px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Stores I've shipped"
          lead="Two I can talk about in detail, and the full list underneath. Some of these I built end to end; on others I was one developer on an agency team. Ask me about any of them and I'll tell you which."
        />

        <div className="mt-12 space-y-4">
          {FEATURED.map((project, i) => (
            <Reveal key={project.url} as="article" delay={i * 80}>
              <div className="rounded-lg border border-line bg-paper p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-[19px] font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-[13.5px] text-ink-3">
                      {project.sector} · {project.role}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[13.5px] text-ink-2 transition-colors hover:text-brand"
                    >
                      {project.domain}
                      <ArrowIcon />
                    </a>
                    <p className="mt-1 font-mono text-[12px] text-ink-3">
                      {project.period}
                    </p>
                  </div>
                </div>

                <div className="mt-5 max-w-3xl space-y-3.5 text-[14.5px] leading-[1.7] text-ink-2">
                  {project.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[11.5px] text-ink-3"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-14 space-y-12">
          <SiteList
            heading="Shopify"
            note="In-house and agency work"
            sites={SHOPIFY}
          />
          <SiteList
            heading="WordPress & WooCommerce"
            note="Mostly 2018 — 2021"
            sites={WORDPRESS}
          />
          <p className="text-[13px] leading-relaxed text-ink-3">
            Live links, so a few will have been redesigned by other developers
            since I worked on them. That is what happens to agency work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
