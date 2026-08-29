import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#03050A] py-28 lg:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/15 blur-[130px]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Keep your <span className="text-gradient-royal">infrastructure</span> running.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
          Build it. Secure it. Automate it. Monitor it.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="#assessment">
            Get Free Infrastructure Assessment
          </Button>
          <Button variant="secondary" href="#assessment" icon={false}>
            Talk to an Engineer
          </Button>
        </div>
      </div>
    </section>
  );
}
