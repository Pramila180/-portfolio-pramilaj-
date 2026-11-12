"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "cyan" | "none";
  interactive?: boolean;
};

export function GlowCard({ children, className, glowColor = "violet", interactive = true }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const rgb = glowColor === "cyan" ? "34,211,238" : glowColor === "none" ? null : "139,92,246";

  const glowStyle = rgb && hovered
    ? { background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(${rgb},0.08) 0%, transparent 65%), var(--surface)` }
    : { background: "var(--surface)" };

  return (
    <div
      ref={cardRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        "border border-white/[0.07]",
        hovered && "border-violet-500/25 shadow-surface",
        className
      )}
      style={glowStyle}
    >
      {children}
    </div>
  );
}

/* ── Simpler static card variant for non-interactive surfaces ── */
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.07] overflow-hidden",
        className
      )}
      style={{ background: "var(--surface)" }}
    >
      {children}
    </div>
  );
}
