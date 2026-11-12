import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Users } from "lucide-react";
import { profile } from "@/data/profile";

const LINKS = [
  { label: "About",        href: "/about" },
  { label: "Projects",     href: "/projects" },
  { label: "Skills",       href: "/skills" },
  { label: "Experience",   href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact",      href: "/contact" },
];

const SOCIALS = [
  { label: "GitHub",         href: profile.github,              icon: Github,   handle: "Pramila180" },
  { label: "LinkedIn",       href: profile.linkedin,            icon: Linkedin, handle: "pramilaj" },
  { label: "Email",          href: `mailto:${profile.email}`,   icon: Mail,     handle: profile.email },
  { label: "Team Portfolio", href: "https://theelitehackers.com", icon: Users,  handle: "theelitehackers.com" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-bold text-slate-100 tracking-tight">Pramila J</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              CS undergraduate building at the intersection of full-stack web, IoT systems, and intelligent applications.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-violet-400 border border-white/[0.07] hover:border-violet-500/30 bg-white/[0.03] hover:bg-violet-500/[0.07] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono text-slate-600 tracking-widest mb-5">NAVIGATE</p>
            <ul className="space-y-2.5">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-violet-500 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-slate-600 tracking-widest mb-5">CONNECT</p>
            <div className="space-y-3">
              {SOCIALS.map(({ label, href, handle, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-slate-500 hover:text-slate-200 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-600 group-hover:text-violet-400 transition-colors shrink-0" />
                  <span className="truncate">{handle}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-violet-400" />
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 pt-6 border-t border-white/[0.05]">
              <p className="text-xs text-slate-600 font-mono">{profile.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-700 font-mono">
            © {new Date().getFullYear()} Pramila J. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-700 font-mono">
            <span>Built with</span>
            <span className="text-violet-500/60 mx-1">Next.js 15</span>
            <span>·</span>
            <span className="text-violet-500/60 mx-1">Framer Motion</span>
            <span>·</span>
            <span className="text-violet-500/60 mx-1">Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
