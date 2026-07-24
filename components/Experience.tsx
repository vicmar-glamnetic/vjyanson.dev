import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const JOBS = [
  {
    role: "Senior Shopify Developer",
    company: "INH Hair / Komboventures",
    location: "Los Angeles, US — remote",
    period: "Feb 2023 — present",
    current: true,
    body: "Senior developer across INH Hair and INH Professional on Shopify Plus. I own the product page rebrand, the Liquid template layer, the Plus Scripts behind discount logic, payment gateway configuration, and the Rebuy integration. Day to day, a good share of it is sitting with design and marketing to work out what a section actually needs to do before I write it.",
    tags: ["Shopify Plus", "Liquid", "GraphQL", "Scripts", "React", "SCSS"],
  },
  {
    role: "Shopify Developer",
    company: "Matador Group LLC",
    location: "Los Angeles, US — remote",
    period: "May 2022 — Nov 2022",
    body: "Ran the Shopify side of the agency's client portfolio — custom themes and functionality built to spec, the revision cycles after, QA across accounts, and setting up Google Analytics ecommerce tracking so clients could see what their stores were doing.",
    tags: ["Shopify", "Liquid", "JavaScript", "GA ecommerce"],
  },
  {
    role: "Shopify Developer",
    company: "CT21 Analytics",
    location: "Bacolod City, Philippines",
    period: "Sept 2021 — Jan 2022",
    body: "Built custom Shopify themes from scratch for a run of clients, mostly translating Adobe XD and flat PSD comps into Liquid, then adding the custom section logic each store needed on top.",
    tags: ["Shopify", "Liquid", "SCSS", "XD to Liquid"],
  },
  {
    role: "PHP & WordPress Developer",
    company: "QRX Digital",
    location: "Jacksonville, US — remote",
    period: "Oct 2020 — Aug 2021",
    body: "WordPress and WooCommerce for US clients: custom theme and plugin functionality, pixel-accurate PSD-to-theme builds, responsive fixes, and speed passes on sites that had quietly accumulated too many plugins.",
    tags: ["WordPress", "WooCommerce", "PHP", "SCSS"],
  },
  {
    role: "Shopify & WordPress Developer",
    company: "Arlena Marketing",
    location: "Melbourne, Australia — remote",
    period: "Sept 2019 — Sept 2020",
    body: "Split between extending WordPress and WooCommerce for Australian clients and my first production Shopify work — custom scripts for a client store, PSD-to-theme conversions, and performance tuning.",
    tags: ["Shopify", "WordPress", "PHP", "jQuery"],
  },
  {
    role: "PHP & Front-End Developer",
    company: "ClickableBrand Inc.",
    location: "Cebu City, Philippines",
    period: "July 2018 — Sept 2019",
    body: "Started on internal business automation in SuiteCRM and SugarCRM, then moved across to the front-end team building WordPress themes and converting PSDs to HTML and SASS. Where I learned to work inside someone else's codebase without breaking it.",
    tags: ["PHP", "SuiteCRM", "WordPress", "SASS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          lead="Six companies across the Philippines, Australia, and the United States. Everything from 2019 onward has had Shopify in it somewhere."
        />

        <ol className="mt-12">
          {JOBS.map((job, i) => (
            <Reveal
              key={job.company}
              as="li"
              delay={Math.min(i, 3) * 60}
              className="border-t border-line py-7 first:border-t-0 first:pt-0"
            >
              <div className="grid gap-x-10 gap-y-3 sm:grid-cols-[10rem_1fr]">
                <div className="sm:pt-0.5">
                  <p className="font-mono text-[12px] leading-relaxed text-ink-3">
                    {job.period}
                  </p>
                  {job.current && (
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] font-medium text-brand">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Current
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="text-[16.5px] font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-[13.5px] text-ink-3">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.7] text-ink-2">
                    {job.body}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[11.5px] text-ink-3"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
