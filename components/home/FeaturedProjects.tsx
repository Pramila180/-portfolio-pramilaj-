"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { GlowCard } from "@/components/ui/GlowCard";

const featured = projects.filter((p) => p.featured).slice(0, 4);

const STATUS_MAP = {
  deployed:  { label: "Deployed",  dot: "bg-emerald-400", text: "text-emerald-400" },
  prototype: { label: "Prototype", dot: "bg-amber-400",   text: "text-amber-400" },
  active:    { label: "Active",    dot: "bg-cyan-400",     text: "text-cyan-400" },
};

// Unique accent per card
const ACCENTS = [
  "from-violet-600/10 to-transparent",
  "from-cyan-500/8 to-transparent",
  "from-fuchsia-600/8 to-transparent",
  "from-amber-500/8 to-transparent",
];

export function FeaturedProjects() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-violet-500/60" />
            <span className="text-xs font-mono text-violet-400 tracking-[0.2em]">SELECTED WORK</span>
            <div className="w-5 h-px bg-violet-500/60" />
          </div>
          <h2 className="display-md text-slate-100">Featured Projects</h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-400 transition-colors group font-mono"
        >
          All projects
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 2-col grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {featured.map((project, i) => {
          const st = STATUS_MAP[project.status];
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            >
              <GlowCard className={`h-full group p-6 bg-gradient-to-br ${ACCENTS[i]}`}>
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                    <span className={`text-xs font-mono ${st.text}`}>{st.label}</span>
                  </div>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-slate-600 hover:text-cyan-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Number label */}
                <p className="text-[10px] font-mono text-slate-700 tracking-widest mb-2">
                  {String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-violet-300 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 italic mb-4 leading-snug">{project.tagline}</p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-5">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors group/link"
                >
                  Case study
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-400 font-mono transition-colors">
          All projects <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
