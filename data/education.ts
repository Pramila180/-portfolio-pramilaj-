export type Education = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: "ongoing" | "completed";
};

export const education: Education[] = [
  {
    id: "kcet",
    degree: "B.E.",
    field: "Computer Science & Engineering",
    institution: "Kamaraj College of Engineering & Technology",
    location: "Virudhunagar, Tamil Nadu",
    period: "2024 – 2028",
    cgpa: "7.6 / 10",
    status: "ongoing",
  },
];
