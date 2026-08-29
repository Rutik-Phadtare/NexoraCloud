import { motion } from "framer-motion";
import Eyebrow from "../components/ui/Eyebrow";

const flow = ["Users", "Route 53", "Load Balancer", "EC2", "Application", "Database", "S3 / Backup"];

const awsTerms = [
  "EC2", "VPC", "IAM", "S3", "CloudWatch", "EBS", "Load Balancers", "Auto Scaling", "Security Groups", "AWS Backup",
];

const pillars = [
  { name: "Cloud Migration", detail: "Moving workloads from on-premise Linux to AWS without disrupting operations." },
  { name: "Cloud Security", detail: "IAM, network segmentation and security groups configured with least privilege." },
  { name: "Cloud Optimization", detail: "Right-sizing resources and tuning Auto Scaling for real usage patterns." },
];

export default function Cloud() {
  return (
    <section id="cloud" className="relative bg-panel py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>Cloud Infrastructure</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              From on-premise Linux to scalable cloud infrastructure.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              We design AWS environments that route, scale and recover
              traffic the way your application actually needs — not a
              generic template.
            </p>

            <div className="mt-10 space-y-5">
              {pillars.map((p) => (
                <div key={p.name} className="border-l-2 border-sky/30 pl-5">
                  <h3 className="font-display text-base font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">{p.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {awsTerms.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/45">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-ink p-8">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-grid opacity-20" />
            <div className="relative flex flex-col">
              {flow.map((stage, i) => (
                <div key={stage} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
                  >
                    <span className="font-mono text-[10px] text-sky2">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-body text-sm font-medium text-white/85">{stage}</span>
                  </motion.div>
                  {i < flow.length - 1 && (
                    <div className="relative mx-auto h-8 w-px overflow-hidden bg-white/10">
                      <motion.div
                        className="absolute left-0 top-0 h-3 w-full bg-sky"
                        animate={{ top: ["-20%", "120%"] }}
                        transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
