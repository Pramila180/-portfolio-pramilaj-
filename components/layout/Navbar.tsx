"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = navItems.slice(0, 7);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }));
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] transition-all duration-500",
          scrolled
            ? "glass border-b border-white/[0.06] shadow-deep"
            : "bg-transparent border-b border-transparent"
        )}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative w-8 h-8">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-violet-500/30 group-hover:border-violet-400/60 transition-colors duration-300" />
              {/* Inner fill */}
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-violet-600/80 to-violet-800/60 group-hover:from-violet-500/90 transition-all duration-300" />
              {/* Initials */}
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-violet-200 font-mono tracking-tight">PJ</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-slate-100 tracking-tight group-hover:text-white transition-colors">Pramila J</span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest mt-0.5">PORTFOLIO</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center p-1 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-xl",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-violet-600/20 border border-violet-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label.split(" ")[0]}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right: ⌘K + mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={openCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] hover:border-violet-500/25 transition-all duration-200 text-slate-500 hover:text-slate-300"
              aria-label="Open command palette"
            >
              <Command className="w-3.5 h-3.5" />
              <kbd className="text-[10px] font-mono tracking-wider">⌘K</kbd>
            </button>

            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] text-slate-400 hover:text-slate-200 transition-all"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[98] bg-bg-primary/80 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 bottom-0 z-[99] w-72 lg:hidden flex flex-col"
              style={{ background: "var(--bg-secondary)", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-slate-500 tracking-widest">NAVIGATION</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/[0.05] text-slate-400 hover:text-slate-200 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-2xl text-sm transition-all",
                          isActive
                            ? "bg-violet-600/15 text-violet-300 border border-violet-500/25"
                            : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                        )}
                      >
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-xs text-slate-600 mt-0.5">{item.description}</p>
                        </div>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-white/[0.06]">
                <button
                  onClick={() => { setMobileOpen(false); openCommandPalette(); }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 text-xs font-mono hover:bg-violet-600/20 transition-colors"
                >
                  <Command className="w-3.5 h-3.5" />
                  Search  ⌘K
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
