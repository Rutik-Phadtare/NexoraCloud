import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Eyebrow from "../components/ui/Eyebrow";
import { infraStages } from "../data/academy";

function Stage({ stage, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-16, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="flex items-start gap-6 border-t border-white/10 py-7 first:border-t-0 lg:py-8"
    >
      <span className="font-mono text-sm text-sky2">{stage.n}</span>
      <div>
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{stage.label}</h3>
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
          {stage.detail}
        </p>
      </div>
    </motion.div>
  );
}

export default function InfrastructureProblem() {
  return (
    <section id="problem" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Why Infrastructure Matters</Eyebrow>
          <h2 className="max-w-md font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            Your infrastructure is the foundation of your business.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
            Downtime, security vulnerabilities, performance bottlenecks and
            poor automation don't stay technical problems for long — they
            become business problems. Every layer beneath your application
            has to be built, secured, automated, monitored and optimized
            deliberately.
          </p>
        </div>
        <div>
          {infraStages.map((s, i) => (
            <Stage key={s.n} stage={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
