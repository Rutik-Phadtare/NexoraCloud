import { motion } from "framer-motion";
import { useState } from "react";
import Eyebrow from "../components/ui/Eyebrow";

const scaleSteps = [10, 50, 100, 500];

export default function DevOps() {
  const [manual, setManual] = useState(false);

  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <Eyebrow>DevOps &amp; Automation</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              One automation. Hundreds of servers.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              We replace manual, one-off server configuration with
              Ansible playbooks and Terraform-managed infrastructure —
              wired into CI/CD so changes are consistent, tested and
              repeatable at any scale.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1">
              <button
                onClick={() => setManual(true)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                  manual ? "bg-white/10 text-white" : "text-white/40"
                }`}
              >
                Manual configuration
              </button>
              <button
                onClick={() => setManual(false)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                  !manual ? "bg-sky text-ink" : "text-white/40"
                }`}
              >
                Automated infrastructure
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Ansible", "Terraform", "CI/CD"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-white/55">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-panel p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                DEPLOYMENT TARGET
              </span>
              <span className="font-mono text-[10px] text-sky2">
                {manual ? "MANUAL" : "ANSIBLE + TERRAFORM"}
              </span>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="rounded-lg border border-sky/30 bg-sky/[0.06] px-5 py-2.5 font-mono text-xs text-sky">
                Nexora Cloud{!manual && " → Ansible"}
              </div>
              <div className="h-6 w-px bg-white/15" />
              <div className="grid w-full grid-cols-4 gap-3">
                {scaleSteps.map((n, i) => (
                  <div key={n} className="flex flex-col items-center gap-2">
                    <motion.div
                      animate={
                        manual
                          ? { opacity: 0.3 + i * 0.05 }
                          : { opacity: [0.4, 1, 0.4] }
                      }
                      transition={
                        manual
                          ? { duration: 0.3 }
                          : { duration: 2, repeat: Infinity, delay: i * 0.15 }
                      }
                      className="grid w-full grid-cols-2 gap-1"
                    >
                      {Array.from({ length: 4 }).map((_, j) => (
                        <span
                          key={j}
                          className={`h-3 w-full rounded-sm ${
                            manual ? "bg-white/15" : "bg-sky/50"
                          }`}
                        />
                      ))}
                    </motion.div>
                    <span className="font-mono text-[10px] text-white/40">{n} servers</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-white/35">
              {manual
                ? "Manual configuration doesn't scale — every server is a one-off, error-prone task."
                : "Automated infrastructure scales consistently, whether it's 10 servers or 500."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
