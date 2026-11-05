"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import LocalTime from "./LocalTime";

const LINKS = [
  { label: "Website types", id: "builds" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Experience", id: "experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav link for whichever section sits under the header.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...LINKS.map((l) => l.id), "stack", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/92 backdrop-blur-md"
          : "border-b border-transparent bg-paper"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
        <a href="#top" aria-label="Vicmar Yanson — back to top">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {LINKS.map((link) => {
              const on = current === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`relative py-1 text-[14px] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-brand after:transition-transform after:duration-300 ${
                      on
                        ? "text-ink after:scale-x-100"
                        : "text-ink-2 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <span className="hidden h-5 w-px bg-line-strong lg:block" aria-hidden />

          <p className="hidden text-[13px] text-ink-3 lg:block">
            Bacolod <LocalTime className="text-ink-2" />
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-brand"
          >
            Contact
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="-mr-1 p-1 text-ink md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <div className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-brand" aria-hidden />

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 pb-6 pt-2">
            {LINKS.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="fade-up flex items-baseline justify-between border-b border-line py-4 font-display text-[22px] font-semibold tracking-tight"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
                <span className="text-[13px] font-normal text-ink-3">0{i + 1}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-md bg-ink py-3 text-center text-[15px] font-medium text-white"
            >
              Contact
            </a>
            <p className="mt-4 text-center text-[13px] text-ink-3">
              It&apos;s <LocalTime /> in Bacolod City
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
