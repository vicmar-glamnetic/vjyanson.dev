"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { SITES, domainOf, shotSrc, type Platform } from "@/lib/sites";

type Filter = "All" | Platform;
const FILTERS: Filter[] = ["All", "Shopify", "WordPress"];

// The four featured case studies are shown above, so skip them here.
const FEATURED = new Set(["inh-hair", "inh-professional", "247-pro-restoration", "modern-comfort-builders"]);
const REST = SITES.filter((s) => !s.shot || !FEATURED.has(s.shot));

const count = (f: Filter) =>
  f === "All" ? REST.length : REST.filter((s) => s.platform === f).length;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const sites = filter === "All" ? REST : REST.filter((s) => s.platform === filter);

  return (
    <div className="mt-28">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-5">
        <div>
          <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.02em]">
            Everything else
          </h3>
          <p className="mt-1 max-w-xl text-[14px] leading-[1.6] text-ink-3">
            Some built end to end, some as one developer on an agency team — ask
            me about any of them. Live links, so a few have since been redesigned
            by others.
          </p>
        </div>

        <div role="group" aria-label="Filter by platform" className="flex gap-5">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`border-b-2 pb-1 text-[14px] transition-colors ${
                filter === f ? "border-ink text-ink" : "border-transparent text-ink-3 hover:text-ink"
              }`}
            >
              {f}
              <span className="ml-1.5 font-mono text-[11px] opacity-60">{count(f)}</span>
            </button>
          ))}
        </div>
      </div>

      <ul key={filter} className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site, i) => (
          <Reveal key={site.url} as="li" delay={(i % 3) * 90}>
            <a href={site.url} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-canvas">
                {site.shot ? (
                  <Image
                    src={shotSrc(site.shot)}
                    alt={`${site.name} homepage`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className="grid h-full place-items-center font-display text-[2.2rem] font-semibold text-line-strong">
                    {site.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)}
                  </div>
                )}
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-[14.5px] font-medium transition-colors group-hover:text-brand">
                    {site.name}
                  </p>
                  <p className="truncate text-[12.5px] text-ink-3">
                    {site.sector} · {domainOf(site.url)}
                  </p>
                </div>
                <span className="mt-0.5 shrink-0 text-[12.5px] text-ink-3">{site.platform}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
