import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Layers,
  Terminal,
  Clock,
  ListChecks,
  ChevronDown,
} from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";
import { futureVision } from "../data/academy";

const capabilityStats = [
  { icon: Layers, value: "8", label: "Core Service Areas" },
  { icon: Terminal, value: "6", label: "Linux Distributions" },
  { icon: Clock, value: "24×7", label: "NOC Coverage" },
  { icon: ListChecks, value: "6-Step", label: "Assess → Report Process" },
];

export default function FutureVision() {
  const [activeId, setActiveId] = useState(null);

  const toggleStage = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <div>
            <Eyebrow>About Nexora Cloud</Eyebrow>

            <h2 className="max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              A specialized Linux, cloud operations and automation company.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              Nexora Cloud Technologies operates as the
              infrastructure layer for businesses that would rather focus on
              their product than their servers. Our direction moves from Linux
              administration toward full platform engineering:
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs text-white/45">
              {[
                "Linux",
                "Cloud",
                "DevOps",
                "Security",
                "Automation",
                "Platform Engineering",
              ].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 transition-colors duration-300 hover:border-sky/30 hover:text-white/70">
                    {s}
                  </span>

                  {i < arr.length - 1 && (
                    <span className="text-white/20">→</span>
                  )}
                </span>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-royal/50 pl-5 font-display text-lg font-semibold leading-snug text-sky sm:text-xl">
              “Building, securing and automating the infrastructure that
              keeps businesses running.”
            </blockquote>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {capabilityStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="
                    rounded-xl border border-white/10
                    bg-white/[0.02] p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-white/20
                    hover:bg-white/[0.035]
                  "
                >
                  <Icon size={16} className="text-sky2" />

                  <div className="mt-2.5 font-display text-xl font-bold text-white">
                    {value}
                  </div>

                  <div className="mt-0.5 text-[11px] leading-snug text-white/40">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="eyebrow">Future Direction</span>

            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">
              From IT services to infrastructure technology.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/45">
              Explore how Nexora Cloud is evolving its infrastructure capabilities
              across operations, automation and platform engineering.
            </p>

            {/* ACCORDION */}
            <div className="mt-8 flex flex-col gap-2">
              {futureVision.map((stage) => {
                const isActive = stage.id === activeId;

                return (
                  <div
                    key={stage.id}
                    className={`
                      overflow-hidden rounded-xl border
                      transition-all duration-300
                      ${
                        isActive
                          ? "border-sky/35 bg-sky/[0.045]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    {/* HEADER / DROPDOWN BUTTON */}
                    <button
                      type="button"
                      onClick={() => toggleStage(stage.id)}
                      aria-expanded={isActive}
                      className="group flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <span
                          className={`
                            shrink-0 font-mono text-xs
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-sky"
                                : "text-white/30 group-hover:text-white/50"
                            }
                          `}
                        >
                          {stage.index}
                        </span>

                        <span
                          className={`
                            truncate font-body text-sm font-medium
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/65 group-hover:text-white/90"
                            }
                          `}
                        >
                          {stage.name}
                        </span>
                      </span>

                      <span className="ml-4 flex shrink-0 items-center gap-3">
                        {!isActive && (
                          <span className="hidden text-[10px] uppercase tracking-[0.12em] text-white/20 sm:block">
                            Explore
                          </span>
                        )}

                        <ChevronDown
                          size={16}
                          className={`
                            text-white/30
                            transition-all duration-300
                            group-hover:text-white/60
                            ${
                              isActive
                                ? "rotate-180 text-sky"
                                : "rotate-0"
                            }
                          `}
                        />
                      </span>
                    </button>

                    {/* EXPANDED CONTENT */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.35,
                              ease: [0.16, 1, 0.3, 1],
                            },
                            opacity: {
                              duration: 0.2,
                            },
                          }}
                        >
                          <div className="px-5 pb-5">
                            <div
                              className="
                                border-t border-white/[0.07]
                                pt-4
                              "
                            >
                              <div className="relative overflow-hidden rounded-lg border border-sky/15 bg-black/10 p-4 sm:p-5">
                                <div
                                  className="
                                    bg-grid pointer-events-none
                                    absolute inset-0 opacity-15
                                    [mask-image:radial-gradient(
                                      ellipse_100%_70%_at_0%_0%,
                                      black,
                                      transparent
                                    )]
                                  "
                                />

                                <div className="relative">
                                  <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-glowSm" />

                                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sky2">
                                      {stage.tag}
                                    </span>
                                  </div>

                                  <h4 className="mt-3 font-display text-lg font-bold text-white">
                                    {stage.name}
                                  </h4>

                                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                                    {stage.summary}
                                  </p>

                                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    {stage.capabilities.map((capability) => (
                                      <li
                                        key={capability}
                                        className="
                                          flex items-center gap-2
                                          text-[13px] text-white/55
                                        "
                                      >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-sky2" />
                                        {capability}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/35">
              Nexora Cloud Control Center is our future platform direction, built
              on the operational practices we run today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}