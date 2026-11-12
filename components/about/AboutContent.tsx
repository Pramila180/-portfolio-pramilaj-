"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

import type { Transition } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay: i * 0.08, ease: EASE } as Transition,
});

const TIMELINE = [
  { year: "2024", title: "Started B.E. Computer Science", detail: "Kamaraj College of Engineering & Technology", color: "bg-violet-500" },
  { year: "Dec 2025", title: "MERN Stack Intern — Clarisco Solution", detail: "21 days hands-on MERN development", color: "bg-cyan-400" },
  { year: "Dec 2025", title: "Full Stack Intern — IT Flex Solution", detail: "Built Lead Management System · leadflowtask.netlify.app", color: "bg-violet-500" },
  { year: "Feb 2025", title: "MISS RYLA Award", detail: "Leadership recognition by Rotaract Club", color: "bg-amber-400" },
  { year: "Oct 2025", title: "Runner-Up — Ramco 32-Hour Hackathon", detail: "₹5,000 cash prize", color: "bg-emerald-400" },
  { year: "May 2026", title: "Web Dev Intern — InAmigos Foundation", detail: "15 days · inamigosfoundations-iaf.netlify.app", color: "bg-cyan-400" },
  { year: "Jun 2026", title: "Full Stack Intern — Elevance Skills", detail: "Ongoing full-stack training & project work", color: "bg-violet-500" },
];

export function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <motion.div {...fade(0)}>
        <SectionHeader eyebrow="ORIGIN FILE" title="About" titleHighlight="Me" />
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* ── Left (3 cols) ── */}
        <div className="lg:col-span-3 space-y-5">
          {/* Bio */}
          <motion.div {...fade(1)}>
            <GlowCard className="p-7">
              <p className="text-xs font-mono text-violet-400 tracking-widest mb-5">{"// SUMMARY"}</p>
              <p className="text-slate-300 leading-relaxed text-[15px]">{profile.summary}</p>
              <div className="mt-6 pt-5 border-t border-white/[0.05] flex flex-wrap gap-5">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-violet-400/70" />
                  {profile.location}
                </div>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-violet-400/70" />
                  {profile.email}
                </a>
              </div>
            </GlowCard>
          </motion.div>

          {/* Interests */}
          <motion.div {...fade(2)}>
            <GlowCard className="p-7">
              <p className="text-xs font-mono text-violet-400 tracking-widest mb-5">{"// AREAS_OF_INTEREST"}</p>
              <div className="flex flex-wrap gap-2">
                {profile.areasOfInterest.map((interest) => (
                  <span key={interest} className="tag">{interest}</span>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Links */}
          <motion.div {...fade(3)} className="flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"
              className="btn-ghost"><Github className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3 opacity-40" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
              className="btn-ghost"><Linkedin className="w-4 h-4" /> LinkedIn <ExternalLink className="w-3 h-3 opacity-40" /></a>
            <Link href="/contact" className="btn-primary group">
              Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Right (2 cols): Timeline ── */}
        <motion.div className="lg:col-span-2" {...fade(2)}>
          <GlowCard className="p-7 h-full">
            <p className="text-xs font-mono text-violet-400 tracking-widest mb-7">{"// JOURNEY_LOG"}</p>
            <div className="relative pl-6">
              {/* Spine */}
              <div className="absolute left-1.5 top-1 bottom-1 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/15 to-transparent" />
              <div className="space-y-7">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                    className="relative"
                  >
                    <div className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ring-2 ring-bg-primary ${item.color}`} />
                    <p className="text-[10px] font-mono text-slate-600 mb-0.5">{item.year}</p>
                    <p className="text-sm font-semibold text-slate-200 leading-snug mb-0.5">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-snug">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
}
