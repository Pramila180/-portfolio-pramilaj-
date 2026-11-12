"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";

const COLORS = [
  { ring: "ring-violet-500/50", dot: "bg-violet-400", tag: "bg-violet-500/10 border-violet-500/20 text-violet-300" },
  { ring: "ring-cyan-500/50",   dot: "bg-cyan-400",   tag: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" },
  { ring: "ring-fuchsia-500/50",dot: "bg-fuchsia-400",tag: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300" },
  { ring: "ring-amber-500/50",  dot: "bg-amber-400",  tag: "bg-amber-500/10 border-amber-500/20 text-amber-300" },
];

export function MissionLog() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionHeader eyebrow="MISSION LOG" title="Experience"
          subtitle="Four internships across MERN, IoT, and full-stack engineering." />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Spine */}
        <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/10 to-transparent hidden sm:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const c = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="relative sm:pl-14"
              >
                {/* Timeline node */}
                <div className={`absolute left-0 top-6 w-5 h-5 rounded-full ring-2 ${c.ring} ring-offset-2 ring-offset-bg-primary ${c.dot} hidden sm:flex items-center justify-center`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-bg-primary" />
                </div>

                <GlowCard className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[10px] font-mono text-slate-600 tracking-widest mb-1">
                        MISSION {String(experiences.length - i).padStart(2, "0")}
                      </p>
                      <h2 className="text-xl font-bold text-slate-100 leading-tight">{exp.role}</h2>
                      <p className="text-base text-slate-400 font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-violet-400/70" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600">
                        <Clock className="w-3 h-3" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tech.map((t) => (
                      <span key={t} className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${c.tag}`}>{t}</span>
                    ))}
                  </div>

                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/80 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                      {exp.link.replace("https://", "")}
                    </a>
                  )}
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
