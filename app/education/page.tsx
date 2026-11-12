import type { Metadata } from "next";
import { LearningMatrix } from "@/components/education/LearningMatrix";

export const metadata: Metadata = {
  title: "Learning Matrix",
  description: "Academic journey and qualifications of Pramila J — B.E. Computer Science & Engineering.",
};

export default function EducationPage() {
  return <LearningMatrix />;
}
