/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070A",
        panel: "#0B0F14",
        panel2: "#0E1420",
        sky: "#8FDAFA",
        sky2: "#5CBCE8",
        mist: "#CFEFFF",
        royal: "#2F7BFF",
        royalDeep: "#1748C4",
      },
      fontFamily: {
        display: ["'Manrope'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(143, 218, 250, 0.25)",
        glowSm: "0 0 18px rgba(143, 218, 250, 0.35)",
        glowRoyal: "0 0 60px rgba(47, 123, 255, 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
