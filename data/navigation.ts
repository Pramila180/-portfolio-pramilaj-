export type NavItem = {
  label: string;
  codename: string;
  href: string;
  description: string;
  icon: string;
  shortcut?: string;
};

export const navItems: NavItem[] = [
  {
    label: "The Portal",
    codename: "HOME",
    href: "/",
    description: "Identity & featured work",
    icon: "Zap",
    shortcut: "G H",
  },
  {
    label: "Origin File",
    codename: "ABOUT",
    href: "/about",
    description: "Background & journey",
    icon: "User",
    shortcut: "G A",
  },
  {
    label: "Build Lab",
    codename: "PROJECTS",
    href: "/projects",
    description: "Project universe",
    icon: "FlaskConical",
    shortcut: "G P",
  },
  {
    label: "Tech DNA",
    codename: "SKILLS",
    href: "/skills",
    description: "Technical capabilities",
    icon: "Dna",
    shortcut: "G S",
  },
  {
    label: "Mission Log",
    codename: "EXPERIENCE",
    href: "/experience",
    description: "Internships & activities",
    icon: "Briefcase",
    shortcut: "G E",
  },
  {
    label: "Learning Matrix",
    codename: "EDUCATION",
    href: "/education",
    description: "Academic journey",
    icon: "GraduationCap",
    shortcut: "G L",
  },
  {
    label: "Milestone Vault",
    codename: "ACHIEVEMENTS",
    href: "/achievements",
    description: "Awards & certifications",
    icon: "Trophy",
    shortcut: "G M",
  },
  {
    label: "Identity Blueprint",
    codename: "RESUME",
    href: "/resume",
    description: "Resume preview & download",
    icon: "FileText",
    shortcut: "G R",
  },
  {
    label: "Open Channel",
    codename: "CONTACT",
    href: "/contact",
    description: "Get in touch",
    icon: "Radio",
    shortcut: "G C",
  },
];
