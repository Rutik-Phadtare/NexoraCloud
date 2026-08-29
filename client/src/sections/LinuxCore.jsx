import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../components/ui/Eyebrow";

const distros = ["RHEL", "Rocky Linux", "AlmaLinux", "Ubuntu", "Debian"];

const commandLines = [
  { cmd: "systemctl status nginx", out: "● nginx.service — active (running)   uptime: 47d 6h" },
  { cmd: "uptime", out: "14:32:08 up 47 days, load average: 0.14, 0.09, 0.06" },
  { cmd: "df -h /", out: "/dev/xvda1   80G   31G   46G   41% used" },
  { cmd: "free -m", out: "Mem: 15872 total   6104 used   9768 available" },
  { cmd: "top -bn1 | head -3", out: "Tasks: 142 total   CPU: 8.2% us, 2.1% sy, 89.7% idle" },
];

function useTypedLines(lines, speed = 22) {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      for (let i = 0; i < lines.length; i++) {
        const full = lines[i].cmd;
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, speed));
          setDisplay((prev) => {
            const next = [...prev];
            next[i] = { cmd: full.slice(0, c), out: null, done: false };
            return next;
          });
        }
        await new Promise((r) => setTimeout(r, 260));
        if (cancelled) return;
        setDisplay((prev) => {
          const next = [...prev];
          next[i] = { cmd: full, out: lines[i].out, done: true };
          return next;
        });
        await new Promise((r) => setTimeout(r, 500));
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [lines, speed]);

  return display;
}

export default function LinuxCore() {
  const typed = useTypedLines(commandLines);

  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div>
          <Eyebrow>Core Specialization</Eyebrow>
          <h2 className="max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            Linux is where we start. Infrastructure is where we go.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
            Every service we operate is built on deep, daily Linux practice —
            administration, hardening, performance tuning and production
            support across the distributions our clients actually run.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {distros.map((d) => (
              <span
                key={d}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs tracking-wide text-white/60 transition-colors hover:border-sky/40 hover:text-sky"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#080B10] shadow-glow"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[11px] text-white/35">
              ops@nexoracloud:~$ infrastructure-console
            </span>
          </div>
          <div className="min-h-[280px] px-5 py-5 font-mono text-[13px] leading-relaxed">
            {typed.map((line, i) => (
              <div key={i} className="mb-2.5">
                <div className="flex gap-2 text-white/85">
                  <span className="text-sky2">$</span>
                  <span>{line.cmd}</span>
                  {!line.done && <span className="animate-pulseDot text-sky">▌</span>}
                </div>
                {line.out && <div className="mt-1 pl-4 text-white/40">{line.out}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
