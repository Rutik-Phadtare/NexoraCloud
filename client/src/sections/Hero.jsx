import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#02050a]
        text-white
        m-0
        p-0

        landscape:max-md:min-h-fit
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Main atmosphere */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.22]
            bg-[radial-gradient(circle_at_72%_52%,rgba(0,110,255,0.22),transparent_34%),radial-gradient(circle_at_20%_50%,rgba(0,80,180,0.10),transparent_35%)]
          "
        />

        {/* Desktop / tablet glow */}
        <div
          className="
            absolute
            left-[35%]
            top-[15%]
            h-[clamp(280px,32vw,500px)]
            w-[clamp(280px,32vw,500px)]
            rounded-full
            bg-[#006eff]/10
            blur-[150px]
          "
        />

        {/* Mobile glow */}
        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[clamp(220px,60vw,320px)]
            w-[clamp(220px,60vw,320px)]
            -translate-x-1/2
            rounded-full
            bg-[#006eff]/[0.06]
            blur-[100px]

            md:hidden
          "
        />
      </div>

      {/* =========================================================
          MOBILE GLOBE  (< 768px)
          Positioned relative to the smallest viewport dimension so
          it holds its place on both short and tall phone screens.
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="
          pointer-events-none
          absolute
          left-1/4
          top-[18%]
          z-[1]
          w-[min(155vw,640px)]
          max-w-none
          -translate-x-1/2

          landscape:max-md:top-[8%]
          landscape:max-md:w-[min(90vw,480px)]

          sm:top-[17%]
          sm:w-[min(125vw,600px)]

          md:hidden
        "
      >
        <img
          src="/earth-globe-exact.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            block
            h-auto
            w-full
            select-none
            object-contain
            object-center
            mix-blend-screen
            opacity-[0.34]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_12%,rgba(2,5,10,0.04)_36%,rgba(2,5,10,0.48)_66%,#02050a_100%)]
          "
        />
      </motion.div>

      {/* =========================================================
          TABLET / IPAD GLOBE  (768px – 1279px)
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="
          pointer-events-none
          absolute
          z-[1]
          hidden
          md:block
          xl:hidden

          /* iPad portrait — centered on the section's vertical axis
             so tall screens (e.g. iPad Pro 1024x1366) never leave a
             dead gap below the globe like a fixed top-% would */
          md:right-[-26%]
          md:top-1/4
          md:w-[clamp(460px,78vw,820px)]
          md:-translate-y-1/2

          /* iPad landscape / small laptop */
          lg:right-[-16%]
          lg:w-[clamp(580px,62vw,920px)]

          landscape:md:right-[-14%]
          landscape:md:top-1/2
          landscape:md:w-[clamp(420px,48vw,700px)]
          landscape:md:-translate-y-1/2
        "
      >
        <img
          src="/earth-globe-exact.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          loading="eager"
          decoding="async"
          className="
            block
            h-auto
            w-full
            select-none
            object-contain
            object-center
            mix-blend-screen

            md:opacity-[0.36]
            lg:opacity-[0.42]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,5,10,0.05)_40%,rgba(2,5,10,0.50)_72%,#02050a_100%)]
          "
        />
      </motion.div>

      {/* =========================================================
          TABLET / IPAD BLUE GLOW
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          z-0

          hidden
          md:block
          xl:hidden

          right-[8%]
          top-[42%]
          h-[clamp(160px,22vw,220px)]
          w-[clamp(300px,42vw,420px)]
          rounded-full
          bg-[#007aff]/10
          blur-[100px]
        "
      />

      {/* =========================================================
          DESKTOP DIGITAL FLOOR GRID  (>= 1280px)
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[46%]
          right-0
          z-0
          hidden
          h-[180px]
          opacity-30

          xl:block

          [background-image:linear-gradient(rgba(0,110,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,110,255,.18)_1px,transparent_1px)]
          [background-size:38px_38px]
          [mask-image:linear-gradient(to_top,black,transparent)]
          [transform:perspective(500px)_rotateX(66deg)]
          [transform-origin:bottom]
        "
      />

      {/* =========================================================
          DESKTOP GLOBE  (>= 1280px)
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="
          pointer-events-none
          absolute
          bottom-[-22%]
          right-[-10%]
          z-0
          hidden
          w-[clamp(900px,68vw,1150px)]

          xl:block

          2xl:right-[2%]
          2xl:w-[clamp(1000px,65vw,1300px)]
        "
      >
        <img
          src="/earth-globe-exact.png"
          alt="Digital Connected Globe"
          draggable="false"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            block
            h-auto
            w-full
            select-none
            object-contain
            object-center
            mix-blend-screen
            opacity-80
            -translate-y-9
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            left-[25%]
            -z-10
            h-[120px]
            w-[50%]
            rounded-full
            bg-[#007aff]/35
            blur-[80px]
          "
        />
      </motion.div>

      {/* =========================================================
          MOBILE/TABLET TOP FADE
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[4]
          h-[18%]
          bg-gradient-to-b
          from-[#02050a]
          via-[#02050a]/65
          to-transparent

          xl:hidden
        "
      />

      {/* =========================================================
          MOBILE/TABLET BOTTOM FADE
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[4]
          h-[42%]
          bg-gradient-to-t
          from-[#02050a]
          via-[#02050a]/45
          to-transparent

          xl:hidden
        "
      />

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-12
          right-10
          z-20
          hidden
          flex-col
          items-center
          gap-6

          xl:flex
        "
      >
        <span
          style={{ writingMode: "vertical-rl" }}
          className="
            text-[10px]
            font-semibold
            tracking-[0.25em]
            text-white/50
          "
        >
          SCROLL DOWN
        </span>

        <div
          className="
            h-20
            w-px
            bg-gradient-to-b
            from-white/40
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          min-h-[100svh]
          w-full
          max-w-[1550px]
          items-center

          px-4
          py-16

          min-[420px]:px-5

          sm:px-8
          sm:py-20

          /* =====================================================
             TABLET / IPAD
          ====================================================== */
          md:px-12
          md:py-20

          /* iPad Pro landscape */
          lg:px-16

          /* =====================================================
             DESKTOP
          ====================================================== */
          xl:min-h-screen
          xl:px-[6%]
          xl:py-20

          landscape:max-md:min-h-fit
          landscape:max-md:py-10
        "
      >
        {/* =======================================================
            CONTENT
        ======================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            relative
            z-20
            w-full
            max-w-[700px]
          "
        >
          {/* =====================================================
              EYEBROW
          ====================================================== */}
          <motion.div
            variants={item}
            className="
              mb-4
              inline-flex
              items-center
              font-semibold
              tracking-[0.06em]
              text-[#087cff]

              sm:mb-6
            "
          >
            <span className="text-[clamp(11px,2.6vw,15px)] uppercase">
              INNOVATE • BUILD • GROW
            </span>
          </motion.div>

          {/* =====================================================
              MAIN HEADING
              Fluid clamp() scaling replaces stepped breakpoints so
              the size never jumps awkwardly at in-between widths
              (foldables, small tablets, split-screen windows, etc).
          ====================================================== */}
          <motion.h1
            variants={item}
            className="
              font-extrabold
              leading-[1.1]
              tracking-[-0.03em]
              text-white
              text-[clamp(1.85rem,6.8vw+0.3rem,4.5rem)]

              sm:leading-[1.08]
              sm:tracking-[-0.035em]
            "
          >
            Building Digital Solutions
            <br />
            That Drive Your Business
            <br />
            To The <span className="text-[#0878ff]">Next Level</span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}
          <motion.p
            variants={item}
            className="
              mt-5
              max-w-[600px]
              leading-[1.7]
              text-gray-400
              text-[clamp(0.9rem,1.6vw+0.55rem,1.125rem)]

              sm:mt-7

              md:max-w-[540px]

              lg:max-w-[570px]

              xl:max-w-[600px]
            "
          >
           Nexora Cloud Technologies delivers innovative,
            scalable and result-driven IT solutions to help your
            business grow in the digital era.
          </motion.p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}
          <motion.div
            variants={item}
            className="
              mt-7
              flex
              w-full
              flex-wrap
              items-center
              gap-3.5

              min-[420px]:gap-4

              sm:mt-9
              sm:gap-5

              md:mt-10
            "
          >
            {/* Primary */}
            <a
              href="#services"
              className="
                group
                inline-flex
                h-[48px]
                flex-1
                min-w-[150px]
                items-center
                justify-center
                gap-2.5
                rounded-md
                bg-[#0878ff]
                px-5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_0_20px_rgba(8,120,255,0.25)]
                transition-all
                duration-300

                hover:bg-[#0b84ff]
                hover:shadow-[0_0_30px_rgba(8,120,255,0.35)]

                min-[420px]:flex-none
                min-[420px]:px-6
                min-[420px]:text-[14px]

                sm:h-[52px]
                sm:min-w-[185px]
                sm:px-7
                sm:text-[15px]
              "
            >
              <span>Explore Services</span>

              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Secondary */}
            <a
              href="#about"
              className="
                group
                inline-flex
                h-[48px]
                flex-1
                min-w-[120px]
                items-center
                justify-center
                gap-2.5
                rounded-md
                border
                border-white/10
                bg-white/[0.02]
                px-5
                text-[13px]
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300

                hover:border-white/30
                hover:bg-white/5

                min-[420px]:flex-none
                min-[420px]:px-6
                min-[420px]:text-[14px]

                sm:h-[52px]
                sm:min-w-[150px]
                sm:px-7
                sm:text-[15px]
              "
            >
              <span>About Us</span>

              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}