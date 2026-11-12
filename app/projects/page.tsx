import type { Metadata } from "next";
import { BuildLab } from "@/components/projects/BuildLab";

export const metadata: Metadata = {
  title: "Build Lab",
  description: "Searchable, filterable project universe — all projects by Pramila J.",
};

export default function ProjectsPage() {
  return <BuildLab />;
}
