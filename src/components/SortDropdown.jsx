const SortDropdown = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
  >
    <option className="bg-slate-900" value="featured">Featured</option>
    <option className="bg-slate-900" value="high-low">Downloads: High → Low</option>
    <option className="bg-slate-900" value="low-high">Downloads: Low → High</option>
  </select>
);

export default SortDropdown;
