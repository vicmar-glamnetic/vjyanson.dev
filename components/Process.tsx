"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";
import SectionHeading from "./SectionHeading";
import { shotSrc } from "@/lib/sites";

const STEPS = [
  {
    title: "Plan",
    url: "sitemap-and-wireframes.fig",
    body: "Sitemap, wireframes, and what the site actually has to achieve. Everything is cheap to change at this stage, so this is where we argue.",
  },
  {
    title: "Design",
    url: "homepage-design.fig",
    body: "Real type, colour, and content on top of the structure — signed off before any code gets written.",
  },
  {
    title: "Build",
    url: "127.0.0.1:9292",
    body: "Liquid, PHP, or React, depending on the platform. Built as sections with settings, so your team can edit it after I leave.",
  },
  {
    title: "Launch",
    url: "inhhair.com",
    body: "Tested on real devices, images and scripts trimmed, redirects in place, then handed over with notes on how it all fits together.",
  },
];

/** Crossed box used for image placeholders in the wireframe. */
function Cross() {
  return (
    <svg className="absolute inset-0 h-full w-full text-ink-3/40" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
      <path d="M0 0L100 100M100 0L0 100" stroke="currentColor" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const CODE = [
  ["c", "{%- comment -%} sections/hero.liquid {%- endcomment -%}"],
  ["t", "<section class=\"hero\" style=\"--bg: {{ section.settings.bg }}\">"],
  ["t", "  <h1>{{ section.settings.heading | escape }}</h1>"],
  ["t", "  <a href=\"{{ section.settings.link }}\" class=\"btn\">"],
  ["t", "    {{ section.settings.button_label }}"],
  ["t", "  </a>"],
  ["t", "  {{ section.settings.image | image_url: width: 1600"],
  ["t", "     | image_tag: loading: 'eager', sizes: '50vw' }}"],
  ["t", "</section>"],
  ["c", ""],
  ["k", "{% schema %}"],
  ["s", "  { \"name\": \"Hero\", \"settings\": ["],
  ["s", "    { \"type\": \"text\", \"id\": \"heading\" },"],
  ["s", "    { \"type\": \"image_picker\", \"id\": \"image\" } ] }"],
  ["k", "{% endschema %}"],
] as const;

const tone = { c: "text-white/40", t: "text-[#a5d6ff]", k: "text-[#ff7b72]", s: "text-[#d2a8ff]" };

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / (total || 1)));
      el.style.setProperty("--p", p.toFixed(4));
      setStage(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const designed = stage >= 1;
  const tr = "transition-all duration-700 ease-out";
  const box = (on: boolean, onCls: string) =>
    `${tr} ${on ? onCls : "border border-dashed border-ink-3/45 bg-transparent"}`;

  return (
    <section id="process" className="border-b border-line bg-paper px-6 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Process"
          title="From sketch to live store"
          lead="Scroll through it. This is roughly how every build goes, whether it ends up on Shopify, WordPress, or Next.js."
        />
      </div>

      <div ref={ref} className="relative h-[320vh]">
        <div className="sticky top-[57px] flex h-[calc(100vh-57px)] items-center">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            {/* Steps */}
            <div className="relative">
              <div className="absolute bottom-2 left-0 top-2 hidden w-px bg-line lg:block" aria-hidden>
                <div className="h-full w-full origin-top bg-brand" style={{ transform: "scaleY(var(--p, 0))" }} />
              </div>
              <ol className="hidden space-y-7 pl-7 lg:block">
                {STEPS.map((s, i) => (
                  <li key={s.title} className={`${tr} ${i === stage ? "opacity-100" : "opacity-35"}`}>
                    <p className="font-display text-[15px] font-semibold text-brand">0{i + 1}</p>
                    <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.02em]">{s.title}</h3>
                    <div className={`grid ${tr} ${i === stage ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <p className="overflow-hidden text-[14.5px] leading-[1.65] text-ink-2">
                        <span className="block pt-1.5">{s.body}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Mobile: just the current step */}
              <div key={stage} className="swap-in lg:hidden">
                <p className="font-display text-[14px] font-semibold text-brand">
                  0{stage + 1} / 0{STEPS.length}
                </p>
                <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em]">{STEPS[stage].title}</h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink-2">{STEPS[stage].body}</p>
              </div>
            </div>

            {/* The page being built */}
            <BrowserFrame url={STEPS[stage].url}>
              <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                <div className="absolute inset-0 flex flex-col">
                  {/* announcement bar */}
                  <div className={`${tr} h-[5%] ${designed ? "bg-lime" : "bg-transparent"}`} />
                  {/* nav */}
                  <div className="flex items-center justify-between px-[4%] py-[2.5%]">
                    <div className={`relative h-5 w-[10%] ${box(designed, "rounded-sm bg-ink")}`}>
                      <span className={`${tr} absolute inset-0 grid place-items-center font-display text-[10px] font-bold text-white ${designed ? "opacity-100" : "opacity-0"}`}>inh</span>
                    </div>
                    <div className="flex w-[45%] justify-between gap-2">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <div key={n} className={`h-1.5 flex-1 rounded ${tr} ${designed ? "bg-ink/70" : "bg-ink-3/25"}`} style={{ transitionDelay: `${n * 40}ms` }} />
                      ))}
                    </div>
                  </div>
                  {/* hero */}
                  <div className="grid flex-1 grid-cols-2 gap-[4%] px-[4%] pb-[3%]">
                    <div className="flex flex-col justify-center">
                      <div className="grid">
                        <div className={`${tr} space-y-2 [grid-area:1/1] ${designed ? "opacity-0" : "opacity-100"}`}>
                          <div className="h-3 w-[90%] rounded bg-ink-3/25" />
                          <div className="h-3 w-[70%] rounded bg-ink-3/25" />
                        </div>
                        <p
                          className={`${tr} font-display text-[clamp(14px,2.6vw,30px)] [grid-area:1/1] font-semibold leading-[1.02] tracking-[-0.03em] ${
                            designed ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                          }`}
                        >
                          Volume, without the weight.
                        </p>
                      </div>
                      <div className={`mt-[10%] h-1.5 w-[60%] rounded ${tr} ${designed ? "bg-ink-2/40" : "bg-ink-3/20"}`} />
                      <div className={`mt-1.5 h-1.5 w-[45%] rounded ${tr} ${designed ? "bg-ink-2/40" : "bg-ink-3/20"}`} />
                      <div className={`relative mt-[8%] h-6 w-[38%] rounded-sm ${box(designed, "bg-ink")}`}>
                        <span className={`${tr} absolute inset-0 grid place-items-center text-[9px] font-medium text-white ${designed ? "opacity-100" : "opacity-0"}`}>Shop the edit</span>
                      </div>
                    </div>
                    <div className={`relative rounded-sm ${box(designed, "bg-[#e9d3c7]")}`} style={{ transitionDelay: "120ms" }}>
                      {!designed && <Cross />}
                      <div className={`${tr} absolute bottom-0 left-1/2 h-[80%] w-[46%] -translate-x-1/2 rounded-t-full bg-[#c49a83] ${designed ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "300ms" }} />
                    </div>
                  </div>
                  {/* product cards */}
                  <div className="grid grid-cols-4 gap-[2.5%] px-[4%] pb-[4%]">
                    {["#f1e4dc", "#e6ddd3", "#efe0d8", "#e2d6cc"].map((c, n) => (
                      <div key={c} className={`relative aspect-[4/3] rounded-sm ${box(designed, "")}`} style={{ backgroundColor: designed ? c : undefined, transitionDelay: `${200 + n * 80}ms` }}>
                        {!designed && <Cross />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Build: code panel slides over the design */}
                <div
                  className={`absolute inset-y-0 right-0 w-[64%] bg-[#161b22] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    stage === 2 ? "translate-x-0" : "translate-x-[101%]"
                  }`}
                >
                  <pre className="h-full overflow-hidden p-[4%] font-mono text-[clamp(7px,0.85vw,11px)] leading-[1.7]">
                    {CODE.map(([k, line], n) => (
                      <div
                        key={n}
                        className={`transition-opacity duration-300 ${tone[k]} ${stage === 2 ? "opacity-100" : "opacity-0"}`}
                        style={{ transitionDelay: stage === 2 ? `${350 + n * 70}ms` : "0ms" }}
                      >
                        {line || " "}
                      </div>
                    ))}
                  </pre>
                </div>

                {/* Launch: the real site wipes in */}
                <div
                  className="absolute inset-0 transition-[clip-path] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ clipPath: stage === 3 ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
                >
                  <Image src={shotSrc("inh-hair")} alt="INH Hair homepage, live" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover object-top" />
                </div>
                <div
                  className={`absolute bottom-[5%] left-1/2 -translate-x-1/2 rounded-md bg-ink px-3 py-1.5 text-[11px] text-white shadow-lg transition-all duration-500 ${
                    stage === 3 ? "translate-y-0 opacity-100 delay-700" : "translate-y-3 opacity-0"
                  }`}
                >
                  Theme published
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
