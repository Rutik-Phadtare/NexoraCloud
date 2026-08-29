import Eyebrow from "../components/ui/Eyebrow";
import Button from "../components/ui/Button";
import { academyCourses, academyAudience } from "../data/academy";

export default function Academy() {
  return (
    <section id="academy" className="relative bg-panel py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-2xl border border-white/10 bg-ink p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Nexora Cloud Academy</Eyebrow>
              <h2 className="font-display text-2xl font-bold leading-[1.15] text-white sm:text-3xl">
                Hands-on Linux and cloud training, taught the way we work.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                Structured programs for individuals and teams who want the
                same practical Linux and cloud skills our engineers use in
                production.
              </p>
              <div className="mt-6">
                <Button variant="secondary" href="#assessment" icon={false}>
                  Explore Nexora Cloud Academy
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h4 className="eyebrow mb-3">Courses</h4>
                <ul className="space-y-2">
                  {academyCourses.map((c) => (
                    <li key={c} className="text-sm text-white/60">{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="eyebrow mb-3">Built For</h4>
                <ul className="space-y-2">
                  {academyAudience.map((a) => (
                    <li key={a} className="text-sm text-white/60">{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
