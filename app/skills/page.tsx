import type { Metadata } from "next";
import { TechDNA } from "@/components/skills/TechDNA";

export const metadata: Metadata = {
  title: "Tech DNA",
  description: "Interactive constellation of technical capabilities — skills and technologies used by Pramila J.",
};

export default function SkillsPage() {
  return <TechDNA />;
}
