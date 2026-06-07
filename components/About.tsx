"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiShopify, SiJavascript, SiPhp, SiWordpress } from "react-icons/si";

const CARDS = [
  {
    icon: SiShopify,
    color: "#95bf47",
    title: "Shopify Expert",
    desc: "Themes, Liquid, Plus scripts, GraphQL & REST APIs, custom apps",
  },
  {
    icon: SiJavascript,
    color: "#f7df1e",
    title: "JavaScript",
    desc: "ES6+, jQuery, React — interactive UIs and custom storefront logic",
  },
  {
    icon: SiPhp,
    color: "#8892be",
    title: "PHP & Backend",
    desc: "CRM automation, server-side logic, payment integrations",
  },
  {
    icon: SiWordpress,
    color: "#21759b",
    title: "WordPress / WooCommerce",
    desc: "Custom themes, plugins, PSD-to-WP, speed optimization",
  },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--purple)] uppercase">
            01 — About
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-[var(--muted)] leading-relaxed">
              I&apos;m a <span className="text-white font-semibold">Senior Shopify Developer</span> based
              in Bacolod City, Philippines, with 6+ years building high-performance e-commerce
              experiences for clients across the USA, Australia, and the Philippines.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              My core expertise is <span className="text-white font-semibold">custom Shopify theme development</span> —
              from pixel-perfect PDP rebranding and Liquid templating to complex cart/checkout flows,
              Shopify Plus scripts, and seamless third-party API integrations like Rebuy.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              My background in <span className="text-white font-semibold">PHP, WordPress, and WooCommerce</span> gives
              me a full-stack perspective — I don't just build stores that look great, I build stores
              that scale, perform, and convert.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "📍 Bacolod City, Philippines",
                "📞 +63 919 614 7785",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs text-[var(--muted)] bg-white/5 border border-white/5 px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
              <a
                href="mailto:vicmar.yanson@gmail.com"
                className="text-xs text-[var(--purple)] bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full hover:bg-purple-500/20 transition-colors"
              >
                ✉ vicmar.yanson@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Skill cards */}
          <div className="grid grid-cols-2 gap-4">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.08 }}
                className="glass-card rounded-2xl p-5 hover:scale-[1.03] transition-transform duration-300 cursor-default"
              >
                <card.icon size={28} style={{ color: card.color }} className="mb-3" />
                <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
