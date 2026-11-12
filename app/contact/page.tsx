import type { Metadata } from "next";
import { OpenChannel } from "@/components/contact/OpenChannel";

export const metadata: Metadata = {
  title: "Open Channel",
  description: "Get in touch with Pramila J — contact links and validated contact form.",
};

export default function ContactPage() {
  return <OpenChannel />;
}
