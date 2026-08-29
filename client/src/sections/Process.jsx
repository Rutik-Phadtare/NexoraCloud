import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";
import { processSteps } from "../data/academy";

function ProcessRow({ step, index, total, isOpen, onToggle }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  const panelId = `process-panel-${index}`;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="
          flex
          w-full
          items-center
          gap-6
          py-6
          text-left
          transition-colors
          duration-200

          hover:bg-white/[0.02]

          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-sky2/50
        "
      >
        <span className="font-mono text-xs text-sky2">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <h3 className="font-display text-lg font-bold text-white sm:text-xl">
            {step.step}
          </h3>
          <p className="mt-1 text-sm text-white/50">{step.detail}</p>
        </div>


        <ChevronDown
          size={18}
          className={`
            shrink-0
            text-white/40
            transition-transform
            duration-300
            ${isOpen ? "rotate-180 text-sky2" : "rotate-0"}
          `}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-[calc(1.5rem+1.5rem)] pr-4 sm:pl-[3.5rem]">
              <ul className="space-y-2.5">
                {step.points?.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Process() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative bg-panel py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            A structured path from assessment to operations.
          </h2>
        </div>
        <div className="mt-14">
          {processSteps.map((s, i) => (
            <ProcessRow
              key={s.step}
              step={s}
              index={i}
              total={processSteps.length}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}