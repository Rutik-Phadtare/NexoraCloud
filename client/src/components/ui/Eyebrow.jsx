export default function Eyebrow({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-glowSm animate-pulseDot" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
