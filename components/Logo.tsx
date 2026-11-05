/**
 * VY monogram: a V whose vertex drops a stem, so the same shape reads as V and Y.
 * The stem is the brand green — the "Y" is the part that holds things up.
 */
export function LogoMark({
  size = 28,
  className = "",
  draw,
}: {
  size?: number;
  className?: string;
  /** "load" draws on mount; "view" draws when a parent Reveal comes into view. */
  draw?: "load" | "view";
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={`${draw ? "logo-draw" : ""} ${draw === "load" ? "on-load" : ""} ${className}`}
    >
      <path pathLength={1} d="M5 5.5L16 19L27 5.5" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="miter" />
      <path pathLength={1} d="M16 18v9" stroke="var(--color-brand)" strokeWidth="3.4" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark draw="load" className="text-ink" />
      <span className="leading-tight">
        <span className="block font-display text-[16px] font-semibold tracking-[-0.02em]">
          Vicmar Yanson
        </span>
        <span className="hidden text-[12px] text-ink-3 sm:block">Web &amp; Shopify Developer</span>
      </span>
    </span>
  );
}
