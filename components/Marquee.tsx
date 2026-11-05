import Image from "next/image";
import { SITES, domainOf, shotSrc, type Site } from "@/lib/sites";

const withShots = SITES.filter((s): s is Site & { shot: string } => Boolean(s.shot));
const half = Math.ceil(withShots.length / 2);
const ROWS = [withShots.slice(0, half), withShots.slice(half)];

function Row({ sites, reverse }: { sites: typeof withShots; reverse?: boolean }) {
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...sites, ...sites];
  return (
    <div className="marquee overflow-hidden">
      <ul
        className="marquee-track gap-4 py-2"
        data-reverse={reverse || undefined}
        style={{ "--speed": `${sites.length * 5}s` } as React.CSSProperties}
      >
        {loop.map((site, i) => (
          <li key={`${site.shot}-${i}`} aria-hidden={i >= sites.length || undefined}>
            <a
              href={site.url}
              target="_blank"
              rel="noreferrer"
              tabIndex={i >= sites.length ? -1 : undefined}
              className="group block w-[260px] overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:w-[300px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={shotSrc(site.shot)}
                  alt={`${site.name} homepage`}
                  fill
                  sizes="300px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-3 py-2">
                <span className="truncate text-[12.5px] text-white/80">{site.name}</span>
                <span
                  className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] ${
                    site.platform === "Shopify" ? "bg-lime/20 text-lime" : "bg-wp/30 text-[#9cc7ee]"
                  }`}
                >
                  {site.platform}
                </span>
              </div>
              <span className="sr-only">{domainOf(site.url)}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Sites I've worked on" className="overflow-hidden bg-ink py-10">
      <div className="mx-auto mb-6 flex max-w-6xl items-baseline justify-between gap-4 px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-lime">
          Live on the web right now
        </p>
        <p className="hidden text-[13px] text-white/45 sm:block">Hover to pause · click to visit</p>
      </div>
      <div className="space-y-4">
        <Row sites={ROWS[0]} />
        <Row sites={ROWS[1]} reverse />
      </div>
    </section>
  );
}
