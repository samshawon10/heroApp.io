import { Link } from 'react-router-dom'
import { formatDownloads, formatMB } from '../utils/format'

export function AppCard({ app }) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-40 w-full items-center justify-center bg-slate-100 p-3">
        <img
          src={app.image || app.icon || '/assets/logo.png'}
          alt={app.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="min-h-[3rem]">
          <p className="text-sm font-semibold leading-5 text-slate-900">{app.title}</p>
        </div>
        <p className="text-xs text-slate-500">{app.companyName}</p>
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1 text-emerald-600">
            <img src="/assets/icon-downloads.png" alt="downloads" className="h-4 w-4" />
            {formatDownloads(app.downloads)}
          </span>
          <span className="flex items-center gap-1 text-amber-500">
            <img src="/assets/icon-ratings.png" alt="rating" className="h-4 w-4" />
            {app.ratingAvg.toFixed(1)}
          </span>
          <span className="text-slate-500">{formatMB(app.size)}</span>
        </div>
      </div>
    </Link>
  )
}