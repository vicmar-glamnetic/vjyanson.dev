/** Minimal browser chrome around a screenshot or any other content. */
export default function BrowserFrame({
  url,
  children,
  dark = false,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)] ${
        dark ? "border-white/12 bg-[#202020]" : "border-line-strong bg-paper"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 border-b px-3.5 py-2.5 ${
          dark ? "border-white/10" : "border-line bg-canvas"
        }`}
      >
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span
          className={`min-w-0 flex-1 truncate rounded-md px-2.5 py-1 text-center font-mono text-[11px] ${
            dark ? "bg-white/8 text-white/55" : "bg-paper text-ink-3"
          }`}
        >
          {url}
        </span>
        <span className="w-9" aria-hidden />
      </div>
      {children}
    </div>
  );
}
