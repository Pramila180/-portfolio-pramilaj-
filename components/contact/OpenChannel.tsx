"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: "hover:text-violet-300 hover:border-violet-500/30",
  },
  {
    label: "GitHub",
    value: "github.com/Pramila180",
    href: profile.github,
    icon: Github,
    accent: "hover:text-slate-200 hover:border-white/20",
    ext: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pramilaj",
    href: profile.linkedin,
    icon: Linkedin,
    accent: "hover:text-cyan-300 hover:border-cyan-500/30",
    ext: true,
  },
  {
    label: "Portfolio",
    value: "portfolio-pramilaj.vercel.app",
    href: profile.portfolio,
    icon: ExternalLink,
    accent: "hover:text-fuchsia-300 hover:border-fuchsia-500/30",
    ext: true,
  },
  {
    label: "Team Portfolio",
    value: "theelitehackers.com",
    href: "https://theelitehackers.com",
    icon: ExternalLink,
    accent: "hover:text-amber-300 hover:border-amber-500/30",
    ext: true,
  },
];

export function OpenChannel() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          eyebrow="OPEN CHANNEL"
          title="Get in"
          titleHighlight="Touch"
          subtitle="Open to internships, collaborations, and interesting conversations."
        />
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 mb-12 text-xs font-mono text-slate-600"
      >
        <MapPin className="w-3.5 h-3.5 text-violet-400/60" />
        {profile.location}
      </motion.div>

      {/* Contact links */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid sm:grid-cols-2 gap-3"
      >
        {LINKS.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.ext ? "_blank" : undefined}
              rel={link.ext ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className={`group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-200 ${link.accent}`}
            >
              <div className="w-11 h-11 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-slate-500 group-hover:text-current transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono text-slate-700 mb-0.5 tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm text-slate-300 group-hover:text-current transition-colors truncate font-medium">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-current opacity-0 group-hover:opacity-100 transition-all shrink-0" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Availability note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-8 p-5 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04]"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          <span className="text-xs font-mono text-emerald-400 tracking-widest">AVAILABLE</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Currently open to internship opportunities and project collaborations.
          The best way to reach me is via{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
          >
            {profile.email}
          </a>
          . I typically respond within 24–48 hours.
        </p>
      </motion.div>
    </div>
  );
}
