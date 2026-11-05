"use client";

import { useEffect, useState } from "react";
import LocalTime from "./LocalTime";
import Reveal from "./Reveal";
import SplitWords from "./SplitWords";

const EMAIL = "vicmar.yanson@gmail.com";

const DETAILS = [
  { label: "WhatsApp", value: "+63 919 614 7785", href: "https://wa.me/639196147785" },
  { label: "LinkedIn", value: "in/vicmar-yanson", href: "https://www.linkedin.com/in/vicmar-yanson/" },
  { label: "Based in", value: "Bacolod City, Philippines", href: null },
  { label: "Replies", value: "Within a working day or two", href: null },
];

const PROJECT_TYPES = [
  "Online store (Shopify)",
  "Shopify Plus / multi-store",
  "Service business site",
  "Brand & portfolio site",
  "Custom site or web app",
  "Fix or speed up an existing site",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: PROJECT_TYPES[0], message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  // "Start a project like this" in the website-types section pre-selects the type.
  useEffect(() => {
    const onPick = (e: Event) => {
      const type = (e as CustomEvent<string>).detail;
      if (PROJECT_TYPES.includes(type)) setForm((f) => ({ ...f, type }));
    };
    window.addEventListener("project-type", onPick);
    return () => window.removeEventListener("project-type", onPick);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Project type: ${form.type}\n\n${form.message}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", type: PROJECT_TYPES[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-md border border-line-strong bg-paper px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-3/70 outline-none transition-[border-color,box-shadow] focus:border-brand focus:shadow-[0_0_0_3px_rgba(0,128,96,0.15)]";
  const label = "mb-1.5 block text-[13.5px] font-medium text-ink-2";

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-dark px-6 py-20 text-white sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[14px] font-medium text-lime">Contact</p>
          <h2 className="words mt-3 max-w-3xl font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[4rem]">
            <SplitWords text="Have a site in mind?" />
            <br />
            <span className="text-white/45">
              <SplitWords text="Let's talk it through." start={5} />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-white/12 py-6">
          <a
            href={`mailto:${EMAIL}`}
            className="font-display text-[1.45rem] font-semibold tracking-[-0.02em] underline decoration-white/25 decoration-2 underline-offset-[6px] transition-colors hover:decoration-lime sm:text-[2.1rem]"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-md border border-white/25 px-3 py-1.5 text-[13px] text-white/80 transition-colors hover:border-lime hover:text-lime"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="max-w-sm text-[16px] leading-[1.65] text-white/75">
              A new Shopify store, a WordPress site for your business, a custom
              build, or an existing site that got slow. Send me the details and
              I&apos;ll tell you honestly whether I&apos;m the right person for it.
            </p>

            <dl className="mt-8">
              {DETAILS.map((d) => (
                <div key={d.label} className="grid grid-cols-[6rem_1fr] items-baseline gap-3 border-b border-white/10 py-3.5 text-[14.5px]">
                  <dt className="text-white/50">{d.label}</dt>
                  <dd>
                    {d.href ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-white/25 underline-offset-[3px] transition-colors hover:decoration-lime"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-white/85">{d.value}</span>
                    )}
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-[6rem_1fr] items-baseline gap-3 py-3.5 text-[14.5px]">
                <dt className="text-white/50">Local time</dt>
                <dd className="text-white/85">
                  <LocalTime /> <span className="text-white/45">· GMT+8, overlaps US afternoons &amp; AU mornings</span>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl bg-paper p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8">
              {status === "sent" ? (
                <div className="py-10 text-center">
                  <p className="font-display text-[1.6rem] font-semibold tracking-tight">Message sent</p>
                  <p className="mx-auto mt-2 max-w-sm text-[15px] leading-[1.65] text-ink-2">
                    It&apos;s in my inbox. I&apos;ll reply to the address you gave me,
                    usually within a working day or two.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[14px] font-medium text-brand underline underline-offset-[3px]"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="font-display text-[1.35rem] font-semibold tracking-tight">Start a project</p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={label}>Name</label>
                      <input id="name" name="name" required autoComplete="name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                    </div>
                    <div>
                      <label htmlFor="email" className={label}>Email</label>
                      <input id="email" name="email" type="email" required autoComplete="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className={label}>What kind of site?</label>
                    <div className="relative">
                      <select id="type" name="type" value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className={`${field} appearance-none pr-10`}>
                        {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                      </select>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-3">
                        <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={label}>Tell me about it</label>
                    <textarea id="message" name="message" required rows={6}
                      placeholder="Your current site (if any), what needs doing, and roughly when."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${field} resize-y`} />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-[14px] text-[#b42318]">
                      That didn&apos;t send — something went wrong on my end. Please email{" "}
                      <a href={`mailto:${EMAIL}`} className="underline underline-offset-[3px]">{EMAIL}</a>{" "}
                      directly.
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-[13px] text-ink-3">No newsletters, no follow-up sequences.</p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send message"}
                      {status !== "sending" && <span className="transition-transform group-hover:translate-x-0.5">→</span>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
