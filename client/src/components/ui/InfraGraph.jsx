import { motion } from "framer-motion";

const layers = [
  { id: "clients", label: "Client Applications", y: 40 },
  { id: "cloud", label: "Cloud Infrastructure", y: 130 },
  { id: "linux", label: "Linux Servers", y: 220 },
  { id: "monitor", label: "Monitoring", y: 310 },
  { id: "security", label: "Security", y: 400 },
  { id: "automation", label: "Automation", y: 490 },
];

const nodePositions = [
  { x: 90, layer: 0 },
  { x: 220, layer: 0 },
  { x: 350, layer: 0 },
  { x: 155, layer: 1 },
  { x: 300, layer: 1 },
  { x: 90, layer: 2 },
  { x: 220, layer: 2 },
  { x: 350, layer: 2 },
  { x: 155, layer: 3 },
  { x: 300, layer: 3 },
  { x: 155, layer: 4 },
  { x: 300, layer: 4 },
  { x: 220, layer: 5 },
];

export default function InfraGraph() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 440 560"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8FDAFA" stopOpacity="0" />
            <stop offset="50%" stopColor="#8FDAFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8FDAFA" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#8FDAFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8FDAFA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* layer connective lines */}
        {layers.slice(0, -1).map((l, i) => (
          <line
            key={l.id}
            x1={220}
            y1={l.y + 14}
            x2={220}
            y2={layers[i + 1].y - 14}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        ))}

        {/* animated pulse lines traveling down the spine */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="2.5"
            fill="#8FDAFA"
            initial={{ cy: 40, opacity: 0 }}
            animate={{ cy: [40, 490], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            cx={220}
          />
        ))}

        {/* nodes */}
        {nodePositions.map((n, i) => {
          const layer = layers[n.layer];
          return (
            <g key={i}>
              <circle cx={n.x} cy={layer.y} r="16" fill="url(#nodeGlow)" opacity="0.5" />
              <motion.rect
                x={n.x - 11}
                y={layer.y - 11}
                width="22"
                height="22"
                rx="6"
                fill="#0B0F14"
                stroke="#8FDAFA"
                strokeOpacity="0.5"
                strokeWidth="1"
                animate={{ strokeOpacity: [0.35, 0.8, 0.35] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
              />
              <circle cx={n.x} cy={layer.y} r="2.5" fill="#CFEFFF" />
            </g>
          );
        })}

        {/* layer labels */}
        {layers.map((l) => (
          <text
            key={l.id}
            x={20}
            y={l.y - 22}
            fill="rgba(255,255,255,0.4)"
            fontSize="10"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.05em"
          >
            {l.label.toUpperCase()}
          </text>
        ))}
      </svg>
    </div>
  );
}
