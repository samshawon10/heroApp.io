import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { apps } from '../data/apps'
import { formatDownloads, formatMB } from '../utils/format'

export default function Installation() {
  const { installedIds, onUninstall } = useOutletContext()
  const installedApps = apps.filter((app) => installedIds.includes(app.id))

  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 rounded-2xl bg-white px-8 py-10 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-slate-900">Your Installed Apps</h1>
            <p className="text-sm text-slate-500">Explore All Trending Apps on the Market developed by us</p>
          </div>
          <SortRow installedApps={installedApps} onUninstall={onUninstall} />
        </div>
      </div>
    </div>
  )
}

function SortRow({ installedApps, onUninstall }) {
  const [sort, setSort] = useState('desc')
  const sorted = [...installedApps].sort((a, b) => (sort === 'desc' ? b.downloads - a.downloads : a.downloads - b.downloads))

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
        <p>
          {sorted.length} {sorted.length === 1 ? 'App' : 'Apps'} Found
        </p>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-violet-400 focus:outline-none"
        >
          <option value="desc">High-Low (Downloads)</option>
          <option value="asc">Low-High (Downloads)</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-slate-200">
          <img src="/assets/App-Error.png" alt="No installs" className="h-40" />
          <h3 className="text-xl font-semibold text-slate-900">No installations yet</h3>
          <p className="text-sm text-slate-500">Browse the store and install your first app.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sorted.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-slate-200">
                  <img src={app.icon || app.image} alt={app.title} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{app.title}</p>
                  <p className="text-xs text-slate-500">{app.companyName}</p>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-600">
                      <img src="/assets/icon-downloads.png" alt="downloads" className="h-4 w-4" />
                      {formatDownloads(app.downloads)}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500">
                      <img src="/assets/icon-ratings.png" alt="rating" className="h-4 w-4" />
                      {app.ratingAvg.toFixed(1)}
                    </span>
                    <span>{formatMB(app.size)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onUninstall(app.id)}
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}