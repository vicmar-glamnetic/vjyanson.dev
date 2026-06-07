"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos,     setPos]     = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    // Detect hover over interactive elements
    const tag = (entering: boolean) => () => setHovered(entering);
    const attach = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach(el => {
        el.addEventListener("mouseenter", tag(true));
        el.addEventListener("mouseleave", tag(false));
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      obs.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  const dotSize    = clicked ? 4 : 8;
  const ringSize   = hovered ? 52 : clicked ? 22 : 36;

  return (
    <>
      {/* Inner dot — snappy */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width:  dotSize,
          height: dotSize,
          background: "rgba(168, 85, 247, 0.9)",
          left: 0,
          top:  0,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{ left: pos.x, top: pos.y, scale: clicked ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 2500, damping: 60, mass: 0.15 }}
      />

      {/* Outer ring — elastic lag */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width:  ringSize,
          height: ringSize,
          border: hovered
            ? "1.5px solid rgba(168,85,247,0.9)"
            : "1.5px solid rgba(168,85,247,0.4)",
          left: 0,
          top:  0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          left:   pos.x,
          top:    pos.y,
          width:  ringSize,
          height: ringSize,
          opacity: clicked ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.7 }}
      />

      {/* Glow blob that lazily follows */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full"
        style={{
          width:   80,
          height:  80,
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          left: 0,
          top:  0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ left: pos.x, top: pos.y }}
        transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1 }}
      />
    </>
  );
}
