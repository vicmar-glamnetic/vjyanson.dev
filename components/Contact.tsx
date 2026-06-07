"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const INFO = [
  { icon: HiMail,           label: "Email",    value: "contact@vjyanson.com",      href: "mailto:contact@vjyanson.com" },
  { icon: HiPhone,          label: "Phone",    value: "+63 919 614 7785",           href: "tel:+639196147785"           },
  { icon: HiLocationMarker, label: "Location", value: "Bacolod City, Philippines",  href: null                         },
];

// PHP handler on the same Namecheap server — no external service needed
const FORMSPREE_ENDPOINT = "/contact.php";

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form,      setForm]      = useState({ name: "", email: "", message: "" });
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (FORMSPREE_ENDPOINT) {
      // Formspree — sends directly to contact@vjyanson.com, no email client needed
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      setLoading(false);
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please email contact@vjyanson.com directly.");
      }
    } else {
      // Fallback until Formspree is set up
      window.location.href = `mailto:contact@vjyanson.com?subject=Portfolio Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
        `Hi Vicmar,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
      )}`;
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6 bg-linear-to-b from-transparent via-purple-950/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-(--cyan) uppercase">
            04 — Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <p className="text-(--muted) leading-relaxed text-base">
              Looking for a Shopify expert who can take your store from good to exceptional?
              Whether it&apos;s a full custom theme build, Shopify Plus migration, performance
              optimization, or complex API integrations — let&apos;s build something great together.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-(--purple)" size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-(--muted) uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-(--purple) transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] text-(--muted) uppercase tracking-[0.2em] mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FaWhatsapp,   label: "WhatsApp", color: "#25d366", href: "https://wa.me/639196147785" },
                  { icon: FaLinkedinIn, label: "LinkedIn", color: "#0a66c2", href: "https://www.linkedin.com/in/vicmar-yanson/" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <s.icon size={16} style={{ color: s.color }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center space-y-4 h-full flex flex-col items-center justify-center">
                <HiCheckCircle size={52} className="text-(--shopify)" />
                <h3 className="text-white font-bold text-xl">Thanks for reaching out!</h3>
                <p className="text-(--muted) text-sm">
                  Your email client should have opened. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-(--purple) hover:text-white transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Your Name",     name: "name",  type: "text",  placeholder: "John Doe"         },
                  { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[10px] text-(--muted) uppercase tracking-[0.15em] mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-(--muted) focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all text-sm"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] text-(--muted) uppercase tracking-[0.15em] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-(--muted) focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="animated-border p-0.5 rounded-full w-full inline-flex group disabled:opacity-60"
                >
                  <span className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#050505] rounded-full font-semibold text-white group-hover:bg-transparent transition-colors text-sm">
                    {loading ? "Opening email…" : "Send Message →"}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
