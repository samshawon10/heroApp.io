import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AppCard } from "../components/AppCard";
import LoadingOverlay from "../components/LoadingOverlay";
import { apps, totalAppCount } from "../data/apps";

const Apps = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("desc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 280);
    return () => clearTimeout(timeout);
  }, [query, sort]);

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matched = q ? apps.filter((app) => app.title.toLowerCase().includes(q)) : apps;
    return [...matched].sort((a, b) => (sort === "asc" ? a.downloads - b.downloads : b.downloads - a.downloads));
  }, [query, sort]);

  return (
    <div className="relative bg-slate-50">
      {loading && <LoadingOverlay label="Filtering apps..." />}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">Our All Applications</h1>
          <p className="mt-2 text-sm text-slate-500">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-slate-900">({totalAppCount}) Apps Found</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="search Apps"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-violet-400 sm:w-72"
            />
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none focus:border-violet-400"
            >
              <option value="desc">High-Low</option>
              <option value="asc">Low-High</option>
            </select>
          </div>
        </div>

        {filteredApps.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200">
            <img src="/assets/Error-App Not Found.png" alt="No app found" className="h-48 w-auto" />
            <h2 className="text-2xl font-bold text-slate-900">No App Found</h2>
            <p className="max-w-md text-sm text-slate-500">Try a different search term or browse the full collection from the homepage.</p>
            <Link to="/" className="rounded-md bg-violet-500 px-5 py-2 text-sm font-semibold text-white">
              Back Home
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Apps;
