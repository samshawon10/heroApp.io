import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 404;

  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-center">
        <img src="/assets/Error-404.png" alt="404" className="h-56 w-auto object-contain" />
        <div className="space-y-2">
          <p className="text-sm text-slate-500">{status === 404 ? "Page not found" : "Something went wrong"}</p>
          <h1 className="text-3xl font-bold text-slate-900">Oops! {status}</h1>
          <p className="max-w-xl text-slate-500">
            The route you tried to reach isn&apos;t available. Try going back home or exploring the apps gallery.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/" className="rounded-md bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-600">
            Back Home
          </Link>
          <Link to="/apps" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Browse Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
