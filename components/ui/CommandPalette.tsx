"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, User, FlaskConical, Dna, Briefcase, GraduationCap, Trophy, FileText, Radio, X, ArrowRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, User, FlaskConical, Dna, Briefcase, GraduationCap, Trophy, FileText, Radio,
};

type CommandItem = {
  id: string;
  label: string;
  sublabel: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  type: "page" | "project";
};

function buildCommands(): CommandItem[] {
  return [
    ...navItems.map((n) => ({
      id: n.href, label: n.label, sublabel: n.description,
      href: n.href, icon: iconMap[n.icon] ?? Zap, type: "page" as const,
    })),
    ...projects.map((p) => ({
      id: p.slug, label: p.title, sublabel: p.tagline,
      href: `/projects/${p.slug}`, icon: FlaskConical, type: "project" as const,
    })),
  ];
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands = buildCommands();
  const filtered = query.trim()
    ? commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.sublabel.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const close = useCallback(() => { setOpen(false); setQuery(""); setSelected(0); }, []);
  const navigate = useCallback((href: string) => { router.push(href); close(); }, [router, close]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen((v) => !v); }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  useEffect(() => {
    if (open) { setTimeout(() => inputRef.current?.focus(), 50); setSelected(0); }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((v) => Math.min(v + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelected((v) => Math.max(v - 1, 0)); }
    else if (e.key === "Enter" && filtered[selected]) navigate(filtered[selected].href);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[200] bg-bg-primary/70 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
          />

          <motion.div
            className="fixed inset-x-0 top-[12vh] z-[201] mx-auto w-full max-w-lg px-4"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(139,92,246,0.2)]"
              style={{ background: "var(--bg-secondary)" }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06]">
                <Search className="w-4 h-4 text-slate-500 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages and projects..."
                  className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-600 outline-none"
                />
                <button onClick={close} className="text-slate-600 hover:text-slate-400 transition-colors" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[52vh] overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-sm text-slate-600">No results for <span className="text-slate-400">&ldquo;{query}&rdquo;</span></p>
                  </div>
                ) : (
                  <div className="py-2">
                    {["page", "project"].map((type) => {
                      const group = filtered.filter((f) => f.type === type);
                      if (!group.length) return null;
                      return (
                        <div key={type}>
                          <p className="px-4 pt-3 pb-1 text-[10px] font-mono text-slate-600 tracking-widest">
                            {type === "page" ? "PAGES" : "PROJECTS"}
                          </p>
                          {group.map((item) => {
                            const globalIdx = filtered.indexOf(item);
                            const Icon = item.icon;
                            const isSelected = globalIdx === selected;
                            return (
                              <button
                                key={item.id}
                                onClick={() => navigate(item.href)}
                                onMouseEnter={() => setSelected(globalIdx)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                  isSelected ? "bg-violet-600/[0.12]" : "hover:bg-white/[0.03]"
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected ? "bg-violet-600/20 text-violet-300" : "bg-white/[0.05] text-slate-500"
                                }`}>
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className={`text-sm font-medium truncate transition-colors ${isSelected ? "text-slate-100" : "text-slate-300"}`}>
                                    {item.label}
                                  </p>
                                  <p className="text-xs text-slate-600 truncate">{item.sublabel}</p>
                                </div>
                                {isSelected && <ArrowRight className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-white/[0.05] flex items-center gap-4">
                <span className="text-[10px] text-slate-700 font-mono">↑↓ navigate</span>
                <span className="text-[10px] text-slate-700 font-mono">↵ open</span>
                <span className="text-[10px] text-slate-700 font-mono">esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
