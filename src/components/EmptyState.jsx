const EmptyState = ({ title = "No data", message, actionSlot }) => (
  <div className="glass rounded-3xl border border-dashed border-white/20 p-8 text-center">
    <p className="text-xl font-semibold text-white mb-2">{title}</p>
    {message && <p className="text-sm text-white/60 mb-4">{message}</p>}
    {actionSlot}
  </div>
);

export default EmptyState;
