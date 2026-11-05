"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import BrowserFrame from "./BrowserFrame";
import { shotSrc } from "@/lib/sites";

const WINDOWS = [
  { slug: "inh-hair", url: "inhhair.com", pos: "left-0 top-0 w-[78%] z-10 -rotate-[2.5deg]", d: "0.35s", depth: 10 },
  { slug: "247-pro-restoration", url: "247prorestoration.com", pos: "right-0 top-[22%] w-[72%] z-20 rotate-[2deg]", d: "0.6s", depth: 20 },
  { slug: "modern-comfort-builders", url: "moderncomfortbuilders.com", pos: "left-[8%] top-[52%] w-[70%] z-30 -rotate-1", d: "0.85s", depth: 32 },
];

/** Grey placeholder layout shown while the "page" loads. */
function Skeleton() {
  return (
    <div className="absolute inset-0 space-y-[6%] bg-paper p-[5%]" aria-hidden>
      <div className="flex justify-between">
        <div className="shimmer h-2 w-[14%] rounded" />
        <div className="shimmer h-2 w-[40%] rounded" />
      </div>
      <div className="flex gap-[5%]">
        <div className="flex-1 space-y-2 pt-[4%]">
          <div className="shimmer h-3 w-[90%] rounded" />
          <div className="shimmer h-3 w-[70%] rounded" />
          <div className="shimmer mt-3 h-2 w-[55%] rounded" />
          <div className="shimmer mt-4 h-4 w-[30%] rounded" />
        </div>
        <div className="shimmer aspect-[4/3] w-[45%] rounded" />
      </div>
    </div>
  );
}

/**
 * Three overlapping browser windows that load like real pages, then drift
 * slightly with the pointer at different depths.
 */
export default function HeroStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="relative mx-auto aspect-[1/0.92] w-full max-w-[560px]">
      {WINDOWS.map((w, i) => (
        <div
          key={w.slug}
          className={`window-in absolute ${w.pos}`}
          style={{ "--d": w.d } as React.CSSProperties}
        >
          <div
            className="transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(calc(var(--mx, 0) * ${-w.depth}px), calc(var(--my, 0) * ${-w.depth}px), 0)`,
            }}
          >
            <BrowserFrame url={w.url}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Skeleton />
                <Image
                  src={shotSrc(w.slug)}
                  alt={`${w.url} homepage`}
                  fill
                  sizes="(min-width: 1024px) 420px, 75vw"
                  className="load-in object-cover object-top"
                  preload={i === 0}
                />
                <span className="load-bar" aria-hidden />
              </div>
            </BrowserFrame>
          </div>
        </div>
      ))}
    </div>
  );
}
