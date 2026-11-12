"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Tag } from "lucide-react";
import type { Project } from "@/data/projects";
import { GlowCard } from "@/components/ui/GlowCard";

const STATUS = {
  deployed:  { text: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", label: "Deployed" },
  prototype: { text: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/20",     label: "Prototype" },
  active:    { text: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/20",        label: "Active" },
};

export function ProjectDossier({ project }: { project: Project }) {
  const st = STATUS[project.status];
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
      {/* Back */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-violet-400 transition-colors mb-10 group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          ALL PROJECTS
        </Link>
      </motion.div>

      {/* Hero header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${st.bg} ${st.text}`}>
            {st.label}
          </span>
          {project.category.map((c) => <span key={c} className="tag-cyan text-xs">{c}</span>)}
        </div>

        <h1 className="display-md text-slate-100 mb-3 leading-tight">{project.title}</h1>
        <p className="text-xl text-violet-300 font-medium italic mb-3">{project.tagline}</p>
        <p className="text-slate-400 leading-relaxed max-w-2xl">{project.description}</p>

        {project.links.live && (
          <div className="mt-6">
            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
              className="btn-ghost group inline-flex">
              <ExternalLink className="w-4 h-4" />
              Visit Live Site
            </a>
          </div>
        )}
      </motion.div>

      {/* Content grid */}
      <div className="grid md:grid-cols-3 gap-5">
        {/* Main content — 2 cols */}
        <div className="md:col-span-2 space-y-5">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <GlowCard className="p-7">
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-4 h-4 text-violet-400" />
                <p className="text-xs font-mono text-violet-400 tracking-widest">OVERVIEW</p>
              </div>
              <p className="text-slate-300 leading-relaxed text-[15px]">{project.longDescription}</p>
            </GlowCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <GlowCard className="p-7">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <p className="text-xs font-mono text-violet-400 tracking-widest">KEY FEATURES</p>
              </div>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/70 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        </div>

        {/* Sidebar — 1 col */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlowCard className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-3.5 h-3.5 text-violet-400" />
              <p className="text-xs font-mono text-violet-400 tracking-widest">TECH STACK</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </GlowCard>

          <GlowCard className="p-5">
            <p className="text-xs font-mono text-violet-400 tracking-widest mb-4">CATEGORIES</p>
            <div className="flex flex-wrap gap-2">
              {project.category.map((c) => <span key={c} className="tag-cyan">{c}</span>)}
            </div>
          </GlowCard>

          <Link href="/projects"
            className="btn-ghost w-full justify-center group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
