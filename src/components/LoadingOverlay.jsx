const LoadingOverlay = ({ label = 'Loading...', hint = 'Preparing your next screen...' }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/18 px-4 backdrop-blur-[6px]" role="status" aria-live="polite" aria-busy="true">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[28px] border border-white/80 bg-white/92 px-6 py-6 shadow-[0_28px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-sky-400 to-fuchsia-500" />
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-200/40 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />

        <div className="relative flex items-center gap-4">
          <div className="relative flex h-[72px] w-[72px] items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-violet-100" aria-hidden="true" />
            <span className="absolute inset-1 rounded-full border-[3px] border-sky-500/80 border-t-transparent animate-spin" aria-hidden="true" />
            <span className="absolute inset-[10px] rounded-full bg-white shadow-[inset_0_1px_5px_rgba(15,23,42,0.08)]" aria-hidden="true" />
            <img src="/assets/logo.svg" alt="HERO.IO" className="relative h-9 w-9 object-contain" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-500">Hero.io</p>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900">{label}</h3>
            <p className="mt-1 text-sm text-slate-500">{hint}</p>
          </div>
        </div>

        <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80">
          <div className="loading-shimmer absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-fuchsia-500" aria-hidden="true" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="loading-dot h-2.5 w-2.5 rounded-full bg-violet-500" />
            <span className="loading-dot h-2.5 w-2.5 rounded-full bg-sky-400" style={{ animationDelay: '0.15s' }} />
            <span className="loading-dot h-2.5 w-2.5 rounded-full bg-fuchsia-500" style={{ animationDelay: '0.3s' }} />
          </div>
          <span>Please wait a moment</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay