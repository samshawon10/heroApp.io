import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `relative px-3 py-2 text-sm font-semibold transition-colors ${
    isActive ? "text-violet-600" : "text-slate-700 hover:text-violet-600"
  }`;

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img src="/assets/logo.png" alt="HERO.IO" className="h-9 w-auto sm:h-10" />
          <span className="text-lg font-bold tracking-tight text-violet-600">Hero.io</span>
        </Link>

        <nav className="hidden items-center justify-center gap-7 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            {({ isActive }) => (
              <span className="relative">
                Home
                {isActive && <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-violet-500" />}
              </span>
            )}
          </NavLink>
          <NavLink to="/apps" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Apps
                {isActive && <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-violet-500" />}
              </span>
            )}
          </NavLink>
          <NavLink to="/installation" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Installation
                {isActive && <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-violet-500" />}
              </span>
            )}
          </NavLink>
        </nav>

        <a
          href="https://github.com/samshawon10"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-600"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/icon-github.svg" alt="GitHub" className="h-4 w-4 invert" />
          <span>Contribute</span>
        </a>
      </div>

      <nav className="flex items-center justify-center gap-6 border-t border-slate-100 px-4 py-2 md:hidden">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/apps" className={navLinkClass}>
          Apps
        </NavLink>
        <NavLink to="/installation" className={navLinkClass}>
          Installation
        </NavLink>
      </nav>
    </header>
  );
}

export { Header };
export default Header;