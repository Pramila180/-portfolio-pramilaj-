export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
          <div className="absolute inset-0 rounded-full border border-transparent border-t-violet-500 animate-spin" />
        </div>
        <span className="text-[10px] font-mono text-slate-700 tracking-widest animate-pulse">LOADING</span>
      </div>
    </div>
  );
}
