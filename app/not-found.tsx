"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-mono text-violet-400 tracking-[0.3em] mb-4">ERROR · 404</p>
          <h1 className="text-[8rem] font-black font-mono leading-none text-gradient select-none">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-slate-200 mb-3">Page not found</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            The route you&apos;re looking for doesn&apos;t exist.
            It may have been moved, deleted, or never deployed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }))}
              className="btn-ghost"
            >
              <Search className="w-4 h-4" /> Search ⌘K
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
