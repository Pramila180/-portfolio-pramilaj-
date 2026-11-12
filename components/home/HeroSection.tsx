"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, MapPin, ArrowDownRight } from "lucide-react";
import { profile } from "@/data/profile";

const ROLES = [
  "Full-Stack Developer",
  "IoT Systems Builder",
  "MERN Stack Engineer",
  "CS Undergraduate",
];

function useRoleRotator() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setShow(true);
      }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);
  return { role: ROLES[idx], show };
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE } as Transition,
});

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-2xl border border-white/[0.07] bg-white/[0.03]">
      <span className="text-lg font-bold font-mono text-violet-300">{value}</span>
      <span className="text-[9px] font-mono text-slate-600 tracking-widest mt-0.5 text-center leading-tight">{label}</span>
    </div>
  );
}

export function HeroSection() {
  const { role, show } = useRoleRotator();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[55vw] h-[70vh]"
          style={{ background: "radial-gradient(ellipse 70% 80% at 80% 0%, rgba(109,40,217,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[50vh]"
          style={{ background: "radial-gradient(ellipse 60% 60% at 10% 100%, rgba(34,211,238,0.06) 0%, transparent 70%)" }}
        />
        {/* Center spotlight behind photo */}
        <div
          className="absolute top-0 right-0 w-[50vw] h-full hidden lg:block"
          style={{ background: "radial-gradient(ellipse 60% 70% at 70% 40%, rgba(139,92,246,0.07) 0%, transparent 65%)" }}
        />
        <div className="absolute top-0 bottom-0 left-[38%] w-px bg-white/[0.04] hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 xl:gap-20 items-center">

          {/* ──────────── LEFT: Copy ──────────── */}
          <div>
            <motion.div {...stagger(0)} className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              <span className="text-xs font-mono text-slate-500 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            <motion.h1 {...stagger(1)} className="display-xl text-slate-100 mb-3">
              Pramila<br />
              <span className="text-gradient">J.</span>
            </motion.h1>

            <motion.div {...stagger(2)} className="h-9 mb-8 overflow-hidden">
              <p
                className="text-xl sm:text-2xl font-medium text-slate-400 transition-all duration-300"
                style={{
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                {role}
              </p>
            </motion.div>

            <motion.div {...stagger(3)} className="flex items-center gap-1.5 text-sm text-slate-600 font-mono mb-8">
              <MapPin className="w-3.5 h-3.5 text-violet-500/60" />
              {profile.location}
            </motion.div>

            <motion.p {...stagger(4)} className="text-slate-400 text-base leading-relaxed max-w-md mb-10">
              CS undergraduate with hands-on experience in{" "}
              <span className="text-violet-300 font-medium">MERN Stack</span>,{" "}
              <span className="text-cyan-300 font-medium">IoT systems</span>, and cloud
              deployment through{" "}
              <span className="text-slate-200 font-medium">four internships</span>.
            </motion.p>

            <motion.div {...stagger(5)} className="flex flex-wrap items-center gap-3 mb-10">
              <Link href="/projects" className="btn-primary group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-ghost group">
                Get in Touch
                <ArrowDownRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
              </Link>
            </motion.div>

            <motion.div {...stagger(6)} className="flex items-center gap-3">
              {[
                { href: profile.github,   Icon: Github,   label: "GitHub" },
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-500 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/[0.06] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <span className="ml-2 text-xs font-mono text-slate-700">⌘K — quick search</span>
            </motion.div>
          </div>

          {/* ──────────── RIGHT: Large portrait + cards ──────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="hidden lg:flex flex-col items-center gap-5"
          >

            {/* ── PORTRAIT — dominant, centered ── */}
            <div className="relative w-full flex justify-center">

              {/* Outer ambient glow ring */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 90% at 50% 50%, rgba(139,92,246,0.6), transparent 70%)" }}
              />

              {/* Slow-float wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{ width: 300, height: 380 }}
              >
                {/* Pulsing outer border rings */}
                <span
                  className="absolute rounded-3xl border border-violet-500/30"
                  style={{
                    inset: -8,
                    animation: "pulse-ring 3.5s ease-out infinite",
                  }}
                />
                <span
                  className="absolute rounded-3xl border border-violet-400/15"
                  style={{
                    inset: -18,
                    animation: "pulse-ring 3.5s ease-out 1.2s infinite",
                  }}
                />

                {/* Photo card */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(139,92,246,0.35), 0 8px 40px rgba(139,92,246,0.25), 0 32px 80px rgba(0,0,0,0.6)",
                  }}
                >
                  <Image
                    src="/pramila.jpg"
                    alt="Pramila J"
                    fill
                    sizes="300px"
                    className="object-cover object-top"
                    priority
                  />

                  {/* Bottom gradient fade into bg */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 50%, rgba(8,8,16,0.55) 85%, rgba(8,8,16,0.9) 100%)",
                    }}
                  />

                  {/* Overlaid name tag at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-8">
                    <p className="text-white text-lg font-bold tracking-tight leading-none">Pramila J.</p>
                    <p className="text-violet-300 text-xs font-mono tracking-wider mt-1">
                      Full-Stack &amp; IoT Developer
                    </p>
                  </div>

                  {/* Online dot — top right corner */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" />
                    <span className="text-[9px] font-mono text-emerald-400 tracking-wider">ONLINE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Stats row ── */}
            <div className="grid grid-cols-3 gap-3 w-full">
              <StatPill value="4"  label="INTERNSHIPS" />
              <StatPill value="5+" label="PROJECTS" />
              <StatPill value="4"  label="HACKATHONS" />
            </div>

            {/* ── Status card ── */}
            <div
              className="w-full rounded-2xl border border-violet-500/20 px-5 py-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(109,40,217,0.10) 0%, rgba(13,13,26,0.95) 60%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)" }}
              />
              <p className="text-[10px] font-mono text-violet-400 tracking-widest mb-4">{"// CURRENT_STATUS"}</p>
              <div className="space-y-3">
                {[
                  { label: "Role",   value: "CS Undergraduate '28" },
                  { label: "Focus",  value: "Full-Stack + IoT" },
                  { label: "Stack",  value: "MERN · Python · Cloud" },
                  { label: "Status", value: "Open to internships" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-mono">{label}</span>
                    <span className="text-sm text-slate-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Tech tags ── */}
            <div className="w-full rounded-2xl border border-white/[0.06] px-5 py-4" style={{ background: "var(--surface)" }}>
              <p className="text-[9px] font-mono text-slate-700 tracking-widest mb-3">TECH FLUENCY</p>
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Node.js", "MongoDB", "Python", "TypeScript", "IoT", "AWS", "Git"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-violet-500/40 to-transparent" />
          <span className="text-[10px] font-mono text-slate-700 tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
