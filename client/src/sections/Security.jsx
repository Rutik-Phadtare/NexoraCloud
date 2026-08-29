import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";

const securityItems = [
  "Linux Hardening",
  "SSH Security",
  "SELinux",
  "Firewall",
  "Access Control",
  "Vulnerability Remediation",
  "Security Patching",
  "Compliance",
];

export default function Security() {
  return (
    <section className="relative overflow-hidden bg-[#03050A] py-28 lg:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>Security</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Security is not a feature. It is infrastructure.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              We treat security as a layer built into every server we
              operate — hardened configurations, controlled access and
              patching that doesn't wait for an incident.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {securityItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="h-1 w-1 rounded-full bg-sky" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-sky/15 sm:h-80 sm:w-80">
              <motion.div
                className="absolute inset-0 rounded-full border border-sky/20"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-6 rounded-full border border-sky/25"
                animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <div className="absolute inset-12 rounded-full border border-sky/25 bg-panel/40 backdrop-blur-sm" />
              <motion.div
                className="absolute h-full w-1/2 origin-right"
                style={{ right: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent to-sky/70" />
              </motion.div>
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-sky/40 bg-ink shadow-glow">
                <ShieldCheck size={34} className="text-sky" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
