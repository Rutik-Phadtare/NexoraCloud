import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ExternalLink, Server, Shield, Gauge, Database, Activity, Wrench, ChevronDown } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow";
import Button from "../components/ui/Button";
import { buildGmailComposeUrl, buildOutlookComposeUrl, buildMailtoUrl } from "../data/contactConfig";

const coverage = [
  { label: "Security", icon: Shield },
  { label: "Performance", icon: Gauge },
  { label: "Availability", icon: Activity },
  { label: "Backup", icon: Database },
  { label: "Monitoring", icon: Server },
  { label: "Patching", icon: Wrench },
];

const fieldClass =
  "w-full min-h-[50px] rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3.5 font-body text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-sky/50 focus:bg-white/[0.05]";

const selectClass =
  "w-full min-h-[50px] appearance-none rounded-xl border border-white/12 bg-white/[0.03] px-4 pr-11 py-3.5 font-body text-sm text-white outline-none transition-all duration-200 focus:border-sky/50 focus:bg-white/[0.05] cursor-pointer [color-scheme:dark]";

const labelClass = "mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-white/40";

export default function Assessment() {
  const formRef = useRef(null);
  const [step, setStep] = useState("form"); // "form" | "choose" | "sent"
  const [errors, setErrors] = useState({});
  const [pendingFields, setPendingFields] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Button renders an <a>, so a click never triggers this form's
    // native onSubmit — e.target here is the anchor, not the form.
    // Read the actual form fields off the ref instead.
    const form = new FormData(formRef.current);
    const required = ["name", "company", "email"];
    const nextErrors = {};
    required.forEach((f) => {
      if (!form.get(f)?.toString().trim()) nextErrors[f] = "Required";
    });
    const email = form.get("email")?.toString() || "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setPendingFields(Object.fromEntries(form.entries()));
    setStep("choose");
  }

  function openWith(builder, { newTab } = {}) {
    const url = builder(pendingFields);
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
    setStep("sent");
  }

  const mailOptions = [
    {
      key: "gmail",
      label: "Gmail",
      description: "Opens gmail.com in a new tab",
      onClick: () => openWith(buildGmailComposeUrl, { newTab: true }),
    },
    {
      key: "outlook",
      label: "Outlook (web)",
      description: "Opens outlook.live.com in a new tab",
      onClick: () => openWith(buildOutlookComposeUrl, { newTab: true }),
    },
    {
      key: "default",
      label: "Default mail app",
      description: "Opens your device's mail app (Outlook, Apple Mail, etc)",
      onClick: () => openWith(buildMailtoUrl),
    },
  ];

  return (
    <section id="assessment" className="relative bg-ink py-28 lg:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Free Infrastructure Assessment</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            Get your infrastructure assessed for free.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Tell us about your current setup and an engineer will follow up
            with what we'd look at first.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {coverage.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-white/50"
            >
              <Icon size={12} className="text-sky2" />
              {label}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-panel/70 p-6 backdrop-blur-sm sm:p-10">
          {step === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center py-10 text-center"
            >
              <CheckCircle2 size={40} className="text-sky" />
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Almost done.
              </h3>
              <p className="mt-2 max-w-sm text-sm text-white/55">
                We've pre-filled a message with everything you shared — just
                hit Send from there and it'll come straight from your inbox.
              </p>
              <button
                onClick={() => setStep("choose")}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-white/60 transition-colors hover:border-sky/40 hover:text-white"
              >
                <Mail size={14} className="text-sky2" />
                Didn't open? Try a different email option
              </button>
            </motion.div>
          )}

          {step === "choose" && pendingFields && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-4"
            >
              <h3 className="text-center font-display text-xl font-bold text-white">
                How do you want to send it?
              </h3>
              <p className="mt-2 text-center text-sm text-white/55">
                Pick where you'd like to send this from — it'll open
                pre-filled and ready to go.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {mailOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={opt.onClick}
                    className="group flex flex-col items-start gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-sky/40 hover:bg-sky/[0.05]"
                  >
                    <span className="flex w-full items-center justify-between font-body text-sm font-semibold text-white">
                      {opt.label}
                      <ExternalLink size={13} className="text-white/30 transition-colors group-hover:text-sky2" />
                    </span>
                    <span className="text-xs text-white/45">{opt.description}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep("form")}
                className="mx-auto mt-6 block font-mono text-xs text-white/35 transition-colors hover:text-white/60"
              >
                ← Back to edit details
              </button>
            </motion.div>
          )}

          {step === "form" && (
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">Name</label>
                <input id="name" name="name" defaultValue={pendingFields?.name} className={fieldClass} placeholder="Your full name" />
                {errors.name && <p className="mt-1.5 text-xs text-mist">{errors.name}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="company">Company</label>
                <input id="company" name="company" defaultValue={pendingFields?.company} className={fieldClass} placeholder="Company name" />
                {errors.company && <p className="mt-1.5 text-xs text-mist">{errors.company}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" defaultValue={pendingFields?.email} className={fieldClass} placeholder="you@company.com" />
                {errors.email && <p className="mt-1.5 text-xs text-mist">{errors.email}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">Phone</label>
                <input id="phone" name="phone" defaultValue={pendingFields?.phone} className={fieldClass} placeholder="Optional" />
              </div>
              <div>
                <label className={labelClass} htmlFor="servers">Number of servers</label>
                <input id="servers" name="servers" defaultValue={pendingFields?.servers} className={fieldClass} placeholder="e.g. 12" />
              </div>
              <div>
                <label className={labelClass} htmlFor="distro">Linux distribution</label>
                <div className="relative">
                  <select
                    id="distro"
                    name="distro"
                    defaultValue={pendingFields?.distro || ""}
                    className={selectClass}
                  >
                    <option value="" disabled>Select distribution</option>
                    <option value="RHEL">RHEL</option>
                    <option value="Rocky Linux">Rocky Linux</option>
                    <option value="AlmaLinux">AlmaLinux</option>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Debian">Debian</option>
                    <option value="Other / Mixed">Other / Mixed</option>
                  </select>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="environment">AWS / on-premise</label>
                <div className="relative">
                  <select
                    id="environment"
                    name="environment"
                    defaultValue={pendingFields?.environment || ""}
                    className={selectClass}
                  >
                    <option value="" disabled>Select environment</option>
                    <option value="AWS">AWS</option>
                    <option value="On-premise">On-premise</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="locations">Number of locations</label>
                <input id="locations" name="locations" defaultValue={pendingFields?.locations} className={fieldClass} placeholder="e.g. 1" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="monitoring">Current monitoring system</label>
                <input id="monitoring" name="monitoring" defaultValue={pendingFields?.monitoring} className={fieldClass} placeholder="e.g. Zabbix, CloudWatch, none" />
              </div>

              <div className="sm:col-span-2 mt-2">
                <Button variant="primary" href="#" onClick={handleSubmit} className="w-full justify-center sm:w-auto">
                  Request Free Assessment
                </Button>
                <p className="mt-3 text-xs text-white/35">
                  You'll choose how to send it — Gmail, Outlook, or your default app — on the next step.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}