"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";

const LEVEL_WIDTH = { core: "100%", proficient: "72%", familiar: "44%" };
const LEVEL_LABEL = { core: "Core", proficient: "Proficient", familiar: "Familiar" };

export function TechDNA() {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? skillCategories.filter((c) => c.id === active) : skillCategories;

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionHeader eyebrow="TECH DNA" title="Technical" titleHighlight="Capabilities"
          subtitle="Tools, languages, and platforms organized by domain." />
      </motion.div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive(null)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
            !active ? "bg-violet-600/20 border border-violet-500/40 text-violet-300" : "tag-neutral hover:text-slate-300"
          }`}
        >All</button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id === active ? null : cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
              active === cat.id
                ? "text-white border-opacity-60"
                : "bg-white/[0.03] border-white/[0.07] text-slate-500 hover:text-slate-300 hover:border-white/[0.12]"
            }`}
            style={active === cat.id ? { borderColor: cat.color, background: `${cat.color}22`, color: cat.color } : {}}
          >{cat.label}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active ?? "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {shown.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            >
              <GlowCard className="p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}88` }} />
                  <span className="text-xs font-mono tracking-widest font-semibold" style={{ color: cat.color }}>
                    {cat.label.toUpperCase()}
                  </span>
                </div>

                {/* Skill rows */}
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: ci * 0.07 + si * 0.04 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-slate-200">{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-600">{LEVEL_LABEL[skill.level]}</span>
                      </div>
                      <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: cat.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: LEVEL_WIDTH[skill.level] }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: ci * 0.06 + si * 0.05, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Level legend */}
      <div className="mt-10 flex items-center justify-center gap-8">
        {(["core", "proficient", "familiar"] as const).map((lvl) => (
          <div key={lvl} className="flex items-center gap-2">
            <div className="w-8 h-[3px] rounded-full bg-violet-500/40 overflow-hidden">
              <div className="h-full bg-violet-400 rounded-full" style={{ width: LEVEL_WIDTH[lvl] }} />
            </div>
            <span className="text-xs text-slate-600 font-mono capitalize">{lvl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
