"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "4", label: "Internships Completed" },
  { value: "5+", label: "Projects Shipped" },
  { value: "4", label: "Hackathons Entered" },
  { value: "5", label: "Certifications" },
];

export function StatsBar() {
  return (
    <section className="relative py-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="flex flex-col items-center py-8 px-4"
              style={{ background: "var(--bg-secondary)" }}
            >
              <span className="text-3xl sm:text-4xl font-bold font-mono text-gradient mb-1">
                {s.value}
              </span>
              <span className="text-xs text-slate-600 font-mono tracking-wider text-center">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
