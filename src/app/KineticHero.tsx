"use client";

import { motion } from "framer-motion";
import AmbientGlow from "./AmbientGlow";
import Mascot from "./Mascot";

const taglineWords = ["Mobile", "Engineer.", "Builder", "of", "SDKs.", "Shipper", "of", "Apps."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.5 },
  },
};

const word = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const nameLine = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  }),
};

export default function KineticHero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden py-24">
      <AmbientGlow />

      <Mascot
        size={110}
        delay={0.2}
        className="pointer-events-none absolute bottom-4 left-[6%] hidden sm:block"
      />
      <Mascot
        size={90}
        flip
        delay={1.1}
        className="pointer-events-none absolute right-[8%] bottom-16 hidden sm:block"
      />

      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        Currently at Aptiway Technologies
      </span>

      <h1 className="mt-6 text-[15vw] leading-[0.9] font-black tracking-tighter sm:text-[9vw] lg:text-[7.5rem]">
        <motion.span
          custom={0}
          initial="hidden"
          animate="show"
          variants={nameLine}
          className="block"
        >
          CHANDRA
        </motion.span>
        <motion.span
          custom={1}
          initial="hidden"
          animate="show"
          variants={nameLine}
          className="block text-accent"
        >
          HASAN
        </motion.span>
      </h1>

      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 flex max-w-2xl flex-wrap gap-x-2 text-xl font-medium text-muted sm:text-2xl"
      >
        {taglineWords.map((w, i) => (
          <motion.span key={i} variants={word}>
            {w}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-6 max-w-xl text-base text-muted"
      >
        8+ years shipping iOS, Android, Flutter, and React Native applications for banking
        and government clients — with particular depth in SDK development and biometric
        identity verification.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="mt-9 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="/Chandra_Hasan_Resume.pdf"
          download
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface"
        >
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-4 left-0 flex items-center gap-2 text-xs text-muted"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}
