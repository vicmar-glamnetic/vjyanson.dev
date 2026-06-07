"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiShopify, SiJavascript, SiReact, SiNextdotjs,
  SiHtml5, SiSass, SiGithub,
  SiWordpress, SiPhp, SiGraphql, SiJquery,
  SiNodedotjs, SiTailwindcss, SiGit,
} from "react-icons/si";
import { HiCode, HiShoppingCart, HiColorSwatch, HiServer, HiCog } from "react-icons/hi";

const CATEGORIES = [
  {
    icon:  HiShoppingCart,
    title: "Shopify & E-Commerce",
    color: "#95bf47",
    skills: [
      { name: "Shopify Plus",         icon: SiShopify  },
      { name: "Liquid Templating",    icon: SiShopify  },
      { name: "GraphQL API",          icon: SiGraphql  },
      { name: "REST API",             icon: null       },
      { name: "Custom Cart/Checkout", icon: null       },
      { name: "Payment Gateways",     icon: null       },
      { name: "Discount Scripts",     icon: null       },
      { name: "Rebuy Integration",    icon: null       },
    ],
  },
  {
    icon:  HiCode,
    title: "Frontend Development",
    color: "#7c3aed",
    skills: [
      { name: "HTML5",             icon: SiHtml5       },
      { name: "CSS3 / SCSS",       icon: SiSass        },
      { name: "JavaScript (ES6+)", icon: SiJavascript  },
      { name: "jQuery",            icon: SiJquery      },
      { name: "React",             icon: SiReact       },
      { name: "Next.js",           icon: SiNextdotjs   },
      { name: "Tailwind CSS",      icon: SiTailwindcss },
      { name: "Responsive Design", icon: HiColorSwatch },
    ],
  },
  {
    icon:  HiServer,
    title: "Backend & CMS",
    color: "#06b6d4",
    skills: [
      { name: "PHP",         icon: SiPhp      },
      { name: "WordPress",   icon: SiWordpress },
      { name: "WooCommerce", icon: SiWordpress },
      { name: "Node.js",     icon: SiNodedotjs },
      { name: "SuiteCRM",    icon: null        },
      { name: "SugarCRM",    icon: null        },
    ],
  },
  {
    icon:  HiCog,
    title: "Tools & Workflow",
    color: "#f59e0b",
    skills: [
      { name: "Git",                  icon: SiGit    },
      { name: "GitHub",               icon: SiGithub },
      { name: "Google Analytics",     icon: null     },
      { name: "BrowserStack",         icon: null     },
      { name: "Performance Tuning",   icon: null     },
      { name: "PSD / XD to Shopify",  icon: null     },
      { name: "Cross-browser Testing",icon: null     },
    ],
  },
];

/* spring config for tag pop-in */
const TAG_SPRING = { type: "spring", stiffness: 400, damping: 20 } as const;

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-(--purple) uppercase">
            03 — Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Technical{" "}
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, rotateX: -90, y: 20 }}
              animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              style={{ transformOrigin: "bottom", display: "inline-block" }}
            >
              Expertise
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: ci * 0.12, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Animated top-edge shimmer on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <cat.icon size={17} style={{ color: cat.color }} />
                </motion.div>
                <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
              </div>

              {/* Skill tags — spring pop-in stagger */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.6, y: 10 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ ...TAG_SPRING, delay: ci * 0.12 + si * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/4 text-(--muted) border border-white/5 hover:border-purple-500/40 hover:text-white cursor-default transition-colors"
                    style={{ transformOrigin: "center" }}
                  >
                    {skill.icon && (
                      <skill.icon size={11} style={{ color: cat.color }} />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Bottom glow */}
              <div
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: cat.color + "18" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
