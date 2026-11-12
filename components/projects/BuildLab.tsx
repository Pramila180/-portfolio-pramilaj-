"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ArrowRight, X } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";

const STATUS_MAP = {
  deployed:  { dot: "bg-emerald-400", text: "text-emerald-400", label: "Deployed" },
  prototype: { dot: "bg-amber-400",   text: "text-amber-400",   label: "Prototype" },
  active:    { dot: "bg-cyan-400",    text: "text-cyan-400",    label: "Active" },
};

export function BuildLab() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => projects.filter((p) => {
    const q = search.toLowerCase();
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
    const matchC = cat === "All" || p.category.includes(cat);
    return matchQ && matchC;
  }), [search, cat]);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionHeader eyebrow="BUILD LAB" title="Project" titleHighlight="Universe"
          subtitle="Every build, experiment, and shipped product." />
      </motion.div>

      {/* Search */}
      <div className="mb-5">
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects, tech, keywords..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] text-sm text-slate-300 placeholder-slate-700 outline-none focus:border-violet-500/30 transition-colors"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
              cat === c
                ? "bg-violet-600/20 border border-violet-500/40 text-violet-300"
                : "bg-white/[0.03] border border-white/[0.06] text-slate-600 hover:text-slate-300"
            }`}
          >{c}</button>
        ))}
      </div>

      <p className="text-xs font-mono text-slate-700 mb-6">{filtered.length} project{filtered.length !== 1 ? "s" : ""}</p>

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-24 text-center">
            <p className="text-slate-600 text-sm font-mono">No results for &ldquo;{search}&rdquo;</p>
            <button onClick={() => { setSearch(""); setCat("All"); }}
              className="mt-4 text-xs text-violet-400 hover:text-violet-300 font-mono underline">
              Clear filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((p, i) => {
              const st = STATUS_MAP[p.status];
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  layout
                >
                  <GlowCard className="h-full flex flex-col p-6 group hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                        <span className={`text-xs font-mono ${st.text}`}>{st.label}</span>
                      </div>
                      {p.links.live && (
                        <a href={p.links.live} target="_blank" rel="noopener noreferrer"
                          className="text-slate-700 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h2 className="text-base font-bold text-slate-100 group-hover:text-violet-300 transition-colors leading-snug mb-1.5">
                      {p.title}
                    </h2>
                    <p className="text-xs text-slate-600 italic mb-3 leading-snug">{p.tagline}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-2">{p.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {p.category.map((c) => <span key={c} className="tag-cyan text-[10px]">{c}</span>)}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>

                    <Link href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors group/link mt-auto">
                      Case study <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </GlowCard>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
