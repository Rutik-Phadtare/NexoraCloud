import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  href = "#assessment",
  icon = true,
  className = "",
  onClick,
}) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky";

  const styles = {
    primary: `bg-royal text-white hover:bg-royalDeep ${base}`,
    secondary: `border border-white/20 text-white hover:border-sky/60 hover:text-sky ${base}`,
    ghost: `text-white/80 hover:text-white ${base} px-0`,
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`${styles[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60 bg-royal" />
      )}
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.a>
  );
}
