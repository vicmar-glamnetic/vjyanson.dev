"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "VJYANSON";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Block scroll during load
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="fixed inset-0 z-[1000] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          {/* Grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Ambient glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[120px] pulse-glow" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Animated logo box */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="animated-border p-[2px] rounded-2xl"
            >
              <div className="w-20 h-20 rounded-[14px] bg-[#050505] flex items-center justify-center">
                <span className="text-4xl font-extrabold gradient-text">V</span>
              </div>
            </motion.div>

            {/* Letter-by-letter name reveal */}
            <div className="flex gap-0.5 overflow-hidden">
              {LETTERS.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="text-xl font-bold tracking-[0.25em] gradient-text"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-white/8 rounded-full overflow-hidden">
              <motion.div
                className="h-full animated-border"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.0, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
