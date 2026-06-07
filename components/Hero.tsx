"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { HiArrowDown, HiMail } from "react-icons/hi";
import { SiShopify } from "react-icons/si";

/* ─── Typewriter ─── */
const ROLES = [
  "Senior Shopify Developer",
  "E-Commerce Expert",
  "Liquid Templating Wizard",
  "Frontend Engineer",
  "Shopify Plus Specialist",
];

function TypeWriter() {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed   = deleting ? 45 : 75;
    const timer   = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) setTimeout(() => setDeleting(true), 2400);
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="text-(--purple) animate-pulse">|</span>
    </span>
  );
}

/* ─── Count-up stat ─── */
function CountStat({ target, suffix }: { target: number; suffix: string }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 70, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, target, spring]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

/* ─── Magnetic Button ─── */
function MagneticBtn({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x   = useSpring(0, { stiffness: 250, damping: 28 });
  const y   = useSpring(0, { stiffness: 250, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r  = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width  / 2)) * 0.3);
    y.set((e.clientY - (r.top  + r.height / 2)) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="animated-border p-0.5 rounded-full inline-flex group"
    >
      <span className="flex items-center gap-2 px-8 py-3 bg-[#050505] rounded-full font-semibold text-white group-hover:bg-transparent transition-colors">
        {children}
      </span>
    </motion.a>
  );
}

/* ─── Particles ─── */
const PARTICLES = [
  { x: 8,  y: 18, s: 5,  d: 0   },
  { x: 88, y: 12, s: 4,  d: 1   },
  { x: 72, y: 65, s: 7,  d: 0.5 },
  { x: 18, y: 72, s: 4,  d: 2   },
  { x: 52, y: 88, s: 5,  d: 1.5 },
  { x: 92, y: 78, s: 6,  d: 3   },
  { x: 33, y: 42, s: 3,  d: 0.8 },
  { x: 62, y: 28, s: 5,  d: 2.5 },
  { x: 14, y: 55, s: 4,  d: 1.2 },
  { x: 78, y: 48, s: 6,  d: 0.3 },
  { x: 44, y: 10, s: 3,  d: 1.8 },
  { x: 25, y: 95, s: 5,  d: 0.6 },
];

/* ─── Hero ─── */
export default function Hero() {
  // Mouse parallax values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const orb1X = useTransform(mouseX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(mouseY, [0, 1], [-30, 30]);
  const orb2X = useTransform(mouseX, [0, 1], [20, -20]);
  const orb2Y = useTransform(mouseY, [0, 1], [15, -15]);

  const smoothOrb1X = useSpring(orb1X, { stiffness: 40, damping: 20 });
  const smoothOrb1Y = useSpring(orb1Y, { stiffness: 40, damping: 20 });
  const smoothOrb2X = useSpring(orb2X, { stiffness: 30, damping: 18 });
  const smoothOrb2Y = useSpring(orb2Y, { stiffness: 30, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top)  / height);
  };

  const STATS = [
    { val: 6,   suf: "+", label: "Years Experience"   },
    { val: 5,   suf: "+", label: "Companies"          },
    { val: 50,  suf: "+", label: "Projects Delivered" },
    { val: 3,   suf: "",  label: "Countries Served"   },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      onMouseMove={onMouseMove}
    >
      {/* ── Morphing blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-130 h-130 rounded-full bg-purple-700/10 blur-[110px]"
          style={{ x: smoothOrb1X, y: smoothOrb1Y }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-95 h-95 rounded-full bg-cyan-500/8 blur-[90px]"
          style={{ x: smoothOrb2X, y: smoothOrb2Y }}
          animate={{
            borderRadius: [
              "40% 60% 60% 40% / 40% 40% 60% 60%",
              "60% 40% 40% 60% / 60% 60% 40% 40%",
              "40% 60% 60% 40% / 40% 40% 60% 60%",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left:       `${p.x}%`,
            top:        `${p.y}%`,
            width:       p.s,
            height:      p.s,
            background: "radial-gradient(circle, rgba(124,58,237,0.75), transparent)",
          }}
          animate={{
            y:       [0, -26, 0],
            opacity: [0.3, 0.85, 0.3],
            scale:   [1, 1.4, 1],
          }}
          transition={{ duration: 4 + p.d, repeat: Infinity, delay: p.d, ease: "easeInOut" }}
        />
      ))}

      {/* ── Orbit rings ── */}
      <motion.div
        className="absolute top-24 right-24 w-28 h-28 rounded-full border border-purple-500/20 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
      </motion.div>
      <motion.div
        className="absolute bottom-36 left-24 w-16 h-16 rounded-full border border-cyan-500/20 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-(--shopify)/25 mb-8"
        >
          <SiShopify className="text-(--shopify)" size={13} />
          <span className="text-xs font-medium text-(--shopify)">Available for Shopify Projects</span>
          <span className="w-1.5 h-1.5 rounded-full bg-(--shopify) animate-pulse" />
        </motion.div>

        {/* Name — word-safe letter-by-letter */}
        <div className="mb-4 space-y-1">
          {/*
            Each word wrapped in whitespace-nowrap so characters never split mid-word.
            Gap only between the two first-name words, not between individual letters.
            Font: 2.5rem (40px) mobile → 3rem tablet → 4.5rem lg → 5.5rem xl.
          */}
          <div className="flex flex-wrap justify-center items-baseline gap-x-3 sm:gap-x-5">
            {[
              { word: "Vicmar", baseDelay: 0    },
              { word: "Joseph", baseDelay: 0.35 },
            ].map(({ word, baseDelay }) => (
              <span
                key={word}
                className="inline-flex whitespace-nowrap text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-extrabold text-white leading-tight tracking-tight"
              >
                {word.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: baseDelay + 0.055 * i, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    style={{ display: "inline-block", transformOrigin: "bottom" }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>

          {/* Yanson — gradient, same scale */}
          <div className="flex justify-center">
            <span className="inline-flex whitespace-nowrap text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-extrabold leading-tight tracking-tight">
              {"Yanson".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="gradient-text"
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.7 + 0.07 * i, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  style={{ display: "inline-block", transformOrigin: "bottom" }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </div>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-xl sm:text-2xl font-medium text-(--muted) mb-6 min-h-8"
        >
          <TypeWriter />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-(--muted) max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
        >
          6+ years building high-converting Shopify stores. Custom themes, Liquid templating,
          GraphQL APIs, checkout optimization, and Shopify Plus — crafting experiences that convert.
        </motion.p>

        {/* CTA — magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticBtn href="#contact">
            <HiMail size={16} />
            Get In Touch
          </MagneticBtn>

          <motion.a
            href="#experience"
            whileHover={{ scale: 1.04, borderColor: "rgba(124,58,237,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full font-semibold text-(--muted) border border-white/10 hover:text-white transition-colors"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Count-up stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text">
                <CountStat target={s.val} suffix={s.suf} />
              </div>
              <div className="text-xs text-(--muted) mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--muted) hover:text-white transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <HiArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}
