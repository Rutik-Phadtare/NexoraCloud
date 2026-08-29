import Eyebrow from "../components/ui/Eyebrow";
import Reveal, { StaggerGroup, StaggerItem } from "../components/ui/Reveal";

const timeline = ["Backup", "Verification", "Replication", "Recovery Testing", "Business Continuity"];

export default function BackupDR() {
  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Backup &amp; Disaster Recovery</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            Don't wait for a disaster to discover your backup doesn't work.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            A backup that has never been tested is a guess, not a plan.
            We build recovery into the process from the start.
          </p>
        </div>

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-5" stagger={0.08}>
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 sm:block" />
          {timeline.map((step, i) => (
            <StaggerItem key={step} type="up">
              <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-sky/30 bg-panel font-mono text-sm text-sky sm:h-16 sm:w-16">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">{step}</h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-panel/60 p-6 text-center sm:p-8">
          <p className="text-sm leading-relaxed text-white/55 sm:text-base">
            Every backup we configure is scheduled, verified and periodically
            tested through recovery drills — so business continuity is a
            practiced routine, not a hope.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
