export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "award" | "certification" | "hackathon" | "recognition";
  description?: string;
};

export const certifications: Achievement[] = [
  {
    id: "aicte-uhv",
    title: "Universal Human Values Webinar",
    issuer: "AICTE",
    date: "Oct 2024",
    type: "certification",
  },
  {
    id: "infosys-java",
    title: "Programming in Java",
    issuer: "Infosys & NPTEL",
    date: "Oct 2025",
    type: "certification",
  },
  {
    id: "mongodb-basics",
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "Aug 2025",
    type: "certification",
  },
  {
    id: "great-learning-cpp",
    title: "C++ and Advanced Excel",
    issuer: "Great Learning",
    date: "Self-Learn",
    type: "certification",
  },
  {
    id: "nptel-distributed",
    title: "Distributed Systems",
    issuer: "NPTEL",
    date: "2025",
    type: "certification",
  },
];

export const awards: Achievement[] = [
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    issuer: "Government of India",
    date: "2025",
    type: "hackathon",
    description: "Participated with an IoT-based project; internally shortlisted.",
  },
  {
    id: "ramco-hackathon",
    title: "32-Hour Hackathon — Runner-Up",
    issuer: "Ramco College",
    date: "2025",
    type: "award",
    description: "Runner-Up; ₹5,000 cash prize and a hoodie.",
  },
  {
    id: "sns-hackathon",
    title: "30-Hour Hackathon — Sight Into Touch",
    issuer: "SNS College of Technology, Coimbatore",
    date: "2025",
    type: "hackathon",
    description: "Developed 'Sight Into Touch' — gesture-controlled assistive vehicle interface.",
  },
  {
    id: "reccsar-hackathon",
    title: "Online Hackathon",
    issuer: "RECCSAR Pvt. Ltd., Madurai",
    date: "3–4 Oct 2025",
    type: "hackathon",
  },
  {
    id: "miss-ryla",
    title: "MISS RYLA",
    issuer: "Rotaract Club",
    date: "Feb 2025",
    type: "recognition",
    description: "Leadership and youth recognition award.",
  },
  {
    id: "marathon-2024",
    title: "Marathon Winner — 2.5 km",
    issuer: "Marathon Event",
    date: "2024",
    type: "award",
  },
  {
    id: "marathon-2025",
    title: "Marathon Winner — 5 km",
    issuer: "Marathon Event",
    date: "2025",
    type: "award",
  },
  {
    id: "marathon-2026",
    title: "Marathon — 8 km Silver Coin",
    issuer: "Marathon Event",
    date: "2026",
    type: "award",
  },
];

export const allAchievements: Achievement[] = [...awards, ...certifications];
