import { Check, ArrowUpRight } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";
import Button from "../components/ui/Button";
import { StaggerGroup, StaggerItem } from "../components/ui/Reveal";
import { packages } from "../data/packages";

export default function Packages() {
  return (
    <section className="relative overflow-hidden bg-panel py-28 lg:py-36">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky/[0.05] blur-[120px]" />
        <div className="absolute bottom-[-180px] left-[15%] h-[320px] w-[320px] rounded-full bg-sky/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Managed Infrastructure Packages</Eyebrow>

          <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            Infrastructure support that scales with you.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/55">
            Pricing depends on server count, SLA, support hours and
            infrastructure complexity — every engagement starts with a
            quote, not a rate card.
          </p>
        </div>

        <StaggerGroup
          className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3"
          stagger={0.1}
        >
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id} className="h-full">
              <div
                className={`
                  group relative flex h-full flex-col overflow-hidden
                  rounded-2xl border p-8
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_25px_70px_-25px_rgba(56,189,248,0.35)]
                  ${
                    pkg.highlighted
                      ? `
                        border-sky/40
                        bg-sky/[0.05]
                        shadow-glowRoyal
                        hover:border-sky/70
                        hover:bg-sky/[0.08]
                      `
                      : `
                        border-white/10
                        bg-ink
                        hover:border-sky/30
                        hover:bg-[#07111b]
                      `
                  }
                `}
              >
                {/* Hover radial glow */}
                <div
                  className="
                    pointer-events-none absolute -right-24 -top-24
                    h-56 w-56 rounded-full
                    bg-sky/0 blur-3xl
                    transition-all duration-700
                    group-hover:bg-sky/[0.12]
                  "
                />

                {/* Bottom glow */}
                <div
                  className="
                    pointer-events-none absolute -bottom-20 -left-20
                    h-48 w-48 rounded-full
                    bg-sky/0 blur-3xl
                    transition-all duration-700
                    group-hover:bg-sky/[0.06]
                  "
                />

                {/* Top highlight line */}
                <div
                  className="
                    pointer-events-none absolute inset-x-8 top-0 h-px
                    bg-gradient-to-r from-transparent via-sky/0 to-transparent
                    transition-all duration-500
                    group-hover:via-sky/70
                  "
                />

                {/* Hover border shine */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                    ring-1 ring-inset ring-sky/10
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  {pkg.highlighted && (
                    <span
                      className="
                        mb-4 w-fit rounded-full
                        bg-sky px-3 py-1
                        font-mono text-[10px] font-semibold tracking-wide text-ink
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]
                      "
                    >
                      MOST CHOSEN
                    </span>
                  )}

                  <h3
                    className="
                      font-display text-xl font-bold text-white
                      transition-all duration-300
                      group-hover:text-sky
                    "
                  >
                    {pkg.name}
                  </h3>

                  <p
                    className="
                      mt-1.5 font-mono text-[11px] tracking-wide text-white/40
                      transition-colors duration-300
                      group-hover:text-white/60
                    "
                  >
                    {pkg.audience}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="
                          flex items-start gap-2.5
                          text-sm text-white/65
                          transition-all duration-300
                          group-hover:text-white/80
                        "
                      >
                        <Check
                          size={15}
                          className="
                            mt-0.5 shrink-0 text-sky2
                            transition-all duration-300
                            group-hover:scale-110
                            group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]
                          "
                        />

                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#assessment"
                    variant={pkg.highlighted ? "primary" : "secondary"}
                    icon={false}
                    className="
                      mt-8 w-full justify-center
                      transition-all duration-300
                      group-hover:translate-y-[-2px]
                      group-hover:shadow-[0_10px_30px_-12px_rgba(56,189,248,0.5)]
                    "
                  >
                    <span className="flex items-center justify-center gap-2">
                      Request a Quote

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}