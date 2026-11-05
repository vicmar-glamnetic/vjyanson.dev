"use client";

import { useEffect, useRef, useState } from "react";
import SplitWords from "./SplitWords";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    title: "I read the code before I change it",
    body: "Most stores and sites I inherit have three years of other people's decisions in them. Some of those decisions are load-bearing. I spend the first day reading rather than refactoring.",
  },
  {
    title: "Sections and settings over hardcoded markup",
    body: "If a merchandiser has to message a developer to swap a banner, the build has failed. Anything that will change quarterly gets a schema setting.",
  },
  {
    title: "Version control, not the theme editor",
    body: "Work happens on a branch and goes out through a preview theme. Editing live code in the admin is how stores go down on a Friday afternoon.",
  },
  {
    title: "Apps and plugins are a cost",
    body: "Every Shopify app or WordPress plugin adds scripts to your site. Sometimes that trade is worth it. Often, fifteen lines of Liquid or PHP does the same job without the render-blocking bundle.",
  },
  {
    title: "I'd rather tell you it's a bad idea",
    body: "If a request will slow the store down or break at scale, you'll hear that from me before I build it — and then I'll build whichever version you decide on.",
  },
];

/**
 * Sticky heading on the left; on the right each principle sharpens into focus
 * as it scrolls through the middle of the screen (see .focus-scroll).
 */
export default function Approach() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <section id="approach" className="border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-[14px] font-medium text-brand">How I work</p>
            <h2 className="words mt-2.5 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.9rem]">
              <SplitWords text="A few things worth knowing before we start" />
            </h2>
            <p className="mt-4 max-w-sm text-[15.5px] leading-[1.65] text-ink-2">
              Same rules whether it&apos;s a Shopify store, a WordPress site, or something custom.
            </p>
          </Reveal>

          <div className="mt-10 hidden items-end gap-3 lg:flex" aria-hidden>
            <span key={active} className="words-anim font-display text-[5.5rem] font-semibold leading-[0.8] tracking-[-0.05em] text-brand">
              <span className="w"><span>0{active + 1}</span></span>
            </span>
            <span className="pb-1 font-display text-[1.4rem] font-semibold text-line-strong">/ 0{PRINCIPLES.length}</span>
          </div>
          <div className="mt-5 hidden h-[2px] w-48 bg-line lg:block" aria-hidden>
            <div
              className="h-full origin-left bg-brand transition-transform duration-500 ease-out"
              style={{ transform: `scaleX(${(active + 1) / PRINCIPLES.length})` }}
            />
          </div>
        </div>

        <ol ref={listRef} className="space-y-4 lg:space-y-6">
          {PRINCIPLES.map((item, i) => (
            <li
              key={item.title}
              data-i={i}
              className={`focus-scroll rounded-xl border p-7 transition-colors duration-500 sm:p-9 ${
                active === i ? "border-line-strong bg-paper" : "border-transparent"
              }`}
            >
              <p className="font-display text-[15px] font-semibold text-brand">0{i + 1}</p>
              <h3 className="mt-2 font-display text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[1.85rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xl text-[15.5px] leading-[1.7] text-ink-2">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
