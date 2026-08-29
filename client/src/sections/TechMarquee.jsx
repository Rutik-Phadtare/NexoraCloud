import { marqueeTechnologies } from "../data/technologies";

export default function TechMarquee() {
  const loop = [...marqueeTechnologies, ...marqueeTechnologies];
  return (
    <section className="border-y border-white/10 bg-panel py-8">
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-mono text-sm tracking-wide text-white/40 transition-colors hover:text-sky"
            >
              <span className="h-1 w-1 rounded-full bg-sky/50" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
