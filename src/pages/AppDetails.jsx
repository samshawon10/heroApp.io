import { useMemo } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { apps } from "../data/apps";
import { formatDownloads, formatMB } from "../utils/format";

export default function AppDetails() {
  const { installedIds, onInstall } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);
  const app = apps.find((item) => item.id === numericId);
  const installed = installedIds.includes(numericId);

  const chartData = useMemo(() => {
    if (!app) return [];
    return [...app.ratings]
      .sort((a, b) => Number(b.name[0]) - Number(a.name[0]))
      .map((rating) => ({ label: rating.name, value: rating.count }));
  }, [app]);

  if (!app) {
    return (
      <div className="bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
          <img src="/assets/Error-App Not Found.png" alt="App not found" className="h-64" />
          <h1 className="text-3xl font-bold text-slate-900">OPPS!! APP NOT FOUND</h1>
          <p className="text-sm text-slate-500">The app you are requesting is not found in our system. Please try another app.</p>
          <button
            onClick={() => navigate("/apps")}
            className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md"
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex flex-col items-center gap-4">
              <div
                className="h-48 w-48 rounded-xl bg-slate-100 ring-1 ring-slate-200"
                style={{ backgroundImage: `url(${app.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <button
                onClick={() => onInstall(app.id)}
                disabled={installed}
                className={`w-full rounded-lg px-5 py-2 text-sm font-semibold shadow-sm transition ${
                  installed ? "bg-slate-200 text-slate-500" : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`}
              >
                {installed ? "Installed" : `Install Now (${formatMB(app.size)})`}
              </button>
            </div>

            <div className="flex-1 space-y-2">
              <h1 className="text-2xl font-bold text-slate-900">{app.title}</h1>
              <p className="text-sm text-slate-500">
                Developed by <span className="font-semibold text-slate-600">{app.companyName}</span>
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <Metric label="Downloads" value={formatDownloads(app.downloads)} icon="/assets/icon-downloads.png" />
                <Metric label="Average Ratings" value={app.ratingAvg.toFixed(1)} icon="/assets/icon-ratings.png" />
                <Metric label="Total Reviews" value={formatDownloads(app.reviews)} icon="/assets/icon-review.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Ratings</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 80 }}>
                <XAxis type="number" hide domain={[0, "dataMax"]} />
                <YAxis type="category" dataKey="label" tick={{ fill: "#475569", fontSize: 12 }} width={70} />
                <Bar dataKey="value" fill="#f97316" radius={[0, 6, 6, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Description</h2>
          <p className="text-sm leading-relaxed text-slate-700">{app.description}</p>
          <p className="text-sm leading-relaxed text-slate-700">
            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session,
            making your schedule more structured. The built-in analytics show not only how much time you&apos;ve worked but also which tasks consumed the most energy.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks
            milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore.
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, icon }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
      <img src={icon} alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
      <div className="leading-tight">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
        <p className="text-xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
