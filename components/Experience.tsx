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
    <section id="experience" className="bg-ink px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          dark
          eyebrow="Experience"
          title="Six companies, three countries"
          lead="PHP and WordPress first, then Shopify from 2019 onward. Remote for teams in the United States and Australia, and in-office in the Philippines."
        />

        <ol className="relative mt-14 pl-8 sm:pl-0">
          {/* Rail grows as you scroll through the section */}
          <span className="absolute bottom-2 left-[5px] top-2 w-px bg-white/10 sm:left-[11.5rem]" aria-hidden />
          <span className="timeline-rail absolute bottom-2 left-[5px] top-2 w-px bg-lime sm:left-[11.5rem]" aria-hidden />

          {JOBS.map((job, i) => (
            <Reveal
              key={job.company}
              as="li"
              delay={Math.min(i, 3) * 60}
              className="relative grid gap-x-12 gap-y-2 pb-12 last:pb-0 sm:grid-cols-[10rem_1fr]"
            >
              <span
                className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 sm:left-[calc(11.5rem-5px)] ${
                  job.current ? "border-lime bg-lime" : "border-white/40 bg-ink"
                }`}
                aria-hidden
              />
              <div className="sm:text-right">
                <p className="font-mono text-[12px] leading-relaxed text-white/50">{job.period}</p>
                {job.current && (
                  <p className="mt-1 text-[12px] font-medium text-lime">Current</p>
                )}
              </div>

              <div className="sm:pl-4">
                <h3 className="font-display text-[19px] font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-0.5 text-[13.5px] text-white/50">
                  {job.company} · {job.location}
                </p>
                <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.7] text-white/75">{job.body}</p>
                <p className="mt-4 font-mono text-[12px] text-white/45">{job.tags.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
