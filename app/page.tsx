import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { QuickNav } from "@/components/home/QuickNav";
import { StatsBar } from "@/components/home/StatsBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Portal — Pramila J",
  description:
    "Personal digital universe of Pramila J — Full-Stack & IoT Developer building at the intersection of web, AI/ML, and intelligent systems.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProjects />
      <QuickNav />
    </>
  );
}
