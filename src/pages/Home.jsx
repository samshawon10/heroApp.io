import { Link } from 'react-router-dom'
import { apps, totalAppCount } from '../data/apps'
import { AppCard } from '../components/AppCard'
import { StatTile } from '../components/StatTile'

export default function Home() {
  const trending = apps.slice(0, 8)

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[#f4f4f6] pb-20 pt-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-600">Hero IO App Store</p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            We Build <span className="text-purple-600">Productive</span> Apps
          </h1>
          <p className="max-w-3xl text-base text-slate-500">
            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/google-play.svg" alt="Google Play" className="h-5 w-5" />
              Google Play
            </a>
            <a
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/app-store.svg" alt="App Store" className="h-5 w-5" />
              App Store
            </a>
          </div>

          <div className="relative flex w-full justify-center pt-10">
            <img src="/assets/hero.png" alt="Hero illustration" className="relative z-10 w-full max-w-[720px]" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#7c3aed] via-[#7b3fff] to-[#22c1f8] py-12 text-white shadow-lg">
        <div className="mx-auto max-w-5xl px-6">
          <h3 className="text-center text-xl font-semibold">Trusted By Millions, Built For You</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <StatTile label="Total Downloads" value="29.6M" sub="21% More Than Last Month" tone="dark" />
            <StatTile label="Total Reviews" value="906K" sub="46% More Than Last Month" tone="dark" />
            <StatTile label="Active Apps" value="132+" sub="31 More Will Launch" tone="dark" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Trending Apps</h2>
          <p className="text-sm text-slate-500">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/apps"
            className="rounded-full bg-gradient-to-r from-purple-600 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow"
          >
            Show All
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">
          Showing {trending.length} of {totalAppCount} apps
        </p>
      </section>
    </div>
  )
}
