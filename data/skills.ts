export type Skill = {
  name: string;
  category: string;
  level: "core" | "proficient" | "familiar";
};

export type SkillCategory = {
  id: string;
  label: string;
  color: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    color: "#8b5cf6",
    skills: [
      { name: "Python", category: "programming", level: "core" },
      { name: "Java", category: "programming", level: "proficient" },
      { name: "C", category: "programming", level: "proficient" },
      { name: "C++", category: "programming", level: "proficient" },
    ],
  },
  {
    id: "web",
    label: "Web Technologies",
    color: "#22d3ee",
    skills: [
      { name: "HTML", category: "web", level: "core" },
      { name: "CSS", category: "web", level: "core" },
      { name: "JavaScript", category: "web", level: "core" },
      { name: "React.js", category: "web", level: "core" },
      { name: "Node.js", category: "web", level: "core" },
      { name: "Angular", category: "web", level: "proficient" },
      { name: "Express.js", category: "web", level: "proficient" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#f59e0b",
    skills: [
      { name: "MongoDB", category: "databases", level: "core" },
      { name: "MySQL", category: "databases", level: "proficient" },
    ],
  },
  {
    id: "devtools",
    label: "Dev Tools",
    color: "#10b981",
    skills: [
      { name: "Git", category: "devtools", level: "core" },
      { name: "GitHub", category: "devtools", level: "core" },
      { name: "VS Code", category: "devtools", level: "core" },
      { name: "Postman", category: "devtools", level: "proficient" },
      { name: "Figma", category: "devtools", level: "familiar" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Deployment",
    color: "#ef4444",
    skills: [
      { name: "Vercel", category: "cloud", level: "core" },
      { name: "DigitalOcean", category: "cloud", level: "proficient" },
      { name: "Cloudflare", category: "cloud", level: "proficient" },
      { name: "Netlify", category: "cloud", level: "core" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    color: "#ec4899",
    skills: [
      { name: "Leadership", category: "soft", level: "core" },
      { name: "Teamwork", category: "soft", level: "core" },
      { name: "Communication", category: "soft", level: "core" },
    ],
  },
];

export const allSkills: Skill[] = skillCategories.flatMap((c) => c.skills);
