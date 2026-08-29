import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";
import { services } from "../data/services";

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

  const active = services.find((s) => s.id === activeId);

  const toggleService = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-panel py-20 sm:py-24 lg:py-28 xl:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <Eyebrow>Services</Eyebrow>

        <h2
          className="
            max-w-2xl
            font-display
            text-3xl
            font-bold
            leading-[1.12]
            text-white
            sm:text-4xl
            lg:max-w-xl
            lg:text-[2.75rem]
          "
        >
          Everything your infrastructure needs, run by specialists.
        </h2>

        {/* =========================
            MOBILE / TABLET ACCORDION
            ========================= */}
        <div className="mt-10 block lg:hidden">
          <div className="flex flex-col gap-2">
            {services.map((service) => {
              const isOpen = service.id === activeId;

              return (
                <div
                  key={service.id}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-sky/35 bg-sky/[0.045]"
                        : "border-white/10 bg-ink/40"
                    }
                  `}
                >
                  {/* Dropdown Header */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-4
                      py-4
                      text-left
                      sm:px-5
                      sm:py-[18px]
                    "
                  >
                    <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <span
                        className={`
                          shrink-0
                          font-mono
                          text-[11px]
                          transition-colors
                          sm:text-xs
                          ${
                            isOpen
                              ? "text-sky"
                              : "text-white/30"
                          }
                        `}
                      >
                        {service.index}
                      </span>

                      <span
                        className={`
                          min-w-0
                          font-body
                          text-sm
                          font-semibold
                          leading-snug
                          transition-colors
                          sm:text-[15px]
                          ${
                            isOpen
                              ? "text-white"
                              : "text-white/65 group-hover:text-white"
                          }
                        `}
                      >
                        {service.name}
                      </span>
                    </span>

                    <ChevronDown
                      size={18}
                      strokeWidth={1.8}
                      className={`
                        shrink-0
                        text-white/40
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 text-sky"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {/* Dropdown Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
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
                        <div className="relative border-t border-white/10 px-4 pb-5 pt-5 sm:px-5 sm:pb-6">
                          {/* Background grid */}
                          <div
                            className="
                              bg-grid
                              pointer-events-none
                              absolute
                              inset-0
                              opacity-20
                              [mask-image:radial-gradient(ellipse_100%_80%_at_0%_0%,black,transparent)]
                            "
                          />

                          <div className="relative">
                            {/* Service heading */}
                            <div className="mb-5">
                              <h3
                                className="
                                  font-display
                                  text-xl
                                  font-bold
                                  text-white
                                  sm:text-2xl
                                "
                              >
                                {service.name}
                              </h3>

                              <p
                                className="
                                  mt-1.5
                                  font-mono
                                  text-[10px]
                                  tracking-wide
                                  text-white/40
                                  sm:text-[11px]
                                "
                              >
                                {service.tag}
                              </p>

                              <p
                                className="
                                  mt-4
                                  max-w-2xl
                                  text-sm
                                  leading-relaxed
                                  text-white/55
                                  sm:text-[15px]
                                "
                              >
                                {service.summary}
                              </p>
                            </div>

                            {/* Metrics */}
                            <div
                              className="
                                grid
                                grid-cols-1
                                gap-2
                                sm:grid-cols-3
                                sm:gap-3
                              "
                            >
                              {service.metrics.map((metric) => (
                                <div
                                  key={metric.label}
                                  className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    p-3
                                    sm:p-3.5
                                  "
                                >
                                  <div
                                    className="
                                      font-display
                                      text-sm
                                      font-bold
                                      text-sky
                                      sm:text-base
                                    "
                                  >
                                    {metric.value}
                                  </div>

                                  <div
                                    className="
                                      mt-1
                                      font-mono
                                      text-[9px]
                                      uppercase
                                      tracking-wide
                                      text-white/35
                                      sm:text-[10px]
                                    "
                                  >
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Capabilities */}
                            <ul
                              className="
                                mt-6
                                grid
                                grid-cols-1
                                gap-2.5
                                sm:mt-7
                                sm:grid-cols-2
                              "
                            >
                              {service.capabilities.map((capability) => (
                                <li
                                  key={capability}
                                  className="
                                    flex
                                    items-start
                                    gap-2.5
                                    text-sm
                                    leading-relaxed
                                    text-white/65
                                  "
                                >
                                  <span
                                    className="
                                      mt-[7px]
                                      h-1
                                      w-1
                                      shrink-0
                                      rounded-full
                                      bg-sky2
                                    "
                                  />
                                  <span>{capability}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            DESKTOP LAYOUT
            ========================= */}
        <div
          className="
            mt-16
            hidden
            grid-cols-1
            gap-8
            lg:grid
            lg:grid-cols-[1fr_1.15fr]
            xl:gap-10
          "
        >
          {/* Service Detail */}
          <div className="order-1">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-ink
                    p-7
                    lg:p-8
                    xl:p-10
                  "
                >
                  <div
                    className="
                      bg-grid
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-30
                      [mask-image:radial-gradient(ellipse_100%_60%_at_0%_0%,black,transparent)]
                    "
                  />

                  <div className="relative">
                    <span className="font-mono text-xs text-sky2">
                      {active.index}
                    </span>

                    <h3
                      className="
                        mt-3
                        font-display
                        text-2xl
                        font-bold
                        text-white
                        sm:text-3xl
                      "
                    >
                      {active.name}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        font-mono
                        text-[11px]
                        tracking-wide
                        text-white/40
                      "
                    >
                      {active.tag}
                    </p>

                    <p
                      className="
                        mt-5
                        max-w-md
                        text-sm
                        leading-relaxed
                        text-white/55
                        sm:text-base
                      "
                    >
                      {active.summary}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {active.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.02]
                            p-3.5
                          "
                        >
                          <div
                            className="
                              font-display
                              text-sm
                              font-bold
                              text-sky
                              sm:text-base
                            "
                          >
                            {metric.value}
                          </div>

                          <div
                            className="
                              mt-1
                              font-mono
                              text-[10px]
                              uppercase
                              tracking-wide
                              text-white/35
                            "
                          >
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {active.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="
                            flex
                            items-center
                            gap-2.5
                            text-sm
                            text-white/65
                          "
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-sky2" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Service Navigation */}
          <div className="order-2">
            <div className="sticky top-32 flex flex-col gap-1.5">
              {services.map((service) => {
                const isActive = service.id === activeId;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      border
                      px-5
                      py-4
                      text-left
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-sky/40 bg-sky/[0.06]"
                          : "border-white/10 bg-transparent hover:border-white/25 hover:bg-white/[0.02]"
                      }
                    `}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`
                          font-mono
                          text-xs
                          transition-colors
                          ${
                            isActive
                              ? "text-sky"
                              : "text-white/30"
                          }
                        `}
                      >
                        {service.index}
                      </span>

                      <span
                        className={`
                          font-body
                          text-[15px]
                          font-semibold
                          transition-colors
                          ${
                            isActive
                              ? "text-white"
                              : "text-white/60 group-hover:text-white/85"
                          }
                        `}
                      >
                        {service.name}
                      </span>
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="service-indicator"
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-sky
                          shadow-glowSm
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}