"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <p className="text-xs font-mono text-red-400 tracking-[0.3em] mb-4">SYSTEM ERROR</p>
        <div className="w-14 h-14 rounded-full border border-red-500/30 bg-red-500/8 flex items-center justify-center mx-auto mb-6">
          <span className="text-xl">⚠</span>
        </div>
        <h2 className="text-xl font-bold text-slate-200 mb-3">Something went wrong</h2>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          An unexpected error occurred.
          {error?.digest && <span className="block mt-1 text-slate-700 font-mono text-xs">digest: {error.digest}</span>}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn-primary"><RefreshCw className="w-4 h-4" /> Retry</button>
          <Link href="/" className="btn-ghost"><Home className="w-4 h-4" /> Go Home</Link>
        </div>
      </motion.div>
    </div>
  );
}
