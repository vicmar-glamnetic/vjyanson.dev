export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-[13px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Vicmar Joseph Yanson · Bacolod City,
          Philippines
        </p>
        <p>
          Built with Next.js and Tailwind.{" "}
          <a
            href="#top"
            className="underline decoration-line-strong underline-offset-[3px] transition-colors hover:text-brand"
          >
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
