"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Printer, ExternalLink, MapPin, Mail, Github, Linkedin, Download, Phone, Globe } from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications, awards } from "@/data/achievements";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";

/* ─── Print-only section heading ─────────────────────── */
function PrintSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 print:mb-4">
      <div className="flex items-center gap-3 mb-3 print:mb-2">
        <h2 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase print:text-[10px] print:text-gray-500 print:font-bold print:tracking-widest">
          {title}
        </h2>
        <div className="flex-1 h-px bg-white/[0.06] print:bg-gray-200" />
      </div>
      {children}
    </div>
  );
}

export function IdentityBlueprint() {
  return (
    <>
      {/* ── Print-specific global styles injected via style tag ── */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: #111 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-doc {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          .print-doc * {
            color: inherit !important;
          }
          @page {
            margin: 16mm 14mm;
            size: A4;
          }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 print:py-0 print:max-w-none print:px-0">

        {/* ── Page header (screen only) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="print:hidden"
        >
          <SectionHeader eyebrow="IDENTITY BLUEPRINT" title="Resume" />
        </motion.div>

        {/* ── Action buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10 print:hidden"
        >
          <a
            href="/pramila pramila resume-final.pdf"
            download="Pramila_J_Resume.pdf"
            className="btn-primary group"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download PDF
          </a>
          <button onClick={() => window.print()} className="btn-ghost">
            <Printer className="w-4 h-4" /> Print
          </button>
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <ExternalLink className="w-4 h-4" /> Live Portfolio
          </a>
        </motion.div>

        {/* ── Resume document ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-white/[0.07] overflow-hidden print-doc print:rounded-none print:border-0"
          style={{ background: "var(--surface)" }}
        >
          <div className="p-8 sm:p-12 print:p-0">

            {/* ── HEADER ── */}
            <div className="pb-6 mb-6 border-b border-white/[0.06] print:border-gray-200 print:pb-4 print:mb-4">
              <h1 className="text-3xl font-bold text-slate-100 mb-0.5 print:text-2xl print:text-black print:font-extrabold">
                {profile.name}
              </h1>
              <p className="text-violet-400 font-semibold mb-3 print:text-gray-700 print:text-sm print:font-semibold">
                {profile.title} | {profile.subtitle}
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {[
                  { icon: MapPin,   text: profile.location,               href: undefined },
                  { icon: Phone,    text: profile.phone,                   href: `tel:${profile.phone}` },
                  { icon: Mail,     text: profile.email,                   href: `mailto:${profile.email}` },
                  { icon: Github,   text: "github.com/Pramila180",         href: profile.github },
                  { icon: Linkedin, text: "linkedin.com/in/pramilaj",      href: profile.linkedin },
                  { icon: Globe,    text: "portfolio-pramilaj.vercel.app", href: profile.portfolio },
                ].map(({ icon: Icon, text, href }) =>
                  href ? (
                    <a
                      key={text}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-slate-500 hover:text-violet-300 transition-colors print:text-gray-600 print:text-[10px] print:no-underline"
                    >
                      <Icon className="w-3 h-3 shrink-0 print:text-gray-500" />
                      {text}
                    </a>
                  ) : (
                    <span key={text} className="flex items-center gap-1 text-xs text-slate-500 print:text-gray-600 print:text-[10px]">
                      <Icon className="w-3 h-3 shrink-0 print:text-gray-500" />
                      {text}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* ── SUMMARY ── */}
            <PrintSection title="Summary">
              <p className="text-sm text-slate-400 leading-relaxed print:text-[11px] print:text-gray-700 print:leading-snug">
                {profile.summary}
              </p>
            </PrintSection>

            {/* ── AREAS OF INTEREST ── */}
            <PrintSection title="Areas of Interest">
              <p className="text-sm text-slate-400 print:text-[11px] print:text-gray-700">
                {profile.areasOfInterest.join(" • ")}
              </p>
            </PrintSection>

            {/* ── EDUCATION ── */}
            <PrintSection title="Education">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <p className="text-sm font-semibold text-slate-200 print:text-[11px] print:text-black print:font-bold">
                    B.E. Computer Science & Engineering
                  </p>
                  <p className="text-sm text-slate-500 print:text-[10px] print:text-gray-600">
                    Kamaraj College of Engineering & Technology, Virudhunagar, Tamil Nadu
                  </p>
                </div>
                <div className="text-right mt-1 sm:mt-0 shrink-0 ml-4">
                  <p className="text-xs font-mono text-slate-600 print:text-[10px] print:text-gray-600">2024 – 2028</p>
                  <p className="text-xs font-mono text-violet-400 print:text-gray-700">CGPA: 7.6 / 10</p>
                </div>
              </div>
            </PrintSection>

            {/* ── INTERNSHIPS ── */}
            <PrintSection title="Internships">
              <div className="space-y-4 print:space-y-2.5">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <p className="text-sm font-semibold text-slate-200 print:text-[11px] print:text-black print:font-bold">
                          {exp.role} — {exp.company}
                        </p>
                        <p className="text-sm text-slate-400 mt-0.5 print:text-[10px] print:text-gray-700 print:leading-snug">
                          {exp.description}
                        </p>
                        {exp.link && (
                          <span className="text-xs text-cyan-400/70 font-mono mt-0.5 inline-block print:text-[9px] print:text-gray-500">
                            {exp.link.replace("https://", "")}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-600 shrink-0 mt-1 sm:mt-0 sm:ml-4 print:text-[10px] print:text-gray-500 print:whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PrintSection>

            {/* ── SKILLS ── */}
            <PrintSection title="Skills">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 print:gap-y-1">
                {[
                  { label: "Programming",        skills: "Python, Java, C, C++" },
                  { label: "Databases",          skills: "MongoDB, MySQL" },
                  { label: "Web Technologies",   skills: "HTML, CSS, JavaScript, React.js, Node.js" },
                  { label: "Dev Tools",          skills: "Git, GitHub, VS Code, Postman, Figma" },
                  { label: "Cloud & Deployment", skills: "Vercel, DigitalOcean, Cloudflare" },
                  { label: "Soft Skills",        skills: "Leadership, Teamwork, Communication" },
                ].map(({ label, skills }) => (
                  <p key={label} className="text-sm print:text-[10px]">
                    <span className="font-semibold text-slate-200 print:text-black">{label}: </span>
                    <span className="text-slate-500 print:text-gray-600">{skills}</span>
                  </p>
                ))}
              </div>
            </PrintSection>

            {/* ── PROJECTS ── */}
            <PrintSection title="Projects">
              <div className="space-y-3 print:space-y-2">
                {projects.map((p) => (
                  <div key={p.slug}>
                    <p className="text-sm font-semibold text-slate-200 print:text-[11px] print:text-black print:font-bold">
                      {p.title}{" "}
                      <span className="font-normal text-slate-500 print:text-gray-600">
                        — {p.tech.join(", ")}
                      </span>
                    </p>
                    <p className="text-sm text-slate-400 mt-0.5 leading-relaxed print:text-[10px] print:text-gray-700 print:leading-snug">
                      {p.description}
                    </p>
                    {p.links.live && (
                      <span className="text-xs text-cyan-400/70 font-mono print:text-[9px] print:text-gray-500">
                        {p.links.live}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </PrintSection>

            {/* ── CERTIFICATIONS ── */}
            <PrintSection title="Certifications">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 print:gap-y-0.5">
                {certifications.map((c) => (
                  <p key={c.id} className="text-sm text-slate-400 print:text-[10px] print:text-gray-700">
                    <span className="font-semibold text-slate-200 print:text-black">{c.issuer}: </span>
                    {c.title} ({c.date})
                  </p>
                ))}
              </div>
            </PrintSection>

            {/* ── AWARDS & ACHIEVEMENTS ── */}
            <PrintSection title="Awards & Achievements">
              <ul className="space-y-1 print:space-y-0.5">
                {awards.map((a) => (
                  <li key={a.id} className="text-sm text-slate-400 print:text-[10px] print:text-gray-700 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 print:bg-gray-400 shrink-0" />
                    <span>
                      <span className="font-semibold text-slate-200 print:text-black">{a.title}</span>
                      {a.description ? ` — ${a.description}` : ""}
                      <span className="text-slate-600 print:text-gray-500"> ({a.issuer}, {a.date})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </PrintSection>

          </div>
        </motion.div>

        {/* ── Bottom nav (screen only) ── */}
        <div className="mt-8 flex flex-wrap gap-3 print:hidden">
          {[
            ["Projects",   "/projects"],
            ["Experience", "/experience"],
            ["Skills",     "/skills"],
            ["Contact",    "/contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="btn-ghost text-sm">{label}</Link>
          ))}
        </div>
      </div>
    </>
  );
}
