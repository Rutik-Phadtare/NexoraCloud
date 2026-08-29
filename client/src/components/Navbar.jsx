import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./ui/Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#cloud" },
  { label: "Industries", href: "#industries" },
  { label: "Why Nexora Cloud", href: "#problem" },
  { label: "Resources", href: "#academy" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#assessment" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300 ease-out",
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav
        className="
          mx-auto flex w-full max-w-[1600px]
          items-center justify-between
          px-4 py-3
          sm:px-5 sm:py-3.5
          md:px-7 md:py-4
          lg:px-8
          xl:px-10
          2xl:px-12
        "
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="
            flex min-w-0 shrink-0
            items-center
            gap-1
            outline-none
            focus-visible:rounded-md
            focus-visible:ring-2
            focus-visible:ring-sky/60
          "
          aria-label="Nexora Cloud home"
        >
          <Logo />

          <span
            className="
              ml-1 hidden
              whitespace-nowrap
              font-mono
              text-[9px]
              font-medium
              tracking-[0.18em]
              text-sky2
              sm:inline
              md:text-[10px]
              md:tracking-[0.2em]
            "
          >
            Technologies
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul
          className="
            hidden
            items-center
            justify-center
            gap-5
            lg:flex
            xl:gap-7
            2xl:gap-9
          "
        >
          {links.map((link) => (
            <li key={link.label} className="relative">
              <a
                href={link.href}
                className="
                  group relative inline-flex
                  whitespace-nowrap
                  py-2
                  font-body
                  text-[12px]
                  font-medium
                  text-white/70
                  transition-colors
                  duration-200
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-sky/60
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-ink
                  xl:text-[13px]
                  2xl:text-[13.5px]
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    -bottom-0.5
                    left-0
                    h-px
                    w-0
                    bg-sky
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#assessment"
          className="
            hidden
            shrink-0
            items-center
            gap-1.5
            rounded-full
            bg-royal
            px-4
            py-2.5
            font-body
            text-[12px]
            font-semibold
            text-white
            shadow-[0_8px_30px_rgba(40,80,255,0.18)]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-royalDeep
            hover:shadow-[0_12px_35px_rgba(40,80,255,0.28)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-sky/60
            focus-visible:ring-offset-2
            focus-visible:ring-offset-ink
            lg:inline-flex
            xl:px-5
            xl:text-[13px]
            2xl:px-6
          "
        >
          <span className="whitespace-nowrap">
            Get Infrastructure Assessment
          </span>
          <ArrowUpRight size={14} strokeWidth={2.2} />
        </a>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="
            inline-flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-white
            transition-all
            duration-200
            hover:border-white/20
            hover:bg-white/10
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-sky/60
            lg:hidden
          "
        >
          <Menu size={21} strokeWidth={2} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[60]
              flex
              min-h-[100dvh]
              w-full
              flex-col
              overflow-y-auto
              bg-ink/[0.98]
              backdrop-blur-2xl
              lg:hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Mobile Header */}
            <div
              className="
                flex
                min-h-[68px]
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                px-4
                sm:min-h-[76px]
                sm:px-6
                md:px-8
              "
            >
              <a
                href="#top"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1"
                aria-label="Nexora Cloud home"
              >
                <Logo />

                <span
                  className="
                    ml-1
                    hidden
                    whitespace-nowrap
                    font-mono
                    text-[10px]
                    font-medium
                    tracking-[0.2em]
                    text-sky2
                    xs:inline
                    sm:inline
                  "
                >
                  Technologies
                </span>
              </a>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="
                  inline-flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition-all
                  duration-200
                  hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-sky/60
                "
              >
                <X size={21} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile Links */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.045,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="
                flex
                flex-1
                flex-col
                px-4
                pb-4
                pt-3
                sm:px-6
                md:px-8
              "
            >
              {links.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -12,
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.25,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      py-4
                      font-display
                      text-[1.45rem]
                      font-semibold
                      leading-tight
                      text-white
                      transition-colors
                      duration-200
                      hover:text-sky
                      focus-visible:outline-none
                      sm:py-[18px]
                      sm:text-[1.75rem]
                      md:py-5
                      md:text-[2rem]
                    "
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={18}
                      className="
                        shrink-0
                        opacity-40
                        transition-all
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                        sm:size-[20px]
                        md:size-[22px]
                      "
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile CTA */}
            <div
              className="
                mt-auto
                shrink-0
                px-4
                pb-[max(1rem,env(safe-area-inset-bottom))]
                pt-4
                sm:px-6
                md:px-8
              "
            >
              <a
                href="#assessment"
                onClick={() => setOpen(false)}
                className="
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-royal
                  px-5
                  py-3.5
                  text-center
                  font-body
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_35px_rgba(40,80,255,0.2)]
                  transition-all
                  duration-200
                  hover:bg-royalDeep
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-sky/60
                "
              >
                <span>Get Infrastructure Assessment</span>
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}