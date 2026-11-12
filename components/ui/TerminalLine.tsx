"use client";

import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  delay?: number;
  speed?: number;
};

export function TerminalLines({ lines, delay = 0, speed = 30 }: Props) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar <= line.length) {
      const t = setTimeout(() => {
        if (currentChar === 0) {
          setDisplayed((prev) => [...prev, ""]);
        } else {
          setDisplayed((prev) => {
            const next = [...prev];
            next[next.length - 1] = line.slice(0, currentChar);
            return next;
          });
        }
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [started, currentLine, currentChar, lines, speed]);

  return (
    <div className="font-mono text-sm space-y-1">
      {displayed.map((line, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="text-violet-500 shrink-0">❯</span>
          <span className="text-slate-300">{line}</span>
        </div>
      ))}
      {started && currentLine < lines.length && (
        <div className="flex items-start gap-2">
          <span className="text-violet-500 shrink-0">❯</span>
          <span className="text-slate-300">
            {displayed[displayed.length - 1] ?? ""}
            <span className="animate-pulse text-violet-400">█</span>
          </span>
        </div>
      )}
    </div>
  );
}
