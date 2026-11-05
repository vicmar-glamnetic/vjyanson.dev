import HeroStack from "./HeroStack";
import { SITES } from "@/lib/sites";

const shopifyCount = SITES.filter((s) => s.platform === "Shopify").length;
const wpCount = SITES.filter((s) => s.platform === "WordPress").length;

const FACTS = [
  { value: "2018", label: "Building for the web since" },
  { value: String(SITES.length), label: "Live sites in the portfolio" },
  { value: `${shopifyCount} / ${wpCount}`, label: "Shopify / WordPress" },
  { value: "3", label: "Countries of clients" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div>
          <p
            className="fade-up mb-6 text-[14px] text-ink-3"
            style={{ animationDelay: "0.05s" }}
          >
            Available for freelance &amp; contract work — Bacolod City, PH
          </p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[3.6rem] lg:text-[4.1rem]">
            <span className="line-mask">
              <span style={{ animationDelay: "0.1s" }}>I build websites</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.22s" }}>and online stores</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.34s" }}>
                that{" "}
                <span className="relative inline-block text-brand">
                  hold up.
                  <svg
                    className="draw-line absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M3 9c40-6 90-8 194-3"
                      stroke="var(--color-lime)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </h1>

          <div
            className="fade-up mt-7 max-w-xl space-y-4 text-[16px] leading-[1.65] text-ink-2"
            style={{ animationDelay: "0.55s" }}
          >
            <p>
              I&apos;m Vicmar, a web developer in Bacolod City, Philippines.
              Most of my week is Shopify — Liquid themes, Shopify Plus, and the
              integrations around them. The rest is WordPress business sites,
              custom PHP, and React / Next.js front ends like this one.
            </p>
            <p>
              Currently senior developer on{" "}
              <a
                href="https://inhhair.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-line-strong underline-offset-[3px] transition-colors hover:decoration-brand"
              >
                INH Hair
              </a>{" "}
              at Komboventures, Los Angeles.
            </p>
          </div>

          <div
            className="fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#builds"
              className="rounded-md border border-line-strong bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink"
            >
              What kind of site do you need?
            </a>
          </div>
        </div>

        {/* Overlapping browser windows with real screenshots */}
        <HeroStack />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-14">
        <dl
          className="fade-up grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4"
          style={{ animationDelay: "0.9s" }}
        >
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-paper px-5 py-5">
              <dt className="text-[12.5px] leading-snug text-ink-3">{fact.label}</dt>
              <dd className="mt-1 font-display text-[1.9rem] font-semibold tracking-tight tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
