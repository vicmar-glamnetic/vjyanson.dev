"use client";

import { useState } from "react";

const DETAILS = [
  {
    label: "Email",
    value: "vicmar.yanson@gmail.com",
    href: "mailto:vicmar.yanson@gmail.com",
  },
  { label: "WhatsApp", value: "+63 919 614 7785", href: "https://wa.me/639196147785" },
  {
    label: "LinkedIn",
    value: "in/vicmar-yanson",
    href: "https://www.linkedin.com/in/vicmar-yanson/",
  },
  { label: "Based in", value: "Bacolod City, Philippines (GMT+8)", href: null },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-md border border-white/15 bg-white/6 px-3 py-2.5 text-[14.5px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-lime/70 focus:bg-white/10";

  return (
    <section id="contact" className="bg-brand-dark px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-lime">
              Contact
            </p>
            <h2 className="mt-2.5 text-[1.75rem] font-semibold tracking-[-0.02em] sm:text-[2rem]">
              Tell me about the store
            </h2>
            <p className="mt-3 max-w-md text-[15.5px] leading-[1.65] text-white/70">
              A theme build, a rebrand, a store that got slow, or a job you
              cannot get an app to do properly. Send me the details and I&apos;ll
              tell you honestly whether it&apos;s something I should take on.
            </p>
            <p className="mt-3 max-w-md text-[14px] leading-[1.65] text-white/55">
              I read everything and reply within a working day or two. I&apos;m
              on Philippine time, which usually means an overlap with US
              afternoons and Australian mornings.
            </p>

            <dl className="mt-9 space-y-3.5">
              {DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 border-b border-white/10 pb-3.5 text-[14px]"
                >
                  <dt className="text-white/50">{detail.label}</dt>
                  <dd>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="underline decoration-white/25 underline-offset-[3px] transition-colors hover:decoration-lime"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-white/85">{detail.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            {status === "sent" ? (
              <div className="rounded-lg border border-white/15 bg-white/6 p-8">
                <h3 className="text-[17px] font-semibold">Message sent</h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-white/70">
                  It&apos;s in my inbox. I&apos;ll reply to the address you gave
                  me, usually within a working day or two.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 text-[14px] text-lime underline underline-offset-[3px]"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[13px] text-white/60"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[13px] text-white/60"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[13px] text-white/60"
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Store URL, what needs doing, and roughly when you need it."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${field} resize-y`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-[13.5px] text-[#ffb4a8]">
                    That didn&apos;t send — something went wrong on my end.
                    Please email{" "}
                    <a
                      href="mailto:vicmar.yanson@gmail.com"
                      className="underline underline-offset-[3px]"
                    >
                      vicmar.yanson@gmail.com
                    </a>{" "}
                    directly and it&apos;ll reach me.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-md bg-lime px-5 py-2.5 text-[14.5px] font-medium text-brand-dark transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
