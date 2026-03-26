const LoadingOverlay = ({ label = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur">
      <div className="glass glow-ring rounded-2xl px-6 py-4 flex items-center gap-3 border border-white/10">
        <span className="h-10 w-10 rounded-full border-2 border-sky-300/70 border-t-transparent animate-spin" aria-hidden="true"></span>
        <p className="text-lg font-semibold tracking-tight">{label}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
