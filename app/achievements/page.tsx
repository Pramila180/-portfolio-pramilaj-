import type { Metadata } from "next";
import { MilestoneVault } from "@/components/achievements/MilestoneVault";

export const metadata: Metadata = {
  title: "Milestone Vault",
  description: "Awards, certifications, hackathons, and recognitions earned by Pramila J.",
};

export default function AchievementsPage() {
  return <MilestoneVault />;
}
