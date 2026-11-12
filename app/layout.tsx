import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-pramilaj.vercel.app"),
  title: {
    default: "Pramila J — Full-Stack & IoT Developer",
    template: "%s | Pramila J",
  },
  description: profile.summary,
  keywords: [
    "Pramila J",
    "Full Stack Developer",
    "MERN Stack",
    "IoT Developer",
    "React",
    "Node.js",
    "Computer Science",
    "Tamil Nadu",
    "Portfolio",
  ],
  authors: [{ name: "Pramila J", url: "https://portfolio-pramilaj.vercel.app" }],
  creator: "Pramila J",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-pramilaj.vercel.app",
    title: "Pramila J — Full-Stack & IoT Developer",
    description: profile.summary,
    siteName: "Pramila J Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramila J — Full-Stack & IoT Developer",
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#05050a] text-slate-200 antialiased cursor-none">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Background grid */}
          <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none" aria-hidden="true" />

          {/* Ambient glow blobs */}
          <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" aria-hidden="true" />
          <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" aria-hidden="true" />

          <CustomCursor />
          <CommandPalette />
          <Navbar />

          <main className="relative z-10 min-h-screen pt-20">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
