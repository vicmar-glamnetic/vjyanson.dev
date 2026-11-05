"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";
import SectionHeading from "./SectionHeading";
import { shotSrc } from "@/lib/sites";

type WebsiteType = {
  key: string;
  title: string;
  platform: string;
  summary: string;
  bestFor: string;
  includes: string[];
  bring: string;
  example: { name: string; url: string; slug?: string };
};

const TYPES: WebsiteType[] = [
  {
    key: "store",
    title: "Online store",
    platform: "Shopify",
    summary:
      "A store your team can run without a developer on call — products, collections, cart, and the email and review apps wired in properly.",
    bestFor: "Brands selling physical products direct to customers.",
    includes: ["Custom OS 2.0 theme", "Product & collection templates", "Cart upsells", "Reviews, email & analytics"],
    bring: "Your products (or a spreadsheet of them), brand assets, and two or three stores you like.",
    example: { name: "Glamnetic", url: "glamnetic.com", slug: "glamnetic" },
  },
  {
    key: "plus",
    title: "Shopify Plus & multi-store",
    platform: "Shopify Plus",
    summary:
      "For brands that have outgrown the standard setup: several storefronts on one theme, pricing rules the native engine can't express, and a checkout that needs custom logic.",
    bestFor: "Higher-volume brands, wholesale or pro channels, international stores.",
    includes: ["Shared theme across stores", "Gated / trade catalogues", "Functions & Scripts", "Checkout extensibility"],
    bring: "Your current store, the rules you're fighting with, and who edits what.",
    example: { name: "INH Professional", url: "inhprofessional.com", slug: "inh-professional" },
  },
  {
    key: "leads",
    title: "Service business site",
    platform: "WordPress",
    summary:
      "Built around one goal: get the phone to ring. Clear service pages, a call button that's always in reach, quote forms, and a structure search engines understand.",
    bestFor: "Contractors, restoration, clinics, and local services.",
    includes: ["Service & area pages", "Click-to-call & quote forms", "Reviews & certifications", "Local SEO structure"],
    bring: "Your list of services, service areas, photos of real jobs, and reviews.",
    example: { name: "247 Pro Restoration", url: "247prorestoration.com", slug: "247-pro-restoration" },
  },
  {
    key: "brand",
    title: "Brand & portfolio site",
    platform: "WordPress",
    summary:
      "A site that sells the quality of your work with big photography, a clear process, and project galleries you can add to yourself after launch.",
    bestFor: "Builders, studios, agencies, and anyone whose work is visual.",
    includes: ["Project galleries", "Process & about pages", "Editable page builder blocks", "Enquiry forms"],
    bring: "Your best project photos, a short story of how you work, and your logo.",
    example: { name: "Modern Comfort Builders", url: "moderncomfortbuilders.com", slug: "modern-comfort-builders" },
  },
  {
    key: "custom",
    title: "Custom site or web app",
    platform: "React / Next.js",
    summary:
      "When a template or CMS gets in the way: landing pages for campaigns, internal tools, dashboards, or a fast marketing site with no plugins to update.",
    bestFor: "Campaigns, tools, startups, and developer-grade marketing sites.",
    includes: ["Next.js + React", "Tailwind CSS", "APIs & forms", "Hosted on Vercel"],
    bring: "What the thing needs to do, who uses it, and any data it talks to.",
    example: { name: "This website", url: "vjyanson.com" },
  },
];

const DURATION = 8000;

function CodePreview() {
  const k = "text-[#ff7b72]";
  const f = "text-[#d2a8ff]";
  const s = "text-[#a5d6ff]";
  const t = "text-[#7ee787]";
  const d = "text-white/40";
  return (
    <pre className="h-full overflow-hidden px-5 py-5 font-mono text-[12px] leading-[1.8] text-white/85">
      <code>
        <span className={d}>{"// app/api/contact/route.ts"}</span>
        {"\n"}
        <span className={k}>import</span> {"{ Resend }"} <span className={k}>from</span>{" "}
        <span className={s}>&quot;resend&quot;</span>;{"\n\n"}
        <span className={k}>export async function</span> <span className={f}>POST</span>(req:{" "}
        <span className={t}>Request</span>) {"{"}
        {"\n  "}
        <span className={k}>const</span> {"{ name, email, message }"} = <span className={k}>await</span> req.
        <span className={f}>json</span>();{"\n  "}
        <span className={k}>if</span> (!email?.<span className={f}>includes</span>(
        <span className={s}>&quot;@&quot;</span>)){"\n    "}
        <span className={k}>return</span> Response.<span className={f}>json</span>({"{ ok: false }"}, {"{ status: 400 }"});
        {"\n\n  "}
        <span className={k}>await</span> resend.emails.<span className={f}>send</span>({"{"}
        {"\n    "}to: <span className={s}>&quot;vicmar.yanson@gmail.com&quot;</span>,{"\n    "}
        subject: <span className={s}>{"`New project from ${name}`"}</span>,{"\n    "}replyTo: email,{" "}
        text: message,{"\n  "}
        {"});"}
        {"\n  "}
        <span className={k}>return</span> Response.<span className={f}>json</span>({"{ ok: true }"});{"\n"}
        {"}"}
      </code>
    </pre>
  );
}

export default function WebsiteTypes() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % TYPES.length), DURATION);
    return () => clearTimeout(id);
  }, [active, auto, inView]);

  const type = TYPES[active];
  const choose = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  return (
    <section
      id="builds"
      ref={ref}
      className="border-b border-line bg-canvas px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Website types"
          title="Which kind of site do you need?"
          lead="Most projects I take on are one of these five. Use this as a guide — pick the closest one, and the list under it is roughly what you should expect and what to have ready."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div role="tablist" aria-label="Website types" className="space-y-2">
            {TYPES.map((t, i) => {
              const on = i === active;
              return (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls="type-panel"
                  onClick={() => choose(i)}
                  className={`relative block w-full overflow-hidden rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                    on
                      ? "border-ink bg-paper shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)]"
                      : "border-transparent hover:border-line-strong hover:bg-paper/60"
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[12px] text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[19px] font-semibold tracking-tight">
                        {t.title}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-ink-3">{t.platform}</span>
                  </span>
                  <span
                    className={`grid transition-[grid-template-rows] duration-500 ${
                      on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block pl-8 pt-2 text-[14px] leading-[1.6] text-ink-2">
                        {t.summary}
                      </span>
                    </span>
                  </span>
                  {on && auto && inView && (
                    <span
                      key={active}
                      className="tab-progress absolute inset-x-0 bottom-0 h-0.5 bg-brand"
                      style={{ "--dur": `${DURATION}ms` } as React.CSSProperties}
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div id="type-panel" role="tabpanel" key={type.key} className="swap-in min-w-0">
            <a
              href={type.example.slug ? `https://${type.example.url}` : "#top"}
              target={type.example.slug ? "_blank" : undefined}
              rel="noreferrer"
              className="group block"
            >
              <BrowserFrame url={type.example.url} dark={!type.example.slug}>
                <div className="page-scroll relative h-(--frame-h) overflow-hidden [--frame-h:260px] sm:[--frame-h:380px]"
                  data-auto={type.example.slug ? "" : undefined}
                  style={{ "--dur": `${DURATION - 1500}ms` } as React.CSSProperties}
                >
                  {type.example.slug ? (
                    <Image
                      src={shotSrc(type.example.slug, true)}
                      alt={`${type.example.name} full page`}
                      width={900}
                      height={3000}
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="w-full"
                    />
                  ) : (
                    <CodePreview />
                  )}
                </div>
              </BrowserFrame>
            </a>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">Best for</p>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink">{type.bestFor}</p>
                <p className="mt-4 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">Have ready</p>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-2">{type.bring}</p>
              </div>
              <div>
                <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">Usually includes</p>
                <ul className="mt-2 space-y-1.5">
                  {type.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[14px] text-ink-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-brand">
                        <path d="M3 7.5l2.5 2.5L11 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] text-ink-3">
                  Example: <span className="font-medium text-ink">{type.example.name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
