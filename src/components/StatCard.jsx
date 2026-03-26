import { formatNumber } from "../utils/formatters";

const StatCard = ({ label, value, icon }) => (
  <div className="glass rounded-2xl p-4 border border-white/10 shadow-lg">
    <div className="flex items-center justify-between mb-2 text-white/70 text-sm">
      <span>{label}</span>
      {icon && <span aria-hidden className="text-lg">{icon}</span>}
    </div>
    <p className="text-2xl font-semibold text-white">{typeof value === "number" ? formatNumber(value) : value}</p>
  </div>
);

export default StatCard;
