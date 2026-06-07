"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #7c3aed, #06b6d4, #95bf47)",
        boxShadow:  "0 0 8px rgba(124,58,237,0.8)",
      }}
    />
  );
}
