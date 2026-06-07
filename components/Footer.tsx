export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <span className="gradient-text font-semibold text-sm">vjyanson.dev</span>
          <span className="text-white/20">·</span>
          <span>Shopify Developer Portfolio</span>
        </div>
        <span>
          Built with{" "}
          <span className="text-white/70">Next.js</span>
          {" & "}
          <span className="text-white/70">Framer Motion</span>
        </span>
        <p>© {new Date().getFullYear()} Vicmar Joseph Yanson</p>
      </div>
    </footer>
  );
}
