import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../components/ui/Eyebrow";

function useCounter(target, duration = 1200, startOnView) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startOnView) return;
    let raf;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, startOnView]);
  return value;
}

const statusMetrics = [
  { label: "Servers", value: 84 },
  { label: "Healthy", value: 78, tone: "good" },
  { label: "Warning", value: 4, tone: "warn" },
  { label: "Critical", value: 2, tone: "bad" },
];

const gauges = [
  { label: "CPU", value: 62 },
  { label: "Disk", value: 71 },
  { label: "Memory", value: 54 },
  { label: "Network", value: 38 },
];

const rows = [
  { label: "Security issues", value: "3 open" },
  { label: "Open tickets", value: "5" },
  { label: "Backup status", value: "84 / 84" },
  { label: "SSL status", value: "Valid" },
  { label: "Application uptime", value: "99.9%" },
  { label: "Database health", value: "Nominal" },
];

const bars = [42, 58, 39, 66, 71, 55, 62, 48, 60, 74, 68, 62];

export default function NOC() {
  const [inView, setInView] = useState(false);

  return (
    <section id="noc" className="relative bg-panel py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>24×7 NOC</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            See what we see. Keep your infrastructure under control.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            A live look at the kind of visibility our NOC maintains for
            every environment we operate — the early direction for{" "}
            <span className="text-sky">Nexora Cloud Control Center</span>.
          </p>
        </div>

        <motion.div
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-ink"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/40">
              Nexora Cloud CONTROL CENTER — DEMO VIEW
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulseDot" />
              <span className="font-mono text-[10px] text-sky2">MONITORING ACTIVE</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-4">
            {statusMetrics.map((m) => (
              <MetricCell key={m.label} metric={m} inView={inView} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/5 lg:grid-cols-3">
            <div className="col-span-1 bg-ink p-6 lg:col-span-2">
              <span className="font-mono text-[10px] tracking-wide text-white/35">
                NETWORK TRAFFIC — LAST 12H
              </span>
              <div className="mt-5 flex h-32 items-end gap-1.5">
                {bars.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${b}%` } : { height: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-sky2/40 to-sky"
                  />
                ))}
              </div>
            </div>
            <div className="bg-ink p-6">
              <span className="font-mono text-[10px] tracking-wide text-white/35">SYSTEM UTILIZATION</span>
              <div className="mt-5 space-y-4">
                {gauges.map((g) => (
                  <div key={g.label}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] text-white/50">
                      <span>{g.label}</span>
                      <span className="text-sky">{g.value}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${g.value}%` } : { width: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-sky"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 lg:grid-cols-6">
            {rows.map((r) => (
              <div key={r.label} className="bg-ink px-5 py-4">
                <div className="font-mono text-[10px] uppercase tracking-wide text-white/35">{r.label}</div>
                <div className="mt-1.5 font-display text-sm font-bold text-white">{r.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-4 text-center font-mono text-[11px] text-white/25">
          Illustrative example — demo data for visualization purposes.
        </p>
      </div>
    </section>
  );
}

function MetricCell({ metric, inView }) {
  const value = useCounter(metric.value, 1000, inView);
  const toneClass =
    metric.tone === "good"
      ? "text-sky"
      : metric.tone === "warn"
      ? "text-mist"
      : metric.tone === "bad"
      ? "text-white/70"
      : "text-white";

  return (
    <div className="bg-ink px-6 py-6">
      <div className={`font-display text-3xl font-bold ${toneClass}`}>{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-white/35">{metric.label}</div>
    </div>
  );
}
