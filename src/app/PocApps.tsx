"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type PocApp = {
  id: string;
  name: string;
  tag: string;
  role: string;
  tech: string[];
  description: string;
  screenshot?: string; // TODO: replace with a real screenshot path once provided, e.g. "/poc/app-name.png"
};

// TODO: replace this placeholder data with your real POC apps + screenshots.
const placeholderApps: PocApp[] = [
  {
    id: "poc-1",
    name: "POC App One",
    tag: "Add a one-line tag here",
    role: "Add role here",
    tech: ["Swift", "SwiftUI"],
    description: "Add a full description of this POC app here once details are shared.",
  },
  {
    id: "poc-2",
    name: "POC App Two",
    tag: "Add a one-line tag here",
    role: "Add role here",
    tech: ["Flutter"],
    description: "Add a full description of this POC app here once details are shared.",
  },
  {
    id: "poc-3",
    name: "POC App Three",
    tag: "Add a one-line tag here",
    role: "Add role here",
    tech: ["React Native"],
    description: "Add a full description of this POC app here once details are shared.",
  },
];

function PhoneFrame({ app, className = "" }: { app: PocApp; className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[220px] overflow-hidden rounded-[2rem] border-4 border-border bg-surface shadow-sm ${className}`}
    >
      {app.screenshot ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={app.screenshot} alt={app.name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
          <span className="text-4xl font-bold text-accent">{app.name.charAt(0)}</span>
        </div>
      )}
      <div className="absolute top-0 left-1/2 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-border" />
    </div>
  );
}

function PocCard({ app, onOpen }: { app: PocApp; onOpen: (app: PocApp) => void }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(app)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-left transition-shadow hover:shadow-lg"
    >
      <PhoneFrame app={app} />
      <h3 className="mt-4 font-semibold">{app.name}</h3>
      <p className="mt-1 text-sm text-muted">{app.tag}</p>
    </motion.button>
  );
}

function PocModal({ app, onClose }: { app: PocApp; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="grid max-h-[85vh] w-full max-w-2xl grid-cols-1 gap-6 overflow-y-auto rounded-2xl border border-border bg-background p-6 sm:grid-cols-[220px_1fr] sm:p-8"
      >
        <PhoneFrame app={app} />
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">{app.name}</h3>
              <p className="mt-1 text-sm text-accent">{app.role}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted hover:bg-surface"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{app.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {app.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PocApps({ apps = placeholderApps }: { apps?: PocApp[] }) {
  const [active, setActive] = useState<PocApp | null>(null);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-3">
        {apps.map((app) => (
          <PocCard key={app.id} app={app} onOpen={setActive} />
        ))}
      </div>
      <AnimatePresence>
        {active && <PocModal app={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}
