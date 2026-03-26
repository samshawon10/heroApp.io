import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
        <img src="/assets/Error-404.png" alt="404" className="h-[320px] w-auto" />
        <h1 className="text-3xl font-bold text-slate-900">Oops, page not found!</h1>
        <p className="text-sm text-slate-500">The page you are looking for is not available.</p>
        <Link to="/" className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
          Go Back!
        </Link>
      </div>
    </div>
  )
}
