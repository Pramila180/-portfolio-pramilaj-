"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null
      );
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  // Smooth trail
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.2 }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: isPointer ? "#22d3ee" : "#8b5cf6" }}
        />
      </motion.div>

      {/* Trailing ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate(${trail.x - 16}px, ${trail.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <div
          className="w-8 h-8 rounded-full border transition-all duration-200"
          style={{
            borderColor: isPointer ? "rgba(34,211,238,0.6)" : "rgba(139,92,246,0.6)",
            transform: isPointer ? "scale(1.4)" : "scale(1)",
          }}
        />
      </div>
    </>
  );
}
