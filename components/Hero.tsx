import Reveal from "./Reveal";

const FACTS = [
  { value: "2018", label: "Building for the web since" },
  { value: "30", label: "Live sites shipped" },
  { value: "3", label: "Countries worked for" },
];

/* A trimmed-down version of a swatch section I've built more than once. */
function LiquidSample() {
  const c = {
    tag: "text-[#79c0ff]",
    obj: "text-[#d2a8ff]",
    str: "text-[#a5d6ff]",
    dim: "text-[#8b949e]",
    el: "text-[#7ee787]",
  };

  return (
    <div className="overflow-hidden rounded-lg border border-line-strong bg-ink">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-lime" />
        <span className="font-mono text-[11.5px] text-white/55">
          sections/product-swatches.liquid
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-[1.75] text-white/85">
        <code>
          <span className={c.tag}>{"{%- liquid"}</span>
          {"\n  "}
          <span className={c.tag}>assign</span> swatches ={" "}
          <span className={c.obj}>product.metafields.custom.swatches.value</span>
          {"\n  "}
          <span className={c.tag}>assign</span> current ={" "}
          <span className={c.obj}>
            product.selected_or_first_available_variant
          </span>
          {"\n"}
          <span className={c.tag}>{"-%}"}</span>
          {"\n\n"}
          <span className={c.dim}>{"<"}</span>
          <span className={c.el}>product-swatches</span>{" "}
          <span className={c.dim}>data-section</span>=
          <span className={c.str}>{'"{{ section.id }}"'}</span>
          <span className={c.dim}>{">"}</span>
          {"\n  "}
          <span className={c.tag}>{"{%- for swatch in swatches -%}"}</span>
          {"\n    "}
          <span className={c.tag}>{"{%- render"}</span>{" "}
          <span className={c.str}>&apos;swatch-node&apos;</span>, swatch: swatch,
          current: current <span className={c.tag}>{"-%}"}</span>
          {"\n  "}
          <span className={c.tag}>{"{%- endfor -%}"}</span>
          {"\n"}
          <span className={c.dim}>{"</"}</span>
          <span className={c.el}>product-swatches</span>
          <span className={c.dim}>{">"}</span>
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="border-b border-line px-6 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1 text-[12.5px] text-ink-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Open to contract and freelance work
          </p>

          <h1 className="max-w-3xl text-[2.1rem] font-semibold leading-[1.14] tracking-[-0.022em] sm:text-[2.75rem]">
            I build Shopify storefronts that hold up in production.
          </h1>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4 text-[15.5px] leading-[1.65] text-ink-2">
              <p>
                I&apos;m Vicmar, a Shopify developer based in Bacolod City,
                Philippines. Since 2019 I&apos;ve worked almost entirely inside
                Liquid — theme architecture, section and block schemas, cart and
                checkout logic, and the app integrations that keep a large
                catalogue coherent once marketing starts editing it.
              </p>
              <p>
                Right now I&apos;m the senior developer on{" "}
                <a
                  href="https://inhhair.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-line-strong underline-offset-[3px] transition-colors hover:decoration-brand"
                >
                  INH Hair
                </a>{" "}
                and its sister brands at Komboventures in Los Angeles, working
                across a Shopify Plus stack.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-md bg-brand px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="rounded-md border border-line-strong px-4 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-ink-3"
              >
                See recent work
              </a>
              <a
                href="https://www.linkedin.com/in/vicmar-yanson/"
                target="_blank"
                rel="noreferrer"
                className="px-1 text-[14px] text-ink-2 underline decoration-line-strong underline-offset-[3px] transition-colors hover:text-brand"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* min-w-0 keeps the scrolling <pre> from widening the grid track */}
          <Reveal delay={120} className="min-w-0">
            <LiquidSample />
            <p className="mt-3 text-[12.5px] leading-relaxed text-ink-3">
              Metafield-driven swatches, rendered server-side so the variant
              picker survives a page load without JavaScript.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <dl className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {FACTS.map((fact) => (
              <div key={fact.label} className="bg-paper px-4 py-5 sm:px-6">
                <dt className="text-[12.5px] leading-snug text-ink-3">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[1.6rem] font-semibold tracking-tight tabular-nums">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
