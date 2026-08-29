import { useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../components/ui/Eyebrow";
import { techGroups } from "../data/technologies";

export default function TechEcosystem() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-panel py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Technology Ecosystem</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            One connected stack, from Linux to security.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <motion.div
              key={group.label}
              onMouseEnter={() => setHovered(group.label)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl border border-white/10 bg-ink p-6 transition-colors duration-300 hover:border-sky/30"
            >
              <h3 className="font-display text-base font-bold text-white">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors duration-300 ${
                      hovered === group.label
                        ? "border-sky/40 text-sky"
                        : "border-white/10 text-white/45"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
