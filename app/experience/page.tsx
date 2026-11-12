import type { Metadata } from "next";
import { MissionLog } from "@/components/experience/MissionLog";

export const metadata: Metadata = {
  title: "Mission Log",
  description: "Internships, experience, and professional activities of Pramila J.",
};

export default function ExperiencePage() {
  return <MissionLog />;
}
