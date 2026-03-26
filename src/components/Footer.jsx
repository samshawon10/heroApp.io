import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Hero IO" className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="font-semibold">HERO.IO</p>
            <p className="text-xs text-slate-400">Crafted for productive people</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">Copyright © 2026 - All right reserved</p>
        <div className="flex items-center gap-3 text-slate-200">
          <span className="text-sm font-semibold">Social Links</span>
          <Link to="https://shawon-dev-portfolio.vercel.app/#" className="hover:text-violet-300">
            𝕏
          </Link>
          <Link to="https://shawon-dev-portfolio.vercel.app/" className="hover:text-violet-300">
            in
          </Link>
          <Link to="https://shawon-dev-portfolio.vercel.app/" className="hover:text-violet-300">
            f
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;