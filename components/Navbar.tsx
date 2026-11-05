"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Website types", href: "#builds" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-display text-[13px] font-bold text-lime">
            VY
          </span>
          <span className="leading-tight">
            <span className="block text-[14.5px] font-semibold tracking-tight">
              Vicmar Yanson
            </span>
            <span className="hidden text-[12px] text-ink-3 sm:block">
              Web & Shopify Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13.5px] text-ink-2 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:text-ink hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-1.5 text-[13.5px] font-medium text-white transition-colors hover:bg-brand"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="-mr-1 p-1 text-ink-2 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Reading progress — CSS scroll-driven, no JS */}
      <div className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-brand" aria-hidden />

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[15px] text-ink-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] font-medium text-brand"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
