import Image from "next/image";
import BrowserFrame from "./BrowserFrame";
import { SITES, shotSrc } from "@/lib/sites";

const shopifyCount = SITES.filter((s) => s.platform === "Shopify").length;
const wpCount = SITES.filter((s) => s.platform === "WordPress").length;

const FACTS = [
  { value: "2018", label: "Building for the web since" },
  { value: String(SITES.length), label: "Live sites in the portfolio" },
  { value: `${shopifyCount} / ${wpCount}`, label: "Shopify / WordPress" },
  { value: "3", label: "Countries of clients" },
];

const WINDOWS = [
  {
    slug: "inh-hair",
    url: "inhhair.com",
    tag: "Shopify Plus",
    tagClass: "bg-brand text-white",
    pos: "left-0 top-0 w-[78%] z-10 -rotate-[2.5deg]",
    d: "0.35s",
  },
  {
    slug: "247-pro-restoration",
    url: "247prorestoration.com",
    tag: "WordPress",
    tagClass: "bg-wp text-white",
    pos: "right-0 top-[22%] w-[72%] z-20 rotate-[2deg]",
    d: "0.55s",
  },
  {
    slug: "modern-comfort-builders",
    url: "moderncomfortbuilders.com",
    tag: "WordPress",
    tagClass: "bg-wp text-white",
    pos: "left-[8%] top-[52%] w-[70%] z-30 -rotate-1",
    d: "0.75s",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div>
          <p
            className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-[12.5px] text-ink-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Taking on freelance & contract work
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
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#builds"
              className="rounded-full border border-line-strong bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink"
            >
              What kind of site do you need?
            </a>
          </div>
        </div>

        {/* Overlapping browser windows with real screenshots */}
        <div className="relative mx-auto aspect-[1/0.92] w-full max-w-[560px]">
          {WINDOWS.map((w, i) => (
            <div
              key={w.slug}
              className={`window-in absolute ${w.pos}`}
              style={{ "--d": w.d } as React.CSSProperties}
            >
              <BrowserFrame url={w.url}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={shotSrc(w.slug)}
                    alt={`${w.url} homepage`}
                    fill
                    sizes="(min-width: 1024px) 420px, 75vw"
                    className="object-cover object-top"
                    preload={i === 0}
                  />
                </div>
              </BrowserFrame>
              <span
                className={`absolute -top-3 right-4 rounded-full px-2.5 py-1 font-mono text-[10.5px] font-medium shadow-sm ${w.tagClass}`}
              >
                {w.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-14">
        <dl
          className="fade-up grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
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
