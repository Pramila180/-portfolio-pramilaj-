export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  type: "internship" | "hackathon" | "leadership";
  description: string;
  tech: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    id: "elevance-skills",
    role: "Full Stack Development Intern",
    company: "Elevance Skills",
    period: "Jun 2026 – Aug 2026",
    duration: "3 months",
    type: "internship",
    description:
      "Completed full-stack development training; currently working on an assigned full-stack task.",
    tech: ["Full-Stack", "MERN"],
    link: "https://interntask-mauve.vercel.app/login",
  },
  {
    id: "inamigos",
    role: "Web Development Intern",
    company: "InAmigos Foundation",
    period: "May 2026 · 15 Days",
    duration: "15 days",
    type: "internship",
    description: "Developed responsive web pages for NGO initiatives.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://inamigosfoundations-iaf.netlify.app",
  },
  {
    id: "itflex",
    role: "Full Stack Development Intern",
    company: "IT Flex Solution Pvt. Ltd.",
    period: "Dec 2025 – Jan 2026",
    duration: "1 month",
    type: "internship",
    description: "Built a Lead Management System using the MERN stack.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://leadflowtask.netlify.app",
  },
  {
    id: "clarisco",
    role: "MERN Stack Intern",
    company: "Clarisco Solution Pvt. Ltd.",
    period: "Dec 2025 · 21 Days",
    duration: "21 days",
    type: "internship",
    description:
      "Developed responsive web applications using React.js, Node.js, and MongoDB; gained hands-on experience in MERN Stack development.",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
];
