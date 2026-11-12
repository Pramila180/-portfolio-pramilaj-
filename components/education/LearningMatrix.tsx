"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";

const COURSEWORK = [
  "Data Structures & Algorithms", "Object-Oriented Programming",
  "Database Management Systems", "Computer Networks",
  "Operating Systems", "Web Technologies",
  "Artificial Intelligence", "Distributed Systems",
];

export function LearningMatrix() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionHeader eyebrow="LEARNING MATRIX" title="Academic" titleHighlight="Journey" />
      </motion.div>

      {education.map((edu, i) => (
        <div key={edu.id} className="space-y-5">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlowCard className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-violet-400 tracking-widest mb-1.5">DEGREE</p>
                    <h2 className="text-2xl font-bold text-slate-100 leading-tight">
                      {edu.degree} {edu.field}
                    </h2>
                    <p className="text-base text-slate-400 mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-600">
                        <MapPin className="w-3 h-3 text-violet-400/60" />{edu.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-600">
                        <Calendar className="w-3 h-3 text-violet-400/60" />{edu.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 tracking-wider">
                    ● ONGOING
                  </span>
                  <div>
                    <p className="text-[10px] font-mono text-slate-600 mb-0.5 text-right">CGPA</p>
                    <p className="text-3xl font-bold font-mono text-gradient">{edu.cgpa}</p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 pt-6 border-t border-white/[0.05]">
                <div className="flex justify-between text-xs font-mono text-slate-600 mb-2">
                  <span>Academic Performance</span>
                  <span>{edu.cgpa}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #8b5cf6, #22d3ee)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "76%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  />
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowCard className="p-7">
              <p className="text-xs font-mono text-violet-400 tracking-widest mb-5">KEY COURSEWORK</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {COURSEWORK.map((c, ci) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + ci * 0.04 }}
                    className="px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/20 transition-colors"
                  >
                    <span className="text-xs text-slate-400 leading-snug">{c}</span>
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/skills" className="btn-primary group text-sm">
              Tech DNA <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/achievements" className="btn-ghost text-sm">Certifications</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
