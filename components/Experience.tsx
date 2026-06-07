"use client";

import { useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { HiOfficeBuilding, HiLocationMarker, HiCalendar } from "react-icons/hi";

const JOBS = [
  {
    role:      "Senior Shopify Developer",
    company:   "INH Hair / Komboventures",
    location:  "Los Angeles, California, USA",
    period:    "Feb 2023 — Present",
    current:   true,
    highlights: [
      "Led PDP rebranding project — custom theme development with seamless new brand integration",
      "Built and customized Shopify Liquid templates, GraphQL & REST APIs for data/product management",
      "Integrated third-party APIs and Shopify Plus scripts for advanced discount logic",
      "Configured payment gateways for secure, high-throughput transactions",
      "Boosted mobile traffic, conversion rates, and overall shopping experience",
      "Collaborated with design and marketing teams; continuous testing and debugging",
    ],
    tech: ["Shopify Plus", "Liquid", "GraphQL", "REST API", "JavaScript", "React", "SCSS"],
  },
  {
    role:      "Shopify Developer",
    company:   "Matador Group LLC",
    location:  "Los Angeles, California, USA",
    period:    "May 2022 — Nov 2022",
    current:   false,
    highlights: [
      "Managed all company client Shopify storefronts end-to-end",
      "Created custom themes and functions based on client specifications",
      "Set up and customized Google Analytics for e-commerce tracking",
      "Handled all revisions and quality assurance across the Shopify portfolio",
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "Google Analytics"],
  },
  {
    role:      "Shopify Developer",
    company:   "CT21 Analytics",
    location:  "Bacolod City, Philippines",
    period:    "Sept 2021 — Jan 2022",
    current:   false,
    highlights: [
      "Developed custom Shopify themes from scratch for multiple clients",
      "Converted PSD / Adobe XD designs to fully functional Shopify stores",
      "Built custom Liquid functions and managed all site revisions",
    ],
    tech: ["Shopify", "Liquid", "CSS/SCSS", "PSD-to-Shopify"],
  },
  {
    role:      "PHP Web & WordPress Developer",
    company:   "QRX Digital",
    location:  "Jacksonville, Florida, USA",
    period:    "Oct 2020 — Aug 2021",
    current:   false,
    highlights: [
      "Developed custom WordPress and WooCommerce functionality",
      "Converted PSD designs into pixel-perfect WordPress themes",
      "Optimized site speed and performance across multiple client projects",
      "Ensured full mobile and tablet responsiveness",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "SCSS"],
  },
  {
    role:      "Shopify & WordPress Developer",
    company:   "Arlena Marketing",
    location:  "Melbourne, Australia",
    period:    "Sept 2019 — Sept 2020",
    current:   false,
    highlights: [
      "Modified and extended custom WordPress / WooCommerce functions",
      "Converted PSD files to WordPress themes",
      "Created custom scripts for a Shopify e-commerce store",
      "Optimized website performance and loading speed",
    ],
    tech: ["Shopify", "WordPress", "PHP", "Custom Scripts"],
  },
  {
    role:      "PHP & Front-End Developer",
    company:   "ClickableBrand Inc.",
    location:  "Cebu City, Philippines",
    period:    "July 2018 — Sept 2019",
    current:   false,
    highlights: [
      "Implemented internal business automation using SuiteCRM and SugarCRM",
      "Transitioned to front-end team — WordPress, HTML, SASS development",
      "Converted PSD files to HTML/CSS templates",
    ],
    tech: ["PHP", "SuiteCRM", "WordPress", "HTML", "SASS"],
  },
];

/* ─── 3-D Tilt wrapper ─── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef   = useRef<HTMLDivElement>(null);
  const [hov, setHov] = useState(false);

  const rawX = useSpring(0, { stiffness: 300, damping: 35 });
  const rawY = useSpring(0, { stiffness: 300, damping: 35 });

  const rotateX = useTransform(rawY, [-1, 1], [10, -10]);
  const rotateY = useTransform(rawX, [-1, 1], [-10, 10]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    rawX.set(((e.clientX - r.left) / r.width)  * 2 - 1);
    rawY.set(((e.clientY - r.top)  / r.height) * 2 - 1);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); setHov(false); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      animate={{ scale: hov ? 1.015 : 1 }}
      transition={{ scale: { duration: 0.2 } }}
      className={className}
    >
      {/* Spotlight glow that follows mouse */}
      {hov && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${
              cardRef.current
                ? `${((rawX.get() + 1) / 2) * 100}% ${((rawY.get() + 1) / 2) * 100}%`
                : "50% 50%"
            }, rgba(124,58,237,0.08) 0%, transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

/* ─── Section ─── */
export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 px-6 bg-linear-to-b from-transparent via-purple-950/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading — word flip-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-(--cyan) uppercase">
            02 — Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Work{" "}
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, rotateX: -90, y: 20 }}
              animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              style={{ transformOrigin: "bottom", display: "inline-block" }}
            >
              History
            </motion.span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <motion.div
            className="absolute left-5.5 top-6 w-px hidden sm:block origin-top"
            style={{ background: "linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            {/* height computed from number of cards */}
            <div style={{ height: `${JOBS.length * 210}px` }} />
          </motion.div>

          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <JobCard key={i} job={job} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({
  job, index, inView,
}: { job: typeof JOBS[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
      className="relative sm:pl-14"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-3.75 top-6 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center shrink-0 ${
          job.current
            ? "border-(--purple) bg-(--purple)"
            : "border-white/20 bg-[#050505]"
        }`}
      >
        {job.current && (
          <span className="absolute inset-0 rounded-full bg-(--purple) animate-ping opacity-40" />
        )}
      </div>

      <TiltCard className="glass-card rounded-2xl p-6 relative overflow-hidden">
        {/* Shimmer line on top edge */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: job.current
              ? "linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
        />

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center flex-wrap gap-2 mb-1">
              <h3 className="text-white font-bold text-base sm:text-lg">{job.role}</h3>
              {job.current && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-(--muted)">
              <span className="flex items-center gap-1">
                <HiOfficeBuilding size={13} className="shrink-0" />{job.company}
              </span>
              <span className="flex items-center gap-1">
                <HiLocationMarker size={13} className="shrink-0" />{job.location}
              </span>
            </div>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] text-(--muted) bg-white/5 px-3 py-1 rounded-full whitespace-nowrap border border-white/5">
            <HiCalendar size={11} />{job.period}
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {job.highlights.map((h, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 + j * 0.04 }}
              className="flex items-start gap-2 text-sm text-(--muted) leading-relaxed"
            >
              <span className="text-(--purple) mt-0.5 shrink-0 text-xs">▸</span>
              {h}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {job.tech.map((t, ti) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.08 + ti * 0.04 }}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/4 text-(--muted) border border-white/5 hover:border-purple-500/30 hover:text-white transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}
