import Logo from "./ui/Logo";

const socialIcons = {
  LinkedIn: {
    url: "https://www.linkedin.com/in/rutik-phadtare/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.8 8.65 23 11 23 14.7V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z" />
      </svg>
    ),
  },

  GitHub: {
    url: "https://github.com/Rutik-Phadtare",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.51-3.5-.7-3.72-1.34-.13-.33-.68-1.34-1.16-1.62-.4-.22-.97-.75-.01-.76.9-.02 1.54.85 1.76 1.2 1.03 1.76 2.67 1.27 3.32.96.1-.75.4-1.27.72-1.56-2.5-.29-5.13-1.28-5.13-5.7 0-1.26.44-2.29 1.16-3.1-.12-.29-.5-1.47.11-3.06 0 0 .95-.31 3.12 1.18a10.6 10.6 0 015.68 0C17.5 4.98 18.45 5.3 18.45 5.3c.61 1.59.23 2.77.11 3.06.72.81 1.16 1.83 1.16 3.1 0 4.43-2.64 5.4-5.15 5.69.41.36.76 1.06.76 2.14 0 1.55-.01 2.8-.01 3.18 0 .27.18.6.69.49C19.14 20.5 22 16.7 22 12.2 22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
};

const columns = [
  {
    title: "Services",
    links: [
      "Linux",
      "Cloud",
      "DevOps",
      "Security",
      "Monitoring",
      "Backup",
      "Kubernetes",
    ],
  },
  {
    title: "Company",
    links: ["About", "Industries", "Careers", "Resources", "Academy"],
  },
  {
    title: "Resources",
    links: [
      "Linux Guides",
      "AWS Guides",
      "Security Articles",
      "Troubleshooting",
      "Case Studies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-panel">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Logo />

            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-sky2">
              Nexora Cloud Technologies
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              We build, manage, secure and automate Linux and cloud
              infrastructure for modern businesses.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {Object.entries(socialIcons).map(([name, social]) => (
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-sky/50 hover:text-sky"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-4">{col.title}</h4>

              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-sky"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-4">Contact</h4>

            <ul className="space-y-2.5 text-sm text-white/55">
              <li>
                Email:{" "}
                <a
                  href="mailto:rutikphadtare1234@gmail.com"
                  className="transition-colors hover:text-sky"
                >
                  rutikphadtare1234@gmail.com
                </a>
              </li>

              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/rutik-phadtare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sky"
                >
                  rutik-phadtare
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Nexora Cloud Technologies. All rights
            reserved.
          </p>

          <p className="font-mono">
            Linux. Cloud. Automation. Security.
          </p>
        </div>
      </div>
    </footer>
  );
}