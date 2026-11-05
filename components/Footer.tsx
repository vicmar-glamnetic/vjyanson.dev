import { LogoMark } from "./Logo";
import Reveal from "./Reveal";
import SplitWords from "./SplitWords";

const LINKS = [
  { label: "Email", href: "mailto:vicmar.yanson@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vicmar-yanson/" },
  { label: "WhatsApp", href: "https://wa.me/639196147785" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex items-center gap-5">
            <LogoMark size={72} draw="view" className="text-white" />
            <p className="words font-display text-[2.2rem] font-semibold leading-none tracking-[-0.035em] sm:text-[3.4rem]">
              <SplitWords text="Vicmar Yanson" />
            </p>
          </div>
          <ul className="flex gap-6 text-[14px]">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-white/65 underline decoration-white/20 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col gap-2 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vicmar Joseph Yanson · Bacolod City, Philippines</p>
          <p>
            Designed and built by me in Next.js.{" "}
            <a href="#top" className="text-white/70 underline decoration-white/25 underline-offset-[3px] transition-colors hover:text-lime">
              Back to top ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
