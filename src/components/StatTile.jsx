export function StatTile({ label, value, sub, tone = 'light' }) {
  const isDark = tone === 'dark'
  const textMain = isDark ? 'text-white' : 'text-slate-900'
  const textSub = isDark ? 'text-white/80' : 'text-slate-500'
  const bg = isDark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-white/70 ring-1 ring-slate-100'

  return (
    <div className={`rounded-xl p-4 text-center shadow-sm ${bg}`}>
      <p className={`text-xs uppercase tracking-[0.2em] ${textSub}`}>{label}</p>
      <p className={`text-4xl font-semibold ${textMain}`}>{value}</p>
      {sub && <p className={`text-xs ${textSub}`}>{sub}</p>}
    </div>
  )
}
