import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  codename?: string; /* legacy compat */
};

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "left",
  className,
  codename,
}: Props) {
  const label = eyebrow ?? codename;
  return (
    <div className={cn(align === "center" && "text-center", "mb-14", className)}>
      {label && (
        <div className={cn(
          "inline-flex items-center gap-2 mb-4",
          align === "center" && "justify-center"
        )}>
          <div className="w-5 h-px bg-violet-500/60" />
          <span className="text-xs font-mono text-violet-400 tracking-[0.2em]">
            {label}
          </span>
          <div className="w-5 h-px bg-violet-500/60" />
        </div>
      )}
      <h1 className={cn(
        "display-md text-slate-100 leading-tight",
        align === "center" && "mx-auto"
      )}>
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-gradient">{titleHighlight}</span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className={cn(
          "mt-4 text-slate-400 text-base sm:text-lg leading-relaxed",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
