"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SiShopify, SiWordpress } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

const SHOPIFY: { name: string; url: string }[] = [
  { name: "INH Hair",             url: "https://inhhair.com"                    },
  { name: "INH Professional",     url: "https://inhprofessional.com"            },
  { name: "Glamnetic",            url: "https://glamnetic.com"                  },
  { name: "Atlantic Naturals",    url: "https://atlanticnaturals.com"           },
  { name: "Critter Concepts",     url: "https://critterconcepts.com"            },
  { name: "DCB Worldwide",        url: "https://dcbworldwide.com"               },
  { name: "Moken Vision",         url: "https://mokenvision.myshopify.com"      },
  { name: "My Work Supply",       url: "https://myworksupply.com"               },
  { name: "PureCare",             url: "https://www.purecare.com"               },
  { name: "Amarala",              url: "https://amarala.co"                     },
  { name: "Goody's Powder",       url: "https://www.goodyspowder.com"           },
  { name: "Jessica Rich",         url: "https://jessicarich.com"                },
  { name: "Macklowe Gallery",     url: "https://www.macklowegallery.com"        },
  { name: "Vanity Makeup",        url: "https://vanitymakeup.com"               },
  { name: "Eskute",               url: "https://eskute.de"                      },
  { name: "Homecraft Textiles",   url: "https://www.homecrafttextiles.com.au"   },
  { name: "Swallows N Daggers",   url: "https://swallowsndaggers.com"           },
  { name: "Invatech Italia",      url: "https://invatechitalia.com"             },
  { name: "Peace Love Hormones",  url: "https://www.peacelovehormones.com"      },
  { name: "Carte Lash",           url: "https://cartellash.ca"                  },
  { name: "Schroder USA",         url: "https://schroderusa.com"                },
  { name: "McCrystal Creations",  url: "https://mccrystalcreations.com"         },
  { name: "Urban Depot",          url: "https://urbandepot.com.au"              },
];

const WORDPRESS: { name: string; url: string }[] = [
  { name: "247 Pro Restoration",  url: "https://247prorestoration.com"          },
  { name: "Bidi Vapor",           url: "https://bidivapor.com"                  },
  { name: "McKay Drilling",       url: "https://mckaydrilling.com.au"           },
  { name: "Vital Vet",            url: "http://vitalvet.com.au"                 },
  { name: "Glowing Rooms",        url: "https://www.glowingrooms.com.au"        },
  { name: "Kaival Labs",          url: "https://kaivallabs.com"                 },
  { name: "QRX Digital",          url: "https://qrxdigital.com"                 },
];

const TABS = [
  { key: "shopify",   label: "Shopify",   icon: SiShopify,   color: "#95bf47", count: SHOPIFY.length,   items: SHOPIFY   },
  { key: "wordpress", label: "WordPress", icon: SiWordpress, color: "#21759b", count: WORDPRESS.length, items: WORDPRESS },
] as const;

type TabKey = typeof TABS[number]["key"];

/* ─── single project card ─── */
function ProjectCard({
  item, index, inView, color,
}: {
  item: { name: string; url: string };
  index: number;
  inView: boolean;
  color: string;
}) {
  const [hovered, setHovered] = useState(false);
  const domain = item.url.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.33, 1, 0.68, 1] }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative glass-card rounded-2xl p-5 flex flex-col gap-3 overflow-hidden group"
    >
      {/* Top shimmer line on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: color + "25" }}
      />

      {/* Site name */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white font-semibold text-sm leading-snug">{item.name}</h3>
        <motion.div
          animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.2 }}
        >
          <HiExternalLink size={14} style={{ color }} className="shrink-0 mt-0.5" />
        </motion.div>
      </div>

      {/* Domain */}
      <p className="text-[11px] text-(--muted) truncate">{domain}</p>

      {/* Visit label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="text-[10px] font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            Visit Site →
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

/* ─── Section ─── */
export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<TabKey>("shopify");

  const current = TABS.find((t) => t.key === active)!;

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-(--purple) uppercase">
            03 — Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Work I&apos;ve{" "}
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, rotateX: -90, y: 20 }}
              animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              style={{ transformOrigin: "bottom", display: "inline-block" }}
            >
              Shipped
            </motion.span>
          </h2>
          <p className="text-(--muted) mt-3 text-sm max-w-xl">
            A selection of live stores and websites I&apos;ve built or contributed to across different clients and industries.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex gap-3 mb-8"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === tab.key
                  ? "text-white shadow-lg"
                  : "glass-card text-(--muted) hover:text-white"
              }`}
              style={
                active === tab.key
                  ? { background: tab.color + "22", border: `1px solid ${tab.color}55`, boxShadow: `0 0 20px ${tab.color}22` }
                  : {}
              }
            >
              <tab.icon size={14} style={{ color: active === tab.key ? tab.color : undefined }} />
              {tab.label}
              <span
                className="text-[11px] px-1.5 py-0.5 rounded-full font-bold"
                style={{
                  background: active === tab.key ? tab.color + "30" : "rgba(255,255,255,0.06)",
                  color:      active === tab.key ? tab.color : "var(--muted)",
                }}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
          >
            {current.items.map((item, i) => (
              <ProjectCard
                key={item.url}
                item={item}
                index={i}
                inView={inView}
                color={current.color}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
