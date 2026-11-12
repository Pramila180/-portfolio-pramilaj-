"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/navigation";

const items = navItems.filter((n) => n.href !== "/");

export function QuickNav() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8">
      <div className="rule mb-14" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <Link
              href={item.href}
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-violet-500/[0.05] hover:border-violet-500/25 transition-all duration-300 h-full min-h-[110px]"
            >
              {/* Arrow top-right */}
              <ArrowUpRight className="absolute top-4 right-4 w-3.5 h-3.5 text-slate-700 group-hover:text-violet-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />

              <div>
                <p className="text-[9px] font-mono text-slate-700 tracking-widest mb-2">{item.codename}</p>
                <p className="text-sm font-semibold text-slate-300 group-hover:text-slate-100 transition-colors leading-snug">
                  {item.label}
                </p>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-snug">{item.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
