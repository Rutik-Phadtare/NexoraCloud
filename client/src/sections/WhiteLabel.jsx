import { ArrowRight } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";
import Reveal from "../components/ui/Reveal";
import { whiteLabelPartners } from "../data/industries";

export default function WhiteLabel() {
  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <Eyebrow>White-Label Infrastructure Support</Eyebrow>
            <h2 className="max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Your customer. Our infrastructure expertise.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              Nexora Cloud can operate as the backend infrastructure team behind
              your business — Linux, cloud and DevOps expertise, delivered
              under your relationship with your customer.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {whiteLabelPartners.map((p) => (
                <span key={p} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/55">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <Reveal type="scale">
            <div className="rounded-2xl border border-white/10 bg-panel p-8">
              <div className="flex flex-col items-center gap-3">
                {["Partner Company", "Nexora Cloud Infrastructure Team", "Linux / Cloud / DevOps", "End Customer"].map(
                  (stage, i, arr) => (
                    <div key={stage} className="flex flex-col items-center">
                      <div
                        className={`w-full min-w-[220px] rounded-xl border px-5 py-3.5 text-center font-body text-sm font-medium ${
                          i === 1
                            ? "border-sky/40 bg-sky/10 text-white"
                            : "border-white/10 bg-white/[0.02] text-white/65"
                        }`}
                      >
                        {stage}
                      </div>
                      {i < arr.length - 1 && (
                        <ArrowRight size={16} className="my-2 rotate-90 text-white/25" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
