import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Eyebrow from "../components/ui/Eyebrow";
import { industries } from "../data/industries";

export default function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId);

  return (
    <section id="industries" className="relative bg-panel py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Eyebrow>Industries</Eyebrow>
        <h2 className="max-w-xl font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
          Built for teams who can't afford infrastructure surprises.
        </h2>

        <div className="mt-14 flex flex-wrap gap-2.5">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveId(ind.id)}
              className={`rounded-full border px-5 py-2.5 font-body text-sm font-medium transition-all duration-300 ${
                activeId === ind.id
                  ? "border-sky/50 bg-sky/10 text-white"
                  : "border-white/10 text-white/55 hover:border-white/25 hover:text-white/85"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-2xl border border-white/10 bg-ink p-8 lg:p-10"
          >
            <p className="font-display text-xl font-semibold leading-snug text-sky sm:text-2xl">
              “{active.quote}”
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              {active.detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
