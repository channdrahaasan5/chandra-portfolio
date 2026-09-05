"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "Swift", top: "6%", left: "-12%", delay: 0 },
  { label: "Kotlin", top: "22%", left: "78%", delay: 0.6 },
  { label: "Flutter", top: "62%", left: "-16%", delay: 1.2 },
  { label: "React Native", top: "78%", left: "70%", delay: 1.8 },
  { label: "KYC", top: "44%", left: "88%", delay: 2.4 },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[300px] items-center justify-center sm:h-[480px]">
      {/* Floating tech badges */}
      {badges.map((b) => (
        <motion.span
          key={b.label}
          className="absolute rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium shadow-sm"
          style={{ top: b.top, left: b.left }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: b.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: b.delay },
          }}
        >
          {b.label}
        </motion.span>
      ))}

      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex h-full w-[220px] flex-col overflow-hidden rounded-[2.5rem] border-8 border-surface bg-background shadow-2xl"
      >
        <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-surface" />
        <div className="hero-glow flex h-28 flex-col justify-end p-4">
          <div className="h-3 w-20 rounded-full bg-accent/60" />
          <div className="mt-2 h-2 w-14 rounded-full bg-muted/30" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="h-20 rounded-xl border border-border bg-surface" />
          <div className="flex gap-2">
            <div className="h-16 flex-1 rounded-xl border border-border bg-surface" />
            <div className="h-16 flex-1 rounded-xl border border-border bg-surface" />
          </div>
          <div className="h-2 w-4/5 rounded-full bg-muted/20" />
          <div className="h-2 w-3/5 rounded-full bg-muted/20" />
          <div className="mt-auto h-10 rounded-full bg-accent/90" />
        </div>
      </motion.div>
    </div>
  );
}
