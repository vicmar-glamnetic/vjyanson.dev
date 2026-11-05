"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";
import SectionHeading from "./SectionHeading";
import SplitWords from "./SplitWords";
import { shotSrc } from "@/lib/sites";

type WebsiteType = {
  key: string;
  title: string;
  platform: string;
  /** Matches an option in the contact form's "What kind of site?" select. */
  contactType: string;
  summary: string;
  bestFor: string;
  includes: string[];
  bring: string;
  example: { name: string; url: string; slug?: string; mobile: string };
};

const TYPES: WebsiteType[] = [
  {
    key: "store",
    title: "Online store",
    platform: "Shopify",
    contactType: "Online store (Shopify)",
    summary:
      "A store your team can run without a developer on call — products, collections, cart, and the email and review apps wired in properly.",
    bestFor: "Brands selling physical products direct to customers.",
    includes: ["Custom OS 2.0 theme", "Product & collection templates", "Cart upsells", "Reviews, email & analytics"],
    bring: "Your products (or a spreadsheet of them), brand assets, and two or three stores you like.",
    example: { name: "Glamnetic", url: "glamnetic.com", slug: "glamnetic", mobile: "glamnetic" },
  },
  {
    key: "plus",
    title: "Shopify Plus & multi-store",
    platform: "Shopify Plus",
    contactType: "Shopify Plus / multi-store",
    summary:
      "For brands that have outgrown the standard setup: several storefronts on one theme, pricing rules the native engine can't express, and a checkout that needs custom logic.",
    bestFor: "Higher-volume brands, wholesale or pro channels, international stores.",
    includes: ["Shared theme across stores", "Gated / trade catalogues", "Functions & Scripts", "Checkout extensibility"],
    bring: "Your current store, the rules you're fighting with, and who edits what.",
    example: { name: "INH Professional", url: "inhprofessional.com", slug: "inh-professional", mobile: "inh-professional" },
  },
  {
    key: "leads",
    title: "Service business site",
    platform: "WordPress",
    contactType: "Service business site",
    summary:
      "Built around one goal: get the phone to ring. Clear service pages, a call button that's always in reach, quote forms, and a structure search engines understand.",
    bestFor: "Contractors, restoration, clinics, and local services.",
    includes: ["Service & area pages", "Click-to-call & quote forms", "Reviews & certifications", "Local SEO structure"],
    bring: "Your list of services, service areas, photos of real jobs, and reviews.",
    example: { name: "247 Pro Restoration", url: "247prorestoration.com", slug: "247-pro-restoration", mobile: "247-pro-restoration" },
  },
  {
    key: "brand",
    title: "Brand & portfolio site",
    platform: "WordPress",
    contactType: "Brand & portfolio site",
    summary:
      "A site that sells the quality of your work with big photography, a clear process, and project galleries you can add to yourself after launch.",
    bestFor: "Builders, studios, agencies, and anyone whose work is visual.",
    includes: ["Project galleries", "Process & about pages", "Editable page builder blocks", "Enquiry forms"],
    bring: "Your best project photos, a short story of how you work, and your logo.",
    example: { name: "Modern Comfort Builders", url: "moderncomfortbuilders.com", slug: "modern-comfort-builders", mobile: "modern-comfort-builders" },
  },
  {
    key: "custom",
    title: "Custom site or web app",
    platform: "React / Next.js",
    contactType: "Custom site or web app",
    summary:
      "When a template or CMS gets in the way: landing pages for campaigns, internal tools, dashboards, or a fast marketing site with no plugins to update.",
    bestFor: "Campaigns, tools, startups, and developer-grade marketing sites.",
    includes: ["Next.js + React", "Tailwind CSS", "APIs & forms", "Hosted on Vercel"],
    bring: "What the thing needs to do, who uses it, and any data it talks to.",
    example: { name: "This website", url: "vjyanson.com", mobile: "vjyanson" },
  },
];

const DURATION = 9000;

function CodePreview() {
  const k = "text-[#ff7b72]";
  const f = "text-[#d2a8ff]";
  const s = "text-[#a5d6ff]";
  const t = "text-[#7ee787]";
  const d = "text-white/40";
  const lines: React.ReactNode[] = [
    <span key="a" className={d}>{"// app/api/contact/route.ts"}</span>,
    <><span className={k}>import</span> {"{ Resend }"} <span className={k}>from</span> <span className={s}>&quot;resend&quot;</span>;</>,
    "",
    <><span className={k}>export async function</span> <span className={f}>POST</span>(req: <span className={t}>Request</span>) {"{"}</>,
    <>{"  "}<span className={k}>const</span> {"{ name, email, message }"} = <span className={k}>await</span> req.<span className={f}>json</span>();</>,
    <>{"  "}<span className={k}>if</span> (!name || !email) <span className={k}>return</span> Response.<span className={f}>json</span>({"{}"}, {"{ status: 400 }"});</>,
    "",
    <>{"  "}<span className={k}>await</span> resend.emails.<span className={f}>send</span>({"{"}</>,
    <>{"    "}to: <span className={s}>&quot;vicmar.yanson@gmail.com&quot;</span>,</>,
    <>{"    "}subject: <span className={s}>{"`New project from ${name}`"}</span>,</>,
    <>{"    "}replyTo: email, text: message,</>,
    "  });",
    <>{"  "}<span className={k}>return</span> Response.<span className={f}>json</span>({"{ ok: true }"});</>,
    "}",
  ];
  return (
    <pre className="h-full overflow-hidden px-5 py-5 font-mono text-[11.5px] leading-[1.85] text-white/85">
      {lines.map((line, i) => (
        <div key={i} className="fade-up" style={{ animationDelay: `${250 + i * 60}ms` }}>
          {line || " "}
        </div>
      ))}
    </pre>
  );
}

export default function WebsiteTypes() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = auto && inView && !paused;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % TYPES.length), DURATION);
    return () => clearTimeout(id);
  }, [active, running]);

  // Keep the active tab visible in the horizontally scrolling tab bar on mobile.
  useEffect(() => {
    const bar = tabsRef.current;
    const tab = bar?.children[active] as HTMLElement | undefined;
    if (bar && tab && bar.scrollWidth > bar.clientWidth) {
      const offset = tab.getBoundingClientRect().left - bar.getBoundingClientRect().left;
      bar.scrollTo({ left: bar.scrollLeft + offset - 24, behavior: "smooth" });
    }
  }, [active]);

  const choose = (i: number) => {
    setAuto(false);
    setActive((i + TYPES.length) % TYPES.length);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") choose(active + 1);
    if (e.key === "ArrowLeft") choose(active - 1);
  };

  const type = TYPES[active];
  const pickForContact = () => {
    window.dispatchEvent(new CustomEvent("project-type", { detail: type.contactType }));
  };

  return (
    <section id="builds" ref={ref} className="overflow-hidden border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Website types"
          title="Which kind of site do you need?"
          lead="Most projects I take on are one of these five. Use it as a guide — pick the closest one to see what it usually includes, what to have ready, and a live example."
        />

        {/* Tab bar */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Website types"
          onKeyDown={onKeyDown}
          className="-mx-6 mt-12 flex snap-x gap-px overflow-x-auto px-6 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
        >
          {TYPES.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.key}
                role="tab"
                type="button"
                id={`tab-${t.key}`}
                aria-selected={on}
                aria-controls="type-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => choose(i)}
                className={`group relative min-w-[11.5rem] shrink-0 snap-start pb-4 pr-4 pt-5 text-left transition-colors lg:min-w-0 ${
                  on ? "text-ink" : "text-ink-3 hover:text-ink"
                }`}
              >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-line-strong" aria-hidden />
                <span
                  key={on && running ? `run-${active}` : `idle-${on}`}
                  className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-ink ${
                    on ? (running ? "tab-progress" : "") : "scale-x-0 transition-transform group-hover:scale-x-100 group-hover:bg-ink-3"
                  }`}
                  style={on && running ? ({ "--dur": `${DURATION}ms` } as React.CSSProperties) : undefined}
                  aria-hidden
                />
                <span className={`block font-display text-[13px] font-semibold transition-colors ${on ? "text-brand" : ""}`}>
                  0{i + 1}
                </span>
                <span className="mt-1 block font-display text-[17px] font-semibold leading-tight tracking-tight">
                  {t.title}
                </span>
                <span className="mt-1 block text-[12.5px] text-ink-3">{t.platform}</span>
              </button>
            );
          })}
        </div>

        {/* Stage */}
        <div
          id="type-panel"
          role="tabpanel"
          aria-labelledby={`tab-${type.key}`}
          key={type.key}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-10 grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14"
        >
          <div>
            <div className="flex items-baseline gap-4">
              <span className="device-in font-display text-[4.5rem] font-semibold leading-none tracking-[-0.05em] text-line-strong sm:text-[6rem]">
                0{active + 1}
              </span>
              <span className="fade-up text-[13px] text-ink-3" style={{ animationDelay: "0.2s" }}>
                {type.platform}
              </span>
            </div>
            <h3 className="words-anim mt-2 font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[2.6rem]">
              <SplitWords text={type.title} />
            </h3>
            <p className="fade-up mt-4 max-w-lg text-[16px] leading-[1.65] text-ink-2" style={{ animationDelay: "0.15s" }}>
              {type.summary}
            </p>

            <div className="mt-8 grid gap-7 border-t border-line pt-7 sm:grid-cols-2">
              <div className="fade-up" style={{ animationDelay: "0.25s" }}>
                <p className="text-[13px] font-semibold text-ink">Best for</p>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-2">{type.bestFor}</p>
                <p className="mt-5 text-[13px] font-semibold text-ink">Have ready</p>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-2">{type.bring}</p>
              </div>
              <div>
                <p className="fade-up text-[13px] font-semibold text-ink" style={{ animationDelay: "0.3s" }}>
                  Usually includes
                </p>
                <ul className="mt-2.5 space-y-2">
                  {type.includes.map((item, n) => {
                    const dl = `${0.4 + n * 0.12}s`;
                    return (
                      <li key={item} className="fade-up flex items-center gap-2.5 text-[14.5px] text-ink-2" style={{ animationDelay: dl }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="check-draw shrink-0 text-brand" style={{ "--dl": `${0.4 + n * 0.12 + 0.2}s` } as React.CSSProperties}>
                          <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: "0.85s" }}>
              <a
                href="#contact"
                onClick={pickForContact}
                className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand"
              >
                Start a project like this
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              {type.example.slug && (
                <a
                  href={`https://${type.example.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] text-ink-2 underline decoration-line-strong underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                >
                  See {type.example.name} live ↗
                </a>
              )}
            </div>
          </div>

          {/* Desktop + phone mockups, both panning down the real page */}
          <div className="relative pb-10 pr-[14%] sm:pb-14">
            <div className="device-in" style={{ "--dl": "0.05s" } as React.CSSProperties}>
              <BrowserFrame url={type.example.url} dark={!type.example.slug}>
                <div
                  className="page-scroll relative h-(--frame-h) overflow-hidden [--frame-h:230px] sm:[--frame-h:340px] lg:[--frame-h:380px]"
                  data-auto={type.example.slug ? "" : undefined}
                  style={{ "--dur": `${DURATION - 2000}ms` } as React.CSSProperties}
                >
                  {type.example.slug ? (
                    <Image
                      src={shotSrc(type.example.slug, true)}
                      alt={`${type.example.name} desktop homepage`}
                      width={900}
                      height={3000}
                      sizes="(min-width: 1024px) 560px, 90vw"
                      className="w-full"
                    />
                  ) : (
                    <CodePreview />
                  )}
                </div>
              </BrowserFrame>
            </div>

            <div
              className="device-in absolute bottom-0 right-0 w-[30%] min-w-[110px] max-w-[180px]"
              style={{ "--dl": "0.3s" } as React.CSSProperties}
            >
              <div className="rounded-[1.6rem] bg-ink p-[5px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]">
                <div
                  className="page-scroll relative aspect-[9/19] overflow-hidden rounded-[1.3rem] bg-paper"
                  data-auto=""
                  ref={(el) => {
                    if (el) el.style.setProperty("--frame-h", `${el.clientHeight}px`);
                  }}
                  style={{ "--dur": `${DURATION - 2000}ms` } as React.CSSProperties}
                >
                  <Image
                    src={shotSrc(`${type.example.mobile}-mobile`)}
                    alt={`${type.example.name} on mobile`}
                    width={360}
                    height={2400}
                    sizes="180px"
                    className="w-full"
                  />
                  <span className="absolute left-1/2 top-1.5 h-[14px] w-[34%] -translate-x-1/2 rounded-full bg-ink" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
