"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, BookOpen, Code2, Star } from "lucide-react";
import { awards, certifications } from "@/data/achievements";
import type { Achievement } from "@/data/achievements";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";

type FilterKey = "all" | Achievement["type"];

const TYPE_CONFIG: Record<Achievement["type"], {
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  dot: string;
  label: string;
}> = {
  award:         { icon: Trophy,   badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",    dot: "bg-amber-400",   label: "Award" },
  certification: { icon: BookOpen, badge: "bg-violet-500/10 border-violet-500/20 text-violet-300", dot: "bg-violet-400",  label: "Cert" },
  hackathon:     { icon: Code2,    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",        dot: "bg-cyan-400",    label: "Hackathon" },
  recognition:   { icon: Star,     badge: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300", dot: "bg-fuchsia-400", label: "Award" },
};

const ALL = [...awards, ...certifications];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",           label: "All" },
  { key: "hackathon",     label: "Hackathons" },
  { key: "award",         label: "Awards" },
  { key: "recognition",   label: "Recognition" },
  { key: "certification", label: "Certifications" },
];

export function MilestoneVault() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const shown = filter === "all" ? ALL : ALL.filter((a) => a.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionHeader eyebrow="MILESTONE VAULT" title="Achievements"
          subtitle="Awards, certifications, hackathons, and recognitions." />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
      >
        {[
          { label: "Hackathons",    n: awards.filter(a => a.type === "hackathon").length,     col: "text-cyan-400",    bg: "bg-cyan-500/[0.06] border-cyan-500/15" },
          { label: "Awards",        n: awards.filter(a => a.type === "award").length,          col: "text-amber-400",   bg: "bg-amber-500/[0.06] border-amber-500/15" },
          { label: "Recognition",   n: awards.filter(a => a.type === "recognition").length,    col: "text-fuchsia-400", bg: "bg-fuchsia-500/[0.06] border-fuchsia-500/15" },
          { label: "Certifications",n: certifications.length,                                  col: "text-violet-400",  bg: "bg-violet-500/[0.06] border-violet-500/15" },
        ].map((s) => (
          <div key={s.label} className={`flex flex-col items-center py-4 rounded-2xl border ${s.bg}`}>
            <span className={`text-2xl font-bold font-mono ${s.col}`}>{s.n}</span>
            <span className="text-[10px] font-mono text-slate-600 mt-0.5">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              filter === key
                ? "bg-violet-600/20 border border-violet-500/40 text-violet-300"
                : "bg-white/[0.03] border border-white/[0.07] text-slate-500 hover:text-slate-300"
            }`}
          >{label}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {shown.map((item, i) => {
            const cfg = TYPE_CONFIG[item.type];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              >
                <GlowCard className="p-5 h-full group hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${cfg.badge}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                          {cfg.label}
                        </span>
                        <span className="text-[10px] font-mono text-slate-700">{item.date}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-200 leading-snug mb-0.5">{item.title}</h3>
                      <p className="text-xs text-slate-600">{item.issuer}</p>
                      {item.description && (
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
