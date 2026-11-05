import HeroWall from "./HeroWall";
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
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* Screenshot wall: a band across the top on phones/tablets, behind the right half on desktop */}
      <div className="absolute inset-x-0 top-0 h-[330px] sm:h-[440px] lg:inset-y-0 lg:left-[38%] lg:h-auto">
        <div className="hero-wall absolute inset-0">
        <HeroWall />
        {/* Fades so the wall melts into the background and the copy stays readable */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-linear-to-b from-ink to-transparent lg:h-40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-ink via-ink/80 to-transparent lg:h-40 lg:via-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[45%] bg-linear-to-r from-ink via-ink/85 to-transparent lg:block" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pb-14 pt-[235px] sm:pb-20 sm:pt-[330px] lg:min-h-[calc(100svh-57px)] lg:justify-center lg:pb-10 lg:pt-12">
        <div className="max-w-[50rem]">
          <h1 className="font-display text-[9.3vw] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[4.6rem] lg:text-[5.1rem]">
            <span className="line-mask">
              <span style={{ animationDelay: "0.1s" }}>I build websites</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.22s" }}>and online stores</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.34s" }}>
                that{" "}
                <span className="relative inline-block text-lime">
                  hold up.
                  <svg
                    className="draw-line absolute -bottom-1.5 left-0 w-full sm:-bottom-2.5"
                    viewBox="0 0 200 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path d="M3 9c40-6 90-8 194-3" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </span>
          </h1>

          <p className="fade-up mt-6 max-w-xl text-[15.5px] leading-[1.65] text-white/70 sm:mt-8 sm:text-[17px]" style={{ animationDelay: "0.55s" }}>
            I&apos;m Vicmar — a web developer who spends most weeks deep in
            Shopify and Shopify Plus, and the rest on WordPress and custom
            React / Next.js builds. Currently senior developer on{" "}
            <a
              href="https://inhhair.com"
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-white/30 underline-offset-[3px] transition-colors hover:decoration-lime"
            >
              INH Hair
            </a>{" "}
            in Los Angeles.
          </p>

          <div className="fade-up mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center" style={{ animationDelay: "0.7s" }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-lime px-3 py-3.5 sm:px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="whitespace-nowrap rounded-md border border-white/25 px-3 py-3.5 text-center sm:px-6 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              See the work
            </a>
          </div>
        </div>

        <dl
          className="fade-up relative mt-10 grid max-w-[44rem] grid-cols-4 gap-x-3 border-t border-white/12 pt-6 sm:mt-12 sm:gap-x-8 sm:pt-7"
          style={{ animationDelay: "0.9s" }}
        >
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dt className="order-2 mt-1.5 text-[11px] leading-snug text-white/50 sm:mt-2 sm:text-[12.5px]">{fact.label}</dt>
              <dd className="order-1 font-display text-[1.45rem] sm:text-[2rem] font-semibold leading-none tracking-tight tabular-nums">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
