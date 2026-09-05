"use client";

import { motion } from "framer-motion";

export default function Mascot({
  size = 120,
  flip = false,
  delay = 0,
  className = "",
}: {
  size?: number;
  flip?: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      style={{ width: size, transform: flip ? "scaleX(-1)" : undefined }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -14, 0], rotate: [0, flip ? -3 : 3, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        {/* soft ground shadow */}
        <ellipse cx="60" cy="132" rx="26" ry="5" fill="var(--muted)" opacity="0.25" />

        {/* antenna */}
        <line x1="60" y1="18" x2="60" y2="4" stroke="var(--muted)" strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          cx="60"
          cy="4"
          r="5"
          fill="var(--accent)"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        />

        {/* head */}
        <rect x="20" y="18" width="80" height="66" rx="26" fill="var(--surface)" stroke="var(--border)" strokeWidth="3" />

        {/* visor */}
        <rect x="34" y="38" width="52" height="26" rx="13" fill="var(--foreground)" opacity="0.9" />

        {/* eyes */}
        <motion.rect
          x="43"
          y="47"
          width="8"
          height="8"
          rx="4"
          fill="var(--background)"
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1], delay }}
          style={{ transformOrigin: "47px 51px" }}
        />
        <motion.rect
          x="69"
          y="47"
          width="8"
          height="8"
          rx="4"
          fill="var(--background)"
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1], delay }}
          style={{ transformOrigin: "73px 51px" }}
        />

        {/* body */}
        <rect x="30" y="88" width="60" height="42" rx="18" fill="var(--surface)" stroke="var(--border)" strokeWidth="3" />
        <circle cx="60" cy="109" r="7" fill="var(--accent)" opacity="0.85" />

        {/* arms */}
        <circle cx="24" cy="100" r="6" fill="var(--surface)" stroke="var(--border)" strokeWidth="3" />
        <circle cx="96" cy="100" r="6" fill="var(--surface)" stroke="var(--border)" strokeWidth="3" />
      </svg>
    </motion.div>
  );
}
