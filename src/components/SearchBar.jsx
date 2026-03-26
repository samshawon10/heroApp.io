const SearchBar = ({ value, onChange, isLoading }) => (
  <div className="relative w-full">
    <input
      value={value}
      onChange={onChange}
      placeholder="Search apps"
      className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
    />
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
      {isLoading ? (
        <span className="h-4 w-4 border-2 border-cyan-200/80 border-t-transparent rounded-full inline-block animate-spin" aria-hidden></span>
      ) : (
        "⌕"
      )}
    </span>
  </div>
);

export default SearchBar;
