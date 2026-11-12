import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "Origin File",
  description: "Background, journey, and areas of interest of Pramila J — CS undergraduate and Full-Stack & IoT Developer.",
};

export default function AboutPage() {
  return <AboutContent />;
}
