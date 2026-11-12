import type { Metadata } from "next";
import { IdentityBlueprint } from "@/components/resume/IdentityBlueprint";

export const metadata: Metadata = {
  title: "Identity Blueprint",
  description: "Resume preview and download for Pramila J — Full-Stack & IoT Developer.",
};

export default function ResumePage() {
  return <IdentityBlueprint />;
}
